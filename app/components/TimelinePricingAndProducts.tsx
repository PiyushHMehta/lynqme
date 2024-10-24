import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelinePricingAndProducts() {
    const data = [
        {
            title: "Classic",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-8">
                        The Classic model includes all necessary features for everyday use. Perfect for those who need a reliable device without extra distractions.
                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-4">
                        Price: $199
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="/images/classic-1.jpeg" // Replace with actual image path
                            alt="Classic model"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
                        />
                        <Image
                            src="/images/classic-2.jpeg" // Replace with actual image path
                            alt="Classic model in use"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "Travel Enthusiasts",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-8">
                        Designed to withstand harsh environments, this model is perfect for travel enthusiasts who need durability and reliability on the go.
                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-4">
                        Price: $249
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="/images/outdoors-1.jpeg" // Replace with actual image path
                            alt="Travel enthusiast model"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
                        />
                        <Image
                            src="/images/outdoors-2.jpeg" // Replace with actual image path
                            alt="Travel enthusiast model in action"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "For Children",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-8">
                        Built specifically for children, this model is designed to be useful only in necessary situations, minimizing distraction and preventing habit formation.
                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-4">
                        Price: $149
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="/images/children-1.jpeg" // Replace with actual image path
                            alt="Children's model"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
                        />
                        <Image
                            src="/images/children-2.jpeg" // Replace with actual image path
                            alt="Children's model in use"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "For the Elderly",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-8">
                        This model is designed for elderly users, featuring health parameter tracking and automatic SOS triggers in case of health deterioration.
                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-4">
                        Price: $229
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="/images/elders-1.jpeg" // Replace with actual image path
                            alt="Elderly model"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
                        />
                        <Image
                            src="/images/elders-2.jpeg" // Replace with actual image path
                            alt="Elderly model in use"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
                        />
                    </div>
                </div>
            ),
        }
    ];

    return (
        <div className="w-full -mt-[4rem]">
            <Timeline data={data} />
        </div>
    );
}
