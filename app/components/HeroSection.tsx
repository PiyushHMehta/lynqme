import React from 'react';
import { GlobeConnectivity } from './GlobeConnectivity';

const HeroSection = () => {
    return (
        <section className="flex flex-col lg:flex-row items-center justify-between bg-background text-foreground -pt-10 -mt-[10rem] px-6"> {/* Decreased top padding */}
            {/* Text Section */}
            <div className="max-w-md lg:max-w-xl mb-10 lg:mb-0 flex flex-col gap-4 justify-center mt-[9.5rem]"> {/* Added flex to center align */}
                <h1 className="text-4xl font-bold mb-2">
                    Empowering Connectivity
                </h1>

                <h2 className="text-3xl font-semibold mb-2">
                    Easy to Use
                </h2>

                <h2 className="text-3xl font-semibold mb-2">
                    Compact & Portable
                </h2>


                <h2 className="text-3xl font-semibold mb-2">
                    Reliable Performance
                </h2>

                <h2 className="text-3xl font-semibold mb-2">
                    Global Reach
                </h2>

                <h2 className="text-3xl font-semibold mb-2">
                    Extended Battery Life
                </h2>

                <h2 className="text-3xl font-semibold mb-2">
                    Comfortable Fit for Everyday Use
                </h2>
            </div>

            {/* Globe Component */}
            <div className="flex-shrink-0 w-full lg:w-1/2 flex items-center justify-center"> {/* Center the globe */}
                <GlobeConnectivity />
            </div>
        </section>
    );
};

export default HeroSection;
