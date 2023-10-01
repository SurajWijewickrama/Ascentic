const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = {
  origin: "https://hoverspace-production.up.railway.app",
  methods: ["GET", "POST"],
  credentials: true,
  exposedHeaders: ["Content-Length"],
};

app.use(cors(corsOptions));
const http = require("http");

const { Server } = require("socket.io");

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const players = {};
const speed = 0.5;

try {
  io.on("connection", (socket) => {
    console.log("A user connected", socket.id);
    players[socket.id] = {
      name: "Unknown",
      position: [10 * Math.random(), 1.5, 10 * Math.random()],
      rotation: [0, Math.random(), 0],
      color: "#ffffff",
    };

    console.log(players);

    socket.on("connect", (data) => {
      io.emit("connect_user", data);
    });

    socket.on("keyDown", (key) => {
      const car = players[socket.id];
      switch (key) {
        case "KeyW":
          car.position[2] += Math.cos(car.rotation[1]) * speed;
          car.position[0] += Math.sin(car.rotation[1]) * speed;
          break;
        case "KeyS":
          car.position[2] -= Math.cos(car.rotation[1]) * speed;
          car.position[0] -= Math.sin(car.rotation[1]) * speed;
          break;
        case "KeyA":
          car.rotation[1] += speed * 0.05;
          break;
        case "KeyD":
          car.rotation[1] -= speed * 0.05;
      }
    });

    socket.on("colorUpdated", (color) => {
      players[socket.id].color = color;
    });

    socket.on("disconnect", (reason) => {
      console.log(reason);
      delete players[socket.id];
    });
  });

  setInterval(() => {
    io.emit("players", players);
  }, 15);
} catch (error) {
  console.log(error);
}

server.listen(3000, () => {
  console.log("Server is running on port 3001");
});
