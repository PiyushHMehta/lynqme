import React from "react";
import { FlipWords } from "@/components/ui/flip-words";

export function SafetyAndSecurity() {
  const words = [
    "secure",
    "private",
    "protected",
    "safe",
  ];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Your data is
        <FlipWords words={words} /> <br />
        with LynqMe's advanced security.
      </div>
    </div>
  );
}
