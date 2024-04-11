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
        <p onClick={() => navigate("/introMob")}>Introduction </p>
        <p onClick={() => navigate("/syntaxMob")}> Syntax</p>
        <p onClick={() => navigate("/insertMob")}>Inserting </p>
        <p onClick={() => navigate("/selectMobile")}>Selectors </p>
        <p onClick={() => navigate("/colorMob")}>Color </p>
        <p onClick={() => navigate("/fontMob")}> Fonts</p>
        <p onClick={() => navigate("/backgroundMob")}>Backgrounds </p>
        <p onClick={() => navigate("/commentsMob")}>Comments </p>
        <p onClick={() => navigate("/borderMob")}>Border </p>
        <p onClick={() => navigate("/paddingMob")}>Padding </p>
        <p onClick={() => navigate("/marginMob")}>Margin </p>
        <p onClick={() => navigate("/widthMob")}>Width </p>
        <p onClick={() => navigate("/heightMob")}>Height </p>
        <p onClick={() => navigate("/styleMob")}>Styling-Text </p>
        <p onClick={() => navigate("/unitsMob")}> Units</p>
        <p onClick={() => navigate("/boxModelMob")}> BoxModel</p>
        <p onClick={() => navigate("/maxWidthMob")}>Max-Width </p>
        <p onClick={() => navigate("/maxHeightMob")}> Max-Height</p>
        <p onClick={() => navigate("/minWidthMob")}>Min-Width </p>
        <p onClick={() => navigate("/minHeightMob")}>Min-Height </p>
        <p onClick={() => navigate("/listMob")}> Lists</p>
        <p onClick={() => navigate("/tablesMob")}>Tables </p>
        <p onClick={() => navigate("/linksMob")}>Links </p>
        <p onClick={() => navigate("/imagesMob")}>Images </p>
        <p onClick={() => navigate("/iconsMob")}>Icons </p>
        <p onClick={() => navigate("/floatMob")}> Float</p>
        <p onClick={() => navigate("/displayMob")}>Display </p>
        <p onClick={() => navigate("/positionMob")}>Position </p>
        <p onClick={() => navigate("/zIndexMob")}> Z-index</p>
        <p onClick={() => navigate("/columnMob")}> Columns</p>
        <p onClick={() => navigate("/overFlowMob")}> Overflow</p>
        <p onClick={() => navigate("/opacityMob")}>Opacity </p>
        <p onClick={() => navigate("/outlineMob")}>Outline </p>
        <p onClick={() => navigate("/formMob")}>Forms </p>
        <p onClick={() => navigate("/flexMob")}>Flex </p>
        <p onClick={() => navigate("/gridMob")}>Grid </p>
        <p onClick={() => navigate("/variableMob")}>Variable </p>
        <p onClick={() => navigate("/mediaQMob")}> mediaQueries</p>
        <p onClick={() => navigate("/universalMob")}> UniversalSelector</p>
        <p onClick={() => navigate("/attributeMob")}> AttributeSelector</p>
        <p onClick={() => navigate("/transformMob")}>Transform </p>
        <p onClick={() => navigate("/transitionMob")}>Transition </p>
        <p onClick={() => navigate("/animationMob")}>Animation </p>
        <p onClick={() => navigate("/filterMob")}>Filters </p>
        <p onClick={() => navigate("/responsiveMob")}>Responsive </p>
      </section>
      <div className="output">
        <Outlet />
      </div>
    </div>
  );
};

export default CSScourse;
