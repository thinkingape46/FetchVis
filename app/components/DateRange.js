import React, { useEffect } from "react";

function DateRange() {
  return (
    <>
      <div className="date-range box">
        <input
          className="date-range__date box box--inset-tiny text text--medium text--tiny"
          type="date"
          name="start-date"
          id=""
        />
        <input
          className="date-range__date box box--inset-tiny text text--medium text--tiny"
          type="date"
          name="end-date"
          id=""
        />
      </div>
    </>
  );
}

export default DateRange;
