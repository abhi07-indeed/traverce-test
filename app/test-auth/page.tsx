import { Button } from "@/components/ui/button";
import { signIn, signOut, auth } from "@/auth";
import { SessionProvider } from "next-auth/react";
import AuthenticationStatus from "./AuthenticationStatus";

async function handleSignIn() {
  "use server";
  await signIn("github");
}

async function handleSignOut() {
  "use server";
  await signOut({ redirectTo: "/" });
}

export default async function TestAuth() {
  const session = await auth();
  return (
    <>
    <h1>{
        session?.user?.email ?? "Nothing"
      }</h1>
      <SessionProvider>
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
