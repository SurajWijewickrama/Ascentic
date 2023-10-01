import React, { useEffect, useState } from "react";
import CanvasComponent from "./components/CanvasComponent";
import { Player } from "./entities/player";
import socket from "./sockets/sockets";

function App() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    socket.on("players", (backPlayers) => {
      console.log(backPlayers);
      const newPlayers = [];
      for (const id in backPlayers) {
        const bkplayer = backPlayers[id];
        newPlayers.push([
          id,
          new Player(
            bkplayer.name,
            bkplayer.position,
            bkplayer.rotation,
            bkplayer.color
          ),
        ]);
        //players.push([id, new Player(bkplayer.position, bkplayer.color)]);
      }
      setPlayers(newPlayers);
    });
  }, [socket]);

  return (
    <div className="container flex flex-col ">
      <div className="absolute flex bg-white bg-opacity-50 top-10 left-10 p-4 z-0">
        <h1>
          use A W S D to move around and Q E to do flips, click on the car to go
          turbo boost
        </h1>
      </div>
      <CanvasComponent players={players} />
    </div>
  );
}

export default App;
