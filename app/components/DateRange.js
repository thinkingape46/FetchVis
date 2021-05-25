import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";

/* Import Context */

// SCRIPT IMPORTS
import getRequest from "../scripts/getRequest";
import {
  getActivitiesByType,
  getActivitiesDistanceByType,
} from "../scripts/getActivities";
import currentDate from "../scripts/dateCalc";
const date = currentDate();

// ACTION IMPORTS
import {
  CHANGE_STARTEPOCH,
  CHANGE_ENDEPOCH,
  CHANGE_STARTDATE,
  CHANGE_ENDDATE,
} from "../store/dateRangeReducer";
import { ACTIVITIESDATA } from "../store/activitiesReducer";

function DateRange(props) {
  // REACT HOOKS START
  const [dateRangeErrors, setDateRangeErrors] = useState(false);
  // REACT HOOKS END
  // REDUX HOOKS START
  const dispatch = useDispatch();
  const startEpoch = useSelector((store) => store.dateRangeReducer.startEpoch);
  const endEpoch = useSelector((store) => store.dateRangeReducer.endEpoch);
  const accessToken = sessionStorage.getItem("strava_access_token");
  // REDUX HOOKS END

  function changeStartDate(e) {
    dispatch({ type: CHANGE_STARTDATE, startDate: e.target.value });
    dispatch({
      type: CHANGE_STARTEPOCH,
      startEpoch: new Date(e.target.value).getTime() / 1000,
    });
  }

  function changeEndDate(e) {
    dispatch({ type: CHANGE_ENDDATE, endDate: e.target.value });
    dispatch({
      type: CHANGE_ENDEPOCH,
      endEpoch: new Date(e.target.value).getTime() / 1000,
    });
  }

  const getActivities = async () => {
    const getActivitiesUrl = `https://www.strava.com/api/v3/athlete/activities?before=${endEpoch}&after=${startEpoch}&page=1&per_page=200&access_token=${accessToken}`;
    const data = await getRequest(getActivitiesUrl);
    console.log(data.data);
    const rides = getActivitiesByType(data.data, "Ride");
    const ridesDistance = getActivitiesDistanceByType(rides, "Ride");
    const runs = getActivitiesByType(data.data, "Run");
    const runsDistance = getActivitiesDistanceByType(runs, "Run");
    const swims = getActivitiesByType(data.data, "Swim");
    const swimsDistance = getActivitiesDistanceByType(swims, "Swim");
    dispatch({
      type: ACTIVITIESDATA,
      data: {
        activitiesData: data.data,
        rides: rides,
        ridesDistance: parseInt(ridesDistance),
        runs: runs,
        runsDistance: parseInt(runsDistance),
        swims: swims,
        swimsDistance: parseInt(swimsDistance),
      },
    });
  };

  useEffect(() => {
    if (startEpoch > endEpoch) {
      setDateRangeErrors(true);
    } else {
      setDateRangeErrors(false);
    }
  }, [startEpoch, endEpoch]);

  useEffect(() => {
    dispatch({ type: CHANGE_STARTDATE, startDate: new Date() });
    dispatch({
      type: CHANGE_STARTEPOCH,
      startEpoch: new Date().getTime() / 1000,
    });
    dispatch({ type: CHANGE_ENDDATE, endDate: new Date() });
    dispatch({
      type: CHANGE_ENDEPOCH,
      endEpoch: new Date().getTime() / 1000,
    });
  }, []);

  return (
    <>
      <div className="date-range box">
        <input
          onChange={(e) => {
            changeStartDate(e);
          }}
          className="date-range__date  box box--inset-tiny text text--normal text--tiny"
          type="date"
          name="start-date"
          defaultValue={date}
          id=""
        />
        <input
          onChange={(e) => {
            changeEndDate(e);
          }}
          className="date-range__date box box--inset-tiny text text--normal text--tiny"
          type="date"
          name="end-date"
          defaultValue={date}
          id=""
        />
        <p
          className={`date-range__info text text--sn text--center ${
            dateRangeErrors ? "text--strava text--pulsing" : ""
          }`}
        >
          {!dateRangeErrors
            ? "Select Date Range"
            : "Start Date cannot be later than end date"}
        </p>
        <button
          className="date-range__submit box box--tiny text text--normal"
          onClick={getActivities}
        >
          Get
        </button>
      </div>
    </>
  );
}

export default DateRange;
