import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | MergeSociety",
  description:
    "Learn how MergeSociety protects your privacy and handles data. Our Privacy Policy explains our use of analytics, cookies, and third-party services to enhance your experience.",
  keywords: [
    "privacy policy",
    "data protection",
    "MergeSociety privacy",
    "Google Analytics",
    "Clicky analytics",
    "cookie policy",
    "web development resources",
    "user privacy",
  ],
  alternates: {
    canonical: "https://www.mergesociety.com/privacy",
  },
  author: "MergeSociety",
  url: "https://www.mergesociety.com/privacy",
  type: "website",
  openGraph: {
    title: "Privacy Policy | MergeSociety",
    description:
      "Learn how MergeSociety protects your privacy and handles data. Our Privacy Policy explains our use of analytics, cookies, and third-party services to enhance your experience.",
    type: "website",
    url: "https://www.mergesociety.com/privacy",
  },
};

const PrivacyPolicy = () => {
  return (
    <div className="legal-container">
      <div>
        <h1>Privacy Policy</h1>
        <p>
          At <strong>MergeSociety</strong>, we are committed to protecting your
          privacy and ensuring the security of your personal information. This
          Privacy Policy outlines how we collect, use, and safeguard data on our
          website. By using MergeSociety, you agree to the practices described
          in this policy.
        </p>

        <h2>What Information Do We Collect?</h2>
        <p>
          Currently, <strong>MergeSociety</strong> does not collect any personal
          information from users. This means:
        </p>
        <ul>
          <li>
            We do not require you to sign up or log in to access our content.
          </li>
          <li>We do not collect cookies or track your browsing behavior.</li>
          <li>We do not store any data about you or your device.</li>
        </ul>

        <h2>Third-Party Analytics</h2>
        <p>
          To improve our website and provide a better user experience, we use
          third-party analytics services, including:
        </p>
        <ul>
          <li>
            <strong>Google Analytics:</strong> This service collects anonymous
            data about your visit, such as the pages you view, the browser you
            use, and your IP address. This data helps us understand how our
            website is used and improve its content. You can learn more about
            Google Analytics' privacy practices at{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://policies.google.com/privacy
            </a>
            .
          </li>
          <li>
            <strong>Clicky Analytics:</strong> This service also collects
            anonymous data to analyze website traffic and user behavior. For
            more information, visit{" "}
            <a
              href="https://clicky.com/terms"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://clicky.com/terms
            </a>
            .
          </li>
        </ul>
        <p>
          These services do not collect personally identifiable information
          (PII), and we do not have access to any personal data they may gather.
        </p>

        <h2>Future Changes to Data Collection</h2>
        <p>
          In the future, we may introduce features that require collecting user
          data (e.g., sign-ups, comments, or cookies). If this happens, we will
          update this Privacy Policy to reflect those changes and notify our
          users. Any changes will be posted on this page, and the "Last Updated"
          date will reflect the most recent revision.
        </p>

        <h2>Your Rights and Choices</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access any personal data we may collect in the future.</li>
          <li>Request the deletion of your data.</li>
          <li>Opt out of data collection or analytics tracking.</li>
        </ul>
        <p>
          If you have any questions or concerns about your privacy, please
          contact us at{" "}
          <a href="mailto:managersebowa4525@gmail.com">
            managersebowa4525@gmail.com
          </a>
          .
        </p>

        <h2>Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time to reflect changes
          in our practices or legal requirements. Any updates will be posted on
          this page, and the "Last Updated" date will reflect the most recent
          revision. We encourage you to review this policy periodically to stay
          informed about how we are protecting your information.
        </p>

        <p className="last-updated">Last Updated: January 2025</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
