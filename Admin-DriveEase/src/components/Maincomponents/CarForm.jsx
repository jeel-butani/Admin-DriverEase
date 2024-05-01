import React, { useState } from "react";
import "./CarForm.scss";
import AreaTop from "../dashboard/areaTop/AreaTop";

const CarForm = () => {
  const [formData, setFormData] = useState({
    carName: "",
    transmissionType: "",
    seats: "",
    registrationNumber: "",
    companyName: "",
    amount: "",
    imageUrl: "",
    totalCount: "",
    availableCount: "",
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
      carName: "",
      transmissionType: "",
      seats: "",
      registrationNumber: "",
      companyName: "",
      amount: "",
      imageUrl: "",
      totalCount: "",
      availableCount: "",
    });
  };

  return (
    <>
      <AreaTop />
      <div className="car-form-container">
        <h2>Car Form</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="carName">Car Name</label>
            <input
              type="text"
              id="carName"
              name="carName"
              value={formData.carName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="transmissionType">Transmission Type</label>
            <input
              type="text"
              id="transmissionType"
              name="transmissionType"
              value={formData.transmissionType}
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
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default CarForm;
