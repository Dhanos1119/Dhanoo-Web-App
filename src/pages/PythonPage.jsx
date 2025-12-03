import "../styles/python.css";

export default function PythonPage({ openSignup }) {
  return (
    <div className="python-page">
      {/* HERO */}
      <section className="python-hero">
        <div className="python-hero-overlay" />

        <div className="python-hero-content">
    

          <h1>Start your Python journey here</h1>

          <p>
            Learn how Python works, why companies use it, and understand backend,
            automation, data and AI fundamentals with simple, Sri Lanka–friendly examples.
          </p>

          <div className="python-badge-row">
            <span className="python-badge">Beginner-friendly syntax</span>
            <span className="python-badge">Used in ML &amp; AI</span>
            <span className="python-badge">Great for quick projects</span>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="python-main">
        {/* BASICS GRID */}
        <section className="python-section">
          <h2>Python basics in a nutshell</h2>
          <p className="python-section-intro">
            Python is a high-level, dynamically typed language used for backend systems,
            automation scripts, AI/ML, data analysis and more.
          </p>

          <div className="python-grid">
            <div className="python-card">
              <h3>How Python runs</h3>
              <ul>
                <li>Interpreted language – runs line by line.</li>
                <li>No manual compilation step.</li>
                <li>Perfect for quick scripts &amp; experiments.</li>
              </ul>
            </div>

            <div className="python-card">
              <h3>Core concepts</h3>
              <ul>
                <li>Variables and dynamic types.</li>
                <li>Functions &amp; modules.</li>
                <li>Lists, tuples, dictionaries &amp; sets.</li>
              </ul>
            </div>

            <div className="python-card">
              <h3>Where it's used</h3>
              <ul>
                <li>Backend web apps (Django, Flask, FastAPI).</li>
                <li>Automation &amp; scripting (DevOps, tools).</li>
                <li>Data science, ML &amp; AI (NumPy, Pandas, PyTorch).</li>
              </ul>
            </div>

            <div className="python-card">
              <h3>Why companies choose it</h3>
              <ul>
                <li>Easy to read &amp; maintain.</li>
                <li>Huge ecosystem of libraries.</li>
                <li>Strong community &amp; documentation.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CODE EXAMPLE */}
        <section className="python-section">
          <h2>See a tiny Python program</h2>
          <p className="python-section-intro">
            This small script takes a list of marks and prints the average. Simple
            example, but interviewers love to ask logic like this.
          </p>

          <div className="python-code-layout">
            <div className="python-code-card">
              <div className="python-code-header">
                <span className="python-dot red" />
                <span className="python-dot yellow" />
                <span className="python-dot green" />
                <span className="python-file-name">average_marks.py</span>
              </div>

              <pre className="python-code-block">
{`marks = [78, 82, 91, 67, 88]

def average(nums):
    total = sum(nums)
    return total / len(nums)

avg = average(marks)

print(f"Average mark: {avg:.2f}")`}
              </pre>
            </div>

            <div className="python-code-explain">
              <h3>What this code shows</h3>
              <ol>
                <li><strong>List</strong> – <code>marks</code> holds all the values.</li>
                <li><strong>Function</strong> – <code>average()</code> re-usable logic.</li>
                <li><strong>Built-ins</strong> – <code>sum()</code> and <code>len()</code> make life easy.</li>
                <li><strong>f-string</strong> – clean way to format output.</li>
              </ol>
              <p className="python-tip">
                In interviews, explain <em>why</em> you chose this approach,
                not just the final answer.
              </p>
            </div>
          </div>
        </section>

        {/* ROLES GRID */}
        <section className="python-section">
          <h2>Python roles you can aim for</h2>
          <p className="python-section-intro">
            With strong Python skills, you can jump into several career paths used
            by Sri Lankan and global companies.
          </p>

          <div className="python-role-grid">
            <div className="python-role-card">
              <h3>Backend Developer</h3>
              <p>
                Build REST APIs and services using Django, Flask or FastAPI.
              </p>
              <ul>
                <li>Authentication &amp; authorization.</li>
                <li>Connecting to databases.</li>
                <li>Deploying to cloud platforms.</li>
              </ul>
            </div>

            <div className="python-role-card">
              <h3>Data / ML Engineer</h3>
              <p>
                Work with data pipelines, machine learning models and analytics.
              </p>
              <ul>
                <li>Cleaning &amp; transforming data.</li>
                <li>Training ML models.</li>
                <li>Visualising insights.</li>
              </ul>
            </div>

            <div className="python-role-card">
              <h3>Automation Engineer</h3>
              <p>
                Use Python scripts to automate boring, repetitive tasks at scale.
              </p>
              <ul>
                <li>Writing CLI tools &amp; bots.</li>
                <li>Automating reports &amp; Excel work.</li>
                <li>QA test automation.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="python-cta-section">
          <div className="python-cta-box">
            <h3>Ready to practice Python interview questions?</h3>
            <p>
              Create a free CodeCeylon account and access company-wise Python
              interview questions, district filters and admin-curated content.
            </p>

            <button
              className="python-cta-btn"
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
