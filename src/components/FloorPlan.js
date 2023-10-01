import React from "react";
import floorplanData from "../floorplan-sample.json";
import getColorBasedOnId from "../utils/getColorBasedOnId";
import getZIndexBasedOnId from "../utils/getZIndexBasedOnId";

const FloorPlan = () => {
  return (
    <svg
      style={{
        marginLeft: "40px",
        marginTop: "20px",
        padding: "10px",
      }}
      width={900}
      height={800}
    >
      <defs>
        <pattern
          id="pattern1"
          height="100%"
          width="100%"
          patternContentUnits="objectBoundingBox"
        >
          <image
            height="1"
            width="1"
            preserveAspectRatio="none"
            href="https://api.homeez.com/v1/res?editor_res=Parquet.png"
          />
        </pattern>
      </defs>
      <defs>
        <pattern
          id="pattern2"
          height="100%"
          width="100%"
          patternContentUnits="objectBoundingBox"
        >
          <image
            height="1"
            width="1"
            preserveAspectRatio="none"
            href="https://api.homeez.com/v1/res?editor_res=Exisiting_Kitchen_Toilet_Tiles_Final.png"
          />
        </pattern>
      </defs>
      <defs>
        <pattern
          id="pattern3"
          height="100%"
          width="100%"
          patternContentUnits="objectBoundingBox"
        >
          <image
            height="1"
            width="1"
            preserveAspectRatio="none"
            href="https://www.forbes.com/advisor/wp-content/uploads/2021/03/featured-image-flooring-cost.jpg"
          />
        </pattern>
      </defs>
      <defs>
        <pattern
          id="pattern4"
          height="100%"
          width="100%"
          patternContentUnits="objectBoundingBox"
        >
          <image
            height="1"
            width="1"
            preserveAspectRatio="none"
            href="https://images.unsplash.com/photo-1520758594221-872948699332?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnJpY2slMjB3YWxsfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          />
        </pattern>
      </defs>
      <defs>
        <pattern
          id="pattern5"
          height="100%"
          width="100%"
          patternContentUnits="objectBoundingBox"
        >
          <image
            height="1"
            width="1"
            preserveAspectRatio="none"
            href="https://img.freepik.com/free-photo/dirty-pattern-paint-room-block_1203-5709.jpg?w=2000"
          />
        </pattern>
      </defs>

      {floorplanData.layout.map((data) => {
        if (data.tag === "polygon") {
          return (
            <polygon
              id={data.id}
              points={data.points}
              fill={
                data.id === "kitchen" || data.id === "bath/WC"
                  ? "url(#pattern2)"
                  : data.id === "household-shelter"
                  ? "url(#pattern3)"
                  : data.id === "aircon-ledge"
                  ? "url(#pattern5)"
                  : "url(#pattern1)"
              }
              style={{
                stroke: data.id === "household-shelter" ? "#0480a3" : "#ada8a8",
                strokeWidth: 10,
              }}
            />
          );
        }
        if (data.tag === "path") {
          return (
            <path
              id={data.id}
              d={data.d}
              style={{
                fill: data.id === "random-dome" ? "url(#pattern4)" : "#B6B4B0",
                opacity: data.id === "shelter-wall" ? 0 : 1,
                stroke: getColorBasedOnId(data.id) || "black",
                strokeWidth: data.id === "external-wall-windows" ? 10 : 10,
                zIndex: getZIndexBasedOnId(data.id),
              }}
            />
          );
        }
      })}
    </svg>
  );
};

export default FloorPlan;
