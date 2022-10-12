import { useState } from "react";
import "./App.css";
import paper from "./images/paper.png";
import rock from "./images/rock.png";
import scissors from "./images/scissors.png";

function App() {
  const [userImg, setUserImg] = useState("paper");

  const handleClick = (e) => {
    console.log(e);
  };

  return (
    <div className="App">
      <h1>Rock-Paper-Scissors</h1>
      <div className="points">
        <div className="user">
          User Points <span>0</span>
        </div>
        <div className="computer">
          Computer Points <span>0</span>
        </div>
      </div>
      <div className="img">
        <img
          className="img1"
          src={
            userImg === "paper"
              ? paper
              : userImg === "rock"
              ? rock
              : userImg === "Scissors"
              ? scissors
              : paper
          }
          alt="paper"
        />
        <img src={rock} alt="paper" />
      </div>
      <div className="allBtn">
        <button onClick={() => handleClick()}>Paper</button>
        <button onClick={() => handleClick()}>Rock</button>
        <button onClick={() => handleClick()}>Scissors</button>
      </div>
      <h4>Turn result:</h4>
      <h4>Final result:</h4>
    </div>
  );
}

export default App;
