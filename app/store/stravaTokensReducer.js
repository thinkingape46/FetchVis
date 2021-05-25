const initialState = {
  accessToken: "",
  expiresAt: "",
  expiresIn: "",
  refreshToken: "",
  tokenType: "",
};

// ACTIONS START
export const STRAVATOKEN = "STRAVATOKEN";
// ACTIONS END

const stravaTokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case STRAVATOKEN: {
      return {
        accessToken: action.tokenData.accessToken,
        expiresAt: action.tokenData.expiresAt,
        expiresIn: action.tokenData.expiresIn,
        refreshToken: action.tokenData.refreshToken,
        tokenType: action.tokenData.tokenType,
      };
    }
    default: {
      return state;
    }
  }
};

export default stravaTokenReducer;
