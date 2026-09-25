// import NewsTicker from "./main/Main";
import MoreArticles from "./moreButton";
import GridNews from "./section/Section";
import Section2 from "./section/section2";
import Section3 from "./section/section3";
import Section4 from "./section/section4";
import Section5 from "./section/section5";
import Section6 from "./section/section6";
import Section7 from "./section/section7";

// @next-codemod-ignore Cache Components adoption: this segment temporarily allows blocking.
// import Link from "next/link";

export default function Home() {
  return (
    <div>
      <GridNews />

      <Section2 />

      <Section5 />

      <Section3 />

      <Section4 />

      <Section6 />

      <Section7 />
    </div>
  );
}
