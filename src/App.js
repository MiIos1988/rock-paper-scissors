import { useEffect, useState } from "react";
import "./App.css";
import paper from "./images/paper.png";
import rock from "./images/rock.png";
import scissors from "./images/scissors.png";

function App() {
  const [userImg, setUserImg] = useState(null);
  const [computerImg, setComputerImg] = useState(null);
  const [userPoints, setUserPoints] = useState(0);
  const [computerPoints, setComputerPoints] = useState(0);
  const [click, setClick] = useState(0);
  const [turnResult, setTurnResult] = useState("Let the game begin");
  const [finalResult, setFinalResult] = useState("Let' see who wins");

  const data = ["poper", "rock", "Scissors"];

  useEffect(() => {
    if (userImg === "poper" && computerImg === "rock") {
      setUserPoints((prev) => prev + 1);
      setTurnResult("User gets the point");
    }
    if (userImg === "rock" && computerImg === "poper") {
      setComputerPoints((prev) => prev + 1);
      setTurnResult("Computer gets the point");
    }
    if (userImg === "poper" && computerImg === "Scissors") {
      setComputerPoints((prev) => prev + 1);
      setTurnResult("Computer gets the point");
    }
    if (userImg === "Scissors" && computerImg === "poper") {
      setUserPoints((prev) => prev + 1);
      setTurnResult("User gets the point");
    }
    if (userImg === "Scissors" && computerImg === "rock") {
      setComputerPoints((prev) => prev + 1);
      setTurnResult("Computer gets the point");
    }
    if (userImg === "rock" && computerImg === "Scissors") {
      setUserPoints((prev) => prev + 1);
      setTurnResult("User gets the point");
    }
    if (
      (userImg === "poper" && computerImg === "poper") ||
      (userImg === "rock" && computerImg === "rock") ||
      (userImg === "Scissors" && computerImg === "Scissors")
    ) {
      setTurnResult("No one gets a point.");
    }
  }, [computerImg, userImg, click]);

  useEffect(() => {
    if (userPoints === 5) {
      setFinalResult("User Wins");
    }
    if (computerPoints === 5) {
      setFinalResult("Computer Wins");
    
    }
  }, [userPoints, computerPoints]);

  return (
    <div className="App">
      <h1>Rock-Paper-Scissors</h1>
      <div className="points">
        <div className="user">
          User Points <span>{userPoints}</span>
        </div>
        <div className="computer">
          Computer Points <br />
          <span>{computerPoints}</span>
        </div>
      </div>
      <div className="img">
        <img
          className="img1"
          src={
            userImg === null
              ? paper
              : userImg === "rock"
              ? rock
              : userImg === "Scissors"
              ? scissors
              : paper
          }
          alt="paper"
        />
        <img
          src={
            computerImg === null
              ? paper
              : computerImg === "rock"
              ? rock
              : computerImg === "Scissors"
              ? scissors
              : paper
          }
          alt="paper"
        />
      </div>
      <div className="allBtn">
        {data.map((a, id) => {
          return (
            <button
              key={id}
              onClick={() => {
                setClick((prev) => prev + 1);
                setUserImg(a);
                setComputerImg(data[Math.floor(Math.random() * 3)]);
              }}
            >
              {a}
            </button>
          );
        })}
      </div>
      <h4>Turn result: {turnResult}</h4>
      <h4>Final result: {finalResult}</h4>
    </div>
  );
}

export default App;
