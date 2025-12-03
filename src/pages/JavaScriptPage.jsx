import "../styles/javascript.css";

export default function JavaScriptPage({ openSignup }) {
  return (
    <div className="js-page">
      {/* HERO */}
      <section className="js-hero">
        <div className="js-hero-overlay" />

        <div className="js-hero-content">

          <h1>Master JavaScript for modern web apps</h1>

          <p>
            Understand how JavaScript runs in the browser, powers frontend UIs,
            talks to APIs and even runs on the server with Node.js.
          </p>

          <div className="js-badge-row">
            <span className="js-badge">Language of the browser</span>
            <span className="js-badge">Async &amp; promises</span>
            <span className="js-badge">Used in full-stack roles</span>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="js-main">
        {/* BASICS GRID */}
        <section className="js-section">
          <h2>JavaScript basics in a nutshell</h2>
          <p className="js-section-intro">
            JavaScript is a high-level, dynamic language used for frontend,
            backend and even mobile apps. Interview questions often focus on
            concepts like scope, async behaviour and the DOM.
          </p>

          <div className="js-grid">
            <div className="js-card">
              <h3>How JavaScript runs</h3>
              <ul>
                <li>Runs in the browser JavaScript engine (V8, SpiderMonkey).</li>
                <li>Single-threaded with an event loop.</li>
                <li>Works closely with the DOM and browser APIs.</li>
              </ul>
            </div>

            <div className="js-card">
              <h3>Core concepts</h3>
              <ul>
                <li>Variables (<code>let</code>, <code>const</code>).</li>
                <li>Functions, arrow functions and callbacks.</li>
                <li>Closures, scope and hoisting.</li>
              </ul>
            </div>

            <div className="js-card">
              <h3>Async behaviour</h3>
              <ul>
                <li>Promises &amp; <code>async / await</code>.</li>
                <li>setTimeout, event loop &amp; microtasks.</li>
                <li>Calling REST APIs with <code>fetch()</code>.</li>
              </ul>
            </div>

            <div className="js-card">
              <h3>Where it's used</h3>
              <ul>
                <li>Frontend SPA frameworks (React, Vue, Angular).</li>
                <li>Backend Node.js services.</li>
                <li>Cross-platform mobile apps &amp; tools.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CODE EXAMPLE */}
        <section className="js-section">
          <h2>A tiny JavaScript example</h2>
          <p className="js-section-intro">
            This example fetches JSON data from an API and updates part of the
            page. Exactly this style of question appears in frontend interviews.
          </p>

          <div className="js-code-layout">
            <div className="js-code-card">
              <div className="js-code-header">
                <span className="js-dot red" />
                <span className="js-dot yellow" />
                <span className="js-dot green" />
                <span className="js-file-name">fetch-users.js</span>
              </div>

              <pre className="js-code-block">
{`const list = document.querySelector("#user-list");

async function loadUsers() {
  try {
    const res = await fetch("https://api.example.com/users");
    const data = await res.json();

    list.innerHTML = "";
    data.forEach((user) => {
      const li = document.createElement("li");
      li.textContent = user.name;
      list.appendChild(li);
    });
  } catch (err) {
    console.error("Failed to load users:", err);
  }
}

loadUsers();`}
              </pre>
            </div>

            <div className="js-code-explain">
              <h3>What this code shows</h3>
              <ol>
                <li><strong>DOM API</strong> – <code>querySelector</code> &amp; <code>createElement</code>.</li>
                <li><strong>Async</strong> – <code>async / await</code> with <code>fetch()</code>.</li>
                <li><strong>Error handling</strong> – <code>try / catch</code> for failed requests.</li>
                <li><strong>Rendering</strong> – updating the DOM from JS data.</li>
              </ol>
              <p className="js-tip">
                In interviews, explain the event loop, why <code>await</code> is
                used and how the DOM update is triggered.
              </p>
            </div>
          </div>
        </section>

        {/* ROLES GRID */}
        <section className="js-section">
          <h2>JavaScript roles you can target</h2>
          <p className="js-section-intro">
            With strong JavaScript skills, you can move into frontend,
            full-stack or Node.js backend roles – all in high demand.
          </p>

          <div className="js-role-grid">
            <div className="js-role-card">
              <h3>Frontend Engineer</h3>
              <p>Focus on UI, UX and browser-side logic.</p>
              <ul>
                <li>React / Vue / Angular components.</li>
                <li>State management &amp; routing.</li>
                <li>Performance &amp; accessibility.</li>
              </ul>
            </div>

            <div className="js-role-card">
              <h3>Full-stack Developer</h3>
              <p>Build both frontend and backend using JavaScript.</p>
              <ul>
                <li>REST APIs with Node.js + Express.</li>
                <li>Database access (MongoDB / SQL).</li>
                <li>Authentication &amp; deployments.</li>
              </ul>
            </div>

            <div className="js-role-card">
              <h3>Node.js Backend Engineer</h3>
              <p>Design scalable APIs and microservices.</p>
              <ul>
                <li>Async I/O &amp; streaming.</li>
                <li>Background jobs &amp; queues.</li>
                <li>Integration with 3rd-party services.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="js-cta-section">
          <div className="js-cta-box">
            <h3>Ready to practice JavaScript interview questions?</h3>
            <p>
              Create a free CodeCeylon account and access company-wise JavaScript
              interview questions, district filters and admin-curated content.
            </p>

            <button
              className="js-cta-btn"
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
