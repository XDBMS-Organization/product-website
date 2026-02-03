import { Card } from "@/components/ui/card";
import { Database, Zap, Shield, Layers } from "lucide-react";

const features = [
  {
    icon: Database,
    title: "Unified SQL Interface",
    description: "Query multiple data systems seamlessly through a simple interface. No need to learn different query languages or tools."
  },
  {
    icon: Zap,
    title: "Efficient Optimization",
    description: "XDB decides where each part of the query runs within your local infrastructure, avoiding wasteful resources and unnecessary costs."
  },
  {
    icon: Shield,
    title: "Effortless Compliance",
    description: "Define compliance policies with ease. XDB ensures every query and dataset remains secure, encrypted, and audit-ready."
  },
  {
    icon: Layers,
    title: "Enhanced Data Transfer",
    description: "XDB uses compression and parallel streaming to accelerate end-to-end data transfers."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Makes <span className="bg-gradient-primary bg-clip-text text-transparent">XDB</span> Different
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A novel type of optimization layer that unifies data access and execution across your infrastructure
              without breaking security or compliance boundaries
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="p-8 border-2"
              >
                <div className="mb-4">
                  <div className="inline-flex p-3 rounded-lg bg-primary/10">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
