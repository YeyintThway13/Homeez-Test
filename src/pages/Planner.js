import React from "react";
import FloorPlan from "../components/FloorPlan";
import Furniture from "../components/Furniture";
import TextOnFloorPlan from "../components/TextOnFloorPlan";

const Planner = () => {
  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      <Furniture />
      <FloorPlan />
      <TextOnFloorPlan />
    </div>
  );
};

export default Planner;
