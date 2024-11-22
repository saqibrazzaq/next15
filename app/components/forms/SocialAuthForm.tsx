"use client";

import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routs";
import { toast } from "@/hooks/use-toast";
import { signIn } from "next-auth/react";
import Image from "next/image";
import React from "react";

const SocialAuthForm = () => {
  const buttonClass =
    "background-dark400_light900 body-medium text-dark200_light800 rounded-2 min-h-12 flex-1 px-4 py-3.5";
  const handleSignIn = async (provider: "github" | "google") => {
    try {
      await signIn(provider, {
        redirectTo: ROUTES.HOME,
      });
    } catch (error) {
      console.log(error);

      toast({
        title: "Login failed",
        description: error instanceof Error ? error.message : "An error occured during login",
        variant: "destructive",
      });
    }
  };
  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button
        className={buttonClass}
        onClick={() => {
          handleSignIn("github");
        }}
      >
        <Image
          src={"/icons/github.svg"}
          alt="GitHub logo"
          width={20}
          height={20}
          className="invert-colors mr-2.5 object-contain"
        />
        <span>Log in with GitHub</span>
      </Button>
      <Button className={buttonClass} onClick={() => handleSignIn("google")}>
        <Image
          src={"/icons/google.svg"}
          alt="Google logo"
          width={20}
          height={20}
          className="mr-2.5 object-contain"
        />
        <span>Log in with Google</span>
      </Button>
    </div>
  );
};

export default SocialAuthForm;