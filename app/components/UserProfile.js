import React from "react";
import { useSelector } from "react-redux";

const UserProfile = () => {
  // REDUX HOOKS START
  const firstName = useSelector((store) => store.userProfileReducer.firstName);
  const lastName = useSelector((store) => store.userProfileReducer.lastName);
  const profilePicture = useSelector(
    (store) => store.userProfileReducer.profilePicture
  );
  // REDUX HOOKS END
  return (
    <>
      <div className="user-profile">
        <p className="user-profile__fullname text text--small text--center">
          {firstName}&nbsp;{lastName}
        </p>
        <img
          src={profilePicture}
          alt="User profile picture"
          className="user-profile__picture"
        />
      </div>
    </>
  );
};

export default UserProfile;
