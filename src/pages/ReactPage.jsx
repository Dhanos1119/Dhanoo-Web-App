// src/pages/ReactPage.jsx
import "../styles/react.css";

export default function ReactPage({ openSignup }) {
  return (
    <div className="react-page">
      {/* HERO */}
      <section className="react-hero">
        <div className="react-hero-overlay" />

        <div className="react-hero-content">
          

          <h1>Build interactive UIs with React</h1>

          <p>
            Learn how React uses components, props and state to build modern web
            apps. Understand the core ideas interviewers expect for frontend roles.
          </p>

          <div className="react-badge-row">
            <span className="react-badge">Components</span>
            <span className="react-badge">Hooks &amp; state</span>
            <span className="react-badge">Props &amp; reuse</span>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="react-main">
        {/* BASICS */}
        <section className="react-section">
          <h2>React basics in a nutshell</h2>
          <p className="react-section-intro">
            React is a JavaScript library for building user interfaces. It helps
            you build reusable components and manage complex UI state.
          </p>

          <div className="react-grid">
            <div className="react-card">
              <h3>Component model</h3>
              <ul>
                <li>UI is split into small, reusable components.</li>
                <li>Each component returns JSX (HTML-like syntax).</li>
                <li>Components can be function or class (modern = function).</li>
              </ul>
            </div>

            <div className="react-card">
              <h3>Props &amp; state</h3>
              <ul>
                <li><strong>Props</strong> – read-only data passed from parent.</li>
                <li><strong>State</strong> – local, changeable data inside component.</li>
                <li>UI updates when state/props change.</li>
              </ul>
            </div>

            <div className="react-card">
              <h3>Hooks (modern React)</h3>
              <ul>
                <li><code>useState</code> – manage local state.</li>
                <li><code>useEffect</code> – run side effects.</li>
                <li>Custom hooks for reusing logic.</li>
              </ul>
            </div>

            <div className="react-card">
              <h3>Routing &amp; data</h3>
              <ul>
                <li>React Router for page navigation.</li>
                <li>Fetch data with <code>fetch</code> / Axios or libraries.</li>
                <li>State managers (Context, Redux, Zustand, etc.).</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CODE EXAMPLE */}
        <section className="react-section">
          <h2>See a tiny React component</h2>
          <p className="react-section-intro">
            This small component shows a counter with a button. Interviewers
            often ask you to build something similar using hooks.
          </p>

          <div className="react-code-layout">
            <div className="react-code-card">
              <div className="react-code-header">
                <span className="react-dot red" />
                <span className="react-dot yellow" />
                <span className="react-dot green" />
                <span className="react-file-name">Counter.jsx</span>
              </div>

              <pre className="react-code-block">
{`import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      You clicked {count} times
    </button>
  );
}`}
              </pre>
            </div>

            <div className="react-code-explain">
              <h3>What this code shows</h3>
              <ol>
                <li><strong>Functional component</strong> returning JSX.</li>
                <li><strong><code>useState</code></strong> for local state.</li>
                <li><strong>Event handling</strong> with <code>onClick</code>.</li>
                <li>Re-render when <code>count</code> changes.</li>
              </ol>
              <p className="react-tip">
                In interviews, explain how React only updates the parts of the UI
                that changed instead of reloading the whole page.
              </p>
            </div>
          </div>
        </section>

        {/* ROLES SECTION */}
        <section className="react-section">
          <h2>Roles that use React heavily</h2>
          <p className="react-section-intro">
            Many Sri Lankan product companies and startups use React for modern
            web apps. Strong React skills open doors to multiple roles.
          </p>

          <div className="react-role-grid">
            <div className="react-role-card">
              <h3>React Frontend Engineer</h3>
              <p>Builds complex UIs using React, hooks and APIs.</p>
              <ul>
                <li>Reusable components &amp; design systems.</li>
                <li>State management and routing.</li>
                <li>Performance optimisation.</li>
              </ul>
            </div>

            <div className="react-role-card">
              <h3>Full-stack (React + Node)</h3>
              <p>Works on both frontend React and backend APIs.</p>
              <ul>
                <li>Integrate REST/GraphQL with React.</li>
                <li>Authentication &amp; protected routes.</li>
                <li>Deployment &amp; CI/CD.</li>
              </ul>
            </div>

            <div className="react-role-card">
              <h3>React Native Developer</h3>
              <p>Uses React concepts to build mobile apps.</p>
              <ul>
                <li>Same JS/React knowledge, different components.</li>
                <li>Navigation, native modules, mobile UI patterns.</li>
                <li>App store builds &amp; debugging.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="react-cta-section">
          <div className="react-cta-box">
            <h3>Ready to practice React interview questions?</h3>
            <p>
              Create a free CodeCeylon account and access React questions by
              Sri Lankan companies, with admin-curated explanations.
            </p>

            <button
              className="react-cta-btn"
              onClick={() => openSignup("signup")}
            >
              Learn more &amp; sign up
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
