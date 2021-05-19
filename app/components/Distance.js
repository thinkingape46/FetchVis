import React from "react";
import ContainerDistance from "./ContainerDistance";

function Distance() {
  return (
    <>
      <div className="distance box">
        <div className="distance__total distance__meter text box--small">
          1000 km
        </div>
        <div className="distance__split">
          <ContainerDistance>
            <p className="distance__split__cat__text text">750 km</p>
            <img
              className="distance__split__cat__logo"
              src="images/cycling_logo.svg"
              alt=""
            />
          </ContainerDistance>

          <ContainerDistance>
            <p className="distance__split__cat__text text">200 km</p>
            <img
              className="distance__split__cat__logo"
              src="images/running_logo.svg"
              alt=""
            />
          </ContainerDistance>

          <ContainerDistance>
            <p className="distance__split__cat__text text">200 km</p>
            <img
              className="distance__split__cat__logo"
              src="images/swimming_logo.svg"
              alt=""
            />
          </ContainerDistance>
        </div>
      </div>
    </>
  );
}

export default Distance;
