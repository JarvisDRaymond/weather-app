import { useState, useEffect } from "react";
const Clock = () => {
  const [time, setTime] = useState("");

  function tick() {
    const current = new Date();
    // By default US English uses 12hr time with AM/PM
    const localTime = current.toLocaleTimeString("en-US");
    setTime(localTime);
  }

  setInterval(tick, 1000);
  return <span className='time'>{time}</span>;
};
export default Clock;
