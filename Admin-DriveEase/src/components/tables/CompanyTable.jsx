// import React from "react";
// import "./CompanyTable.scss";
// import CompanyTableAction from "./CompanyTableAction";

// const CompanyTable = ({ companies }) => {
//   return (
//     <section className="content-area-table">
//       <div className="data-table-info">
//         <h4 className="data-table-title">Company Information</h4>
//       </div>
//       <div className="data-table-diagram">
//         <table>
//           <thead>
//             <tr>
//               <th>Company ID</th>
//               <th>Name</th>
//               <th>GST Number</th>
//               <th>Email</th>
//               <th>Owner Name</th>
//               <th>Location</th>
//             </tr>
//           </thead>
//           <tbody>
//             {companies &&
//               companies.map((company) => (
//                 <tr key={company.company_id}>
//                   <td>{company.company_id}</td>
//                   <td>{company.name}</td>
//                   <td>{company.gstNumber}</td>
//                   <td>{company.email}</td>
//                   <td>{company.ownerName}</td>
//                   <td>{company.location}</td>
//                   <td className="dt-cell-action">
//                     <CompanyTableAction />
//                   </td>
//                 </tr>
//               ))}
//           </tbody>
//         </table>
//       </div>
//     </section>
//   );
// };

// export default CompanyTable;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CompanyTable.scss";
import CompanyTableAction from "./CompanyTableAction";
import AreaTop from "../dashboard/areaTop/AreaTop";

const TABLE_HEADS = [
  // "Company ID",
  "Name",
  // "GST Number",
  // "Email",
  "Owner Name",
  "Location",
  "Action",
];

// const TABLE_DATA = [
//   {
//     company_id: 1,
//     name: "ABC Company",
//     gstNumber: "123456789",
//     email: "abc@example.com",
//     ownerName: "John Doe",
//     location: "City, Country",
//   },
//   {
//     company_id: 2,
//     name: "XYZ Corporation",
//     gstNumber: "987654321",
//     email: "xyz@example.com",
//     ownerName: "Jane Smith",
//     location: "Town, Country",
//   },
//   // Add more company data objects as needed
// ];

const CompanyTable = () => {


  const [companyData, setCompanyData] = useState([]);

  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/companies/");
        setCompanyData(response.data);
      } catch (error) {
        console.error("Error fetching company data:", error);
      }
    };

    fetchCompanyData();
  }, []);

  return (
    <>
    <AreaTop/>
    <section className="content-area-table">
      <div className="data-table-info">
        <h4 className="data-table-title">Company Information</h4>
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
            {companyData.map((company) => (
              <tr key={company.id}>
                <td>{company.companyName}</td>
                <td>{company.ownerName}</td>
                <td>{company.location}</td>
                <td className="dt-cell-action">
                  <CompanyTableAction />
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

export default CompanyTable;
