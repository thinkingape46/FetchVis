import React, { useEffect, useState, useContext } from "react";
import Axios from "axios";
import DispatchContext from "../context/DipatchContext";
import StateContext from "../context/StateContext";

// Script imports
import DateCalc from "../scripts/dateCalc";
let date = new DateCalc();

function DateRange(props) {
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);

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
