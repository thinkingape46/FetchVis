const initialState = {
  authorizationCode: "",
  scopeRequest: "read,activity:read,activity:read_all,profile:read_all",
  scopeReceived: "",
  loggedIn: false,
};

// ACTIONS START
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const ADDSCOPE = "ADDSCOPE";
export const AUTHORIZATIONCODE = "AUTHORIZATIONCODE";
// ACTIONS END

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      return {
        authorizationCode: state.authorizationCode,
        scopeRequest: state.scopeRequest,
        scopeReceived: state.scopeReceived,
        loggedIn: true,
      };
    }
    case LOGOUT: {
      return {
        authorizationCode: state.authorizationCode,
        scopeRequest: state.scopeRequest,
        scopeReceived: state.scopeReceived,
        loggedIn: false,
      };
    }
    case ADDSCOPE: {
      return {
        authorizationCode: state.authorizationCode,
        scopeRequest: state.scopeRequest,
        scopeReceived: action.scopeReceived,
        loggedIn: state.loggedIn,
      };
    }
    case AUTHORIZATIONCODE: {
      return {
        authorizationCode: action.authorizationCode,
        scopeRequest: state.scopeRequest,
        scopeReceived: state.scopeReceived,
        loggedIn: state.loggedIn,
      };
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
