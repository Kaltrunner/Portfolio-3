import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Splash from "./assets/Splash/Splash";
import About from "./assets/About/About";
import Work from "./assets/Work/Work";
import gsap from "gsap";
import "./App.css";

function App() {
  useEffect(() => {
    const squareContainer = document.getElementById("square-container");
    const squareSize = 100;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const numCols = Math.ceil(screenWidth / squareSize);
    const numRows = Math.ceil(screenHeight / squareSize);

    const numSquares = numCols * numRows;

    squareContainer.style.width = `${screenWidth}px`; // Set container width to screen width
    squareContainer.style.height = `${screenHeight}px`; // Set container height to screen height

    let squares = [];

    function createSquares() {
      for (let i = 0; i < numSquares; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        squareContainer.appendChild(square);
        squares.push(square);
      }
    }

    function animateSquares() {
      gsap.fromTo(
        squares,
        {
          opacity: 1, // Start at full opacity
        },
        {
          opacity: 0, // Fade to zero opacity
          delay: 0.5,
          duration: 0.5,
          stagger: {
            each: 0.025,
            from: "random",
          },
          onComplete: () => {
            // Optionally, you can remove the squares from the DOM after the animation
            squares.forEach((square) => square.remove());
          },
        }
      );
    }

    createSquares();
    animateSquares();
  }, []);

  return (
    <>
      <div id="square-container"></div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="about" element={<About />} />
          <Route path="work" element={<Work />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
