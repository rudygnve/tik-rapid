import Footer from "@/common/Footer";
import Navbar from "@/common/Navbar";
import { SITENAME, SITEURI } from "@/data";
import { useState } from "react";
import { Helmet } from "react-helmet";

const terms = () => {
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
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-6">
          Terms & Conditions
        </h1>
        <article className="prose max-w-none w-full prose-slate prose-li:list-disc">
          <h3>Changes to Terms of Service</h3>
          <p>
            Our Terms of Service (ToS) may be updated periodically to align with
            developments in our application and website, ensuring the highest
            satisfaction for our valued users. Please regularly check the update
            timestamp at the top of the ToS to ensure you are aware of the most
            recent version with any changes.
          </p>

          <h3>Acceptance of Terms of Service</h3>
          <p>
            By accessing and using our application and website, you indicate
            your acceptance of our policy and ToS, including any updated
            versions. If you disagree with any content, please refrain from
            using our application and website.
          </p>

          <h3>Who May Use Our Services (User)</h3>
          <p>
            Our ToS governs the relationship between {SITENAME} application (
            {SITENAME} App) and users of {SITENAME} App who access the app
            and/or use the products and services provided through it ({SITENAME}{" "}
            Products and Services).
          </p>

          <h3>Our ToS Agreement</h3>
          <p>
            Our ToS constitutes a mutual agreement between you, whether an
            individual or an entity (referred to as "You" or "User"), and the
            developer of {SITENAME} Products and Services ({SITENAME}). This
            agreement outlines the terms of use for {SITENAME} Products and
            Services.
          </p>

          <h3>Materials Related to Our Services</h3>
          <p>
            {SITENAME} offers various content, information, graphics, documents,
            text, products, and other elements (referred to as "Content" or
            "Materials") through {SITENAME} App. These materials are available
            for free, personal use subject to the terms outlined in this
            document.
          </p>
          <ul>
            <li>
              By accessing and using {SITENAME} App, you agree to abide by our
              ToS and all terms and conditions specified herein as a User of our
              Content and Materials.
            </li>
          </ul>

          <h3>Users' Obligations</h3>
          <p>
            You agree to use {SITENAME} App and {SITENAME} Products and Services
            in accordance with our ToS, applicable laws, regulations, and
            accepted practices in relevant jurisdictions.
          </p>
          <p>
            {SITENAME} is not responsible for violations of laws, rules, or
            regulations committed by you or third parties under your direction.
          </p>
          <p>
            Specifically, your actions using {SITENAME} App and {SITENAME}{" "}
            Products and Services must not contravene the laws of your residence
            or the location of {SITENAME}.
          </p>

          <h3>Intellectual Property</h3>
          <p>
            <strong>Trademark:</strong> {SITENAME} respects trademark rights and
            uses its trademark {SITENAME}™ solely for {SITENAME} Products and
            Services. Please follow our policy when using, mentioning, or
            referring to our Services and Content.
          </p>
          <p>
            <strong>Copyright: </strong>
            Users are responsible for the content they use with {SITENAME} App.
            Users can download information they paste on {SITENAME} App and Web
            for legitimate interests.
          </p>

          <h3>Privacy</h3>
          <p>
            {SITENAME} App operates in compliance with principles to protect
            Users' personal information, ensuring confidentiality without
            disclosing to third parties.
          </p>

          <h3>Accuracy of Content and Materials</h3>
          <p>
            The Content and Materials on {SITENAME} App might include errors.
            {SITENAME} does not warrant the accuracy, completeness, or
            currentness of these materials.
          </p>

          <h3>Links</h3>
          <p>
            {SITENAME} is not responsible for linked sites' contents. Inclusion
            of links does not imply endorsement by {SITENAME}.
          </p>

          <h3>Terms of Use - Modifications</h3>
          <p>
            These Terms of Service may be amended by {SITENAME} at any time. You
            are responsible for reading and understanding the updated terms
            before using our Services.
          </p>
        </article>
      </div>
      <Footer />
    </main>
  );
};

export default terms;
