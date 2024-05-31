import { Route, Routes } from "react-router-dom";
import IntroductionH, { HTMLBasics } from "./html/Introduction&HTMLBasics";
import Headings, { Paragraphs } from "./html/Headings&Paragraphs";
import TextFormating, { Lists } from "./html/TextFormating&Lists";
import LinksH, { Attributes } from "./html/Links&Attributes";
import ImagesH, { Audio } from "./html/Images&Audio";
import Video, { FormsH } from "./html/Video&Forms";
import Div, { Spans } from "./html/Dis&Spans";
import Inline, { Block } from "./html/inline&Block";
import Tables, { Semantic } from "./html/Tables&Semantic";
import Head, { Quotation } from "./html/Head&Quataion";
import Entity, { Pre } from "./html/Entity&Pre";
import CommentsH, { HTMLStructure } from "./html/Comments&Sub";
import CreatingButtons, { Iframe } from "./html/Sup&Iframe";
import Favicon, { DropDown } from "./html/Favicon&DropDown";
import HTMLcourse from "./HTMLcourse";
import CSScourse from "./CSScourse";
import Jscourse from "./Jscourse";
import LearnByWatchingVideos from "./LearnByWatchingVideos";
import Reactcourse from "./Reactcourse";
import Introduction, { Syntax } from "./css/Introduction&Syntax";
import Inserting, { Selectors } from "./css/Inserting&Selectors";
import Color, { Fonts } from "./css/Color&Fonts";
import Background, { Comments } from "./css/Background&Comments";
import Border, { Padding } from "./css/Border&Padding";
import Margin, { Width } from "./css/Margin&width";
import Height, { TextStyling } from "./css/Height&TextStyling";
import Units, { BoxModel } from "./css/Units&BoxModel";
import MaxWidth, { MaxHeight } from "./css/MaxWidth&MaxHeight";
import MinWidth, { MinHeight } from "./css/MinWidth&MinHeight";
import List, { Table } from "./css/List&Table";
import Links, { Images } from "./css/Links&Images";
import Icon, { Float } from "./css/Icon&Float";
import Display, { Position } from "./css/Display&Position";
import ZIndex, { Columns } from "./css/ZIndex&Columns";
import Overflow, { Opacity } from "./css/Overflow&Opacity";
import Outline, { Forms } from "./css/Outline&Forms";
import Buttons, { Flex } from "./css/Buttons&Flex";
import Grid, { Variables } from "./css/Grid&variables";
import MediaQuaries, { Universal } from "./css/MediaQuaries&Universal";
import AttributeS, { Transform } from "./css/AttributeS&Transform";
import Transition, { Animations } from "./css/Transition&Animations";
import Filter, { Responsive } from "./css/Filter&Responsive";
import LandingPage from "./LandingPage";
import Policies from "./Policy";
import ResponsiveHTML from "./html/Responsive";
import SkillsAndKnowledge from "./SkillsAndKnowledge";

const CourseRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="HTMLcourse" element={<HTMLcourse />}>
          <Route index element={<IntroductionH />} />
          <Route path="IntroductionH" element={<IntroductionH />} />
          <Route path="HTMLBasics" element={<HTMLBasics />} />
          <Route path="headings" element={<Headings />} />
          <Route path="paragraphs" element={<Paragraphs />} />
          <Route path="Formatting" element={<TextFormating />} />
          <Route path="lists" element={<Lists />} />
          <Route path="linksH" element={<LinksH />} />
          <Route path="attribute" element={<Attributes />} />
          <Route path="imagesH" element={<ImagesH />} />
          <Route path="audio" element={<Audio />} />
          <Route path="video" element={<Video />} />
          <Route path="formsH" element={<FormsH />} />
          <Route path="div" element={<Div />} />
          <Route path="span" element={<Spans />} />
          <Route path="inline" element={<Inline />} />
          <Route path="block" element={<Block />} />
          <Route path="tables" element={<Tables />} />
          <Route path="semantic" element={<Semantic />} />
          <Route path="head" element={<Head />} />
          <Route path="quotation" element={<Quotation />} />
          <Route path="entities" element={<Entity />} />
          <Route path="pre" element={<Pre />} />
          <Route path="commentsH" element={<CommentsH />} />
          <Route path="HTMLStructure" element={<HTMLStructure />} />
          <Route path="CreateButtons" element={<CreatingButtons />} />

          <Route path="iframe" element={<Iframe />} />
          <Route path="favicon" element={<Favicon />} />
          <Route path="dropdown" element={<DropDown />} />
          <Route path="responsiveMeta" element={<ResponsiveHTML />} />
        </Route>
        <Route path="cssCourse" element={<CSScourse />}>
          <Route index element={<Introduction />}></Route>
          <Route path="introduction" element={<Introduction />}></Route>
          <Route path="syntax" element={<Syntax />}></Route>
          <Route path="inserting" element={<Inserting />}></Route>
          <Route path="selectors" element={<Selectors />}></Route>
          <Route path="color" element={<Color />}></Route>
          <Route path="fonts" element={<Fonts />}></Route>
          <Route path="background" element={<Background />}></Route>
          <Route path="comments" element={<Comments />}></Route>
          <Route path="border" element={<Border />}></Route>
          <Route path="padding" element={<Padding />}></Route>
          <Route path="margin" element={<Margin />}></Route>
          <Route path="width" element={<Width />}></Route>
          <Route path="height" element={<Height />}></Route>
          <Route path="stylingText" element={<TextStyling />}></Route>
          <Route path="units" element={<Units />}></Route>
          <Route path="boxModel" element={<BoxModel />}></Route>
          <Route path="maxWidth" element={<MaxWidth />}></Route>
          <Route path="maxHeight" element={<MaxHeight />}></Route>
          <Route path="minWidth" element={<MinWidth />}></Route>
          <Route path="minHeight" element={<MinHeight />}></Route>
          <Route path="lists" element={<List />}></Route>
          <Route path="tables" element={<Table />}></Route>
          <Route path="links" element={<Links />}></Route>
          <Route path="images" element={<Images />}></Route>
          <Route path="icons" element={<Icon />}></Route>
          <Route path="float" element={<Float />}></Route>
          <Route path="display" element={<Display />}></Route>
          <Route path="position" element={<Position />}></Route>
          <Route path="Zindex" element={<ZIndex />}></Route>
          <Route path="columns" element={<Columns />}></Route>
          <Route path="overflow" element={<Overflow />}></Route>
          <Route path="opacity" element={<Opacity />}></Route>
          <Route path="outline" element={<Outline />}></Route>
          <Route path="forms" element={<Forms />}></Route>
          <Route path="buttons" element={<Buttons />}></Route>
          <Route path="flex" element={<Flex />}></Route>
          <Route path="grid" element={<Grid />}></Route>
          <Route path="variable" element={<Variables />}></Route>
          <Route path="mediaQ" element={<MediaQuaries />}></Route>
          <Route path="universalS" element={<Universal />}></Route>
          <Route path="attributeS" element={<AttributeS />}></Route>
          <Route path="transform" element={<Transform />}></Route>
          <Route path="transition" element={<Transition />}></Route>
          <Route path="animation" element={<Animations />}></Route>
          <Route path="filter" element={<Filter />}></Route>
          <Route path="responsive" element={<Responsive />}></Route>
        </Route>

        <Route path="videoTutorial" element={<LearnByWatchingVideos />}></Route>
        <Route path="javascriptCourse" element={<Jscourse />}></Route>
        <Route path="react" element={<Reactcourse />}></Route>
        <Route path="policy" element={<Policies />} />
        <Route path="KnowledgeAndSkills" element={<SkillsAndKnowledge />} />
      </Routes>
    </div>
  );
};

export default CourseRoutes;
