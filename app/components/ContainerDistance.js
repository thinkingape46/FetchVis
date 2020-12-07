import React, { useEffect } from "react";

function ContainerDistance(props) {
  return (
    <div className="distance__split__cat distance__meter box--small">
      {props.children}
    </div>
  );
}

export default ContainerDistance;
