import React, { useEffect, useState, useContext } from "react";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";

/* Import Context */

// SCRIPT IMPORTS
import DateCalc from "../scripts/dateCalc";
let date = new DateCalc();

// ACTION IMPORTS
import {
  CHANGE_STARTEPOCH,
  CHANGE_ENDEPOCH,
  CHANGE_STARTDATE,
  CHANGE_ENDDATE,
} from "../store/dateRangeReducer";

function DateRange(props) {
  // REDUX HOOKS START
  const dispatch = useDispatch();
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

  /* Making a request for the access token */

  const postUrl = `https://www.strava.com/oauth/token?client_id=${
    process.env.CLIENTID
  }&client_secret=${process.env.CLIENTSECRET}&code=${localStorage.getItem(
    "authorizationCode"
  )}&grant_type=authorization_code`;

  // Axios.post(postUrl)
  //   .then((response) => {
  //     console.log(response.data);
  //     localStorage.setItem("strava_access_token", response.data.access_token);
  //     localStorage.setItem("strava_refresh_token", response.data.refresh_token);
  //     localStorage.setItem(
  //       "currentAthlete",
  //       JSON.stringify(response.data.athlete)
  //     ),
  //       localStorage.setItem("strava_expires-at", response.data.expires_at),
  //       localStorage.setItem("strava_expires-in", response.data.expires_in);
  //     console.log(JSON.parse(localStorage.getItem("currentAthlete")));
  //   })
  //   .catch((error) => console.log(error));

  /* UseEffect */
  // useEffect(() => {
  //   if (appState.startEpoch > appState.endEpoch) {
  //     appDispatch({
  //       type: "changeInfoStyle",
  //       value: "text--strava text--pulsing",
  //     });
  //   } else {
  //     appDispatch({
  //       type: "changeInfoStyle",
  //       value: "",
  //     });
  //   }
  // }, [appState.startEpoch, appState.endEpoch]);

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
          // defaultValue={appState.startDate}
          id=""
        />
        <input
          onChange={(e) => {
            changeEndDate(e);
          }}
          className="date-range__date box box--inset-tiny text text--normal text--tiny"
          type="date"
          name="end-date"
          // defaultValue={appState.endDate}
          id=""
        />
        {/* <p
          className={`date-range__info text text--sn text--center ${appState.infoStyle}`}
        >
          {appState.info}
        </p> */}
        <button className="date-range__submit box box--tiny text text--tiny text--small">
          Get
        </button>
      </div>
    </>
  );
}

export default DateRange;
