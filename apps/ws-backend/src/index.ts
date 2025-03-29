import { WebSocketServer } from "ws";
import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (ws,request) => {

  const url = request.url;
  if(!url){
    return ws.close();
  }

  const queryParams = new URLSearchParams(url.split("?")[1]);
  const token = queryParams.get("token") || "";
  const decoded = jwt.verify(token, JWT_SECRET);

  if(typeof decoded == "string"){
    return ws.close();
  }

  if(!decoded || !decoded.userId){
    return ws.close();
  }

  

  // const userId = decoded.userId;


  ws.on("message", (message) => {
    ws.send('pong');
  });
});
