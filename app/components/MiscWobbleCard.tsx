"use client";
import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";

export function MiscWobbleCard() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto my-[3rem] w-[90%]">
            <WobbleCard
                containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[200px] lg:min-h-[250px] relative"
            >
                <div className="max-w-xs">
                    <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                        Community Guidelines
                    </h2>
                    <p className="mt-4 text-left text-base/6 text-neutral-200">
                        Follow our community guidelines to create a safe and respectful environment for everyone.
                    </p>
                </div>
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 min-h-[200px] lg:min-h-[250px] relative">
                <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                    Reporting Issues
                </h2>
                <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
                    Learn how to report any suspicious activities or content to help maintain a safe community.
                </p>
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[200px] lg:min-h-[250px] relative">
                <div className="max-w-sm">
                    <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                        Importance of Updates
                    </h2>
                    <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
                        Keep your device updated to ensure the latest security patches and features are applied.
                    </p>
                </div>
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 min-h-[200px] lg:min-h-[250px] relative">
                <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                    Safe Sharing Practices
                </h2>
                <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
                    Be cautious about sharing personal information online; always think before you click.
                </p>
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 lg:col-span-2 bg-green-800 min-h-[200px] lg:min-h-[250px] relative">
                <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                    Phishing Awareness
                </h2>
                <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
                    Understand common phishing tactics to protect yourself from fraudulent attempts.
                </p>
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 lg:col-span-2 bg-yellow-600 min-h-[200px] lg:min-h-[250px] relative">
                <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                    Emergency Contact Setup
                </h2>
                <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
                    Ensure you have emergency contacts easily accessible on your device for quick communication during critical situations.
                </p>
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 min-h-[200px] lg:min-h-[250px] relative">
                <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                    Understanding Permissions
                </h2>
                <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
                    Review app permissions regularly to ensure you only grant access to necessary features.
                </p>
            </WobbleCard>
        </div>
    );
}
