const initialState = {
  activitiesData: [],
  rides: [],
  ridesDistance: 0,
  runs: [],
  runsDistance: 0,
  swims: [],
  swimsDistance: 0,
};

export const ACTIVITIESDATA = "ACTIVITIESDATA";

const activitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIVITIESDATA: {
      return {
        activitiesData: action.data.activitiesData,
        rides: action.data.rides,
        ridesDistance: action.data.ridesDistance,
        runs: action.data.runs,
        runsDistance: action.data.runsDistance,
        swims: action.data.swims,
        swimsDistance: action.data.swimsDistance,
      };
    }
    default: {
      return state;
    }
  }
};

export default activitiesReducer;
