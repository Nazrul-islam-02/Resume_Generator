import { useState } from "react";

const ResumeForm = ({ getdata }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    skills: "",
    experience: "",
    education: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getdata(formData);
  };

  return (
    <div>
    <form onSubmit ={handleSubmit}>
      <input name="name" placeholder="Full Name" onChange={handleChange} required />
      <br /><br />

      <input name="email" placeholder="Email" onChange={handleChange} required />
      <br /><br />

      <textarea name="skills" placeholder="Skills" onChange={handleChange} />
      <br /><br />

      <textarea name="experience" placeholder="Experience" onChange={handleChange} />
      <br /><br />

      <textarea name="education" placeholder="Education" onChange={handleChange} />
      <br /><br />

      <button type="submit">Generate Resume</button>
    </form>
    </div>
  );
};

export default ResumeForm;
