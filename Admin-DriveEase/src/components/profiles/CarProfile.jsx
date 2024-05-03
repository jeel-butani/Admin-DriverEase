import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./CarProfile.scss";
import AreaTop from "../dashboard/areaTop/AreaTop";

const CarProfile = () => {
  const { carId } = useParams(); // Assuming you have set up React Router for parameter passing
  const [carProfile, setCarProfile] = useState(null);

  // Dummy car data for testing
  const dummyCarData = {
    carId: 1,
    carName: "Toyota Camry",
    transmissionType: "Automatic",
    seats: 5,
    registrationNumber: "ABCD1234",
    companyName: "Toyota",
    amount: 25000,
    imageUrl: "https://example.com/car-image.jpg",
    totalCount: 10,
    availableCount: 5,
  };

  useEffect(() => {
    
    const fetchCarProfile = async () => {
      try {
        
        setCarProfile(dummyCarData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCarProfile();

    
    return () => {
      setCarProfile(null);
    };
  }, [carId]);

  if (!carProfile) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <AreaTop />
      <div className="car-profile-container">
        <h2>Car Profile</h2>
        <div className="car-details">
          <p>
            <strong>Car ID:</strong> {carProfile.carId}
          </p>
          <p>
            <strong>Car Name:</strong> {carProfile.carName}
          </p>
          <p>
            <strong>Transmission Type:</strong> {carProfile.transmissionType}
          </p>
          <p>
            <strong>Seats:</strong> {carProfile.seats}
          </p>
          <p>
            <strong>Registration Number:</strong>{" "}
            {carProfile.registrationNumber}
          </p>
          <p>
            <strong>Company Name:</strong> {carProfile.companyName}
          </p>
          <p>
            <strong>Amount:</strong> {carProfile.amount}
          </p>
          <p>
            <strong>Image:</strong>{" "}
            <img src={carProfile.imageUrl} alt="Car Image" />
          </p>
          <p>
            <strong>Total Count:</strong> {carProfile.totalCount}
          </p>
          <p>
            <strong>Available Count:</strong> {carProfile.availableCount}
          </p>
        </div>
      </div>
    </>
  );
};

export default CarProfile;
