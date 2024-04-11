import { Routes, Route } from "react-router-dom";
import IntroductionH, {
  HTMLBasics,
} from "./MobileViewHTML/Introduction&HTMLBasics";
import Headings, { Paragraphs } from "./MobileViewHTML/Headings&Paragraphs";
import TextFormating, { Lists } from "./MobileViewHTML/TextFormating&Lists";
import LinksH, { Attributes } from "./MobileViewHTML/Links&Attributes";
import ImagesH, { Audio } from "./MobileViewHTML/Images&Audio";
import Video, { FormsH } from "./MobileViewHTML/Video&Forms";
import Div, { Spans } from "./MobileViewHTML/Dis&Spans";
import Inline, { Block } from "./MobileViewHTML/inline&Block";
import Tables, { Semantic } from "./MobileViewHTML/Tables&Semantic";
import Head, { Quotation } from "./MobileViewHTML/Head&Quataion";
import Entity, { Pre } from "./MobileViewHTML/Entity&Pre";
import CommentsH, { Sub } from "./MobileViewHTML/Comments&Sub";
import Sup, { Iframe } from "./MobileViewHTML/Sup&Iframe";
import Favicon, { DropDown } from "./MobileViewHTML/Favicon&DropDown";
import ScrollToTop from "./ScrollToTop";

const MobileViewRoutes = () => {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="IntroductionHMobile" element={<IntroductionH />} />
        <Route path="HTMLBasicsMobile" element={<HTMLBasics />} />
        <Route path="headingsMobile" element={<Headings />} />
        <Route path="paragraphsMobile" element={<Paragraphs />} />
        <Route path="FormattingMobile" element={<TextFormating />} />
        <Route path="listsMobile" element={<Lists />} />
        <Route path="linksHMobile" element={<LinksH />} />
        <Route path="attributeMobile" element={<Attributes />} />
        <Route path="imagesHMobile" element={<ImagesH />} />
        <Route path="audioMobile" element={<Audio />} />
        <Route path="videoMobile" element={<Video />} />
        <Route path="formsHMobile" element={<FormsH />} />
        <Route path="divMobile" element={<Div />} />
        <Route path="spanMobile" element={<Spans />} />
        <Route path="inlineMobile" element={<Inline />} />
        <Route path="blockMobile" element={<Block />} />
        <Route path="tablesMobile" element={<Tables />} />
        <Route path="semanticMobile" element={<Semantic />} />
        <Route path="headMobile" element={<Head />} />
        <Route path="quotationMobile" element={<Quotation />} />
        <Route path="entitiesMobile" element={<Entity />} />
        <Route path="preMobile" element={<Pre />} />
        <Route path="commentsHMobile" element={<CommentsH />} />
        <Route path="subMobile" element={<Sub />} />
        <Route path="supMobile" element={<Sup />} />
        <Route path="iframeMobile" element={<Iframe />} />
        <Route path="faviconMobile" element={<Favicon />} />
        <Route path="dropdownMobile" element={<DropDown />} />
      </Routes>
    </div>
  );
};

export default MobileViewRoutes;
