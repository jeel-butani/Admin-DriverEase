import React from "react";
import BikeTableAction from "./BikeTableAction";
import "./BikeTable.scss";

const TABLE_HEADS = [
  "Bike ID",
  "Bike Name",
  "Seats",
  "Registration Number",
  "Amount",
  "Image",
  "Total Count",
  "Available Count",
  "Company Name",
  "Type",
  "Action",
];

const TABLE_DATA = [
  {
    bike_id: 1,
    bike_name: "Honda CB Shine",
    seats: 2,
    registration_number: "ABCD1234",
    amount: 60000,
    image_url: "url_to_bike_image",
    total_count: 10,
    available_count: 5,
    company_name: "Honda",
    type: "Standard",
  },
  // Add more bike data objects as needed
];

const BikeTable = () => {
  return (
    <section className="content-area-table">
      <div className="data-table-info">
        <h4 className="data-table-title">Bike Information</h4>
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
                  <td>{dataItem.bike_id}</td>
                  <td>{dataItem.bike_name}</td>
                  <td>{dataItem.seats}</td>
                  <td>{dataItem.registration_number}</td>
                  <td>{dataItem.amount}</td>
                  <td>
                    <img src={dataItem.image_url} alt="Bike" />
                  </td>
                  <td>{dataItem.total_count}</td>
                  <td>{dataItem.available_count}</td>
                  <td>{dataItem.company_name}</td>
                  <td>{dataItem.type}</td>
                  <td className="dt-cell-action">
                    <BikeTableAction />
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

export default BikeTable;
