"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { UserButton, useUser } from "@clerk/nextjs";
import { useMutation, useQuery } from "convex/react";
import React, { useEffect, useState } from "react";
import { api } from "../../../convex/_generated/api";
import { Id } from "../../../convex/_generated/dataModel";

const ChatScreen = () => {
  const [chatInput, setChatInput] = useState("");
  const messages = useQuery(api.messages.getMessages);
  const sendMessage = useMutation(api.messages.sendMessage);
  const { user } = useUser();

  const handleSendMessage = () => {
    sendMessage({
      content: chatInput,
    });
    setChatInput("");
  };

  return (
    <div className="p-3 py-6 container mx-auto h-screen flex flex-col space-y-4">
      <nav className="flex items-end">
        <UserButton />
      </nav>

      <section className="flex-1 space-y-3">
        {messages?.map((msg) => (
          <p
            key={msg._id}
            className={cn(
              " p-2 rounded-full w-fit",
              msg.senderId === user?.id ? "bg-pink-200 ml-auto" : "bg-slate-200"
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

export default ChatScreen;
