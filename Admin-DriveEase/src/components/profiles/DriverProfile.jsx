// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import "./DriverProfile.scss";
// import AreaTop from "../dashboard/areaTop/AreaTop";

// const DriverProfile = () => {
//   const { driverId } = useParams(); // Assuming you have set up React Router for parameter passing
//   const [driverProfile, setDriverProfile] = useState(null);

//   useEffect(() => {
//     // Fetch driver profile data from API based on driverId
//     const fetchDriverProfile = async () => {
//       try {
//         const response = await fetch(`api/drivers/${driverId}`);
//         if (response.ok) {
//           const data = await response.json();
//           setDriverProfile(data);
//         } else {
//           throw new Error("Failed to fetch driver profile");
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchDriverProfile();

//     // Cleanup function to prevent memory leaks
//     return () => {
//       setDriverProfile(null);
//     };
//   }, [driverId]);

//   if (!driverProfile) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <>
//       <AreaTop />
//       <div className="driver-profile-container">
//         <h2>Driver Profile</h2>
//         <div className="driver-details">
//           <p>
//             <strong>Driver ID:</strong> {driverProfile.driverId}
//           </p>
//           <p>
//             <strong>Name:</strong> {driverProfile.name}
//           </p>
//           <p>
//             <strong>License Number:</strong> {driverProfile.licenseNumber}
//           </p>
//           <p>
//             <strong>License Photo:</strong>{" "}
//             <img src={driverProfile.licensePhotoUrl} alt="License Photo" />
//           </p>
//           <p>
//             <strong>Aadhar Card Number:</strong>{" "}
//             {driverProfile.aadharCardNumber}
//           </p>
//           <p>
//             <strong>Price:</strong> {driverProfile.price}
//           </p>
//           <p>
//             <strong>Location:</strong> {driverProfile.location}
//           </p>
//           <p>
//             <strong>Phone Number:</strong> {driverProfile.phoneNumber}
//           </p>
//           <p>
//             <strong>Type of Vehicle:</strong> {driverProfile.typeOfVehicle}
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default DriverProfile;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./DriverProfile.scss";
import AreaTop from "../dashboard/areaTop/AreaTop";

const DriverProfile = () => {
  const { driverId } = useParams(); // Assuming you have set up React Router for parameter passing
  const [driverProfile, setDriverProfile] = useState(null);

  // Dummy driver data for testing
  const dummyDriverData = {
    driverId: 1,
    name: "John Doe",
    licenseNumber: "ABCD1234",
    licensePhotoUrl: "https://example.com/license-photo.jpg",
    aadharCardNumber: "1234 5678 9012",
    price: 50,
    location: "City, Country",
    phoneNumber: "+1234567890",
    typeOfVehicle: "Sedan",
  };

  useEffect(() => {
    // Fetch driver profile data from API based on driverId
    const fetchDriverProfile = async () => {
      try {
        // For demonstration purposes, setting the driver profile data directly from dummyDriverData
        setDriverProfile(dummyDriverData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDriverProfile();

    // Cleanup function to prevent memory leaks
    return () => {
      setDriverProfile(null);
    };
  }, [driverId]);

  if (!driverProfile) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <AreaTop />
      <div className="driver-profile-container">
        <h2>Driver Profile</h2>
        <div className="driver-details">
          <p>
            <strong>Driver ID:</strong> {driverProfile.driverId}
          </p>
          <p>
            <strong>Name:</strong> {driverProfile.name}
          </p>
          <p>
            <strong>License Number:</strong> {driverProfile.licenseNumber}
          </p>
          <p>
            <strong>License Photo:</strong>{" "}
            <img src={driverProfile.licensePhotoUrl} alt="License Photo" />
          </p>
          <p>
            <strong>Aadhar Card Number:</strong>{" "}
            {driverProfile.aadharCardNumber}
          </p>
          <p>
            <strong>Price:</strong> {driverProfile.price}
          </p>
          <p>
            <strong>Location:</strong> {driverProfile.location}
          </p>
          <p>
            <strong>Phone Number:</strong> {driverProfile.phoneNumber}
          </p>
          <p>
            <strong>Type of Vehicle:</strong> {driverProfile.typeOfVehicle}
          </p>
        </div>
      </div>
    </>
  );
};

export default DriverProfile;
