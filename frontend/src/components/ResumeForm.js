import React, { useState } from "react";
import axios from "axios";

const ResumeForm = () => {
  const [resume, setResume] = useState({
    name: "",
    email: "",
    education: "",
    skills: "",
    projects: "",
    experience: ""
  });

  // handle input changes
  const handleChange = (e) => {
    setResume({ ...resume, [e.target.name]: e.target.value });
  };

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/resume", resume)
      .then((res) => alert("Resume saved successfully!"))
      .catch((err) => console.log(err));
  };

  return (
    <div style={{ maxWidth: "500px", margin: "20px auto" }}>
      <h2>Resume Builder</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Full Name" value={resume.name} onChange={handleChange} required /><br /><br />
        <input type="email" name="email" placeholder="Email" value={resume.email} onChange={handleChange} required /><br /><br />
        <textarea name="education" placeholder="Education" value={resume.education} onChange={handleChange} /><br /><br />
        <textarea name="skills" placeholder="Skills (comma separated)" value={resume.skills} onChange={handleChange} /><br /><br />
        <textarea name="projects" placeholder="Projects" value={resume.projects} onChange={handleChange} /><br /><br />
        <textarea name="experience" placeholder="Experience" value={resume.experience} onChange={handleChange} /><br /><br />
        <button type="submit">Save Resume</button>
      </form>
    </div>
  );
};

export default ResumeForm;
