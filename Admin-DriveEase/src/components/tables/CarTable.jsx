// import React from "react";
// import "./CarTable.scss"; // Assuming you have a separate SCSS file for styling
// import AreaTableAction from "./DriverTableAction";

// const CarTable = ({ cars }) => {
//   const TABLE_HEADS = [
//     "Car ID",
//     "Car Name",
//     "Transmission Type",
//     "Seats",
//     "Registration Number",
//     "Company Name",
//     "Amount",
//     "Image",
//     "Total Count",
//     "Available Count",
//     "Action",
//   ];
//   const TABLE_DATA = [
//     {
//       Car_id: 1,
//       Car_name: "Toyota Camry",
//       Transmission_type: "Automatic",
//       Seats: 5,
//       Registration_number: "ABCD1234",
//       Company_name: "Toyota",
//       Amount: 25000,
//       Image_url: "url_to_car_image",
//       Total_count: 10,
//       Available_count: 5,
//       "Action":1,
//     },
//     {
//       Car_id: 2,
//       Car_name: "Honda Civic",
//       Transmission_type: "Manual",
//       Seats: 5,
//       Registration_number: "EFGH5678",
//       Company_name: "Honda",
//       Amount: 22000,
//       Image_url: "url_to_car_image",
//       Total_count: 8,
//       Available_count: 3,
//     },
//     // Add more car data objects as needed
//   ];


//   return (
//     <section className="content-area-table">
//       <div className="data-table-info">
//         <h4 className="data-table-title">Car Information</h4>
//       </div>
//       <div className="data-table-diagram">
//         <table>
//           <thead>
//             <tr>
//               {TABLE_HEADS.map((th, index) => (
//                 <th key={index}>{th}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {cars && cars.map((car, index) => (
//               <tr key={index}>
//                 <td>{car.Car_id}</td>
//                 <td>{car.Car_name}</td>
//                 <td>{car.Transmission_type}</td>
//                 <td>{car.Seats}</td>
//                 <td>{car.Registration_number}</td>
//                 <td>{car.Company_name}</td>
//                 <td>{car.Amount}</td>
//                 <td>
//                   <img src={car.Image_url} alt="Car Image" />
//                 </td>
//                 <td>{car.Total_count}</td>
//                 <td>{car.Available_count}</td>
//                 <td className="dt-cell-action">
//                   <AreaTableAction />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </section>
//   );
// };

// export default CarTable;


import React, { useState, useEffect } from "react";
import CarTableAction from "./CarTableAction";
import "./CarTable.scss";

import axios from "axios";

const TABLE_HEADS = [
  "Car ID",
  "Car Name",
  "Transmission Type",
  "Seats",
  "Registration Number",
  "Company Name",
  "Amount",
  "Image",
  "Total Count",
  "Available Count",
  "Action",
];

const TABLE_DATA = [
  {
    car_id: 1,
    car_name: "Toyota Camry",
    transmission_type: "Automatic",
    seats: 5,
    registration_number: "XYZ123",
    company_name: "Toyota",
    amount: 30000,
    image_url: "url_to_car_image",
    total_count: 10,
    available_count: 5,
  },
  // Add more car data objects as needed
];

const CarTable = () => {

  const [carData, setCarData] = useState([]);

  const fetchCarData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/cars/");
      setCarData(response.data);
    } catch (error) {
      console.error("Error fetching bike data:", error);
    }
  };

  useEffect(() => {
    fetchCarData();
  }, []);


  return (
    <section className="content-area-table">
      <div className="data-table-info">
        <h4 className="data-table-title">Car Information</h4>
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
            {TABLE_DATA.map((car) => {
              return (
                <tr key={car.carId}>
                  {/* <td>{dataItem.car_id}</td> */}
                  <td>{dataItem.carName}</td>
                  <td>{dataItem.transmission_type}</td>
                  <td>{dataItem.seats}</td>
                  <td>{dataItem.registration_number}</td>
                  <td>{dataItem.company_name}</td>
                  <td>${dataItem.amount.toFixed(2)}</td>
                  <td>
                    <img src={dataItem.image_url} alt="Car" />
                  </td>
                  <td>{dataItem.total_count}</td>
                  <td>{dataItem.available_count}</td>
                  <td className="dt-cell-action">
                    <CarTableAction />
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

export default CarTable;
