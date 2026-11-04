import { Button } from "@/components/ui/button";
import { signIn, signOut } from "@/auth";
import { redirect } from "next/dist/server/api-utils";
import { SessionProvider } from "next-auth/react";
import AuthenticationStatus from "./AuthenticationStatus";

async function handleSignIn() {
  "use server";
  await signIn("github");
}

async function handleSignOut() {
  "use server";
  await signOut();
}

export default function TestAuth() {
  return (
    <>
      <SessionProvider refetchInterval={1}>
        <AuthenticationStatus />
      </SessionProvider>
      <Button className={"w-fit"} onClick={handleSignIn}>
        Sign-In
      </Button>
      <Button className={"w-fit"} variant={"secondary"} onClick={handleSignOut}>
        Sign-Out
      </Button>
    </>
  );
}