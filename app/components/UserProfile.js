import React from "react";

const UserProfile = () => {
  const currentAthlete = JSON.parse(sessionStorage.getItem("currentAthlete"));
  const firstName = currentAthlete.firstname;
  const lastName = currentAthlete.lastname;
  const profilePicture = currentAthlete.profile;
  return (
    <>
      <div className="user-profile">
        <img
          src={profilePicture}
          alt="User profile picture"
          className="user-profile__picture"
        />
        <p className="user-profile__fullname text text--normal text--center">
          {firstName}&nbsp;{lastName}
        </p>
      </div>
    </>
  );
};

export default UserProfile;
