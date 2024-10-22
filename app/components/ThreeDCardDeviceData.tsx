"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

export function ThreeDCardDeviceData() {
    // Hard-coded device data
    const deviceData = {
        batteryLife: "85%",
        location: "123 Main St, New York, NY",
        storageUsed: "1.4 GB",
        storageTotal: "2 GB",
        contacts: [
            { name: "John Doe", type: "Emergency" },
            { name: "Jane Smith", type: "Normal" },
            { name: "Alice Johnson", type: "Normal" },
            { name: "Bob Williams", type: "Normal" },
            { name: "Police", type: "SOS" },
        ],
        upToDate: true, // Device software update status
    };

    return (
        <CardContainer className="inter-var">
            <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                    Device Information
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                    Check your device's current status and details below.
                </CardItem>

                <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                        src="/images/map.webp"
                        height="1000"
                        width="1000"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                </CardItem>

                <CardItem translateZ="80" className="text-neutral-600 dark:text-white mt-4">
                    <strong>Battery Life:</strong> {deviceData.batteryLife}
                </CardItem>
                <CardItem translateZ="80" className="text-neutral-600 dark:text-white mt-2">
                    <strong>Location:</strong> {deviceData.location}
                </CardItem>
                <CardItem translateZ="80" className="text-neutral-600 dark:text-white mt-2">
                    <strong>Storage Used:</strong> {deviceData.storageUsed} / {deviceData.storageTotal}
                </CardItem>
                <CardItem translateZ="80" className="text-neutral-600 dark:text-white mt-2">
                    <strong>Software Update:</strong> {deviceData.upToDate ? "Up to date" : "Update available"}
                </CardItem>

                <CardItem translateZ="80" className="text-neutral-600 dark:text-white mt-4">
                    <strong>Contacts:</strong>
                    <ul className="list-disc list-inside mt-2">
                        {deviceData.contacts.map((contact, index) => (
                            <li key={index}>
                                {contact.name} ({contact.type})
                            </li>
                        ))}
                    </ul>
                </CardItem>

                <div className="flex justify-between items-center mt-6">
                    <CardItem
                        translateZ={20}
                        as={Link}
                        href="/"
                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                        Check Status →
                    </CardItem>
                    <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                        Sync Device
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    );
}
