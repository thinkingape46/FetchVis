import React, { useEffect } from "react";
import currentDate from "../scripts/currentDate";

function DateRange() {
  return (
    <>
      <div className="date-range box">
        <input
          onChange={(e) => {
            console.log(e.target.value);
          }}
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
