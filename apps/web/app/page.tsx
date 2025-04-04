"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [roomId, setRoomId] = useState("");
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="max-w-md w-full space-y-4 p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
          Welcome to Chat Room
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300">
          Enter a room ID to join the conversation
        </p>
        
        <div className="space-y-2">
          <input 
            type="text"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            placeholder="Enter Room ID"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          />
          <button 
            onClick={() => {
              if (roomId.trim()) {
                router.push(`/chats/${roomId}`);
              }
            }}
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold rounded-md transition duration-200"
            disabled={!roomId.trim()}
          >
            Join Room
          </button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-600 dark:text-gray-300">Don&apos;t have a room ID?</p>
          <button 
            onClick={() => router.push('/create-room')}
            className="mt-2 py-2 px-4 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
          >
            Create New Room
          </button>
        </div>
      </div>
    </div>
  );
}
