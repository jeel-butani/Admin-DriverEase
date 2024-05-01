import React from "react";
import AreaTableAction from "./DriverTableAction";
import "./DriverTable.scss";

const TABLE_HEADS = [
  "Driver ID",
  "Name",
  "License Number",
  "License Photo",
  "Aadhar Card Number",
  "Price",
  "Location",
  "Phone Number",
  "Vehicle Type",
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
  return (
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
            {TABLE_DATA.map((dataItem, index) => {
              return (
                <tr key={index}>
                  <td>{dataItem.driver_id}</td>
                  <td>{dataItem.name}</td>
                  <td>{dataItem.licenceNumber}</td>
                  <td>
                    <img src={dataItem.licencePhotoUrl} alt="License" />
                  </td>
                  <td>{dataItem.aadharCardNumber}</td>
                  <td>${dataItem.price.toFixed(2)}</td>
                  <td>{dataItem.location}</td>
                  <td>{dataItem.phoneNumber}</td>
                  <td>{dataItem.typeOfVehicle}</td>
                  <td className="dt-cell-action">
                    <AreaTableAction />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default DriverTable;
