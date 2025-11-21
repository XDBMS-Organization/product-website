import React from "react";
import heroBg from "@/assets/hero-bg.jpg";
import CodeExample from "@/components/CodeExample";

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
        <div className="mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-12">
          {/* LEFT: hero text */}
          <div className="flex-[1.6] space-y-6 text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              XDB - <br/> The Intelligent{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Data Fabric
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto lg:mx-0">
              Simplify your data pipelines and infrastructure. XDB boosts performance,
              cuts costs, and eliminates compliance overhead.
            </p>

            <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Connect warehouses, lakes, and operational stores, then query them
              as one. From SQL or directly from your Python notebooks.
            </p>
          </div>

          {/* RIGHT: code examples */}
          <div className="flex-[1] w-full">
            <CodeExample />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
