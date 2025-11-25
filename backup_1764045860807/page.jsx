import NewsTicker from "./main/Main";
import MoreArticles from "./moreButton";
import GridNews from "./section/Section";
import Section2 from "./section/section2";
import Section3 from "./section/section3";
import Section4 from "./section/section4";
import Section5 from "./section/section5";
import Section6 from "./section/section6";
import Section7 from "./section/section7";
// import Link from "next/link";

export default function Home() {
  return (
    <div>
      <NewsTicker />
      <GridNews />
      <section>
        <Section2 />

        <MoreArticles route={"/ai"} />
        <Section5 />
        <MoreArticles route={"/startup-stories"} />

        <Section3 />
        <MoreArticles route={"/tech"} />
      </section>
      <Section4 />
      <MoreArticles route={"/apps"} />
      <Section6 />

      <MoreArticles route={"/code-report"} />
      <Section7 />
      <MoreArticles route={"/programming-roadmap"} />
    </div>
  );
}
