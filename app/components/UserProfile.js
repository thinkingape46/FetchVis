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
