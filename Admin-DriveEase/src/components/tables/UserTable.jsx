import React, { useState,useEffect } from "react";
import axios from "axios";
import AreaTop from "../dashboard/areaTop/AreaTop";
import UserTableAction from "./UserTableAction";
import './UserTable.scss'

const TABLE_HEADS = [
  // "Company ID",
  "Name",
  // "GST Number",
  // "Email",
//   "Owner Name",
  "Location",
  "Action",
];

const UserTable = () => {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
      const fetchUserData = async () => {
        try {
          const response = await axios.get(
            "http://localhost:8080/api/users/"
          );
          setUserData(response.data);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };

      fetchUserData();
    }, []);
  return (
    <>
      <AreaTop />
      <section className="content-area-table">
        <div className="data-table-info">
          <h4 className="data-table-title">User Information</h4>
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
              {userData.map((user) => (
                <tr key={user.userId}>
                  <td>{user.name}</td>
                  {/* <td>{user.ownerName}</td> */}
                  <td>{user.location}</td>
                  <td className="dt-cell-action">
                  <UserTableAction/>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default UserTable;