import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./BikeProfile.scss";
import AreaTop from "../dashboard/areaTop/AreaTop";

const BikeProfile = () => {
  const { bikeId } = useParams(); 
  const [bikeProfile, setBikeProfile] = useState(null);

  
  const dummyBikeData = {
    Bike_id: 1,
    Bike_name: "Honda CB Hornet",
    Seats: 2,
    Registration_number: "XYZ1234",
    Amount: 40000,
    Image_url: "https://example.com/bike-image.jpg",
    Total_count: 5,
    Available_count: 3,
    Company_name: "Honda",
    Type: "Sport",
  };

  useEffect(() => {
    
    const fetchBikeProfile = async () => {
      try {
        
        setBikeProfile(dummyBikeData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBikeProfile();

    
    return () => {
      setBikeProfile(null);
    };
  }, [bikeId]);

  if (!bikeProfile) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <AreaTop />
      <div className="bike-profile-container">
        <h2>Bike Profile</h2>
        <div className="bike-details">
          <p>
            <strong>Bike ID:</strong> {bikeProfile.Bike_id}
          </p>
          <p>
            <strong>Name:</strong> {bikeProfile.Bike_name}
          </p>
          <p>
            <strong>Seats:</strong> {bikeProfile.Seats}
          </p>
          <p>
            <strong>Registration Number:</strong>{" "}
            {bikeProfile.Registration_number}
          </p>
          <p>
            <strong>Amount:</strong> {bikeProfile.Amount}
          </p>
          <p>
            <strong>Total Count:</strong> {bikeProfile.Total_count}
          </p>
          <p>
            <strong>Available Count:</strong> {bikeProfile.Available_count}
          </p>
          <p>
            <strong>Company Name:</strong> {bikeProfile.Company_name}
          </p>
          <p>
            <strong>Type:</strong> {bikeProfile.Type}
          </p>
          <p>
            <strong>Image:</strong>{" "}
            <img src={bikeProfile.Image_url} alt="Bike Image" />
          </p>
        </div>
      </div>
    </>
  );
};

export default BikeProfile;
