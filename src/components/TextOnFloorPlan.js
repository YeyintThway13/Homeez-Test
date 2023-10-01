import React from "react";

const TextOnFloorPlan = () => {
  return (
    <div style={{ position: "absolute", top: 0 }}>
      <p
        style={{
          position: "absolute",
          top: 70,
          left: 80,
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
          top: 70,
          left: 410,
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
          top: 430,
          left: 410,
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
          top: 470,
          left: 610,
          fontSize: "16px",
          fontWeight: "bold",
          color: "#111",
          writingMode: "tb-rl",
        }}
      >
        Aircon Ledge
      </p>
      <p
        style={{
          position: "absolute",
          top: 520,
          left: 80,
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
          top: 620,
          left: 480,
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
