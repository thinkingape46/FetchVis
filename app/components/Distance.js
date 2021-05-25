import React from "react";
import { useSelector } from "react-redux";

// COMPONENTS IMPORT
import ContainerDistance from "./ContainerDistance";

function Distance() {
  const ridesDistance = useSelector(
    (store) => store.activitiesReducer.ridesDistance
  );
  const runsDistance = useSelector(
    (store) => store.activitiesReducer.runsDistance
  );
  const swimsDistance = useSelector(
    (store) => store.activitiesReducer.swimsDistance
  );
  return (
    <>
      <div className="distance box">
        <div className="distance__total distance__meter text box--small">
          {ridesDistance + runsDistance + swimsDistance}&nbsp;km
        </div>
        <div className="distance__split">
          <ContainerDistance>
            <p className="distance__split__cat__text text">
              {ridesDistance}&nbsp;km
            </p>
            <img
              className="distance__split__cat__logo"
              src="images/cycling_logo.svg"
              alt=""
            />
          </ContainerDistance>

          <ContainerDistance>
            <p className="distance__split__cat__text text">
              {runsDistance}&nbsp;km
            </p>
            <img
              className="distance__split__cat__logo"
              src="images/running_logo.svg"
              alt=""
            />
          </ContainerDistance>

          <ContainerDistance>
            <p className="distance__split__cat__text text">
              {swimsDistance}&nbsp;km
            </p>
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
