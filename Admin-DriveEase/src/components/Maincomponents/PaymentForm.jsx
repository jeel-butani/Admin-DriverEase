import React, { useState } from "react";
import "./PaymentForm.scss";
import AreaTop from "../dashboard/areaTop/AreaTop";

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    userId: "",
    bookingId: "",
    paymentMode: "",
    amount: "",
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
      bookingId: "",
      paymentMode: "",
      amount: "",
    });
  };

  return (
    <>
    <AreaTop/>
      <div className="payment-form-container">
        <h2>Payment Form</h2>
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
            <label htmlFor="bookingId">Booking ID</label>
            <input
              type="text"
              id="bookingId"
              name="bookingId"
              value={formData.bookingId}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="paymentMode">Payment Mode</label>
            <input
              type="text"
              id="paymentMode"
              name="paymentMode"
              value={formData.paymentMode}
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
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default PaymentForm;
