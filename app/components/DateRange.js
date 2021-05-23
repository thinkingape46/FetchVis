import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";

/* Import Context */

// SCRIPT IMPORTS
import currentDate from "../scripts/dateCalc";
const date = currentDate();

// ACTION IMPORTS
import {
  CHANGE_STARTEPOCH,
  CHANGE_ENDEPOCH,
  CHANGE_STARTDATE,
  CHANGE_ENDDATE,
} from "../store/dateRangeReducer";

function DateRange(props) {
  // REACT HOOKS START
  const [dateRangeErrors, setDateRangeErrors] = useState(false);
  // REACT HOOKS END
  // REDUX HOOKS START
  const dispatch = useDispatch();
  const startEpoch = useSelector((store) => store.dateRangeReducer.startEpoch);
  const endEpoch = useSelector((store) => store.dateRangeReducer.endEpoch);
  // REDUX HOOKS END

  function changeStartDate(e) {
    dispatch({ type: CHANGE_STARTDATE, startDate: e.target.value });
    dispatch({
      type: CHANGE_STARTEPOCH,
      startEpoch: new Date(e.target.value).valueOf(),
    });
  }

  function changeEndDate(e) {
    dispatch({ type: CHANGE_ENDDATE, endDate: e.target.value });
    dispatch({
      type: CHANGE_ENDEPOCH,
      endEpoch: new Date(e.target.value).valueOf(),
    });
  }

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
      startEpoch: new Date().valueOf(),
    });
    dispatch({ type: CHANGE_ENDDATE, endDate: new Date() });
    dispatch({
      type: CHANGE_ENDEPOCH,
      endEpoch: new Date().valueOf(),
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
        <button className="date-range__submit box box--tiny text text--normal">
          Get
        </button>
      </div>
    </>
  );
}

export default DateRange;
