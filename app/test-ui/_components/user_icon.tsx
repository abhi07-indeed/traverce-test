"use client";

// TODO: fix dropdown showing when button is login

import { useSession, signIn, signOut } from "next-auth/react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import { LogInIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function UserAvatar() {
  const { data, status } = useSession();
  const profileImage = data?.user?.image;

  function handleClick() {
    if (status !== "authenticated") {
      signIn();
    }
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button
              className={"rounded-full p-0"}
              variant={"outline"}
              onClick={handleClick}
              type="submit"
            />
          }
        >
          {profileImage ? (
            <Avatar size="lg">
              <AvatarImage src={profileImage}></AvatarImage>
              <AvatarFallback>u</AvatarFallback>
            </Avatar>
          ) : (
            <Avatar size="lg">
              <AvatarFallback>
                {" "}
                <LogInIcon />{" "}
              </AvatarFallback>
            </Avatar>
          )}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuGroup>
            <DropdownMenuItem variant="destructive" onClick={() => signOut()}>
              <LogInIcon />
              Logout
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
