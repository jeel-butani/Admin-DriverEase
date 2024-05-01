import React, { useState } from "react";
import "./DriverForm.scss";
import AreaTop from "../dashboard/areaTop/AreaTop";

const DriverForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    licenceNumber: "",
    licencePhotoUrl: "",
    aadharCardNumber: "",
    price: "",
    location: "",
    phoneNumber: "",
    typeOfVehicle: "",
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
      licenceNumber: "",
      licencePhotoUrl: "",
      aadharCardNumber: "",
      price: "",
      location: "",
      phoneNumber: "",
      typeOfVehicle: "",
      password: "",
    });
  };

  return (
    <>
      <AreaTop />
      <div className="driver-form-container">
        <h2>Driver Form</h2>
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
            <label htmlFor="licenceNumber">License Number</label>
            <input
              type="text"
              id="licenceNumber"
              name="licenceNumber"
              value={formData.licenceNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="licencePhotoUrl">License Photo URL</label>
            <input
              type="text"
              id="licencePhotoUrl"
              name="licencePhotoUrl"
              value={formData.licencePhotoUrl}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="aadharCardNumber">Aadhar Card Number</label>
            <input
              type="text"
              id="aadharCardNumber"
              name="aadharCardNumber"
              value={formData.aadharCardNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="price">Price</label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
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
            <label htmlFor="typeOfVehicle">Type of Vehicle</label>
            <input
              type="text"
              id="typeOfVehicle"
              name="typeOfVehicle"
              value={formData.typeOfVehicle}
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

export default DriverForm;
