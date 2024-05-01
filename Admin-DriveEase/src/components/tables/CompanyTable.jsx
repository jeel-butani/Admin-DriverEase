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

import React from "react";
import "./CompanyTable.scss";
import CompanyTableAction from "./CompanyTableAction";

const TABLE_HEADS = [
  "Company ID",
  "Name",
  "GST Number",
  "Email",
  "Owner Name",
  "Location",
  "Action",
];

const TABLE_DATA = [
  {
    company_id: 1,
    name: "ABC Company",
    gstNumber: "123456789",
    email: "abc@example.com",
    ownerName: "John Doe",
    location: "City, Country",
  },
  {
    company_id: 2,
    name: "XYZ Corporation",
    gstNumber: "987654321",
    email: "xyz@example.com",
    ownerName: "Jane Smith",
    location: "Town, Country",
  },
  // Add more company data objects as needed
];

const CompanyTable = () => {
  return (
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
            {TABLE_DATA.map((dataItem, index) => {
              return (
                <tr key={index}>
                  <td>{dataItem.company_id}</td>
                  <td>{dataItem.name}</td>
                  <td>{dataItem.gstNumber}</td>
                  <td>{dataItem.email}</td>
                  <td>{dataItem.ownerName}</td>
                  <td>{dataItem.location}</td>
                  <td className="dt-cell-action">
                    <CompanyTableAction />
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

export default CompanyTable;
