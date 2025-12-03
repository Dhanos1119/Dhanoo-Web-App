// src/pages/CppPage.jsx
import "../styles/cpp.css";

export default function CppPage({ openSignup }) {
  return (
    <div className="cpp-page">
      {/* HERO */}
      <section className="cpp-hero">
        <div className="cpp-hero-overlay" />

        <div className="cpp-hero-content">
            <h1>Master low-level thinking with C / C++</h1>

          <p>
            Learn how C and C++ give you control over memory, performance and
            system resources. These concepts are heavily tested in core CS and
            embedded interviews.
          </p>

          <div className="cpp-badge-row">
            <span className="cpp-badge">Pointers &amp; memory</span>
            <span className="cpp-badge">OOP in C++</span>
            <span className="cpp-badge">Performance &amp; systems</span>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="cpp-main">
        {/* BASICS */}
        <section className="cpp-section">
          <h2>C / C++ basics in a nutshell</h2>
          <p className="cpp-section-intro">
            C focuses on low-level control, while C++ adds object-oriented
            features. Many product companies still use them for performance-critical
            systems.
          </p>

          <div className="cpp-grid">
            <div className="cpp-card">
              <h3>How C / C++ run</h3>
              <ul>
                <li>Compiled to machine code using <code>gcc</code> / <code>g++</code>.</li>
                <li>Fast execution and low-level control.</li>
                <li>Manual memory management using <code>malloc/free</code> or <code>new/delete</code>.</li>
              </ul>
            </div>

            <div className="cpp-card">
              <h3>Key language concepts</h3>
              <ul>
                <li>Pointers, references and pointer arithmetic.</li>
                <li>Structures, classes and objects.</li>
                <li>Header files, separate compilation and linking.</li>
              </ul>
            </div>

            <div className="cpp-card">
              <h3>Where it's used</h3>
              <ul>
                <li>Embedded systems &amp; firmware.</li>
                <li>Game engines &amp; graphics.</li>
                <li>High-performance backend services.</li>
              </ul>
            </div>

            <div className="cpp-card">
              <h3>Common interview topics</h3>
              <ul>
                <li>Memory leaks &amp; dangling pointers.</li>
                <li>Copy constructor, destructor &amp; RAII.</li>
                <li>STL containers (vector, map, set).</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CODE EXAMPLE */}
        <section className="cpp-section">
          <h2>See a tiny C++ program</h2>
          <p className="cpp-section-intro">
            This example calculates the average of marks using a simple class.
            Interviewers like questions that mix OOP and basic STL.
          </p>

          <div className="cpp-code-layout">
            <div className="cpp-code-card">
              <div className="cpp-code-header">
                <span className="cpp-dot red" />
                <span className="cpp-dot yellow" />
                <span className="cpp-dot green" />
                <span className="cpp-file-name">AverageMarks.cpp</span>
              </div>

              <pre className="cpp-code-block">
{`#include <iostream>
#include <vector>

class Marks {
public:
    explicit Marks(const std::vector<int>& values)
        : values(values) {}

    double average() const {
        int sum = 0;
        for (int v : values) {
            sum += v;
        }
        return static_cast<double>(sum) / values.size();
    }

private:
    std::vector<int> values;
};

int main() {
    std::vector<int> scores {78, 82, 91, 67, 88};

    Marks m(scores);
    std::cout << "Average: " << m.average() << std::endl;
    return 0;
}`}
              </pre>
            </div>

            <div className="cpp-code-explain">
              <h3>What this code shows</h3>
              <ol>
                <li><strong>Class</strong> with constructor and member function.</li>
                <li><strong>Encapsulation</strong> by keeping <code>values</code> private.</li>
                <li><strong>STL vector</strong> for dynamic arrays.</li>
                <li><strong>Type casting</strong> with <code>static_cast</code> to get a double result.</li>
              </ol>
              <p className="cpp-tip">
                In interviews, talk about memory safety, when objects are destroyed
                and why STL is safer than raw arrays.
              </p>
            </div>
          </div>
        </section>

        {/* ROLES SECTION */}
        <section className="cpp-section">
          <h2>Roles that use C / C++</h2>
          <p className="cpp-section-intro">
            C / C++ are popular for performance-critical software and hardware-related
            roles. These jobs expect strong fundamentals and debugging skills.
          </p>

          <div className="cpp-role-grid">
            <div className="cpp-role-card">
              <h3>Embedded / IoT Developer</h3>
              <p>Works close to the hardware using C / C++.</p>
              <ul>
                <li>Microcontrollers &amp; sensors.</li>
                <li>Memory-limited environments.</li>
                <li>Real-time constraints.</li>
              </ul>
            </div>

            <div className="cpp-role-card">
              <h3>Systems / Backend Engineer</h3>
              <p>Builds high-performance services and tools.</p>
              <ul>
                <li>Network servers and proxies.</li>
                <li>Database internals, caching layers.</li>
                <li>Profiling &amp; optimisation.</li>
              </ul>
            </div>

            <div className="cpp-role-card">
              <h3>Game / Graphics Developer</h3>
              <p>Uses C++ with engines and rendering libraries.</p>
              <ul>
                <li>Game loops &amp; physics.</li>
                <li>Rendering pipelines (OpenGL, DirectX, Vulkan).</li>
                <li>Performance on consoles / PCs.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cpp-cta-section">
          <div className="cpp-cta-box">
            <h3>Ready to practice C / C++ interview questions?</h3>
            <p>
              Create a free CodeCeylon account and access C / C++ questions used
              in Sri Lankan companies, plus admin notes for each answer.
            </p>

            <button
              className="cpp-cta-btn"
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
