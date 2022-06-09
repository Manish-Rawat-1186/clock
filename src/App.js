import React, { useEffect, useState } from "react";
import './index.css';

const App = () => {
  
    const [time, setTime] = useState(new Date())

    useEffect(() => {
      const timer = setInterval(() => {
          setTime(new Date())
      }, 1000);
    
      return () => {
        clearInterval(timer);
      }
    }, [])
    

    return (
    <div className="box">
        <div className="date">
            <h5>{time.toDateString()}</h5>
        </div>
        <div className="item">
            <h4 className="item1">{ time.getHours() > 12 ? time.getHours() -12 : time.getHours() }  :  { time.getMinutes() } {time.getHours > 12 ? 'PM' : 'AM'  } </h4>
        </div>
        <div className="item">
            <h1  className="item3" >{ time.getSeconds() } seconds</h1>
        </div>
    
    </div>)
};

export default App;
