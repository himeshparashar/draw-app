import express from "express";
import { JWT_SECRET } from "@repo/backend-common/config";
import jwt from "jsonwebtoken";
import { middleware } from "./middleware";
import { CreateRoomSchema, CreateUserSchema, SignInSchema } from "@repo/common/types";
import { prisma } from "@repo/db/client";

const app = express();

app.use(express.json());


app.post("/signup", async (req, res) => {
  const parsedData = CreateUserSchema.safeParse(req.body);
  if (!parsedData.success) {
    res.status(400).json({ message: "Invalid request body", error: parsedData.error });
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
    res.status(200).json({ message: "Signup successful", userId: user.id });
  } catch (error) {
    res.status(411).json({ message: "User already exists" });
  }
});

app.post("/signin", async (req, res) => {
  const parsedData = SignInSchema.safeParse(req.body);
  if (!parsedData.success) {
    res.status(400).json({ message: "Invalid request body", error: parsedData.error });
    return;
  }
  const user = await prisma.user.findUnique({
    where: {
      email: parsedData.data.username,
      password: parsedData.data.password,
    },
  });
  if (!user) {
    res.status(401).json({ message: "Invalid credentials" });
    return;
  }
  const token = jwt.sign({ userId: user.id }, JWT_SECRET);
  res.json({ token });
});

app.post("/room", middleware, async (req, res) => {
  const parsedData = CreateRoomSchema.safeParse(req.body);
  if (!parsedData.success) {
    res.status(400).json({ message: "Invalid request body", error: parsedData.error });
    return;
  }
  //@ts-ignore
  const userId = req.userId;
  try {
    const room = await prisma.room.create({
      data: {
        slug: parsedData.data.slug,
        adminId: userId,
      },
    });
    res.json({
      roomId: room.id
    })
  } catch (error) {
    res.status(400).json({ message: "Room already exists" });
  }

  
});


app.listen(3001, () => {
  console.log("Server is running on port 3000");
});
