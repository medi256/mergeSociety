import { Project } from "../NextBlogButton";

export const metadata = {
  title: "Policies | MergeSociety",
  description:
    "Learn about MergeSociety's commitment to user privacy, terms and conditions, and cookie policies. Understand our approach to data collection, user rights, and website usage.",
  keywords: [
    "privacy policy",
    "terms and conditions",
    "cookie policy",
    "data collection",
    "MergeSociety policies",
    "user privacy",
    "web development resources",
    "Google Analytics",
    "Clicky analytics",
  ],
  author: "MergeSociety",
  url: "https://www.mergesociety.com/policies",
  type: "website",
  openGraph: {
    title: "MergeSociety Policies",
    description:
      "MergeSociety outlines its policies on privacy, terms and conditions, and cookie usage to protect user data and enhance user experience. Learn more about our data practices.",
    type: "website",
    url: "https://www.mergesociety.com/policies",
  },
};

const Policies = () => {
  return (
    <div className="policies-container">
      <h1 className="policies-title">Policies</h1>

      <h2 className="policies-subtitle">Privacy Policy</h2>
      <p className="policies-paragraph">
        Mergesociety.com is committed to protecting your privacy. We don’t
        collect any personal data, but we do use third-party analytics services
        to understand how our website is used.
      </p>
      <p className="policies-paragraph">
        We use the following analytics services:
      </p>
      <ul className="policies-list">
        <li className="policies-list-item">
          <strong>Google Analytics:</strong> This service collects anonymous
          data about your visit, such as the pages you view, the browser you
          use, and your IP address. This data helps us improve our website and
          provide better content to our users. You can learn more about Google
          Analytics' privacy practices at{" "}
          <a
            className="policies-link"
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://policies.google.com/privacy
          </a>
          .
        </li>
        <li className="policies-list-item">
          <strong>Clicky:</strong> This service also collects anonymous data to
          analyze website traffic and user behavior, helping us enhance user
          experience. You can find more about Clicky's privacy policy at{" "}
          <a
            className="policies-link"
            href="https://clicky.com/terms"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://clicky.com/terms
          </a>
          .
        </li>
      </ul>
      <p className="policies-paragraph">
        You have the option to sign in to Mergesociety.com. Signing in is not
        mandatory; you can still access and use the website to learn without an
        account. If you choose to sign in, we may collect some information to
        manage your account, but we will always prioritize your privacy. We
        don’t share your data with any other third-party services, and we don’t
        use cookies to collect personal data. If you have any questions or
        concerns, please contact us at{" "}
        <a className="policies-link" href="mailto:managersebowa4525@gmail.com">
          managersebowa4525@gmail.com
        </a>
        .
      </p>

      <h2 className="policies-subtitle">Terms and Conditions</h2>
      <p className="policies-paragraph">1. Introduction</p>
      <p className="policies-paragraph">
        Mergesociety.com is a website that provides web development tutorials
        and resources. By using our website, you agree to these Terms and
        Conditions.
      </p>
      <p className="policies-paragraph">2. Intellectual Property</p>
      <p className="policies-paragraph">
        All content on our website, including code examples and tutorials, is
        owned by Massa Med and is protected by copyright laws.
      </p>
      <p className="policies-paragraph">3. User Behavior</p>
      <p className="policies-paragraph">
        You agree to use our website for its intended purpose and not to engage
        in any illegal or harmful activities.
      </p>
      <p className="policies-paragraph">4. Liability</p>
      <p className="policies-paragraph">
        Mergesociety.com is not liable for any damages or losses resulting from
        the use of our website.
      </p>
      <p className="policies-paragraph">5. Generated Code Disclosure</p>
      <p className="policies-paragraph">
        Some code examples on our website are generated by AI tools. While we
        strive to ensure the accuracy and quality of this code, we cannot
        guarantee its performance or reliability.
      </p>
      <p className="policies-paragraph">6. Analytics and Data Collection</p>
      <p className="policies-paragraph">
        We use third-party analytics services, including Google Analytics and
        Clicky, to understand how our website is used. These services collect
        anonymous data about your visit, but we don’t collect any personal data.
      </p>
      <p className="policies-paragraph">7. Changes to Terms and Conditions</p>
      <p className="policies-paragraph">
        We reserve the right to modify these Terms and Conditions at any time
        without notice.
      </p>
      <p className="policies-paragraph">8. Contact Us</p>
      <p className="policies-paragraph">
        If you have any questions or concerns, please contact us at{" "}
        <a className="policies-link" href="mailto:managersebowa4525@gmail.com">
          managersebowa4525@gmail.com
        </a>
        .
      </p>

      <h2 className="policies-subtitle">Cookie Policy</h2>
      <p className="policies-paragraph">
        Mergesociety.com does not use cookies to collect personal data. We only
        use third-party analytics services, including Google Analytics and
        Clicky, to understand how our website is used. These services may use
        cookies to collect anonymous data about your visit, but we don’t have
        access to this data.
      </p>
      <p className="policies-paragraph">
        If you have any questions or concerns, please contact us at{" "}
        <a className="policies-link" href="mailto:managersebowa4525@gmail.com">
          managersebowa4525@gmail.com
        </a>
        .
      </p>
      <div className="button-container">
        <Project />
      </div>
    </div>
  );
};

export default Policies;
