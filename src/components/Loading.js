import React from "react";

export default function Loading() {
  return (
    <>
      <div className="loading">
        <i style={{ color: "black" }} className="fa fa-spinner fa-spin"></i>
        <span> Loading...</span>
      </div>
    </>
  );
}
