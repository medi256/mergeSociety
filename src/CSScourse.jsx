import { NavLink, Outlet, useNavigate } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

const CSScourse = () => {
  const navigate = useNavigate();
  return (
    <div>
      <ScrollToTop />
      <aside className="css-aside">
        <h3 style={{ marginLeft: "25px", marginBottom: "5px" }}>
          CSS Tutorial
        </h3>
        <div>
          <NavLink to={"introduction"}>
            {" "}
            <span>Introduction </span>{" "}
          </NavLink>
        </div>
        <div>
          <NavLink to={"syntax"}>
            {" "}
            <span>Syntax </span>{" "}
          </NavLink>
        </div>
        <div>
          <NavLink to={"inserting"}>
            {" "}
            <span>Inserting </span>{" "}
          </NavLink>
        </div>
        <div>
          <NavLink to={"selectors"}>
            {" "}
            <span> Selectors</span>{" "}
          </NavLink>
        </div>
        <div>
          <NavLink to={"color"}>
            {" "}
            <span> Color</span>{" "}
          </NavLink>
        </div>
        <div>
          <NavLink to={"fonts"}>
            {" "}
            <span>Fonts </span>{" "}
          </NavLink>
        </div>
        <div>
          <NavLink to={"background"}>
            {" "}
            <span>Backgrounds </span>{" "}
          </NavLink>
        </div>
        <div>
          <NavLink to={"comments"}>
            {" "}
            <span>Comments </span>{" "}
          </NavLink>
        </div>
        <div>
          <NavLink to={"border"}>
            {" "}
            <span>Border </span>{" "}
          </NavLink>
        </div>
        <div>
          <NavLink to={"padding"}>
            {" "}
            <span>Padding </span>{" "}
          </NavLink>
        </div>
        <div>
          <NavLink to={"margin"}>
            {" "}
            <span>Margin </span>{" "}
          </NavLink>
        </div>
        <div>
          <NavLink to={"width"}>
            {" "}
            <span>Width </span>{" "}
          </NavLink>
        </div>
        <div>
          <NavLink to={"height"}>
            {" "}
            <span>Height </span>{" "}
          </NavLink>
        </div>
        <div>
          <NavLink to={"stylingText"}>
            {" "}
            <span> Styling-Text</span>{" "}
          </NavLink>
        </div>
        <div>
          <NavLink to={"units"}>
            {" "}
            <span>Units</span>{" "}
          </NavLink>
        </div>
        <div>
          <NavLink to={"boxModel"}>
            {" "}
            <span>BoxModel </span>{" "}
          </NavLink>
        </div>
        <div>
          <NavLink to={"maxWidth"}>
            {" "}
            <span>Max-Width </span>{" "}
          </NavLink>
        </div>
        <div>
          <NavLink to={"maxHeight"}>
            {" "}
            <span>Max-Height </span>{" "}
          </NavLink>
        </div>
        <div>
          <NavLink to={"minWidth"}>
            {" "}
            <span>Min-Width </span>{" "}
          </NavLink>
        </div>
        <div>
          <NavLink to={"minHeight"}>
            {" "}
            <span>Min-Height </span>{" "}
          </NavLink>
        </div>
        <div>
          <NavLink to={"lists"}>
            {" "}
            <span>Lists </span>{" "}
          </NavLink>
        </div>
        <div>
          <NavLink to={"tables"}>
            {" "}
            <span>Tables </span>{" "}
          </NavLink>
        </div>
        <div>
          <NavLink to={"links"}>
            {" "}
            <span>Links </span>{" "}
          </NavLink>
        </div>
        <div>
          <NavLink to={"images"}>
            {" "}
            <span>Images </span>{" "}
          </NavLink>
        </div>
        <div>
          <NavLink to={"icons"}>
            {" "}
            <span> Icons</span>{" "}
          </NavLink>
        </div>
        <div>
          <NavLink to={"float"}>
            {" "}
            <span>Float </span>{" "}
          </NavLink>
        </div>
        <div>
          <NavLink to={"display"}>
            {" "}
            <span>Display </span>{" "}
          </NavLink>
        </div>
        <div>
          <NavLink to={"position"}>
            {" "}
            <span>Position </span>{" "}
          </NavLink>
        </div>
        <div>
          <NavLink to={"Zindex"}>
            {" "}
            <span>Z-index </span>{" "}
          </NavLink>
        </div>
        <div>
          <NavLink to={"columns"}>
            {" "}
            <span>Columns </span>{" "}
          </NavLink>
        </div>
        <div>
          <NavLink to={"overflow"}>
            {" "}
            <span>Overflow </span>{" "}
          </NavLink>
        </div>
        <div>
          <NavLink to={"opacity"}>
            {" "}
            <span>Opacity </span>{" "}
          </NavLink>
        </div>
        <div>
          <NavLink to={"outline"}>
            {" "}
            <span>Outline </span>{" "}
          </NavLink>
        </div>
        <div>
          <NavLink to={"forms"}>
            {" "}
            <span>Forms </span>{" "}
          </NavLink>
        </div>

        <div>
          <NavLink to={"flex"}>
            {" "}
            <span>Flex </span>{" "}
          </NavLink>
        </div>
        <div>
          <NavLink to={"grid"}>
            {" "}
            <span>Grid </span>{" "}
          </NavLink>
        </div>
        <div>
          <NavLink to={"variable"}>
            {" "}
            <span>Variable </span>{" "}
          </NavLink>
        </div>
        <div>
          <NavLink to={"mediaQ"}>
            {" "}
            <span>mediaQueries</span>{" "}
          </NavLink>
        </div>
        <div>
          <NavLink to={"universalS"}>
            {" "}
            <span>UniversalSelector </span>{" "}
          </NavLink>
        </div>
        <div>
          <NavLink to={"attributeS"}>
            {" "}
            <span>AttributeSelector </span>{" "}
          </NavLink>
        </div>
        <div>
          <NavLink to={"transform"}>
            {" "}
            <span>Transform </span>{" "}
          </NavLink>
        </div>
        <div>
          <NavLink to={"transition"}>
            {" "}
            <span>Transition </span>{" "}
          </NavLink>
        </div>
        <div>
          <NavLink to={"animation"}>
            {" "}
            <span>Animation </span>{" "}
          </NavLink>
        </div>
        <div>
          <NavLink to={"filter"}>
            {" "}
            <span>Filters </span>{" "}
          </NavLink>
        </div>
        <div>
          <NavLink to={"responsive"}>
            {" "}
            <span> Responsive</span>{" "}
          </NavLink>
        </div>
      </aside>

      <section className="mobile">
        <h2 onClick={() => navigate("/introMob")}>Introduction to CSS</h2>
        <h2 onClick={() => navigate("/syntaxMob")}> CSS Syntax</h2>
        <h2 onClick={() => navigate("/insertMob")}>Inserting CSS </h2>
        <h2 onClick={() => navigate("/selectMobile")}>CSS Selectors</h2>
        <h2 onClick={() => navigate("/colorMob")}>CSS Colors </h2>
        <h2 onClick={() => navigate("/fontMob")}> CSS Fonts</h2>
        <h2 onClick={() => navigate("/backgroundMob")}>CSS Backgrounds </h2>
        <h2 onClick={() => navigate("/commentsMob")}>CSS Comments</h2>
        <h2 onClick={() => navigate("/borderMob")}>CSS Borders </h2>
        <h2 onClick={() => navigate("/paddingMob")}>CSS Padding </h2>
        <h2 onClick={() => navigate("/marginMob")}>CSS Margins </h2>
        <h2 onClick={() => navigate("/widthMob")}>CSS Width </h2>
        <h2 onClick={() => navigate("/heightMob")}>CSS Height </h2>
        <h2 onClick={() => navigate("/styleMob")}>Styling Text with CSS</h2>
        <h2 onClick={() => navigate("/unitsMob")}> CSS Units</h2>
        <h2 onClick={() => navigate("/boxModelMob")}> CSS Box Model</h2>
        <h2 onClick={() => navigate("/maxWidthMob")}>CSS Max-Width</h2>
        <h2 onClick={() => navigate("/maxHeightMob")}>CSS Max-Height</h2>
        <h2 onClick={() => navigate("/minWidthMob")}>CSS Min-Width </h2>
        <h2 onClick={() => navigate("/minHeightMob")}>CSS Min-Height </h2>
        <h2 onClick={() => navigate("/listMob")}> Styling Lists with CSS</h2>
        <h2 onClick={() => navigate("/tablesMob")}>Styling Tables with CSS</h2>
        <h2 onClick={() => navigate("/linksMob")}>Styling Links with CSS</h2>
        <h2 onClick={() => navigate("/imagesMob")}>Styling Images with CSS</h2>
        <h2 onClick={() => navigate("/iconsMob")}>CSS Icons</h2>
        <h2 onClick={() => navigate("/floatMob")}> CSS Float Property</h2>
        <h2 onClick={() => navigate("/displayMob")}>CSS Display Property</h2>
        <h2 onClick={() => navigate("/positionMob")}>CSS Position Property</h2>
        <h2 onClick={() => navigate("/zIndexMob")}>CSS Z-index</h2>
        <h2 onClick={() => navigate("/columnMob")}> CSS Columns</h2>
        <h2 onClick={() => navigate("/overFlowMob")}> CSS Overflow Property</h2>
        <h2 onClick={() => navigate("/opacityMob")}>CSS Opacity</h2>
        <h2 onClick={() => navigate("/outlineMob")}>CSS Outline</h2>
        <h2 onClick={() => navigate("/formMob")}>Styling Forms with CSS</h2>
        <h2 onClick={() => navigate("/flexMob")}>CSS Flexbox</h2>
        <h2 onClick={() => navigate("/gridMob")}>CSS Grid Layout</h2>
        <h2 onClick={() => navigate("/variableMob")}>CSS Variables</h2>
        <h2 onClick={() => navigate("/mediaQMob")}> CSS Media Queries</h2>
        <h2 onClick={() => navigate("/universalMob")}>
          {" "}
          CSS Universal Selector
        </h2>
        <h2 onClick={() => navigate("/attributeMob")}>
          {" "}
          CSS Attribute Selectors
        </h2>
        <h2 onClick={() => navigate("/transformMob")}>CSS Transforms</h2>
        <h2 onClick={() => navigate("/transitionMob")}>CSS Transitions</h2>
        <h2 onClick={() => navigate("/animationMob")}>CSS Animations</h2>
        <h2 onClick={() => navigate("/filterMob")}>CSS Filters</h2>
        <h2 onClick={() => navigate("/responsiveMob")}>
          Responsive Design with CSS
        </h2>
      </section>
      <div className="output">
        <Outlet />
      </div>
    </div>
  );
};

export default CSScourse;
