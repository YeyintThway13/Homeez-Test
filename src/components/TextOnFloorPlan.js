import React from "react";

const TextOnFloorPlan = () => {
  return (
    <div style={{ position: "absolute", top: 0 }}>
      <p
        style={{
          position: "absolute",
          top: 110,
          left: 120,
          fontSize: "16px",
          fontWeight: "bold",
          color: "#111",
        }}
      >
        Living Room
      </p>
      <p
        style={{
          position: "absolute",
          top: 110,
          left: 440,
          fontSize: "16px",
          fontWeight: "bold",
          color: "#111",
        }}
      >
        Bed Room
      </p>
      <p
        style={{
          position: "absolute",
          top: 460,
          left: 440,
          fontSize: "16px",
          fontWeight: "bold",
          color: "#111",
        }}
      >
        Bath/WC
      </p>
      <p
        style={{
          position: "absolute",
          top: 520,
          left: 625,
          fontSize: "16px",
          fontWeight: "bold",
          color: "#111",
          writingMode: "tb-rl",
        }}
      >
        Aircon-ledge
      </p>
      <p
        style={{
          position: "absolute",
          top: 560,
          left: 120,
          fontSize: "16px",
          fontWeight: "bold",
          color: "#111",
        }}
      >
        Household Shelter
      </p>
      <p
        style={{
          position: "absolute",
          top: 660,
          left: 540,
          fontSize: "16px",
          fontWeight: "bold",
          color: "#111",
        }}
      >
        Kitchen
      </p>
    </div>
  );
};

export default TextOnFloorPlan;
