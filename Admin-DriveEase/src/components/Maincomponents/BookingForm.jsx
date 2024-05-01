import React, { useState } from "react";
import "./BookingForm.scss";
import AreaTop from "../dashboard/areaTop/AreaTop";
const BookingForm = () => {
  const [formData, setFormData] = useState({
    userId: "",
    location: "",
    startDate: "",
    endDate: "",
    vehicleId: "",
    driverId: "",
    paymentStatus: "",
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
      userId: "",
      location: "",
      startDate: "",
      endDate: "",
      vehicleId: "",
      driverId: "",
      paymentStatus: "",
    });
  };

  return (
    <>
    <AreaTop/>
      <div className="booking-form-container">
        <h2>Booking Form</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="userId">User ID</label>
            <input
              type="text"
              id="userId"
              name="userId"
              value={formData.userId}
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
            <label htmlFor="startDate">Starting Date</label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="endDate">Ending Date</label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="vehicleId">Vehicle ID</label>
            <input
              type="text"
              id="vehicleId"
              name="vehicleId"
              value={formData.vehicleId}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="driverId">Driver ID</label>
            <input
              type="text"
              id="driverId"
              name="driverId"
              value={formData.driverId}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="paymentStatus">Payment Status</label>
            <input
              type="text"
              id="paymentStatus"
              name="paymentStatus"
              value={formData.paymentStatus}
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

export default BookingForm;
