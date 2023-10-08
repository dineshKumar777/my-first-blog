"use client";
import { WarningTriangle } from "iconoir-react";
import Lottie from "lottie-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import animationData from "@/public/animations/profile.json";

const Page = () => {
  return (
    <main>
      <div className="bg-circles"></div>
      <div
        className={cn(
          "flex justify-center items-center flex-col",
          "font-headings h-screen text-center space-y-6 lg:space-y-8",
        )}>
        <Lottie
          className={cn("w-60 lg:w-60")}
          animationData={animationData}
          loop={true}
        />
        <p className="max-w-[65ch] text-fluid-1 font-bold lg:text-fluid-2 lg:font-medium">
          I’m a Software developer with a habbit of getting things done in a
          clean, minimalist and efficient way.
        </p>
      </div>
    </main>
  );
};

export default Page;
