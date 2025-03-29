import express from "express";
import { JWT_SECRET } from "@repo/backend-common/config";
import jwt from "jsonwebtoken";
import { middleware } from "./middleware";
import { CreateRoomSchema, CreateUserSchema } from "@repo/common/types";
import { prisma } from "@repo/db/client";

const app = express();


app.post("/signup", async (req, res) => {
  const parsedData = CreateUserSchema.safeParse(req.body);
  if (!parsedData.success) {
    res.status(400).json({ message: "Invalid request body" });
    return;
  }
  try {
    const user = await prisma.user.create({
      data: {
        email: parsedData.data?.username,
      password: parsedData.data.password,
      name: parsedData.data.name,
      },
    });
    res.status(200).json({ message: "Signup successful", user });
  } catch (error) {
    res.status(411).json({ message: "User already exists" });
  }
});

app.post("/signin", (req, res) => {
  const userId = 1;
  const token = jwt.sign({ userId }, JWT_SECRET);
  res.json({ token });
});

app.post("/room", middleware, (req, res) => {
  //db call

  const data = CreateRoomSchema.safeParse(req.body);
  if (!data.success) {
    res.status(400).json({ message: "Invalid request body" });
  }

  res.json({
    roomId: 1
  })
  
});


app.listen(3001, () => {
  console.log("Server is running on port 3000");
});
