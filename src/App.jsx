import { useState } from "react";
import ResumeForm from "./components/ResumeForm";
import ResumePreview from "./components/ResumePreview";

function App() {
  const [resumeData, setResumeData] = useState(null);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Auto Resume Generator</h1>

      {(!resumeData) ? (
        <ResumeForm getdata={setResumeData} />
      ) : (
        <ResumePreview data={resumeData} />
      )}
    </div>
  );
}

export default App;
