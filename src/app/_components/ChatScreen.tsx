"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

type Message = {
  id: string;
  authorId: string;
  content: string;
};
const ChatScreen = () => {
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      authorId: "user1",
      content: "nani",
    },
    {
      id: "2",
      authorId: "user2",
      content: "Why",
    },
  ]);

  return (
    <div className="p-3 py-6 container mx-auto h-screen flex flex-col space-y-4">
      <nav className="flex">
        <h2>User btn</h2>
        <p>Name</p>
      </nav>

      <section className="flex-1 space-y-3">
        {messages.map((msg) => (
          <p
            key={msg.id}
            className={cn(
              " p-2 rounded-full w-fit",
              msg.authorId === "user1" ? "bg-slate-200" : "bg-pink-200 ml-auto"
            )}
          >
            {msg.content}{" "}
          </p>
        ))}
      </section>
      <footer className="relative">
        <input
          type="text"
          placeholder="type a msg.."
          value={chatInput}
          onChange={(e) => setChatInput(e.target.value)}
          className="p-2 w-full"
        />
        <Button className="absolute right-0 top-1/2 -translate-y-1/2">
          Send
        </Button>
      </footer>
    </div>
  );
};

export default ChatScreen;
