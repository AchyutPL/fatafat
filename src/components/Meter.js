import React, { useEffect, useRef, useState } from "react";

export default function Meter() {
  const [hours, sethours] = useState(0);
  const [minutes, setminutes] = useState(0);
  const [seconds, setseconds] = useState(0);

  let interval = useRef();
  let startTimer = () => {
    setInterval(() => {
      let newDate = "17 June 2021";

      let currentDate = new Date();

      let nayaDate = new Date(newDate);

      let totalseconds = (nayaDate - currentDate) / 1000;

      let showhours = Math.floor((totalseconds / 3600) % 24);
      let showminutes = Math.floor((totalseconds / 60) % 60);
      let showseconds = Math.floor(totalseconds % 60);

      sethours(showhours);
      setminutes(showminutes);
      setseconds(showseconds);
    }, 1000);
  };
  useEffect(() => {
    startTimer();
  }, []);
  return (
    <div className="metercontainer">
      <div class="styling" id="hours">
        <span className="countdown" id="contenthours">
          {hours}
        </span>
      </div>
      <div style={{ color: "white", fontSize: "20px" }}>:</div>
      <div class="styling" id="minutes">
        <span className="countdown" id="contentminutes">
          {minutes}
        </span>
      </div>
      <div style={{ color: "white", fontSize: "20px" }}>:</div>
      <div class="styling" id="seconds">
        <span className="countdown" id="contentseconds">
          {seconds}
        </span>
      </div>
    </div>
  );
}
