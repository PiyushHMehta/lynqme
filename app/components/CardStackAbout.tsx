"use client";
import { CardStack } from "@/components/ui/card-stack";
import { cn } from "@/lib/utils";

export function CardStackAbout() {
    return (
        <div className="h-[40rem] flex items-center justify-center w-full gap-8 mx-auto">
            <div className="w-full flex flex-col items-center justify-center gap-10">
                <h2 className="text-4xl font-bold text-center mb-4">Maintenance</h2>
                <CardStack items={MAINTENANCE_CARDS} />
            </div>
            <div className="w-full flex flex-col items-center justify-center gap-10">
                <h2 className="text-4xl font-bold text-center mb-4">Troubleshooting</h2>
                <CardStack items={TROUBLESHOOTING_CARDS} />
            </div>
        </div>
    );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <span
            className={cn(
                "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
                className
            )}
        >
            {children}
        </span>
    );
};

// Maintenance Cards
const MAINTENANCE_CARDS = [
    {
        id: 0,
        name: "Cleaning",
        designation: "Best Practices",
        content: (
            <p>
                To keep your device clean, use recommended cleaning products and{" "}
                <Highlight>clean after outdoor use</Highlight>. Avoid using harsh
                chemicals.
            </p>
        ),
    },
    {
        id: 1,
        name: "Storage",
        designation: "Proper Storage",
        content: (
            <p>
                Store the device in a <Highlight>cool, dry place</Highlight> and out of direct sunlight. When traveling, use a protective case.
            </p>
        ),
    },
    {
        id: 2,
        name: "Care Tips",
        designation: "Device Handling",
        content: (
            <p>
                Handle the device carefully to avoid damage and{" "}
                <Highlight>check for software updates</Highlight> regularly to maintain performance.
            </p>
        ),
    },
];

// Troubleshooting Cards
const TROUBLESHOOTING_CARDS = [
    {
        id: 0,
        name: "Device Not Turning On",
        designation: "Common Issue",
        content: (
            <p>
                If the device won't power on, ensure it's charged. <Highlight>Try resetting the device</Highlight> if needed.
            </p>
        ),
    },
    {
        id: 1,
        name: "SOS Feature Not Working",
        designation: "Troubleshooting",
        content: (
            <p>
                Ensure the <Highlight>SOS feature is set up correctly</Highlight>. Check common issues like incorrect setup or network problems.
            </p>
        ),
    },
    {
        id: 2,
        name: "Connectivity Issues",
        designation: "Troubleshooting",
        content: (
            <p>
                If experiencing connectivity issues, <Highlight>check the network settings</Highlight> and reset network connections if needed.
            </p>
        ),
    },
    {
        id: 3,
        name: "Battery Issues",
        designation: "Troubleshooting",
        content: (
            <p>
                For battery-related issues, such as quick drainage or charging problems, <Highlight>ensure proper charging habits</Highlight> and check the charger.
            </p>
        ),
    },
];
