import { Outlet, NavLink, useNavigate } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

const HTMLcourse = () => {
  const navigate = useNavigate();

  return (
    <div>
      <ScrollToTop />
      <aside className="css-aside">
        <h3 style={{ marginLeft: "25px", marginBottom: "5px" }}>
          HTML Tutorial
        </h3>
        <div>
          <NavLink to={"IntroductionH"}>
            {" "}
            <span> Introduction </span>{" "}
          </NavLink>
        </div>
        <div>
          <NavLink to={"HTMLBasics"}>
            {" "}
            <span> HTML Basics</span>{" "}
          </NavLink>
        </div>
        <div>
          <NavLink to={"headings"}>
            {" "}
            <span> Headings in HTML</span>{" "}
          </NavLink>
        </div>
        <div>
          <NavLink to={"paragraphs"}>
            {" "}
            <span>Paragraphs in HTML</span>{" "}
          </NavLink>
        </div>
        <div>
          <NavLink to={"Formatting"}>
            {" "}
            <span>Text Formatting in HTML</span>{" "}
          </NavLink>
        </div>
        <div>
          <NavLink to={"lists"}>
            {" "}
            <span>Lists in HTML</span>{" "}
          </NavLink>
        </div>
        <div>
          <NavLink to={"linksH"}>
            {" "}
            <span> Links in HTML</span>{" "}
          </NavLink>
        </div>
        <div>
          <NavLink to={"attribute"}>
            {" "}
            <span> HTML Attributes</span>{" "}
          </NavLink>
        </div>
        <div>
          <NavLink to={"imagesH"}>
            {" "}
            <span> HTML Images</span>{" "}
          </NavLink>
        </div>
        <div>
          <NavLink to={"audio"}>
            {" "}
            <span> HTML Audio</span>{" "}
          </NavLink>
        </div>
        <div>
          <NavLink to={"video"}>
            {" "}
            <span> HTML Video</span>{" "}
          </NavLink>
        </div>
        <div>
          <NavLink to={"formsH"}>
            {" "}
            <span> Creating Forms in HTML</span>{" "}
          </NavLink>
        </div>
        <div>
          <NavLink to={"div"}>
            {" "}
            <span>Div in HTML</span>
            {""}
          </NavLink>
        </div>
        <div>
          <NavLink to={"span"}>
            {" "}
            <span>Span in HTML</span>{" "}
          </NavLink>
        </div>
        <div>
          <NavLink to={"inline"}>
            {" "}
            <span>Inline Elements in HTML</span>{" "}
          </NavLink>
        </div>
        <div>
          <NavLink to={"block"}>
            {" "}
            <span> Block Elements in HTML</span>{" "}
          </NavLink>
        </div>
        <div>
          <NavLink to={"tables"}>
            {" "}
            <span>HTML Tables</span>{" "}
          </NavLink>
        </div>
        <div>
          <NavLink to={"semantic"}>
            {" "}
            <span> Semantic HTML</span>{" "}
          </NavLink>
        </div>
        <div>
          <NavLink to={"head"}>
            {" "}
            <span> HTML Head Element</span>{" "}
          </NavLink>
        </div>
        <div>
          <NavLink to={"quotation"}>
            {" "}
            <span>HTML Quotation</span>{" "}
          </NavLink>
        </div>
        <div>
          <NavLink to={"entities"}>
            {" "}
            <span>HTML Entities</span>{" "}
          </NavLink>
        </div>
        <div>
          <NavLink to={"pre"}>
            {" "}
            <span>HTML Pre Element</span>{" "}
          </NavLink>
        </div>
        <div>
          <NavLink to={"commentsH"}>
            {" "}
            <span> HTML Comments</span>{" "}
          </NavLink>
        </div>
        <div>
          <NavLink to={"HTMLStructure"}>
            {" "}
            <span> HTML Structure</span>{" "}
          </NavLink>
        </div>
        <div>
          <NavLink to={"CreateButtons"}>
            {" "}
            <span>Creating buttons</span>{" "}
          </NavLink>
        </div>
        <div>
          <NavLink to={"iframe"}>
            {" "}
            <span>HTML Iframe: Embedding YouTube Video</span>{" "}
          </NavLink>
        </div>
        <div>
          <NavLink to={"favicon"}>
            {" "}
            <span>HTML Favicon</span>{" "}
          </NavLink>
        </div>
        <div>
          <NavLink to={"dropdown"}>
            {" "}
            <span> Dropdown Menu</span>{" "}
          </NavLink>
        </div>
        <div>
          <NavLink to={"responsiveMeta"}>
            {" "}
            <span>Responsive(Meta tag) </span>{" "}
          </NavLink>
        </div>
      </aside>

      <section className="mobile">
        <h2 onClick={() => navigate("/IntroductionHMobile")}>
          Introduction to HTML
        </h2>
        <h2 onClick={() => navigate("/HTMLBasicsMobile")}>HTML Basics </h2>
        <h2 onClick={() => navigate("/headingsMobile")}>HTML Headings</h2>
        <h2 onClick={() => navigate("/paragraphsMobile")}>HTML Paragraphs</h2>
        <h2 onClick={() => navigate("/FormattingMobile")}>
          HTML Text Formatting{" "}
        </h2>
        <h2 onClick={() => navigate("/listsMobile")}>HTML Lists</h2>
        <h2 onClick={() => navigate("/linksHMobile")}>HTML Links</h2>
        <h2 onClick={() => navigate("/attributeMobile")}>HTML Attributes </h2>
        <h2 onClick={() => navigate("/imagesHMobile")}> HTML Images</h2>
        <h2 onClick={() => navigate("/audioMobile")}>HTML Audio </h2>
        <h2 onClick={() => navigate("/videoMobile")}> HTML Video </h2>
        <h2 onClick={() => navigate("/formsHMobile")}>
          Creating Forms in HTML{" "}
        </h2>
        <h2 onClick={() => navigate("/divMobile")}> HTML Div Element</h2>
        <h2 onClick={() => navigate("/spanMobile")}> HTML Span Element</h2>
        <h2 onClick={() => navigate("/inlineMobile")}>HTML Inline Elements </h2>
        <h2 onClick={() => navigate("/blockMobile")}>HTML Block Elements</h2>
        <h2 onClick={() => navigate("/tablesMobile")}>HTML Tables </h2>
        <h2 onClick={() => navigate("/semanticMobile")}>Semantic HTML </h2>
        <h2 onClick={() => navigate("/headMobile")}>HTML Head Element </h2>
        <h2 onClick={() => navigate("/quotationMobile")}>
          HTML Quotations and Citations
        </h2>
        <h2 onClick={() => navigate("/entitiesMobile")}>HTML Entities </h2>
        <h2 onClick={() => navigate("/preMobile")}>
          HTML Preformatted Text (Pre Element)
        </h2>
        <h2 onClick={() => navigate("/commentsHMobile")}> HTML Comments</h2>
        <h2 onClick={() => navigate("/HTMLStructureMobile")}>
          {" "}
          HTML Document Structure
        </h2>
        <h2 onClick={() => navigate("/CreatingButtonsMobile")}>
          {" "}
          Creating Buttons in HTML
        </h2>
        <h2 onClick={() => navigate("/iframeMobile")}>
          Embedding YouTube Videos with HTML Iframes{" "}
        </h2>
        <h2 onClick={() => navigate("/faviconMobile")}>
          Adding a Favicon in HTML
        </h2>
        <h2 onClick={() => navigate("/dropdownMobile")}>Dropdown Menu </h2>
        <h2 onClick={() => navigate("/responsiveMetaMobile")}>
          Responsive Design with Meta Tags
        </h2>
      </section>

      <div className="output">
        <Outlet />
      </div>
    </div>
  );
};

export default HTMLcourse;
