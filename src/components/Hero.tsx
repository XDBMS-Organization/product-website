import React from "react";
import heroBg from "@/assets/hero-bg.jpg";
import CodeExample from "@/components/CodeExample";
import xdbOverview from "@/assets/xdb_overview.svg";

const Hero = () => {
    return (
        <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-hero">
            {/* Background */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `url(${heroBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />

            <div className="container relative z-10 px-4 py-20 md:py-32">
                <div className="mx-auto max-w-7xl flex flex-col items-center gap-12">
                    {/* Headline */}
                    <h1 className="text-center text-5xl md:text-7xl font-bold tracking-tight leading-tight max-w-5xl">
                        <span className="bg-gradient-primary bg-clip-text text-transparent">
                            XDB{" "}
                        </span>
                        – The Compliant Optimization Layer
                    </h1>

                    <div className="space-y-4 text-center max-w-3xl">
                        <p className="text-lg md:text-xl text-muted-foreground">
                            Secure your data pipelines and infrastructure. XDB boosts performance, cuts costs,
                            and automatically enforces compliance policies without exposing your data
                        </p>
                    </div>

                    {/* Product visual */}
                    <img
                        src={xdbOverview}
                        alt="XDB overview"
                        className="w-full max-w-6xl"
                    />

                    {/* Supporting text
                    <div className="space-y-4 text-center max-w-3xl">
                        <p className="text-sm md:text-base text-muted-foreground">
                            Connect warehouses, lakes, and operational stores, then query them
                            as one. From SQL or directly from your Python notebooks.
                        </p>
                    </div>*/}

                    {/* Optional: code example later
          <div className="w-full max-w-4xl">
            <CodeExample />
          </div>
          */}
                </div>
            </div>
        </section>
    );
};

export default Hero;
