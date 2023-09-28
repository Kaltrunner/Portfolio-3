import React, { useState, useEffect } from "react";
import "./clock.css";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = () => {
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    let ampm = h >= 12 ? "PM" : "AM"; // Determine AM or PM

    h = h % 12 || 12; // Convert 24-hour time to 12-hour time
    m = checkTime(m);
    // s = checkTime(s);

    return h + ":" + m  + " " + ampm;
  };

  const checkTime = (i) => {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  };

  return <div id="clock">{formattedTime()}</div>;
}


export default Clock;
