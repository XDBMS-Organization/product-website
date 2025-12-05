// src/components/Research.tsx
import { Card } from "@/components/ui/card";
import { FileText, ExternalLink } from "lucide-react";

const papers = [
  {
    title: "Fast and Scalable Data Transfer Across Data Systems",
    venue: "ACM SIGMOD 2025",
    highlight:
      "Presents a high-throughput data transfer layer across heterogeneous systems for efficient data exchange in large-scale infrastructures.",
    link: "https://dl.acm.org/doi/10.1145/3725294",
  },
  {
    title: "Efficient Placement of Aggregations in Geo-Distributed Environments",
    venue: "VLDB 2024",
    highlight:
      "Optimizes placement of decomposable aggregates to scale streaming analytics across large geo-distributed infrastructures.",
    link: "https://www.vldb.org/pvldb/vol17/p1501-chatziliadis.pdf",
  },
  {
    title: "In-Situ Cross-Database Query Processing",
    venue: "IEEE ICDE 2023",
    highlight:
      "Introduces an in-situ cross-database execution model enabling efficient query processing without centralized data movement.",
    link: "https://ieeexplore.ieee.org/document/10184600",
  },
];

const Research = () => {
  return (
    <section id="research" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            The science behind <span className="bg-gradient-primary bg-clip-text text-transparent">XDB</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            XDB builds on peer-reviewed research from TU Berlin’s Database Systems Group.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {papers.map((paper, idx) => (
            <Card key={idx} className="p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                  <FileText className="w-4 h-4" />
                  <span>{paper.venue}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {paper.title}
                </h3>
                <p className="text-xs text-muted-foreground mb-2">
                  {paper.authors}
                </p>
                <p className="text-sm text-muted-foreground">
                  {paper.highlight}
                </p>
              </div>

              {paper.link && (
                <div className="mt-4">
                  <a
                    href={paper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    Read paper
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
