import React, { useState } from "react";
import "./BikeForm.scss";
import AreaTop from "../dashboard/areaTop/AreaTop";
const BikeForm = () => {
  const [formData, setFormData] = useState({
    bikeName: "",
    seats: "",
    registrationNumber: "",
    amount: "",
    imageUrl: "",
    totalCount: "",
    availableCount: "",
    companyName: "",
    type: "",
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
      bikeName: "",
      seats: "",
      registrationNumber: "",
      amount: "",
      imageUrl: "",
      totalCount: "",
      availableCount: "",
      companyName: "",
      type: "",
    });
  };

  return (
    <>
    <AreaTop/>
      <div className="bike-form-container">
        <h2>Bike Form</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="bikeName">Bike Name</label>
            <input
              type="text"
              id="bikeName"
              name="bikeName"
              value={formData.bikeName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="seats">Seats</label>
            <input
              type="number"
              id="seats"
              name="seats"
              value={formData.seats}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="registrationNumber">Registration Number</label>
            <input
              type="text"
              id="registrationNumber"
              name="registrationNumber"
              value={formData.registrationNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="imageUrl">Image URL</label>
            <input
              type="text"
              id="imageUrl"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="totalCount">Total Count</label>
            <input
              type="number"
              id="totalCount"
              name="totalCount"
              value={formData.totalCount}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="availableCount">Available Count</label>
            <input
              type="number"
              id="availableCount"
              name="availableCount"
              value={formData.availableCount}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="companyName">Company Name</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="type">Type</label>
            <input
              type="text"
              id="type"
              name="type"
              value={formData.type}
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

export default BikeForm;
