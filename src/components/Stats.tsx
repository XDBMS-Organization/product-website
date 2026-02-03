import { Card } from "@/components/ui/card";

const stats = [
  {
    value: "Complete",
    label: "Governance",
    description:
      "Runs within your environment with policy enforcement and audit-ready logs for compliance and control."
  },
  {
    value: "Up to 80%",
    label: "Faster & Cheaper",
    description:
      "Up to 80% lower query runtimes, data transfer, and cloud costs compared to engines like Trino."
  },
  {
    value: "Plug & Play",
    label: "Integration",
    description:
      "Deploy alongside existing databases and workflows without migrations, rewiring, or operational disruption."
  },
  {
    value: "Foundation",
    label: "for AI",
    description:
      "A secure, governed data foundation so AI teams can use more data reliably and at scale."
  }
];

const Stats = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="p-8 text-center border-2 h-full flex flex-col transition-transform duration-200 hover:-translate-y-0.5"
            >
              <div className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-3">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-foreground mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground mt-auto">
                {stat.description}
              </div>
            </Card>
          ))}
        </div>

        <p className="mt-8 text-xs text-muted-foreground text-center max-w-3xl mx-auto">
          These guarantees are achieved by running XDB on representative workloads and are verified by peer-reviewed research.
        </p>
      </div>
    </section>
  );
};

export default Stats;
