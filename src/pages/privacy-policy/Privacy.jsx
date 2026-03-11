import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import gong1 from "../../assets/images/gong1.svg";
import gong2 from "../../assets/images/gong2.svg";
import gong3 from "../../assets/images/gong3.svg";
import "./privacy.css";

const Privacy = () => {
  return (
    <>
      <Navbar />
      <div className="privacy">
        <div className="cattt">
          <div className="ttt">
            <p className="ab-2">Privacy Policy for Yoruba Progressive Union</p>
          </div>
          <div className="rrr">
            <img src={gong1} alt="gong" className="gongs-img" />
          </div>
        </div>

        <p className="ab-3">
          Yoruba Progressive Union ("we", "our", or "us") operates the Yoruba
          Progressive Union mobile application. This page informs users of our
          policies regarding the collection, use, and disclosure of personal
          information when using our application. By using the app, you agree to
          the collection and use of information in accordance with this policy.
        </p>
        <p className="ab-3">
          <strong>Information We Collect</strong> <br />
          The Yoruba Progressive Union app may collect and store limited
          information necessary to manage membership records within the
          organization.
        </p>
        <p className="ab-3">
          This may include:
          <ul>
            <li>Member name</li>
            <li>Membership email address</li>
            <li>Payment or dues status records</li>
            <li>Contact information (if provided)</li>
          </ul>
          This information is used solely for managing membership records and
          tracking union dues within the Yoruba Progressive Union organization.
        </p>
        <p className="ab-3">
          <strong>How We Use Information</strong>
          <ul>
            <li>Maintain accurate membership records</li>
            <li>Track member dues and payment status</li>
            <li>Allow administrators to update payment records</li>
            <li>Provide members with visibility into their dues history</li>
          </ul>
          We do not use personal information for advertising or marketing
          purposes.
        </p>
        <p className="ab-3">
          <strong>Data Sharing</strong> <br />
          We do not sell, trade, or rent users’ personal information to third
          parties. Member information is only accessible to authorized
          administrators within the Yoruba Progressive Union organization for
          the purpose of managing membership records.
        </p>
        <p className="ab-3">
          <strong>Data Security</strong> <br />
          We take reasonable measures to protect user information from
          unauthorized access, alteration, or disclosure. However, no method of
          electronic storage or transmission over the internet is completely
          secure.
        </p>
        <p className="ab-3">
          <strong>Third-Party Services</strong> <br />
          The app may use trusted third-party services (such as hosting or
          database providers) that help operate the application. These services
          may process data on our behalf but only for the purpose of providing
          app functionality.
        </p>
        <p className="ab-3">
          <strong>Children's Privacy</strong> <br />
          The Yoruba Progressive Union app is not intended for children under
          the age of 13. We do not knowingly collect personal information from
          children.
        </p>
        <p className="ab-3">
          <strong>Changes to This Privacy Policy</strong> <br />
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with an updated effective date.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Privacy;
