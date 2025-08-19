import Image from "next/image";
import Link from "next/link";
import "./section.css";
import MoreArticles from "../moreButton";

export default function GridNews() {
  return (
    <>
      <div className="h-ai">
        <h1>Latest</h1>
      </div>
      <section className="grid-news-section">
        <aside className="grid-news-left">
          <div>
            <Link href="/latest/mixing-programming-languages-in-one-executable">
              <Image
                src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1755183273/audio_1755156447127_jxw889_dpoz18.webp"
                alt="Mixing Programming Languages in One Executable"
                width={400}
                height={250}
              />
              <h2>
                {" "}
                Mixing Programming Languages in One Executable: How Compilers,
                Linkers, and ABIs Make It Work
              </h2>
            </Link>
          </div>
          <div>
            <Link href="/latest/devops-lifecycle">
              <Image
                src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1755252483/audio_1755245920448_lnxdm9_exsuiw.webp"
                alt="DevOps Explained"
                width={400}
                height={250}
              />
              <h2>
                DevOps Explained: Lifecycle, Phases, Tools, and Real-World
                Stories
              </h2>
            </Link>
          </div>
          <div>
            <Link href="/latest/computer-science-career">
              <Image
                src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1755336713/audio_1755334719154_bdxdsx_gkoqmw.webp"
                alt="Computer Science Career Path"
                width={400}
                height={250}
              />
              <h2>Computer Science Career Path</h2>
            </Link>
          </div>
        </aside>

        <main className="grid-news-featured">
          <div>
            <Link href="/latest/c-vs-cpp-vs-csharp">
              <Image
                src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1755439142/audio_1755435512328_9gyci_tujfgy.webp"
                alt="C vs C++ vs C#"
                width={600}
                height={350}
              />
              <h2>C vs C++ vs C#</h2>
            </Link>
          </div>
        </main>

        <aside className="grid-news-right">
          <div>
            <Link href="/latest/learn-web-development-2025">
              <Image
                src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1755498401/audio_1755493130168_mnninx_bbda8r.webp"
                alt="How to Learn Web Development in 2025"
                width={400}
                height={250}
              />
              <h2>How to Learn Web Development in 2025</h2>
            </Link>
          </div>
          <div>
            <Link href="/latest/github-repositories">
              <Image
                src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1755527715/audio_1755527219890_ndn0m6_qmhpsb.webp"
                alt="GitHub Repositories: 17 must-see open source projects that will level up your coding"
                width={600}
                height={350}
              />
              <h2>
                {" "}
                GitHub Repositories: 17 must-see open source projects that will
                level up your coding
              </h2>
            </Link>
          </div>
          <div>
            <Link href="/latest/computer-science-degree-worth-it">
              <Image
                src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1755613615/audio_1755594314864_2a5zr_yiegud.webp"
                alt="Computer Science Degree Worth It?"
                width={400}
                height={250}
              />
              <h2>
                Computer Science Degree Worth It? The Real Answer With Careers,
                Salaries, AI, and Satisfaction
              </h2>
            </Link>
          </div>
        </aside>
        <MoreArticles route={"/latest"} />
      </section>
    </>
  );
}
