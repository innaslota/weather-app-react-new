import React from "react";
import "./Row.css";
import Column1 from "./Column1";
import Column2 from "./Column2";
import Column3 from "./Column3";

export default function Row() {
  return (
    <div className="Row">
      <Column1 />
      <Column2 />
      <Column3 />
    </div>
  );
}
