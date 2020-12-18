import React, { useEffect, useState, useContext } from "react";
import Axios from "axios";

/* Import Context */
import DispatchContext from "../context/DipatchContext";
import StateContext from "../context/StateContext";

// Script imports
import DateCalc from "../scripts/dateCalc";
let date = new DateCalc();

function DateRange(props) {
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);

  function changeStartDate(e) {
    appDispatch({
      type: "changeStartDate",
      value: e.target.value,
    });
    appDispatch({
      type: "changeStartEpoch",
      value: new Date(e.target.value).valueOf(),
    });
  }

  function changeEndDate(e) {
    appDispatch({
      type: "changeEndDate",
      value: e.target.value,
    });
    appDispatch({
      type: "changeEndEpoch",
      value: new Date(e.target.value).valueOf(),
    });
  }

  /* Making a request for the access token */

  const postUrl = `https://www.strava.com/oauth/token?client_id=${
    process.env.CLIENTID
  }&client_secret=${process.env.CLIENTSECRET}&code=${localStorage.getItem(
    "authorizationCode"
  )}&grant_type=authorization_code`;

  Axios.post(postUrl)
    .then((response) => {
      console.log(response.data);
      localStorage.setItem("strava_access_token", response.data.access_token);
      localStorage.setItem("strava_refresh_token", response.data.refresh_token);
      localStorage.setItem(
        "currentAthlete",
        JSON.stringify(response.data.athlete)
      ),
        localStorage.setItem("strava_expires-at", response.data.expires_at),
        localStorage.setItem("strava_expires-in", response.data.expires_in);
      console.log(JSON.parse(localStorage.getItem("currentAthlete")));
    })
    .catch((error) => console.log(error));

  /* UseEffect */
  useEffect(() => {
    if (appState.startEpoch > appState.endEpoch) {
      appDispatch({
        type: "changeInfo",
        value: "End date is after the start date!",
      });
      appDispatch({
        type: "changeInfoStyle",
        value: "text--strava text--pulsing",
      });
      if (appState.flashMessages) {
        appDispatch({
          type: "flashMessage",
          value: "End date is after the start date!!",
        });
      }
    } else {
      appDispatch({
        type: "changeInfo",
        value: "Select the date range",
      });
      appDispatch({
        type: "changeInfoStyle",
        value: "",
      });
    }
  }, [appState.startEpoch, appState.endEpoch]);

  useEffect(() => {
    if (appState.flashMessages) {
      appDispatch({ type: "flashMessage", value: "Connected to Strava!" });
    }
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
          defaultValue={appState.startDate}
          id=""
        />
        <input
          onChange={(e) => {
            changeEndDate(e);
          }}
          className="date-range__date box box--inset-tiny text text--normal text--tiny"
          type="date"
          name="end-date"
          defaultValue={appState.endDate}
          id=""
        />
        <p
          className={`date-range__info text text--sn text--center ${appState.infoStyle}`}
        >
          {appState.info}
        </p>
        <button className="date-range__submit box box--tiny text text--tiny text--small">
          Get
        </button>
      </div>
    </>
  );
}

export default DateRange;
