import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./CompanyProfile.scss";
import AreaTop from "../dashboard/areaTop/AreaTop";

const CompanyProfile = () => {
  const { companyId } = useParams(); 
  const [companyProfile, setCompanyProfile] = useState(null);

  
  const dummyCompanyData = {
    companyId: 1,
    name: "Example Company",
    gstNumber: "ABCD123456",
    email: "example@example.com",
    ownerName: "John Doe",
    location: "City, Country",
  };

  useEffect(() => {
    
    const fetchCompanyProfile = async () => {
      try {
        
        setCompanyProfile(dummyCompanyData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCompanyProfile();

    
    return () => {
      setCompanyProfile(null);
    };
  }, [companyId]);

  if (!companyProfile) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <AreaTop />
      <div className="company-profile-container">
        <h2>Company Profile</h2>
        <div className="company-details">
          <p>
            <strong>Company ID:</strong> {companyProfile.companyId}
          </p>
          <p>
            <strong>Name:</strong> {companyProfile.name}
          </p>
          <p>
            <strong>GST Number:</strong> {companyProfile.gstNumber}
          </p>
          <p>
            <strong>Email:</strong> {companyProfile.email}
          </p>
          <p>
            <strong>Owner Name:</strong> {companyProfile.ownerName}
          </p>
          <p>
            <strong>Location:</strong> {companyProfile.location}
          </p>
        </div>
      </div>
    </>
  );
};

export default CompanyProfile;
