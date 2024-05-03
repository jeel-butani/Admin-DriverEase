import { useContext, useEffect } from "react";
import "./App.scss";
import { ThemeContext } from "./context/ThemeContext";
import { DARK_THEME, LIGHT_THEME } from "./constants/themeConstants";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoonIcon from "./assets/icons/moon.svg";
import SunIcon from "./assets/icons/sun.svg";
import BaseLayout from "./layout/BaseLayout";
import { Dashboard, PageNotFound } from "./screens";
import Statistics from "./screens/dashboard/statistics";
import FormDr from "./screens/dashboard/FormDr";
// import UserComp from "./components/Maincomponents/UserComp";
import DriverForm from "./components/Maincomponents/DriverForm";
import CompanyForm from "./components/Maincomponents/CompanyForm";
import CarForm from "./components/Maincomponents/CarForm";
import UserForm from "./components/Maincomponents/UserForm";
import BikeForm from "./components/Maincomponents/BikeForm";
import BookingForm from "./components/Maincomponents/BookingForm";
import PaymentForm from "./components/Maincomponents/PaymentForm";
import DriverTable from "./components/tables/DriverTable";
import DriverProfile from "./components/profiles/DriverProfile";
import CompanyTable from "./components/tables/CompanyTable";
import CompanyProfile from "./components/profiles/CompanyProfile";
import CarTable from "./components/tables/CarTable";
import CarProfile from "./components/profiles/CarProfile";
import BikeTable from "./components/tables/BikeTable";
import BikeProfile from "./components/profiles/BikeProfile";
import UserTable from "./components/tables/UserTable";
import UserProfile from "./components/profiles/UserProfile";
function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  
  useEffect(() => {
    if (theme === DARK_THEME) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);

  return (
    <>
      <Router>
        <Routes>
          <Route element={<BaseLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/stat" element={<Statistics />} />
            <Route path="/user" element={<UserTable />} />
            <Route path="/form" element={<FormDr />} />
            <Route path="/driverform" element={<DriverForm />} />
            <Route path="/companyform" element={<CompanyForm />} />
            <Route path="/carform" element={<CarForm />} />
            <Route path="/userform" element={<UserForm />} />
            <Route path="/userform/:userId" element={<UserForm />} />
            <Route path="/bikeform" element={<BikeForm />} />
            <Route path="/bookingform" element={<BookingForm />} />
            <Route path="/paymentform" element={<PaymentForm />} />
            <Route path="/driver" element={<DriverTable />} />
            <Route path="/driverprofile" element={<DriverProfile />} />
            <Route path="/company" element={<CompanyTable />} />
            <Route path="/companyprofile" element={<CompanyProfile />} />
            <Route path="/car" element={<CarTable />} />
            <Route path="/carprofile" element={<CarProfile />} />
            <Route path="/bike" element={<BikeTable />} />
            <Route path="/bikeprofile" element={<BikeProfile />} />
            <Route path="/userprofile" element={<UserProfile />} />
            {/* <Route path="/company" element={<CompanyTable/>}/> */}
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>

        <button
          type="button"
          className="theme-toggle-btn"
          onClick={toggleTheme}
        >
          <img
            className="theme-icon"
            src={theme === LIGHT_THEME ? SunIcon : MoonIcon}
          />
        </button>
      </Router>
    </>
  );
}

export default App;
