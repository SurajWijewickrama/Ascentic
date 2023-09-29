import React from "react";
import CanvasComponent from "./components/CanvasComponent";

function App() {
  return (
    <div className="container flex flex-col ">
      <div className="absolute flex bg-white bg-opacity-50 top-10 left-10 p-4 z-0">
        <h1>
          use A W S D to move around and Q E to do flips, click on the car to go
          turbo boost
        </h1>
      </div>
      <CanvasComponent />
    </div>
  );
}

export default App;
