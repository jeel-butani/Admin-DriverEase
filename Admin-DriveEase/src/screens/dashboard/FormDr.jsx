// import React from 'react'
// import { AreaTop } from "../../components";
// const FormDr = () => {
//   return (
//     <>
//       <div className="content-area">
//         <AreaTop />
        
//       </div>
//     </>
//   );
// };

// export default FormDr;

import React, { useState } from "react";
import { AreaTop } from "../../components";
import "./form.scss"
const FormDr = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to server
    console.log(formData);
    // Reset form fields after submission
    setFormData({
      fullName: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <div className="content-area">
        <AreaTop />
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
};

export default FormDr;
