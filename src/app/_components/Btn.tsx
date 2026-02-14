import { Button } from "@/components/ui/button";
import React from "react";

export const Btn = ({ text }: { text: string }) => {
  return (
    <Button
      size={"xs"}
      variant={"ghost"}
      className="cursor-pointer border-0  transition-all duration-500 ease-in-out"
    >
      {text}
    </Button>
  );
};
