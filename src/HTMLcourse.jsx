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
        <p onClick={() => navigate("/IntroductionHMobile")}>
          Introduction to HTML
        </p>
        <p onClick={() => navigate("/HTMLBasicsMobile")}>HTML Basics </p>
        <p onClick={() => navigate("/headingsMobile")}>HTML Headings</p>
        <p onClick={() => navigate("/paragraphsMobile")}>HTML Paragraphs</p>
        <p onClick={() => navigate("/FormattingMobile")}>
          HTML Text Formatting{" "}
        </p>
        <p onClick={() => navigate("/listsMobile")}>HTML Lists</p>
        <p onClick={() => navigate("/linksHMobile")}>HTML Links</p>
        <p onClick={() => navigate("/attributeMobile")}>HTML Attributes </p>
        <p onClick={() => navigate("/imagesHMobile")}> HTML Images</p>
        <p onClick={() => navigate("/audioMobile")}>HTML Audio </p>
        <p onClick={() => navigate("/videoMobile")}> HTML Video </p>
        <p onClick={() => navigate("/formsHMobile")}>Creating Forms in HTML </p>
        <p onClick={() => navigate("/divMobile")}> HTML Div Element</p>
        <p onClick={() => navigate("/spanMobile")}> HTML Span Element</p>
        <p onClick={() => navigate("/inlineMobile")}>HTML Inline Elements </p>
        <p onClick={() => navigate("/blockMobile")}>HTML Block Elements</p>
        <p onClick={() => navigate("/tablesMobile")}>HTML Tables </p>
        <p onClick={() => navigate("/semanticMobile")}>Semantic HTML </p>
        <p onClick={() => navigate("/headMobile")}>HTML Head Element </p>
        <p onClick={() => navigate("/quotationMobile")}>
          HTML Quotations and Citations
        </p>
        <p onClick={() => navigate("/entitiesMobile")}>HTML Entities </p>
        <p onClick={() => navigate("/preMobile")}>
          HTML Preformatted Text (Pre Element)
        </p>
        <p onClick={() => navigate("/commentsHMobile")}> HTML Comments</p>
        <p onClick={() => navigate("/HTMLStructureMobile")}>
          {" "}
          HTML Document Structure
        </p>
        <p onClick={() => navigate("/CreatingButtonsMobile")}>
          {" "}
          Creating Buttons in HTML
        </p>
        <p onClick={() => navigate("/iframeMobile")}>
          Embedding YouTube Videos with HTML Iframes{" "}
        </p>
        <p onClick={() => navigate("/faviconMobile")}>
          Adding a Favicon in HTML
        </p>
        <p onClick={() => navigate("/dropdownMobile")}>Dropdown Menu </p>
        <p onClick={() => navigate("/responsiveMetaMobile")}>
          Responsive Design with Meta Tags
        </p>
      </section>

      <div className="output">
        <Outlet />
      </div>
    </div>
  );
};

export default HTMLcourse;
