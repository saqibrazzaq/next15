import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routs";

const HomePage = async () => {
  const session = await auth();
  console.log(session);
  return (
    <div className="px-10 pt-[100px]">
      <h1 className="h1-bold">Welcome to the world of Next.js</h1>

      <form
        className="px-10 pt-[100px]"
        action={async () => {
          "use server";

          await signOut({ redirectTo: ROUTES.LOGIN });
        }}
      >
        <Button type="submit">Log out</Button>
      </form>
    </div>
  );
};

export default HomePage;
