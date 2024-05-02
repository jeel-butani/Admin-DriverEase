import React, { useState, useEffect } from "react";
import axios from "axios";
import AreaTableAction from "./DriverTableAction";
import "./DriverTable.scss";
import AreaTop from "../dashboard/areaTop/AreaTop";

const TABLE_HEADS = [
  // "Driver ID",
  "Name",
  // "License Number",
  // "License Photo",
  // "Aadhar Card Number",
  // "Price",
  "Location",
  // "Phone Number",
  // "Vehicle Type",
  "Action",
];

const TABLE_DATA = [
  {
    driver_id: 1,
    name: "John Doe",
    licenceNumber: "ABCD1234",
    licencePhotoUrl: "url_to_license_photo",
    aadharCardNumber: "1234 5678 9012",
    price: 50,
    location: "City, Country",
    phoneNumber: "+1234567890",
    typeOfVehicle: "Sedan",
  },
  // Add more driver data objects as needed
];

const DriverTable = () => {
  const [driverData, setDriverData] = useState([]);

  useEffect(() => {
    const fetchDriverData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/drivers/");
        setDriverData(response.data);
      } catch (error) {
        console.error("Error fetching driver data:", error);
      }
    };

    fetchDriverData();
  }, []);

  return (
    <>
    <AreaTop/>
    <section className="content-area-table">
      <div className="data-table-info">
        <h4 className="data-table-title">Driver Information</h4>
      </div>
      <div className="data-table-diagram">
        <table>
          <thead>
            <tr>
              {TABLE_HEADS.map((th, index) => (
                <th key={index}>{th}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {driverData.map((driver) => (
              <tr key={driver.driverId}>
                <td>{driver.name}</td>
                <td>{driver.location}</td>
                <td className="dt-cell-action">
                  <AreaTableAction />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
    </>
  );
};

export default DriverTable;
