import React from "react";
import { Spotlight } from "@/components/ui/spotlight";

export function SpotlightText() {
    return (
        <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
            <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
                <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 py-4">
                    Connecting Made Easy
                </h1>
                <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
                    Stay connected effortlessly with LynqMe—your portable solution designed to work in low network areas and ensure seamless communication, no matter where you are.
                </p>
                <h2 className="mt-6 text-3xl font-semibold text-center text-neutral-50">
                    Wearable Protection
                </h2>
                <p className="mt-2 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
                    LynqMe utilizes GSM and satellite technology with fallback mechanisms, providing reliable communication for your safety and peace of mind, even in remote locations.
                </p>
            </div>
        </div>
    );
}
