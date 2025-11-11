import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const ComingSoon = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex flex-col items-center justify-center flex-grow text-center px-4">
        <h1 className="text-4xl font-bold mb-4">🚀 Coming Soon</h1>
        <p className="text-muted-foreground text-lg mb-6">
          We're working hard on something amazing. Stay tuned!
        </p>

        {/* Back button */}
        <Button
          variant="default"
          size="lg"
          onClick={() => navigate("/")}
          className="mt-2"
        >
            Back to Home
        </Button>
      </main>
      <Footer />
    </div>
  );
};

export default ComingSoon;
