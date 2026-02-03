import { GraduationCap, Building2, Award } from "lucide-react";

const Team = () => {
  const credentials = [
    {
      icon: GraduationCap,
      title: "Research at the Core",
      description:
        "Born from world-class research at TU Berlin’s Database Systems Group — the birthplace of Apache Flink.",
    },
    {
      icon: Building2,
      title: "From Lab to Production",
      description:
        "Over two decades of data systems research and real-world experience building scalable data infrastructure.",
    },
    {
      icon: Award,
      title: "Recognized Innovation",
      description:
        "Winners of the 2025 Berlin AI Startup Competition and recipients of multiple national grants.",
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              A Team Built on Research-Driven Excellence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Turning peer-reviewed research into production-grade data infrastructure
            </p>
          </div>

          {/* Credentials */}
          <div className="grid md:grid-cols-3 gap-8">
            {credentials.map((credential, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                  <credential.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{credential.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {credential.description}
                </p>
              </div>
            ))}
          </div>

            {/* Institution badges */}
            <div className="mt-16 text-center">
              <p className="text-sm text-muted-foreground mb-4">Affiliated with</p>

              <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base font-medium text-muted-foreground">
                <a
                  href="https://www.tu.berlin/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  TU Berlin
                </a>
                <span>•</span>
                <a
                  href="https://www.bifold.berlin/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  BIFOLD
                </a>
                <span>•</span>
                <a
                  href="https://www.ai-nation.de/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  AI Nation
                </a>
              </div>
            </div>


        </div>
      </div>
    </section>
  );
};

export default Team;
