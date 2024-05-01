import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./CompanyProfile.scss"; // Assuming you have a separate SCSS file for styling
import AreaTop from "../dashboard/areaTop/AreaTop";

const CompanyProfile = () => {
  const { companyId } = useParams(); // Assuming you have set up React Router for parameter passing
  const [companyProfile, setCompanyProfile] = useState(null);

  // Dummy company data for testing
  const dummyCompanyData = {
    companyId: 1,
    name: "Example Company",
    gstNumber: "ABCD123456",
    email: "example@example.com",
    ownerName: "John Doe",
    location: "City, Country",
  };

  useEffect(() => {
    // Fetch company profile data from API based on companyId
    const fetchCompanyProfile = async () => {
      try {
        // For demonstration purposes, setting the company profile data directly from dummyCompanyData
        setCompanyProfile(dummyCompanyData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCompanyProfile();

    // Cleanup function to prevent memory leaks
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
