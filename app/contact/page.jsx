import Link from "next/link";

export const metadata = {
  title: "Contact Us | MergeSociety",
  description:
    "Get in touch with MergeSociety! Contact us for inquiries, feedback, or collaboration opportunities. We're here to help you on your web development journey.",
  keywords: [
    "contact MergeSociety",
    "web development support",
    "feedback",
    "collaboration",
    "MergeSociety contact",
    "web development resources",
  ],
  alternates: {
    canonical: "https://www.mergesociety.com/contact",
  },
  author: "MergeSociety",
  url: "https://www.mergesociety.com/contact",
  type: "website",
  openGraph: {
    title: "Contact Us | MergeSociety",
    description:
      "Get in touch with MergeSociety! Contact us for inquiries, feedback, or collaboration opportunities. We're here to help you on your web development journey.",
    type: "website",
    url: "https://www.mergesociety.com/contact",
  },
};

const ContactPage = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1>Contact Us</h1>
        <p>
          We'd love to hear from you! Whether you have a question, feedback, or
          want to collaborate, feel free to reach out. Our team is here to help
          you on your web development journey.
        </p>

        {/* Contact Information */}
        <div className="contact-info">
          <h2>How to Reach Us</h2>
          <p>
            You can contact us directly via email or connect with us on social
            media:
          </p>
          <ul>
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:managersebowa4525@gmail.com">
                managersebowa4525@gmail.com
              </a>
            </li>
            <li>
              <strong>Social Media:</strong>{" "}
              <Link href="https://www.instagram.com/medi45.of" target="_blank">
                Instagram
              </Link>
              ,{" "}
              <Link
                href="https://www.twitter.com/@manager70191"
                target="_blank"
              >
                Twitter
              </Link>
              ,{" "}
              <Link
                href="https://www.facebook.com/profile.php?id=100088699977603"
                target="_blank"
              >
                Facebook
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
