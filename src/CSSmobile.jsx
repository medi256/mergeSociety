import { Routes, Route } from "react-router-dom";
import Introduction, { Syntax } from "./CSSMobile/Introduction&Syntax";
import Inserting, { Selectors } from "./CSSMobile/Inserting&Selectors";
import Color, { Fonts } from "./CSSMobile/Color&Fonts";
import Background, { Comments } from "./CSSMobile/Background&Comments";
import Border, { Padding } from "./CSSMobile/Border&Padding";
import Margin, { Width } from "./CSSMobile/Margin&width";
import Height, { TextStyling } from "./CSSMobile/Height&TextStyling";
import Units, { BoxModel } from "./CSSMobile/Units&BoxModel";
import MaxWidth, { MaxHeight } from "./CSSMobile/MaxWidth&MaxHeight";
import MinWidth, { MinHeight } from "./CSSMobile/MinWidth&MinHeight";
import List, { Table } from "./CSSMobile/List&Table";
import Links, { Images } from "./CSSMobile/Links&Images";
import Icon, { Float } from "./CSSMobile/Icon&Float";
import Display, { Position } from "./CSSMobile/Display&Position";
import ZIndex, { Columns } from "./CSSMobile/ZIndex&Columns";
import Overflow, { Opacity } from "./CSSMobile/Overflow&Opacity";
import Outline, { Forms } from "./CSSMobile/Outline&Forms";
import { Flex } from "./CSSMobile/Buttons&Flex";
import Grid, { Variables } from "./CSSMobile/Grid&variables";
import MediaQuaries, { Universal } from "./CSSMobile/MediaQuaries&Universal";
import AttributeS, { Transform } from "./CSSMobile/AttributeS&Transform";
import Transition, { Animations } from "./CSSMobile/Transition&Animations";
import Filter, { Responsive } from "./CSSMobile/Filter&Responsive";
import ScrollToTop from "./ScrollToTop";

const CSSmobile = () => {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="introMob" element={<Introduction />} />
        <Route path="syntaxMob" element={<Syntax />} />
        <Route path="insertMob" element={<Inserting />} />
        <Route path="selectMobile" element={<Selectors />} />
        <Route path="colorMob" element={<Color />} />
        <Route path="fontMob" element={<Fonts />} />
        <Route path="backgroundMob" element={<Background />} />
        <Route path="commentsMob" element={<Comments />} />
        <Route path="borderMob" element={<Border />} />
        <Route path="paddingMob" element={<Padding />} />
        <Route path="marginMob" element={<Margin />} />
        <Route path="widthMob" element={<Width />} />
        <Route path="heightMob" element={<Height />} />
        <Route path="styleMob" element={<TextStyling />} />
        <Route path="unitsMob" element={<Units />} />
        <Route path="boxModelMob" element={<BoxModel />} />
        <Route path="maxWidthMob" element={<MaxWidth />} />
        <Route path="maxHeightMob" element={<MaxHeight />} />
        <Route path="minWidthMob" element={<MinWidth />} />
        <Route path="minHeightMob" element={<MinHeight />} />
        <Route path="listMob" element={<List />} />
        <Route path="tablesMob" element={<Table />} />
        <Route path="linksMob" element={<Links />} />
        <Route path="imagesMob" element={<Images />} />
        <Route path="iconsMob" element={<Icon />} />
        <Route path="floatMob" element={<Float />} />
        <Route path="displayMob" element={<Display />} />
        <Route path="positionMob" element={<Position />} />
        <Route path="zIndexMob" element={<ZIndex />} />
        <Route path="columnMob" element={<Columns />} />
        <Route path="overFlowMob" element={<Overflow />} />
        <Route path="opacityMob" element={<Opacity />} />
        <Route path="outlineMob" element={<Outline />} />
        <Route path="formMob" element={<Forms />} />
        <Route path="flexMob" element={<Flex />} />
        <Route path="gridMob" element={<Grid />} />
        <Route path="variableMob" element={<Variables />} />
        <Route path="mediaQMob" element={<MediaQuaries />} />
        <Route path="universalMob" element={<Universal />} />
        <Route path="attributeMob" element={<AttributeS />} />
        <Route path="transformMob" element={<Transform />} />
        <Route path="transitionMob" element={<Transition />} />
        <Route path="animationMob" element={<Animations />} />
        <Route path="filterMob" element={<Filter />} />
        <Route path="responsiveMob" element={<Responsive />} />
      </Routes>
    </div>
  );
};

export default CSSmobile;
