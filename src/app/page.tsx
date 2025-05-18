import Image from "next/image";
import GuestChatScreen from "./_components/GuestChatScreen";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  UserButton,
} from "@clerk/nextjs";
import ChatScreen from "./_components/ChatScreen";

export default function Home() {
  return (
    <div className="min-h-screen">
      <SignedIn>
        <ChatScreen />
      </SignedIn>
      <SignedOut>
        <GuestChatScreen />
      </SignedOut>
    </div>
  );
}
