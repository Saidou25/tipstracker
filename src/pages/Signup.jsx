import React from "react";
import { signupData } from "../data";

import SignupCard from "./SignupCard";

const Signup = () => {
  return (
    <div className="container-fluid g-0">
      <div className="card main-card" data-testid="main-card">
        <div className="card-title p-5">{signupData.templateTitle}</div>
        <SignupCard
          className="p-0 m-0 g-0"
          cardBodyTemplate={{
            templateTitle: signupData.templateTitle,
            fields: signupData.fields,
            footer: signupData.footer,
          }}
        />
         <div className="card-footer p-5">{signupData.footer}</div>
      </div>
    </div>
  );
};

export default Signup;
