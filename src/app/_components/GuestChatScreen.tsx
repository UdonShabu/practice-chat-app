"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import React, { useState } from "react";
import LoginDialog from "./LoginDialog";

type Message = {
  id: string;
  authorId: string;
  content: string;
};
const GuestChatScreen = () => {
  const [chatInput, setChatInput] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
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

  const { isSignedIn } = useUser();
  const handleSendMessage = () => {
    // setIsDialogOpen(true);
    if (!isSignedIn) {
      setIsDialogOpen(true);
    }
  };

  return (
    <div className="p-3 py-6 container mx-auto h-screen flex flex-col space-y-4">
      <nav className="flex">
        <h2>Guest</h2>
        <LoginDialog
          isDialogOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
        />
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
          onKeyUp={(e) => {
            if (e.key === "Enter") handleSendMessage();
          }}
        />
        <Button
          onClick={handleSendMessage}
          className="absolute right-0 top-1/2 -translate-y-1/2"
        >
          Send
        </Button>
      </footer>
    </div>
  );
};

export default GuestChatScreen;
