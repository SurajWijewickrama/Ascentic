import * as io from "socket.io-client";

const socket = io.connect("https://hoverspace-production.up.railway.app/:3000");

export default socket;
