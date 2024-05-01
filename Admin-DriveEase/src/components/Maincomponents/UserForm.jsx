import React, { useState } from "react";
import "./UserForm.scss";
import AreaTop from "../dashboard/areaTop/AreaTop";

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    birthdate: "",
    email: "",
    phoneNumber: "",
    location: "",
    aadharCard: "",
    aadharCardImageUrl: "",
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
      name: "",
      birthdate: "",
      email: "",
      phoneNumber: "",
      location: "",
      aadharCard: "",
      aadharCardImageUrl: "",
      password: "",
    });
  };

  return (
    <>
      <AreaTop />
      <div className="user-form-container">
        <h2>User Form</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="birthdate">Birthdate</label>
            <input
              type="date"
              id="birthdate"
              name="birthdate"
              value={formData.birthdate}
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
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="aadharCard">Aadhar Card</label>
            <input
              type="text"
              id="aadharCard"
              name="aadharCard"
              value={formData.aadharCard}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="aadharCardImageUrl">Aadhar Card Image URL</label>
            <input
              type="text"
              id="aadharCardImageUrl"
              name="aadharCardImageUrl"
              value={formData.aadharCardImageUrl}
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
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default UserForm;
