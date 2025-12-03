// src/pages/HtmlCssPage.jsx
import "../styles/htmlcss.css";

export default function HtmlCssPage({ openSignup }) {
  return (
    <div className="html-page">
      {/* HERO */}
      <section className="html-hero">
        <div className="html-hero-overlay" />

        <div className="html-hero-content">
         

          <h1>Build clean layouts with HTML &amp; CSS.</h1>

          <p>
            Understand how web pages are structured with HTML and styled with CSS.
            Learn the core concepts interviewers expect for frontend roles.
          </p>

          <div className="html-badge-row">
            <span className="html-badge">Semantic HTML</span>
            <span className="html-badge">Flexbox &amp; Grid</span>
            <span className="html-badge">Responsive design</span>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <main className="html-main">
        {/* BASICS GRID */}
        <section className="html-section">
          <h2>HTML &amp; CSS basics in a nutshell</h2>
          <p className="html-section-intro">
            HTML gives the structure of the page, CSS gives the style. Most
            interviews test how well you use semantic tags and modern layout
            techniques like Flexbox and Grid.
          </p>

          <div className="html-grid">
            <div className="html-card">
              <h3>HTML structure</h3>
              <ul>
                <li>Use semantic tags: <code>&lt;header&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;footer&gt;</code>.</li>
                <li>Separate content from presentation.</li>
                <li>Use proper headings (<code>h1</code>–<code>h6</code>).</li>
              </ul>
            </div>

            <div className="html-card">
              <h3>CSS basics</h3>
              <ul>
                <li>Selectors, classes and IDs.</li>
                <li>Box model: margin, border, padding, content.</li>
                <li>Display types: <code>block</code>, <code>inline</code>, <code>flex</code>.</li>
              </ul>
            </div>

            <div className="html-card">
              <h3>Layouts</h3>
              <ul>
                <li>Flexbox for 1-dimensional layouts.</li>
                <li>CSS Grid for full page layouts.</li>
                <li>Centering content safely.</li>
              </ul>
            </div>

            <div className="html-card">
              <h3>Responsive design</h3>
              <ul>
                <li>Use relative units: <code>%</code>, <code>rem</code>, <code>vh</code>, <code>vw</code>.</li>
                <li>Media queries for breakpoints.</li>
                <li>Mobile-first styles.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CODE EXAMPLE */}
        <section className="html-section">
          <h2>See a tiny HTML &amp; CSS layout</h2>
          <p className="html-section-intro">
            This example shows a simple responsive card layout. Similar snippets
            appear in take-home tests and whiteboard interviews.
          </p>

          <div className="html-code-layout">
            <div className="html-code-card">
              <div className="html-code-header">
                <span className="html-dot red" />
                <span className="html-dot yellow" />
                <span className="html-dot green" />
                <span className="html-file-name">card-layout.html</span>
              </div>

              <pre className="html-code-block">
{`<section class="card-grid">
  <article class="card">
    <h2>Frontend role</h2>
    <p>Work with HTML, CSS & JS.</p>
  </article>

  <article class="card">
    <h2>Responsive ready</h2>
    <p>Layout adapts to screen size.</p>
  </article>
</section>`}
              </pre>
            </div>

            <div className="html-code-card">
              <div className="html-code-header">
                <span className="html-dot red" />
                <span className="html-dot yellow" />
                <span className="html-dot green" />
                <span className="html-file-name">card-layout.css</span>
              </div>

              <pre className="html-code-block">
{`.card-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.card {
  padding: 1rem;
  border-radius: 0.75rem;
  background: #020617;
  border: 1px solid #1e293b;
}`}
              </pre>
            </div>
          </div>

          <div className="html-code-explain">
            <h3>What this layout shows</h3>
            <ol>
              <li><strong>Semantic HTML</strong> – using <code>section</code> and <code>article</code>.</li>
              <li><strong>CSS Grid</strong> – <code>auto-fit</code> + <code>minmax</code> for responsive cards.</li>
              <li><strong>Card design</strong> – border radius, padding, background.</li>
            </ol>
            <p className="html-tip">
              In interviews, explain how this layout shrinks nicely on mobile
              without extra media queries.
            </p>
          </div>
        </section>

        {/* ROLES SECTION */}
        <section className="html-section">
          <h2>Roles that need strong HTML &amp; CSS</h2>
          <p className="html-section-intro">
            Almost every frontend job expects you to write clean, semantic HTML
            and modern CSS. Some roles focus heavily on pixel-perfect UI.
          </p>

          <div className="html-role-grid">
            <div className="html-role-card">
              <h3>UI Developer</h3>
              <p>Transforms Figma designs into production-ready HTML &amp; CSS.</p>
              <ul>
                <li>Pixel-perfect layouts.</li>
                <li>Reusable components.</li>
                <li>Animation &amp; transitions.</li>
              </ul>
            </div>

            <div className="html-role-card">
              <h3>Frontend Engineer</h3>
              <p>Combines HTML, CSS and JavaScript/React.</p>
              <ul>
                <li>Responsive page structures.</li>
                <li>CSS architecture (BEM, modules, Tailwind).</li>
                <li>Accessibility &amp; ARIA.</li>
              </ul>
            </div>

            <div className="html-role-card">
              <h3>Web Designer / Developer</h3>
              <p>Owns both visual design and implementation.</p>
              <ul>
                <li>Landing pages &amp; marketing sites.</li>
                <li>Typography &amp; color systems.</li>
                <li>Performance-friendly layouts.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="html-cta-section">
          <div className="html-cta-box">
            <h3>Ready to practice HTML &amp; CSS interview questions?</h3>
            <p>
              Create a free CodeCeylon account and access HTML &amp; CSS
              questions asked by Sri Lankan companies, with guidance from admins.
            </p>

            <button
              className="html-cta-btn"
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
