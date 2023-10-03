import * as io from "socket.io-client";

const socket = io.connect("139.162.9.96:3000");

export default socket;
