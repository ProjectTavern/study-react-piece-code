import { useEffect, useState } from 'react';

const Timer = ({ initialTotalSeconds }) => {
  const [hour, setHour] = useState(Math.floor(initialTotalSeconds / 3600));
  const [minute, setMinute] = useState(Math.floor((initialTotalSeconds % 3600) / 60));
  const [second, setSecond] = useState(initialTotalSeconds % 60);

  useEffect(() => {
    const id = setInterval(() => {
      if (second) {
        setSecond(second - 1);
      } else if (minute) {
        setMinute(minute - 1);
        setSecond(59);
      } else if (hour) {
        setHour(hour - 1);
        setMinute(59);
        setSecond(59);
      }
    }, 1000);

    return () => clearInterval(id);
  }, [hour, minute, second]);

  return <div>{hour} : {minute} : {second}</div>
}

export default Timer;

// Error