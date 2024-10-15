import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { NavLink, useNavigate } from "react-router-dom";

import { IoPower } from "react-icons/io5";

import "./OnOff.css";

export default function OnOff() {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log("An error happened.", error.message);
    } finally {
      console.log("Sign-out successful");
     navigate("/");
    }
  };

  return (
    <div className="row">
      <div className="col-6">
        <NavLink className="nav-item logo-container" to="/">
          <div className="logofor-pages">GF</div>
        </NavLink>
      </div>
      <div className="col-6 on-off-container">
        <IoPower className="on-off" onClick={logout} />
      </div>
    </div>
  );
}