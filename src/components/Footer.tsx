const Footer = () => {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <div className="flex items-center space-x-3">
          <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            XDB
          </h3>
          <p className="text-muted-foreground max-w-md">
            The intelligent data fabric that unifies your data.
          </p>
        </div>


          <div className="flex flex-col md:flex-row gap-4 text-sm text-muted-foreground">
            <a href="/legal" className="hover:text-foreground transition-colors">
              Imprint &amp; Privacy Policy
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} XDB. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
