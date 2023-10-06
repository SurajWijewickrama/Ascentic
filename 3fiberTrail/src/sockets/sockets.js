import * as io from "socket.io-client";

const socket = io.connect("https://hoverspace-production.up.railway.app");

export default socket;
