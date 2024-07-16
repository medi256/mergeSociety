import { useNavigate, Outlet } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import AdUnit from "./AdUnit";

const SkillsAndKnowledge = () => {
  const navigate = useNavigate();
  return (
    <div className="JsCourse">
      <ScrollToTop />
      <div className="skillsLinks">
        <h1 className="SkillsHead">
          Building Practical Knowledge and Application
        </h1>
        <p>Feel free to jump to any section and start your learning journey!</p>
        <h2>Understanding the Internet and Web Infrastructure</h2>
        <AdUnit />
        <ul>
          <li onClick={() => navigate("/HwInternetWks")}>
            {" "}
            How the Internet Works: Basics of internet
          </li>
          <li onClick={() => navigate("/WebHosting")}>
            Web Hosting: Different types of hosting{" "}
          </li>
          <li onClick={() => navigate("/DomainNames")}>
            Domain Names: What domain names are
          </li>
        </ul>
        <h2>SEO and Digital Marketing</h2>
        <ul>
          <li onClick={() => navigate("/SEOBsc")}>
            {" "}
            SEO Basics: Importance of SEO
          </li>
          <li onClick={() => navigate("/GoogleIndex")}>
            Understanding How Google Indexes Pages:{" "}
          </li>
          <li onClick={() => navigate("/ContentMarketing")}>
            Content Marketing: Creating valuable content to attract and engage
            an audience{" "}
          </li>
        </ul>
        <h2> Web Analytics</h2>
        <ul>
          <li onClick={() => navigate("/WebAnalytics")}>
            {" "}
            Tracking and Analysis: Setting up Google Analytics
          </li>
          <li onClick={() => navigate("/UserBehavior")}>
            User Behavior: Tools for tracking user behavior (Hotjar, Crazy Egg){" "}
          </li>
        </ul>
        <h2>Web Security Basics</h2>
        <ul>
          <li onClick={() => navigate("/Protection")}>
            Protecting Your Website: Basic security practices (HTTPS)
          </li>
          <li onClick={() => navigate("/SSLCertificate")}>
            SSL Certificates: Importance of SSL certificates{" "}
          </li>
        </ul>
        <h2>Mobile Responsiveness</h2>
        <ul>
          <li onClick={() => navigate("/ImportanceMobile")}>
            {" "}
            The Importance of Mobile Responsiveness:{" "}
          </li>
          <li onClick={() => navigate("/ProgressiveWebApp")}>
            Progressive Web Apps (PWAs){" "}
          </li>
        </ul>
        <h2>Monetization Strategies</h2>
        <ul>
          <li onClick={() => navigate("/GettingStartedFreelance")}>
            Getting Started: Setting up profiles on freelancing platforms like
            Upwork, Fiverr, and Freelancer{" "}
          </li>
        </ul>
        <h2>Creating and Selling Digital Products</h2>
        <ul>
          <li onClick={() => navigate("/ProductIdeas")}>
            Product Ideas: Types of digital products to create (themes, plugins,
            templates){" "}
          </li>
          <li onClick={() => navigate("/PlatformsSelling")}>
            Platforms for Selling: Using platforms like Etsy, Gumroad, and
            Creative{" "}
          </li>
          <li onClick={() => navigate("/MarketingPromotion")}>
            {" "}
            Marketing and Promotion
          </li>
        </ul>
        <h2> Teaching and Content Creation</h2>
        <ul>
          <li onClick={() => navigate("/OnlineCourses")}>
            {" "}
            Online Courses: Creating and selling online courses
          </li>
          <li onClick={() => navigate("/Youtube")}>
            {" "}
            YouTube Channel: Starting a tech YouTube Channel
          </li>
          <li onClick={() => navigate("/WebNarWorkShop")}>
            Webinars and Workshops: Conducting live webinars and workshops
          </li>
        </ul>
        <h2>Monetizing Coding Skills</h2>
        <ul>
          <li onClick={() => navigate("/BuildingMonetize")}>
            {" "}
            Building and Monetizing Websites: How to start a website, generate
            traffic, and monetize through ads, affiliate marketing, and
            sponsorships
          </li>
          <li onClick={() => navigate("/CodingSkills")}>
            {" "}
            Ways to Monetize Your Coding Skills: Exploring additional avenues
            like consulting, offering maintenance services, and creating SaaS
            products.
          </li>
        </ul>
        <AdUnit />
        <h2>Legal Considerations</h2>
        <ul>
          <li onClick={() => navigate("/LegalConsiderations")}>
            Understanding Legal Aspects: Basics of intellectual property,
            copyright laws, and licensing{" "}
          </li>
        </ul>
        <h2>Continuous Learning and Improvement</h2>
        <ul>
          <li onClick={() => navigate("/FollowTrend")}>
            Staying Updated with Industry Trends
          </li>
          <li onClick={() => navigate("/LearnNewSkills")}>
            Learning New Skills
          </li>
        </ul>
        <h2>Startup Culture</h2>
        <ul>
          <li onClick={() => navigate("/JoinStartUps")}> Joining Startups</li>
          <li onClick={() => navigate("/BuildingStartups")}>
            {" "}
            Building a Startup
          </li>
        </ul>
        <h2>Using AI Tools</h2>
        <ul>
          <li onClick={() => navigate("/UsingAI")}>
            Leveraging AI: Using AI tools as personal assistants. Exploring
            tools like ChatGPT, Copilot, and others to enhance productivity and
            creativity.
          </li>
        </ul>
        <h2> Avoiding Scams and Fraud</h2>
        <ul>
          <li onClick={() => navigate("/Scams")}>
            {" "}
            Recognizing Scams: Educating about common scams and frauds in the
            tech industry.
          </li>
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default SkillsAndKnowledge;
