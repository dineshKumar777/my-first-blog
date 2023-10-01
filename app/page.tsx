"use client";
import { WarningTriangle } from "iconoir-react";
import Lottie from "lottie-react";
import animationData from "@/public/animations/computer-window.json";

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col gap-4 justify-center items-center">
      <WarningTriangle className="text-yellow-500 text-4xl" />
      <p className="text-2xl">Under construction!</p>
      <div className="flex flex-col w-full justify-center items-center">
        <Lottie
          animationData={animationData}
          className="flex justify-center items-center"
          loop={false}
        />
      </div>
    </div>
  );
};

export default Page;
