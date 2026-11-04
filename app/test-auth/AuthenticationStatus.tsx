"use client";

import { useSession } from "next-auth/react";

export default function AuthenticationStatus() {
  const { status } = useSession();

  return <h1>Authetication Status: {status}</h1>;
}
