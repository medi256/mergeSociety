import { Link, useNavigate } from "react-router-dom";

import "./Article.css";
import Article1 from "./Tempariticle/Article1";
import Article2 from "./Tempariticle/Article2";
import Article3 from "./Tempariticle/Article3";
import Article4 from "./Tempariticle/Article4";
import Article5 from "./Tempariticle/Article5";

const Policies = () => {
  const navigate = useNavigate();
  return (
    <div className="comments-container">
      <h1>Policies</h1>
      <h2>Privacy Policy</h2>
      <p>
        Mergesociety.com is committed to protecting your privacy. We {`don't`}{" "}
        collect any personal data, but we do use third-party analytics services
        to understand how our website is used.
      </p>
      <p>We use the following analytics services:</p>
      <ul>
        <li>
          Google Analytics: This service collects anonymous data about your
          visit, such as the pages you view, the browser you use, and your IP
          address. This data is used to improve our website and provide better
          content to our users. You can learn more about Google {`Analytics'`}{" "}
          privacy practices at{" "}
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
          Plausible Analytics: This service collects anonymous data about your
          visit, such as the pages you view and the browser you use. This data
          is used to improve our website and provide better content to our
          users. You can learn more about Plausible {`Analytics'`} privacy
          practices at{" "}
          <a
            href="https://plausible.io/data-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://plausible.io/data-policy
          </a>
          .
        </li>
      </ul>
      <p>
        We{" "}
        {`don't share your data with any other third-party services, and we don't`}{" "}
        use any cookies to collect personal data. If you have any questions or
        concerns, please contact us at{" "}
        <a href="mailto:managersebowa4525@gmail.com">
          managersebowa4525@gmail.com
        </a>
        .
      </p>

      <h2>Terms and Conditions</h2>
      <p>1. Introduction</p>
      <p>
        Mergesociety.com is a website that provides web development tutorials
        and resources. By using our website, you agree to these Terms and
        Conditions.
      </p>
      <p>2. Intellectual Property</p>
      <p>
        All content on our website, including code examples and tutorials, is
        owned by Massa Med and is protected by copyright laws.
      </p>
      <p>3. User Behavior</p>
      <p>
        You agree to use our website for its intended purpose and not to engage
        in any illegal or harmful activities.
      </p>
      <p>4. Liability</p>
      <p>
        Mergesociety.com is not liable for any damages or losses resulting from
        the use of our website.
      </p>
      <p>5. Generated Code Disclosure</p>
      <p>
        Some code examples on our website are generated by AI tools. While we
        strive to ensure the accuracy and quality of this code, we cannot
        guarantee its performance or reliability.
      </p>
      <p>6. Analytics and Data Collection</p>
      <p>
        We use third-party analytics services, including Google Analytics and
        Plausible Analytics, to understand how our website is used. These
        services collect anonymous data about your visit, but we {`don't`}{" "}
        collect any personal data.
      </p>
      <p>7. Changes to Terms and Conditions</p>
      <p>
        We reserve the right to modify these Terms and Conditions at any time
        without notice.
      </p>
      <p>8. Contact Us</p>
      <p>
        If you have any questions or concerns, please contact us at{" "}
        <a href="mailto:managersebowa4525@gmail.com">
          managersebowa4525@gmail.com
        </a>
        .
      </p>

      <h2>Cookie Policy</h2>
      <p>
        Mergesociety.com does not use cookies to collect personal data. We only
        use third-party analytics services, including Google Analytics and
        Plausible Analytics, to understand how our website is used. These
        services may use cookies to collect anonymous data about your visit, but
        we {`don't`} have access to this data.
      </p>
      <p>
        If you have any questions or concerns, please contact us at{" "}
        <a href="mailto:managersebowa4525@gmail.com">
          managersebowa4525@gmail.com
        </a>
        .
      </p>
      <Article1 />
      <Article2 />
      <Article3 />
      <Article4 />
      <Article5 />
      <div className="button-container">
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  );
};

export default Policies;
export const PolicyView = () => {
  return (
    <div>
      <Link
        to={"policy"}
        style={{
          textDecoration: "none",
          color: "#337ab7",
          fontSize: "16px",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Terms of Use · Privacy Policy
      </Link>
    </div>
  );
};
