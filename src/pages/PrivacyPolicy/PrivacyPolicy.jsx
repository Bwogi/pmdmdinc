import React from "react";

const PrivacyPolicy = () => {
  return (
    <article className="p-20 prose max-w-none">
      <div className="text-center">
        <h1>Privacy Policy</h1>
      </div>
      {/* <div className="text-center">
        <h1 className="text-5xl py-10">Privacy Policy</h1>
      </div> */}
      <p>
        At PMDMD LLC, we are committed to protecting your privacy and ensuring
        the security of your personal information. This Privacy Policy outlines
        how we collect, use, and safeguard your data when you use our mobile app
        for our medical device. By using our app, you agree to the terms and
        conditions set forth in this policy.
      </p>

      <h2 className="text-2xl mt-5">Information We Collect</h2>
      <ol>
        <li>
          Personal Information: We may collect personal information such as your
          name, email address, and contact details when you register an account
          or communicate with us for support or inquiries.
        </li>
        <li>
          Device Information: We may collect information about your mobile
          device, including the device model, operating system version, and
          unique device identifiers. This information helps us optimize our app
          for compatibility and provide a better user experience.
        </li>
        <li>
          Usage Information: We may collect information about how you use our
          app, such as the features you access, the actions you take, and the
          duration of your usage. This data is used to analyze app performance,
          improve our services, and enhance your overall experience.
        </li>
      </ol>

      <h2>How We Use Your Information</h2>

      <ol>
        <li>
          Providing and Improving our Services: We use your information to
          provide you with access to the functionalities of our medical device
          mobile app. Additionally, we analyze this data to enhance and optimize
          our services based on user feedback and usage patterns.
        </li>
        <li>
          Communication: We may use your contact information to send you
          important updates, notifications, and respond to your inquiries or
          support requests. These communications are essential for the proper
          functioning and maintenance of our app.
        </li>
        <li>
          App Security: We take your privacy and the security of your data
          seriously. We may use your information to detect and prevent
          fraudulent or unauthorized activity, ensuring the security and
          integrity of our app and your personal information.
        </li>
      </ol>

      <h2>Data Sharing and Disclosure</h2>
      <ol>
        <li>
          Service Providers: We may engage trusted third-party service providers
          to perform functions on our behalf, such as hosting, analytics, and
          customer support. These service providers have access to your personal
          information only to the extent necessary to perform their tasks and
          are bound by strict confidentiality agreements.
        </li>
        <li>
          Legal Requirements: We may disclose your personal information if
          required to do so by law or in response to a valid legal request. We
          may also disclose your information to protect our legal rights,
          enforce our Terms of Service, or investigate potential violations.
        </li>
        <li>
          Consent: We will obtain your consent before sharing your personal
          information with any third parties for purposes other than those
          stated in this Privacy Policy.
        </li>
      </ol>

      <h2>Data retention</h2>
      <p>
        We will retain your personal information for as long as necessary to
        fulfill the purposes outlined in this Privacy Policy, unless a longer
        retention period is required or permitted by law.
      </p>

      <h2>Security</h2>
      <p>
        We implement reasonable security measures to protect your personal
        information from unauthorized access, disclosure, alteration, or
        destruction. However, no method of transmission over the internet or
        electronic storage is 100% secure. Therefore, while we strive to protect
        your data, we cannot guarantee absolute security.
      </p>

      <h2>Children's Privacy</h2>

      <p>
        We do not knowingly collect personal information from children. If we
        become aware that a child has provided us with their personal
        information without parental consent, we will take steps to delete the
        information promptly.
      </p>

      <h2>Changes to this Privacy Policy</h2>
      <p>
        We may update this Privacy Policy periodically to reflect changes in our
        practices or legal requirements. We encourage you to review this policy
        regularly for any updates. Continued use of our app after the changes
        will signify your acceptance of the revised policy.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions, concerns, or requests regarding this Privacy
        Policy or our data practices, please contact us at:
        email:info@pmdmdllc.com, tel: +1 (209) 684-5576.
      </p>

      <p>Last Updated: August 2023</p>
    </article>
  );
};

export default PrivacyPolicy;
