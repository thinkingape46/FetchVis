import React, { useEffect, useState, useContext } from "react";
import Axios from "axios";
import DispatchContext from "../context/DipatchContext";

// Script imports
import DateCalc from "../scripts/dateCalc";
let date = new DateCalc();

async function connectStrava(e) {
  try {
    const response = await Axios.get("https://www.strava.com/api/v3/athlete", {
      headers: {
        authorization: "Bearer aaa",
      },
    });
    console.log(`${response.data.firstname} ${response.data.lastname}`);
    console.log(response.data);
  } catch (e) {
    console.log("error");
  }
}

function DateRange(props) {
  const appDispatch = useContext(DispatchContext);

  const [info, setInfo] = useState("select the date range to retrieve data");
  const [infoStyle, setInfoStyle] = useState({
    color: "rgba(255, 255, 255, 1)",
  });
  const [startDate, setStartDate] = useState(date.currentDate());
  const [endDate, setEndDate] = useState(date.currentDate());
  const [startEpoch, setStartEpoch] = useState(new Date(startDate).valueOf());
  const [endEpoch, setEndEpoch] = useState(new Date(endDate).valueOf());

  useEffect(() => {
    if (startDate > endDate) {
      setInfo(function () {
        return "End date is after the start date!";
      });
      setInfoStyle(function () {
        return {
          color: "rgba(255, 0, 0, 1)",
        };
      });
    } else {
      setInfo(function () {
        return "select the date range to retrieve data";
      });
      setInfoStyle(function () {
        return {
          color: "rgba(255, 255, 255, 1)",
        };
      });
    }
  }, [startEpoch, endEpoch]);

  useEffect(() => {
    appDispatch({ type: "flashMessage", value: "Connected to Strava!" });
  }, []);

  // useEffect(() => {
  //   addFlashMessage("Connected to Strava!");
  // }, []);

  function changeStartDate(e) {
    setStartDate(function () {
      return e.target.value;
    });
    setStartEpoch(function () {
      return new Date(e.target.value).valueOf();
    });
  }

  function changeEndDate(e) {
    setEndDate(function () {
      return e.target.value;
    });
    setEndEpoch(function () {
      return new Date(e.target.value).valueOf();
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
          defaultValue={startDate}
          id=""
        />
        <input
          onChange={(e) => {
            changeEndDate(e);
          }}
          className="date-range__date box box--inset-tiny text text--normal text--tiny"
          type="date"
          name="end-date"
          defaultValue={endDate}
          id=""
        />
        <p
          style={infoStyle}
          className="date-range__info text text--tiny text--small text--center"
        >
          {info}
        </p>
        <button className="date-range__submit box box--tiny text text--tiny text--small">
          Get
        </button>
      </div>
    </>
  );
}

export default DateRange;
