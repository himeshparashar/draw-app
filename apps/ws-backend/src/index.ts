import { WebSocketServer, WebSocket } from "ws";
import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config";
import { prisma } from "@repo/db/client";

const ws = new WebSocketServer({ port: 8089 });

interface User {
  ws: WebSocket;
  rooms: string[];
  userId: string;
}

const users: User[] = [];

function checkUser(token: string) : string | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    if(typeof decoded == "string"){
      return null;
    }
    if(!decoded || !decoded.userId){
      return null;
    }
    return decoded.userId;
  } catch (error) {
    console.error("Error verifying token:", error);
    return null;
  }
}

ws.on("connection", (ws,request) => {
  console.log("New WebSocket connection attempt");

  const url = request.url;
  if(!url){
    console.log("Connection rejected: No URL provided");
    return ws.close();
  }

  const queryParams = new URLSearchParams(url.split("?")[1]);
  const token = queryParams.get("token") || "";
  const userId = checkUser(token);
  if(!userId){
    console.log("Connection rejected: Invalid token");
    return ws.close();
  }

  users.push({
    userId: userId,
    rooms: [],
    ws
  })

  console.log(`User ${userId} connected successfully`);

  ws.on("message", async (message) => {
    try {
      const parsedData = JSON.parse(message as unknown as string);
      console.log(`Received message from user ${userId}:`, parsedData);

      if(parsedData.type == "join_room"){
        users.find(x => x.ws == ws)?.rooms.push(parsedData.roomId);
        console.log(`User ${userId} joined room ${parsedData.roomId}`);
      }

      if(parsedData.type == "leave_room"){
        const user = users.find(x => x.ws == ws);
        if(!user){
          console.log(`User ${userId} not found when trying to leave room`);
          return;
        }
        user.rooms = user?.rooms.filter(x => x !== parsedData.roomId);
        console.log(`User ${userId} left room ${parsedData.roomId}`);
      }

      if(parsedData.type == "send_message"){
        const roomId = parsedData.roomId;
        const message = parsedData.message;

        await prisma.chat.create({
          data: {
            message: message,
            roomId: roomId,
            userId: userId
          }
        })
        
        console.log(`Broadcasting message in room ${roomId} from user ${userId}`);
        users.forEach(user => {
          if(user.rooms.includes(roomId)){
            try {
              console.log(`Sending message to user ${user.userId}:`, message);
              user.ws.send(JSON.stringify({type: "chat", message: message, roomId: roomId}));
            } catch (error) {
              console.error(`Error sending message to user ${user.userId}:`, error);
            }
          }
        })
      }
    } catch (error) {
      console.error(`Error processing message from user ${userId}:`, error);
    }
  });

  ws.on("close", () => {
    console.log(`User ${userId} disconnected`);
    const index = users.findIndex(user => user.userId === userId);
    if (index > -1) {
      users.splice(index, 1);
    }
  });

  ws.on("error", (error) => {
    console.error(`WebSocket error for user ${userId}:`, error);
  });
});
