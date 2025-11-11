import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Legal = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow container max-w-3xl mx-auto px-4 py-12 text-foreground">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Imprint &amp; Data Privacy
        </h1>

        {/* Imprint Section */}
        <section className="mb-12 space-y-3">
          <h2 className="text-2xl font-semibold">Imprint</h2>
          <p>
            The following Imprint applies to the website of{" "}
            <strong>XDB</strong>, a project based at the{" "}
            <strong>
              Centre for Entrepreneurship, Technische Universität Berlin (TU Berlin)
            </strong>.
          </p>

          <p>
            <strong>Responsible Person (according to § 5 TMG):</strong>
            <br />
            Xenofon Chatziliadis
            <br />
            Centre for Entrepreneurship, TU Berlin
            <br />
            Hardenbergstraße 38
            <br />
            10623 Berlin, Germany
          </p>

          <p>
            <strong>Contact:</strong>
            <br />
            E-mail:{" "}
            <span className="select-all">x.chatziliadis [at] tu-berlin [dot] de</span>
          </p>

          <p>
            <strong>Editorial Responsibility:</strong>
            <br />
            Xenofon Chatziliadis
          </p>

          <p>
            <strong>Legal Notice on Copyright:</strong>
            <br />
            All text, images, and layout of this website are protected by copyright.
            Any reproduction or distribution requires prior written consent of the
            responsible editor.
          </p>
        </section>

        {/* Data Privacy Section */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Data Privacy</h2>

          <p>
            We take the protection of your personal data seriously. This Privacy Policy
            informs you about the processing of personal data when visiting the XDB
            website, operated within the Centre for Entrepreneurship, TU Berlin.
          </p>

          <h3 className="text-lg font-semibold">1. Controller</h3>
          <p>
            The controller responsible for data processing on this website is:
            <br />
            Xenofon Chatziliadis
            <br />
            Centre for Entrepreneurship, TU Berlin
            <br />
            Hardenbergstraße 38, 10623 Berlin, Germany
            <br />
            E-mail:{" "}
            <span className="select-all">x.chatziliadis [at] tu-berlin [dot] de</span>
          </p>

          <h3 className="text-lg font-semibold">2. Data We Process</h3>
          <p>
            When you access our website, technical data such as your IP address,
            browser type, time of access, and visited pages may be automatically logged
            by our hosting provider. These data are used exclusively to ensure the
            stability and security of the website and are automatically deleted after a
            short retention period.
          </p>

          <h3 className="text-lg font-semibold">3. Hosting</h3>
          <p>
            Our website is hosted by GitHub Inc., 88 Colin P Kelly Jr St, San Francisco,
            CA 94107, USA. Please refer to the{" "}
            <a
              href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              GitHub Privacy Policy
            </a>{" "}
            for details about how GitHub processes personal data.
          </p>

          <h3 className="text-lg font-semibold">4. Cookies and Analytics</h3>
          <p>
            This website does not use cookies or analytics tools. If this changes in the
            future, we will update this Privacy Policy accordingly.
          </p>

          <h3 className="text-lg font-semibold">5. Your Rights</h3>
          <p>
            You have the right to request information about your personal data stored by
            us, as well as the right to rectification, deletion, or restriction of
            processing in accordance with the General Data Protection Regulation (GDPR).
          </p>

          <h3 className="text-lg font-semibold">6. External Links</h3>
          <p>
            This website may contain links to external pages. We are not responsible for
            the content or privacy practices of these external sites.
          </p>

          <h3 className="text-lg font-semibold">7. Contact Regarding Data Privacy</h3>
          <p>
            For questions or concerns about data privacy, please contact:
            <br />
            Xenofon Chatziliadis
            <br />
            Centre for Entrepreneurship, TU Berlin
            <br />
            E-mail:{" "}
            <span className="select-all">x.chatziliadis [at] tu-berlin [dot] de</span>
          </p>

          <p className="text-xs text-muted-foreground mt-6">
            Last updated: {new Date().getFullYear()}
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Legal;
