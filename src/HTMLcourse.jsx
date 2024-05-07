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
          <NavLink to={"sub"}>
            {" "}
            <span> HTML Sub Element</span>{" "}
          </NavLink>
        </div>
        <div>
          <NavLink to={"sup"}>
            {" "}
            <span>HTML Sup Element</span>{" "}
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
      </aside>

      <section className="mobile">
        <p onClick={() => navigate("/IntroductionHMobile")}>Introduction </p>
        <p onClick={() => navigate("/HTMLBasicsMobile")}>HTML Basics </p>
        <p onClick={() => navigate("/headingsMobile")}>Headings in HTML </p>
        <p onClick={() => navigate("/paragraphsMobile")}>Paragraphs in HTML </p>
        <p onClick={() => navigate("/FormattingMobile")}>
          Text Formatting in HTML{" "}
        </p>
        <p onClick={() => navigate("/listsMobile")}>Lists in HTML </p>
        <p onClick={() => navigate("/linksHMobile")}>Links in HTML </p>
        <p onClick={() => navigate("/attributeMobile")}>HTML Attributes </p>
        <p onClick={() => navigate("/imagesHMobile")}> HTML Images</p>
        <p onClick={() => navigate("/audioMobile")}>HTML Audio </p>
        <p onClick={() => navigate("/videoMobile")}> HTML Video </p>
        <p onClick={() => navigate("/formsHMobile")}>Creating Forms in HTML </p>
        <p onClick={() => navigate("/divMobile")}> Div in HTML</p>
        <p onClick={() => navigate("/spanMobile")}> Span in HTML</p>
        <p onClick={() => navigate("/inlineMobile")}>
          Inline Elements in HTML{" "}
        </p>
        <p onClick={() => navigate("/blockMobile")}> Block Elements in HTML</p>
        <p onClick={() => navigate("/tablesMobile")}>HTML Tables </p>
        <p onClick={() => navigate("/semanticMobile")}>Semantic HTML </p>
        <p onClick={() => navigate("/headMobile")}>HTML Head Element </p>
        <p onClick={() => navigate("/quotationMobile")}>HTML Quotation </p>
        <p onClick={() => navigate("/entitiesMobile")}>HTML Entities </p>
        <p onClick={() => navigate("/preMobile")}>HTML Pre Element </p>
        <p onClick={() => navigate("/commentsHMobile")}> HTML Comments</p>
        <p onClick={() => navigate("/subMobile")}> HTML Sub Element</p>
        <p onClick={() => navigate("/supMobile")}> HTML Sup Element</p>
        <p onClick={() => navigate("/iframeMobile")}>
          HTML Iframe: Embedding YouTube Video{" "}
        </p>
        <p onClick={() => navigate("/faviconMobile")}>HTML Favicon </p>
        <p onClick={() => navigate("/dropdownMobile")}>Dropdown Menu </p>
      </section>

      <div className="output">
        <Outlet />
      </div>
    </div>
  );
};

export default HTMLcourse;
