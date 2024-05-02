import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./UserProfile.scss";
import AreaTop from "../dashboard/areaTop/AreaTop";

const UserProfile = () => {
  const { userId } = useParams(); 
  const [userProfile, setUserProfile] = useState(null);

  
  const dummyUserData = {
    userId: "1",
    name: "John Doe",
    birthdate: "1990-01-01",
    email: "johndoe@example.com",
    phoneNumber: "1234567890",
    location: "City, Country",
    aadharCard: "123456789012",
    aadharCardImageUrl: "https://example.com/aadhar-card-image.jpg",
  };

  useEffect(() => {
    
    const fetchUserProfile = async () => {
      try {
        
        setUserProfile(dummyUserData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserProfile();

    
    return () => {
      setUserProfile(null);
    };
  }, [userId]);

  if (!userProfile) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <AreaTop />
      <div className="user-profile-container">
        <h2>User Profile</h2>
        <div className="user-details">
          <p>
            <strong>User ID:</strong> {userProfile.userId}
          </p>
          <p>
            <strong>Name:</strong> {userProfile.name}
          </p>
          <p>
            <strong>Birthdate:</strong> {userProfile.birthdate}
          </p>
          <p>
            <strong>Email:</strong> {userProfile.email}
          </p>
          <p>
            <strong>Phone Number:</strong> {userProfile.phoneNumber}
          </p>
          <p>
            <strong>Location:</strong> {userProfile.location}
          </p>
          <p>
            <strong>Aadhar Card:</strong> {userProfile.aadharCard}
          </p>
          <img src={userProfile.aadharCardImageUrl} alt="Aadhar Card" />
        </div>
      </div>
    </>
  );
};

export default UserProfile;
