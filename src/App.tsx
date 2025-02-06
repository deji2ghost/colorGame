import { useEffect, useState } from "react";
import "./App.css";
import {
  generateRandomColor,
  generateColorOptions,
} from "../public/colordata/colordata";

function App() {
  const [targetColor, setTargetColor] = useState("");
  const [colorOptions, setColorOptions] = useState<string[]>([]);
  const [status, setStatus] = useState("");
  const [score, setScore] = useState(0);

  useEffect(() => {
    startNewGame();
  }, []);

  const startNewGame = () => {
    const newTargetColor = generateRandomColor();
    setTargetColor(newTargetColor);
    setColorOptions(generateColorOptions(newTargetColor));
    setStatus("");
    setScore(0);
  };

  const handleGuess = (color: string) => {
    if (color === targetColor) {
      setStatus("Correct!");
      setScore(score + 1);
      const newTargetColor = generateRandomColor();
      setTargetColor(newTargetColor);
      setColorOptions(generateColorOptions(newTargetColor));
      // startNewGame();
    } else {
      setStatus("Wrong, try again!");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2 data-testid="gameInstructions">Guess the correct color!</h2>
      <div
        data-testid="colorBox"
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: targetColor,
          margin: "20px auto",
          border: "1px solid black",
        }}
      ></div>
      <div>
        {colorOptions.map((color) => (
          <button
            key={color}
            data-testid="colorOption"
            onClick={() => handleGuess(color)}
            style={{
              backgroundColor: color,
              padding: "10px",
              margin: "5px",
              border: "none",
              cursor: "pointer",
            }}
          ></button>
        ))}
      </div>
      <p data-testid="gameStatus">{status}</p>
      <p data-testid="score">Score: {score}</p>
      <button data-testid="newGameButton" onClick={startNewGame}>
        New Game
      </button>
    </div>
  );
}

export default App;
