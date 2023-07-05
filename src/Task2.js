import "./Task2.css";
import { useState } from "react";
import Card from "./Card";
import day from "./imgs/day.png";
import night from "./imgs/night.png";

const Task2 = () => {
  const [cardTitle, setCardTitle] = useState("");
  const [img, setCardimg] = useState("");
  const [timePeriod, setTimePeriod] = useState("");
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  const getCurrentTimePeriod = () => {
    setIsButtonPressed(true);
    const currentTime = new Date();
    const hours = currentTime.getHours();

    if (hours >= 0 && hours < 12) {
      setTimePeriod("AM");
    } else {
      setTimePeriod("PM");
    }
  };

  return (
    <div className="task2">
      <div className="row">
        <h5 className="btn-label">
          Press button to reveal if it is day or night
        </h5>
        <button onClick={getCurrentTimePeriod} className="day-night-btn">
          Night/Day
        </button>
        {isButtonPressed ? (
          <div>
            {timePeriod === "AM" ? (
              <div>
                <Card img={day} cardTitle={"Day"} />
              </div>
            ) : (
              <div>
                <Card img={night} cardTitle={"Night"} />
              </div>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Task2;
