import { Link } from "react-router-dom";
import bmbfLogo from "@/assets/BMBF_english.svg";

const Footer = () => {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container px-4 py-12">
        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">

          {/* Brand + tagline */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              <Link
                to="/"
                onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
              >
                XDB
              </Link>
            </h3>

            <p className="text-muted-foreground max-w-md">
              The trustworthy optimization layer that unifies your data.
            </p>
          </div>

          {/* Funding */}
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span className="whitespace-nowrap">
                Supported by
            </span>

            <img
              src={bmbfLogo}
              alt="Supported by the German Federal Ministry of Education and Research (BMBF)"
              className="h-[4.75em] opacity-90"
            />
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
          <div className="inline-flex items-center gap-2 flex-wrap justify-center">
            <span>
              &copy; {new Date().getFullYear()} XDB. All rights reserved.
            </span>

            <Link
              to="/legal"
              className="hover:text-foreground transition-colors whitespace-nowrap"
              onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
            >
              Imprint &amp; Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;