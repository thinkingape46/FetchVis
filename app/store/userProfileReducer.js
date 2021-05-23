const initialState = {
  firstName: "",
  lastName: "",
  profilePicture: "",
};

// ACTIONS START
export const USERDATA = "USERDATA";
// ACTIONS END

const userProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERDATA: {
      return {
        firstName: action.userData.firstName,
        lastName: action.userData.lastName,
        profilePicture: action.userData.profilePicture,
      };
    }
    default: {
      return state;
    }
  }
};

export default userProfileReducer;
