// export default function JavaPage() {
//   return (
//     <div style={{ padding: 20 }}>
//       <h1>Java – Sri Lanka IT Companies</h1>
//       <p>District list and companies will come here next.</p>
//     </div>
//   );
// }


import ClipLoader from "react-spinners/ClipLoader";
import { useState } from "react";

export default function SaveButton() {
  const [loading, setLoading] = useState(false);

  function handleSave() {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  }

  return (
    <button onClick={handleSave} disabled={loading}>
      {loading ? <ClipLoader size={18} color="#fff" /> : "Save"}
    </button>
  );
}
