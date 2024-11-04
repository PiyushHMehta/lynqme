"use client";
import React, { useState } from "react";
import { MultiStepLoader as Loader } from "@/components/ui/multi-step-loader";
import { IconSquareRoundedX } from "@tabler/icons-react";

const loadingStates = [
    {
        text: "Introducing LynqMe: Your smart wearable companion.",
    },
    {
        text: "SOS Emergency Alert - Immediate help at the press of a button.",
    },
    {
        text: "Durable Build - Built to withstand tough environments.",
    },
    {
        text: "GPS Tracking - Stay connected even in remote areas.",
    },
    {
        text: "Long Battery Life - Extended use without frequent charging.",
    },
    {
        text: "Customizable Storage - Tailor it to your needs.",
    },
    {
        text: "Waterproof - Ready for any adventure, anywhere.",
    },
    {
        text: "LynqMe: Designed for safety, adventure, and connectivity.",
    },
];


export function MultiStepLoaderFeatureOverview() {
    const [loading, setLoading] = useState(false);
    return (
        <div className="w-full h-[60vh] flex items-center justify-center -mt-20 mb-[7rem]">
            {/* Core Loader Modal */}
            <Loader loadingStates={loadingStates} loading={loading} duration={900} />

            {/* The buttons are for demo only, remove it in your actual code ⬇️ */}
            <button
                onClick={() => setLoading(true)}
                className="bg-[#39C3EF] hover:bg-[#39C3EF]/90 text-black mx-auto text-sm md:text-base transition font-medium duration-200 h-10 rounded-lg px-8 flex items-center justify-center"
                style={{
                    boxShadow:
                        "0px -1px 0px 0px #ffffff40 inset, 0px 1px 0px 0px #ffffff40 inset",
                }}
            >
                Feature Overview
            </button>

            {loading && (
                <button
                    className="fixed top-20 right-20 text-black dark:text-white z-[1200]"
                    onClick={() => setLoading(false)}
                >
                    <IconSquareRoundedX className="h-10 w-10" />
                </button>
            )}
        </div>
    );
}
