import Footer from "@/common/Footer";
import Navbar from "@/common/Navbar";
import { SITENAME, SITEURI } from "@/data";
import Link from "next/link";
import { useState } from "react";
import { Helmet } from "react-helmet";

const PrivacyPolicyPage = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(true);
  };

  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  return (
    <main onClick={handleCloseMenu} className="w-full">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Privacy Policy - {SITENAME}</title>
        <link rel="canonical" href={`${SITEURI}/privacy-policy`} />
        <script src="/assets/main.js"></script>
      </Helmet>
      <Navbar
        handleShowMenu={handleShowMenu}
        handleCloseMenu={handleCloseMenu}
        showMenu={showMenu}
      />
      <div className="w-full max-w-5xl mx-auto py-6 sm:py-10 h-full min-h-screen px-3">
        <h1 className="text-xl sm:text-3xl font-bold text-slate-800 mb-6">
          Privacy Policy
        </h1>
        <article className="prose max-w-none w-full prose-slate prose-li:list-disc">
          <h3>Personal Identification Information</h3>
          <p>
            {SITENAME} App can be accessed anonymously by users. We never record
            our Users' identifying information and will only gather personal
            identification information from them if they freely provide it to
            us. Users have the option to refuse to provide personal identity
            information at any time. If they accept to supply, they must provide
            exact and correct identification information about themselves.
            {SITENAME} is not liable for any false or inaccurate information
            given by Users. If such events are discovered, we will prohibit
            Users from accessing and using the {SITENAME} App and our Services.
          </p>

          <h3>Advertising</h3>
          <p>
            We accept adverts (Ads) on {SITENAME} App in order to maintain and
            fund our own non-commercial research and development on {SITENAME}
            App. Ads seen on the {SITENAME} App may be sent to Users by
            advertising partners, who may set cookies. They will only collect
            non-personal identification information about you or others who use
            your computer and will not track personal information about you,
            such as your name, email address, or physical address. You may
            reject the usage of cookies or discontinue access to our application
            and website at any time, as {SITENAME} users are not compelled to
            accept the Ads.
          </p>

          <h3>Changes to This Privacy Policy</h3>
          <p>
            {SITENAME} has the right to modify this privacy statement at any
            moment. When we do, we will post a notification on the {SITENAME}
            App's main page and update the date at the top of this page. We
            encourage Users to check this page periodically for modifications to
            be updated about how we are assisting in the protection of the
            personal information we gather. You understand and agree that it is
            your duty to examine this privacy policy on a regular basis and be
            aware of any changes.
          </p>

          <h3>Your Acceptance of These Terms</h3>
          <p>
            You acknowledge your voluntary acceptance of this policy by
            accessing and using {SITENAME} App. Please do not use our Services
            if this is not the case. Your continued use of the Services after
            modifications to this policy are posted will be deemed your
            acceptance of those changes.
          </p>
        </article>
      </div>
      <Footer />
    </main>
  );
};

export default PrivacyPolicyPage;
