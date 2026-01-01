import React, { useState } from 'react';
import ResumePreview from './components/ResumePreview';
import ResumeForm from './components/ResumeForm';

const App = () => {

  const [resumeData, setResumeData] = useState("");
  return (
    <div>

      {/* {console.log(resumeData.name)} */}

      <h1>kkk{}</h1>
      {
        (resumeData)?(<ResumePreview data={resumeData} ></ResumePreview>)
                   :(<ResumeForm getData = {setResumeData}></ResumeForm>)
      }
    </div>
  );
};

export default App;