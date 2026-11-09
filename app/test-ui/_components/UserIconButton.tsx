"use client";

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
import { Spinner } from "@/components/ui/spinner";

export default function UserIconButton() {
  const { data } = useSession();
  const profileImage = data?.user?.image;

  return (
    <>
      {data?.user ? (
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button className={"rounded-full p-0"} variant={"outline"} />
            }
          >
            <Avatar size="lg">
              <AvatarImage src={profileImage!}></AvatarImage>
              <AvatarFallback>
                <Spinner />
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className={"bg-secondary-foreground"}>
            <DropdownMenuItem variant="destructive" onClick={() => signOut()}>
              <LogInIcon />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Button
          className={"rounded-full p-0"}
          variant={"outline"}
          onClick={() => signIn()}
        >
          <Avatar size="lg">
            <AvatarFallback>
              <LogInIcon />
            </AvatarFallback>
          </Avatar>
        </Button>
      )}
    </>
  );
}
