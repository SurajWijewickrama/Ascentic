import * as io from "socket.io-client";

const socket = io("https://hoverspace-server-production.up.railway.app/", {
  withCredentials: true,
  extraHeaders: {
    "my-custom-header": "abcd"
  }
});

export default socket;
