const initialState = {
  startEpoch: "",
  endEpoch: "",
  startDate: "",
  endDate: "",
  infoStyle: "",
};

// ACTIONS START
export const CHANGE_STARTEPOCH = "CHANGE_STARTEPOCH";
export const CHANGE_ENDEPOCH = "CHANGE_ENDEPOCH";
export const CHANGE_STARTDATE = "CHANGE_STARTDATE";
export const CHANGE_ENDDATE = "CHANGE_ENDDATE";
export const CHANGE_INFOSTYLE = "CHANGE_INFOSTYLE";
// ACTIONS END

const dateRangeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_STARTEPOCH: {
      return {
        startEpoch: action.startEpoch,
        endEpoch: state.endEpoch,
        startDate: state.startDate,
        endDate: state.endDate,
        infoStyle: state.infoStyle,
      };
    }
    case CHANGE_ENDEPOCH: {
      return {
        startEpoch: state.startEpoch,
        endEpoch: action.endEpoch,
        startDate: state.startDate,
        endDate: state.endDate,
        infoStyle: state.infoStyle,
      };
    }
    case CHANGE_STARTDATE: {
      return {
        startEpoch: state.startEpoch,
        endEpoch: state.endEpoch,
        startDate: action.startDate,
        endDate: state.endDate,
        infoStyle: state.infoStyle,
      };
    }
    case CHANGE_ENDDATE: {
      return {
        startEpoch: state.startEpoch,
        endEpoch: state.endEpoch,
        startDate: state.startDate,
        endDate: action.endDate,
        infoStyle: state.infoStyle,
      };
    }
    case CHANGE_INFOSTYLE: {
      return {
        startEpoch: state.startEpoch,
        endEpoch: state.endEpoch,
        startDate: state.startDate,
        endDate: state.endDate,
        infoStyle: action.infoStyle,
      };
    }
    default: {
      return state;
    }
  }
};

export default dateRangeReducer;
