import "../styles/javascript.css";

export default function JavaScriptPage({ openSignup }) {
  return (
    <div className="lang-page">
      <section className="lang-hero">
        <div className="lang-hero-content">
          <span className="lang-pill js">JavaScript</span>
          <h1>Master JavaScript the smart way.</h1>
          <p>
            Learn how JavaScript powers modern web apps, browsers and
            asynchronous programming.
          </p>
        </div>
      </section>

      <div className="lang-main">
        <h2>JavaScript Basics</h2>
        <p className="lang-section-intro">
          JS is the language of the web used in frontend, backend and full-stack
          applications.
        </p>

        <div className="lang-grid">
          <div className="lang-card">
            <h3>Core concepts</h3>
            <ul>
              <li>Variables and scopes</li>
              <li>Async / Await</li>
              <li>DOM manipulation</li>
            </ul>
          </div>

          <div className="lang-card">
            <h3>Where it's used</h3>
            <ul>
              <li>Frontend UI</li>
              <li>Backend (Node.js)</li>
              <li>Mobile apps</li>
            </ul>
          </div>

          <div className="lang-card">
            <h3>In Sri Lanka</h3>
            <ul>
              <li>Web development companies</li>
              <li>Full-stack engineering roles</li>
            </ul>
          </div>
        </div>

        <div className="lang-cta">
          <div className="lang-cta-box">
            <p>Ready to practice JavaScript interview questions?</p>
            <button className="lang-cta-btn" onClick={() => openSignup("signup")}>
              Learn more & sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
