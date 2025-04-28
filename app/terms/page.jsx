import Link from "next/link";

export const metadata = {
  title: "Terms of Service | MergeSociety",
  description:
    "Read the Terms of Service for MergeSociety. Learn about the rules and guidelines for using our website, including intellectual property, user responsibilities, and liability.",
  keywords: [
    "terms of service",
    "terms of use",
    "MergeSociety terms",
    "website usage",
    "user responsibilities",
    "intellectual property",
    "liability",
    "web development resources",
  ],
  alternates: {
    canonical: "https://www.mergesociety.com/terms",
  },
  author: "MergeSociety",
  url: "https://www.mergesociety.com/terms",
  type: "website",
  openGraph: {
    title: "Terms of Service | MergeSociety",
    description:
      "Read the Terms of Service for MergeSociety. Learn about the rules and guidelines for using our website, including intellectual property, user responsibilities, and liability.",
    type: "website",
    url: "https://www.mergesociety.com/terms",
  },
};

const TermsOfService = () => {
  return (
    <div className="legal-container">
      <div>
        <h1>Terms of Service</h1>
        <p>
          Welcome to <strong>MergeSociety</strong>! These Terms of Service
          outline the rules and guidelines for using our website. By accessing
          or using MergeSociety, you agree to comply with these terms. If you do
          not agree with any part of these terms, please do not use our website.
        </p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By using <strong>MergeSociety</strong>, you acknowledge that you have
          read, understood, and agree to be bound by these Terms of Service. If
          you are using our website on behalf of an organization, you represent
          that you have the authority to bind that organization to these terms.
        </p>

        <h2>2. Intellectual Property</h2>
        <p>
          All content on <strong>MergeSociety</strong>, including but not
          limited to text, graphics, code examples, tutorials, and images, is
          the property of MergeSociety or its content creators and is protected
          by copyright laws. You may not reproduce, distribute, or modify any
          content without prior written permission from MergeSociety.
        </p>

        <h2>3. User Responsibilities</h2>
        <p>
          When using <strong>MergeSociety</strong>, you agree to:
        </p>
        <ul>
          <li>Use the website for its intended purpose only.</li>
          <li>Not engage in any illegal, harmful, or disruptive activities.</li>
          <li>
            Respect the intellectual property rights of MergeSociety and third
            parties.
          </li>
          <li>
            Not attempt to gain unauthorized access to our systems or data.
          </li>
        </ul>

        <h2>4. Liability</h2>
        <p>
          <strong>MergeSociety</strong> is provided "as is" and "as available."
          We do not guarantee that the website will be error-free, secure, or
          uninterrupted. To the fullest extent permitted by law, MergeSociety
          disclaims all liability for any damages or losses arising from your
          use of the website.
        </p>

        <h2>5. AI-Generated Content</h2>
        <p>
          Some content on <strong>MergeSociety</strong>, such as code examples,
          may be generated using AI tools. While we strive to ensure the
          accuracy and quality of this content, we cannot guarantee its
          performance or reliability. Use such content at your own risk.
        </p>

        <h2>6. Third-Party Links</h2>
        <p>
          Our website may contain links to third-party websites, such as{" "}
          <Link href="https://www.devgallary.com">DevGallery</Link>. These sites
          have their own terms and policies, and we are not responsible for
          their content or practices. We encourage you to review their terms
          before using their services.
        </p>

        <h2>7. Changes to These Terms</h2>
        <p>
          We reserve the right to update or modify these Terms of Service at any
          time without prior notice. Any changes will be posted on this page,
          and the "Last Updated" date will reflect the most recent revision. By
          continuing to use MergeSociety after changes are made, you agree to
          the updated terms.
        </p>

        <h2>8. Contact Us</h2>
        <p>
          If you have any questions or concerns about these Terms of Service,
          please contact us at{" "}
          <a href="mailto:managersebowa4525@gmail.com">
            managersebowa4525@gmail.com
          </a>
          .
        </p>

        <p className="last-updated">Last Updated: January 2025</p>
      </div>
    </div>
  );
};

export default TermsOfService;
