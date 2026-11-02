import { useState } from 'react'
import './App.css'

function App() {
  const [jobDescription, setJobDescription] = useState("");

  return (
    <main className="container">
      <header>
        <h1>ResumeTailor</h1>
        <p>Tailor your resume to the job you want.</p>
      </header>

      <section className="card">
        <h2>Your Resume</h2>
        <input type="file" accept=".pdf,.docx" />
      </section>

      <section className="card">
        <h2>Job Description</h2>
        <textarea 
          placeholder="Paste the job description here..."
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          rows={10}
        />
      </section>

      <button
        disabled={!jobDescription.trim()}
        onClick={() => alert("AI tailoring coming soon!")}
      >
        Tailor Resume
      </button>
    </main>
  );
}

export default App
