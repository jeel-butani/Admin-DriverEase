// import React, { useState , useEffect} from "react";
// import "./UserForm.scss";
// import AreaTop from "../dashboard/areaTop/AreaTop";
// import { useParams } from "react-router-dom";

// const UserForm = () => {
//   const {userId}=useParams();
//   const [formData, setFormData] = useState({
//     name: "",
//     birthdate: "",
//     email: "",
//     phoneNumber: "",
//     location: "",
//     aadharCard: "",
//     aadharCardImageUrl: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };
//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const response = await fetch(
//           "http://localhost:8080/api/users/${userId}"
//         );
//         const data = await response.json();
//         setFormData(data);
//       } catch (error) {
//         console.error("Error :", error.message);
//       }
//     };
//     fetchUser();
//   }, [userId]);



//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission, e.g., send data to server
//     console.log(formData);
//     // Reset form fields after submission
//     setFormData({
//       name: "",
//       birthdate: "",
//       email: "",
//       phoneNumber: "",
//       location: "",
//       aadharCard: "",
//       aadharCardImageUrl: "",
//       password: "",
//     });
//   };

//   return (
//     <>
//       <AreaTop />
//       <div className="user-form-container">
//         <h2>User Form</h2>
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label htmlFor="name">Name</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="birthdate">Birthdate</label>
//             <input
//               type="date"
//               id="birthdate"
//               name="birthdate"
//               value={formData.birthdate}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="phoneNumber">Phone Number</label>
//             <input
//               type="text"
//               id="phoneNumber"
//               name="phoneNumber"
//               value={formData.phoneNumber}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="location">Location</label>
//             <input
//               type="text"
//               id="location"
//               name="location"
//               value={formData.location}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="aadharCard">Aadhar Card</label>
//             <input
//               type="text"
//               id="aadharCard"
//               name="aadharCard"
//               value={formData.aadharCard}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="aadharCardImageUrl">Aadhar Card Image URL</label>
//             <input
//               type="text"
//               id="aadharCardImageUrl"
//               name="aadharCardImageUrl"
//               value={formData.aadharCardImageUrl}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default UserForm;

import React, { useState, useEffect } from "react";
import "./UserForm.scss";
import AreaTop from "../dashboard/areaTop/AreaTop";
import { useParams } from "react-router-dom";
import axios from "axios";

const UserForm = () => {
  const { userId } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    birthdate: "",
    email: "",
    phoneNumber: "",
    location: "",
    aadharCard: "",
    aadharCardImageUrl: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/users/${userId}`
        );
        setFormData(response.data);
      } catch (error) {
        console.error("Error :", error.message);
      }
    };
    fetchUser();
  }, [userId]);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    
    setFormData({
      name: "",
      birthdate: "",
      email: "",
      phoneNumber: "",
      location: "",
      aadharCard: "",
      aadharCardImageUrl: "",
      password: "",
    });
  };

  return (
    <>
      <AreaTop />
      <div className="user-form-container">
        <h2>User Form</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="birthdate">Birthdate</label>
            <input
              type="date"
              id="birthdate"
              name="birthdate"
              value={formData.birthdate}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="aadharCard">Aadhar Card</label>
            <input
              type="text"
              id="aadharCard"
              name="aadharCard"
              value={formData.aadharCard}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="aadharCardImageUrl">Aadhar Card Image URL</label>
            <input
              type="text"
              id="aadharCardImageUrl"
              name="aadharCardImageUrl"
              value={formData.aadharCardImageUrl}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default UserForm;
