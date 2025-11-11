import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // When clicking XDB:
  // - if already on "/", scroll instantly to top
  // - if on another page, navigate to "/"
  const goHome = () => {
      navigate("/");
      window.scrollTo({ top: 0, behavior: "instant" }); // no smooth scroll
  };

  const goToHomeAndScroll = (section: string) => {
    navigate("/", { state: { scrollTo: section } });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4">
        {/* LEFT: Logo */}
        <div className="mr-8 flex items-center">
          <h1
            className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent cursor-pointer select-none"
            onClick={goHome}
          >
            XDB
          </h1>
        </div>

        {/* RIGHT: Navigation */}
        <nav className="flex flex-1 items-center justify-between">
          <div className="hidden md:flex gap-6">
            <button
              onClick={() => goToHomeAndScroll("stats")}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => goToHomeAndScroll("howItWorks")}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              How It Works
            </button>
            <button
              onClick={() => goToHomeAndScroll("team")}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              About Us
            </button>
          </div>

          <div className="flex items-center gap-4 ml-auto">

            {/*
            <Button variant="ghost" size="sm" onClick={() => navigate("/coming-soon")}>
              Documentation
            </Button>
            */}

            <Button
              variant="default"
              size="sm"
              onClick={() =>
                window.open("https://forms.gle/F1b12RL8GLsM2vAKA", "_blank", "noopener,noreferrer")
              }
            >
              Get Early Access
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
