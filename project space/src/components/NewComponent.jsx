import { useState } from "react";
import React from "react";

import FixIt from './Fixit'
import BestRepair from './BestRepair'
import Services from "./ourservice";
import WhyChooseUs from "./whychoose";
import Dashboard from "./Dashboard";
const NewComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <LoginForm /> */}
      {/* <SignupForm /> */}
      {/* <Testimonials /> */}
      <Dashboard />
     
      <WhyChooseUs />
      <Services />



    </>
  );
};

export default NewComponent;
