
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { AuthProvider } from './context/AuthContext'; 
import AdminPanel from './components/adminpanel';
import NewComponent from "./components/NewComponent";
import UserClick from "./components/UserClick";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/Homeweb";
import StudentLogin from "./components/studentlogin";
import LoginForm from "./components/login";
import SignupForm from "./components/singup";
import ContactUs from "./components/ContactUs";
import OurTeam from "./components/OurTeam";
import StudentSignup from "./components/StudentSignup";
import Body1 from "./components/Body1";
import Body2 from "./components/Body2";
import AdminUpdate from './components/adminpanel';
import ComplaintForm from "./components/ComplaintForm";
import Services from "./components/ourservice";
import AdminComplaintList from './components/adminComplaintlist';
import TrackComplaints from './components/trackcomplaintstatus';
import About from "./components/about";


function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      {/* <AdminUpdate/> */}
        {/* <AuthProvider/> */}
      <Routes>

        <Route path="/" element={<Home />}>
          <Route index element={<NewComponent />}></Route>
          <Route path="navbar" element={<Navbar />}></Route>
          <Route path="ourservices" element={<Services />}></Route>
          <Route path="/components/Body1" element={<Body1 />}></Route>
          <Route path="/components/Body2" element={<Body2 />}></Route>
          <Route path="complaintform" element={<ComplaintForm />}></Route>
          <Route path="/UserClick" element={<UserClick />}></Route>
          <Route path="studentlogin" element={<StudentLogin />}></Route>
          <Route path="studentsignup" element={<StudentSignup />}></Route>
          <Route path="login" element={<LoginForm />}></Route>
          <Route path="adminsignup" element={<SignupForm />}></Route>
          <Route path="contactus" element={<ContactUs />}></Route>
          <Route path="/components/trackcomplaintstatus" element={<TrackComplaints />}></Route>
          <Route path="/components/adminComplaintlist" element={<AdminComplaintList />}></Route>
          <Route path="ourteam" element={<OurTeam />}></Route>
          <Route path="/components/adminpanel" element={<AdminPanel />}></Route>
          <Route path="/footer" element={<Footer />}></Route>
          <Route path="" element={<AdminUpdate />}></Route>
          <Route path="/about" element={<About/>}></Route>
        </Route>
      </Routes>

    </Router>
  );
}

export default App;
