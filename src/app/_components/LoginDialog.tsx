import React, { Ref, useEffect, useRef } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { SignInButton } from "@clerk/nextjs";

type LoginDialogProps = {
  isDialogOpen: boolean;
  onClose: () => void;
};
const LoginDialog = ({ isDialogOpen, onClose }: LoginDialogProps) => {
  const tRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isDialogOpen && tRef.current) {
      tRef.current.focus();
    }
  }, [isDialogOpen]);
  return (
    <div>
      <AlertDialog
        open={isDialogOpen}
        onOpenChange={() => isDialogOpen && onClose()}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Not logged in?</AlertDialogTitle>
            <AlertDialogDescription>Please login</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <SignInButton>
              <AlertDialogAction ref={tRef}>Sign in</AlertDialogAction>
            </SignInButton>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default LoginDialog;
