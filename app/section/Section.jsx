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
            <Link href="/code-report/tutorial-hell">
              <Image
                src="https://res.cloudinary.com/dhgjhspsp/image/upload/f_auto,q_auto,w_800/v1756302373/audio_1756289795525_wcylsp_rs9hya.webp"
                alt="Tutorial Hell"
                width={400}
                height={250}
              />
              <h2>
                Tutorial Hell - How to Escape Tutorial Hell and Actually Learn
                to Code
              </h2>
            </Link>
          </div>
          <div>
            <Link href="/code-report/what-is-a-compiler">
              <Image
                src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1758441658/audio_1758351295832_fnxuwq_apk5yu.jpg"
                alt="Why We Need a Translator in Programming and What a Compiler Really Is"
                width={400}
                height={250}
              />
              <h2>
                Why We Need a Translator in Programming and What a Compiler
                Really Is
              </h2>
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
            <Link href="/code-report/how-to-build-projects">
              <Image
                src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1759677489/audio_1759676146278_odcup_iywxi3.webp"
                alt="How To Start Programming Projects The Lazy Way"
                width={400}
                height={250}
              />
              <h2>How To Start Programming Projects The Lazy Way</h2>
            </Link>
          </div>
        </aside>
        <MoreArticles route={"/latest"} />
      </section>
    </>
  );
}
