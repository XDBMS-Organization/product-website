import { Card } from "@/components/ui/card";

const stats = [
  {
    value: "Local",
    label: "Governance",
    description: "Your organization retains full jurisdiction and custody of all information."
  },
  {
    value: "Efficient",
    label: "Execution",
    description: "Compute runs close to the data, minimizing transfers and resource usage."
  },
  {
    value: "Auditable",
    label: "Operations",
    description: "Every operation is explainable and fully verifiable for compliance workflows."
  },
  {
    value: "Seamless",
    label: "Integration",
    description: "Deploy without changing existing databases, networks, or workflows."
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
              className="p-8 text-center border-2"
            >
              <div className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-3">
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

        <p className="mt-8 text-xs text-muted-foreground text-center max-w-3xl mx-auto">
          The properties above reflect XDB’s architectural design and enforcement guarantees under typical deployment conditions.
        </p>

      </div>
    </section>
  );
};

export default Stats;
