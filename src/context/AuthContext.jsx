// src/context/AuthContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

import {
  collection,
  getDocs,
  query,
  where,
  doc,
  setDoc,
} from "firebase/firestore";

import { auth, db } from "../firebase";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // -------------------------------------------------
  // Listen for Firebase Auth login/logout changes
  // -------------------------------------------------
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (fbUser) => {
      if (!fbUser) {
        setUser(null);
        setLoading(false);
        return;
      }

      // Check if user is admin
      let role = "user";
      try {
        const q = query(
          collection(db, "admins"),
          where("email", "==", fbUser.email)
        );
        const snap = await getDocs(q);
        if (!snap.empty) role = "admin";
      } catch (err) {
        console.error("Admin check error:", err);
      }

      setUser({
        email: fbUser.email,
        name: fbUser.displayName || "",
        role,
      });
      setLoading(false);
    });

    return () => unsub();
  }, []);

  // -------------------------------------------------
  // USER SIGNUP (normal user account)
  // -------------------------------------------------
  async function signupUser({ name, email, password }) {
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);

      if (name) await updateProfile(cred.user, { displayName: name });

      await setDoc(doc(db, "users", cred.user.uid), {
        uid: cred.user.uid,
        email,
        name,
        role: "user",
        createdAt: Date.now(),
      });

      setUser({ email, name, role: "user" });
      return { ok: true };
    } catch (err) {
      return { ok: false, message: err.message };
    }
  }

  async function createAdmin({ name, email, password }) {
  try {
    // Create Firebase Auth user
    const cred = await createUserWithEmailAndPassword(auth, email, password);

    // Add display name
    if (name) {
      await updateProfile(cred.user, { displayName: name });
    }

    // Write to Firestore
    await setDoc(doc(db, "admins", cred.user.uid), {
      uid: cred.user.uid,
      email,
      name,
      createdAt: Date.now(),
    });

    return { ok: true };

  } catch (err) {
    console.error("createAdmin error:", err);
    return { ok: false, message: err.message };
  }
}

  // -------------------------------------------------
  // LOGIN USER
  // -------------------------------------------------
  async function loginUser({ email, password }) {
    try {
      const cred = await signInWithEmailAndPassword(auth, email, password);

      let role = "user";
      const q = query(
        collection(db, "admins"),
        where("email", "==", cred.user.email)
      );
      const snap = await getDocs(q);
      if (!snap.empty) role = "admin";

      setUser({
        email: cred.user.email,
        name: cred.user.displayName || "",
        role,
      });

      return { ok: true };
    } catch (err) {
      return { ok: false, message: err.message };
    }
  }

  // -------------------------------------------------
  // LOGIN ADMIN
  // -------------------------------------------------
  async function loginAdmin({ email, password }) {
    try {
      const cred = await signInWithEmailAndPassword(auth, email, password);

      const q = query(
        collection(db, "admins"),
        where("email", "==", email)
      );
      const snap = await getDocs(q);

      if (snap.empty) {
        await signOut(auth);
        return { ok: false, message: "Not authorised as admin." };
      }

      setUser({
        email: cred.user.email,
        name: cred.user.displayName || "Admin",
        role: "admin",
      });

      return { ok: true };
    } catch (err) {
      return { ok: false, message: err.message };
    }
  }

  async function logout() {
    await signOut(auth);
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signupUser,
        loginUser,
        loginAdmin,
        createAdmin,   // correct one
        logout,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
