import { Card } from "@/components/ui/card";

const stats = [
  {
    value: "1000x",
    label: "Less Data Transfer",
    description: "Reduce unnecessary data movement across systems"
  },
  {
    value: "6x",
    label: "Faster Performance",
    description: "Optimized query execution from the source"
  },
  {
    value: "100%",
    label: "Data Sovereignty",
    description: "Compliance made simple, secure, and scalable"
  },
  {
    value: "Zero",
    label: "Infrastructure Changes",
    description: "Seamless integration into existing stack"
  }
];

const Stats = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="p-8 text-center border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
            >
              <div className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-foreground mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.description}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
