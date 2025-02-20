import React from "react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { profileData } from "../data";
import findUser from "../UseFindUser";

import ProfileCard from "./ProfileCard";
import Navbar from "../components/Navbar";

import emptyAvatar from "../assets/profileicon.png";

import "./Profile.css";

const Profile = () => {
  const { user: currentUser, loading: loadingCurrentUser } = findUser(); // Finds the loggedinUser
  const [timeCreated, setTimeCreated] = useState();

  useEffect(() => {
    if (currentUser.metadata) {
      // Extracting and formatting the creation date directly
      const [day, month, date, year] =
        currentUser.metadata.creationTime.split(" ");
      // Remove the comma from the date and set the formatted creation time
      setTimeCreated(`${day.replace(",", "")} ${month} ${date} ${year}`);
    }
  }, [currentUser]);

  // Only show loading message until the timeout completes
  // if (loadingCurrentUser) {
  //   return <Spinner />; // Show loading message
  // }


  return (
    <div className="grad1">
      <Navbar />
      <div className="container-fluid g-0">
        <div className="card main-card">
          <div className="card-title p-5">{profileData.templateTitle}</div>
          <ProfileCard
            cardBodyTemplate={{
              fields: profileData.fields,
              loggedinUser: currentUser,
              usingSince: timeCreated,
              imageSrc: currentUser.photoURL
                ? currentUser.photoURL
                : emptyAvatar,
            }}
          />
          <div className="card-footer p-5">
            <div className="profile-footer">
              <span>You can update your profile </span>
              <NavLink className="update" to="/update">
                <span>here</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
