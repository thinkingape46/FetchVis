import React, { useEffect } from "react";
import Axios from "axios";
import currentDate from "../scripts/currentDate";

async function connectStrava(e) {
  try {
    const response = await Axios.get("https://www.strava.com/api/v3/athlete", {
      headers: {
        authorization: "Bearer ACCESSTOKEN",
      },
    });
    console.log(`${response.data.firstname} ${response.data.lastname}`);
  } catch (e) {
    console.log("error");
  }
}

function DateRange() {
  return (
    <>
      <div className="date-range box">
        <input
          onChange={(e) => connectStrava(e)}
          className="date-range__date  box box--inset-tiny text text--normal text--tiny"
          type="date"
          name="start-date"
          defaultValue={currentDate()}
          id=""
        />
        <input
          className="date-range__date box box--inset-tiny text text--normal text--tiny"
          type="date"
          name="end-date"
          defaultValue={currentDate()}
          id=""
        />
      </div>
    </>
  );
}

export default DateRange;
