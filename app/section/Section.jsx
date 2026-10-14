import Image from "next/image";
import Link from "next/link";
import "./section.css";

export default function GridNews() {
  return (
    <div>
      <div className="h-ai">
        <h1>Latest Blog Posts</h1>
      </div>
      <section className="grid-news-section">
        <aside className="grid-news-left">
          <div>
            <Link href="/latest/the-best-way-to-install-apps-on-linux-in-2026-which-method-should-you-use">
              <Image
                src="/mergesociety/The_Best_Way_to_Install_Apps_on_Linux_in_2026.png"
                alt="The Best Way to Install Apps on Linux in 2026"
                width={400}
                height={250}
                sizes="(max-width: 768px) calc(100vw - 4rem), (max-width: 1200px) 25vw, 300px"
              />
              <h2>The Best Way to Install Apps on Linux in 2026</h2>
            </Link>
          </div>

          <div>
            <Link href="/latest/ranking-101-linux-concepts-every-linux-user-should-know">
              <Image
                src="/mergesociety/Essential_Linux_Concepts_Ranked.png"
                alt="Ranking Essential Linux Concepts Every Linux User Should Know"
                width={400}
                height={250}
                sizes="(max-width: 768px) calc(100vw - 4rem), (max-width: 1200px) 25vw, 300px"
              />
              <h2>
                Ranking Essential Linux Concepts Every Linux User Should Know
              </h2>
            </Link>
          </div>
          <div>
            <Link href="/latest/what-is-a-kernel-in-computer-science-why-you-hear-linux-kernel-and-windows-kernel">
              <Image
                src="/mergesociety/What_Is_a_Kernel_in_Computer_Science_and_Why_You_Hear_Linux_Kernel_and_Windows_Kernel.png"
                alt="What Is a Kernel in Computer Science?"
                width={400}
                height={250}
                sizes="(max-width: 768px) calc(100vw - 4rem), (max-width: 1200px) 25vw, 300px"
              />
              <h2>What Is a Kernel in Computer Science?</h2>
            </Link>
          </div>

          <div>
            <Link href="/latest/the-best-linux-distros-in-2026-which-one-should-you-actually-commit-to">
              <Image
                src="/mergesociety/The_best_Linux_distros_for_gaming_in_2026.png"
                alt="The best Linux distros for gaming in 2026"
                width={400}
                height={250}
                priority
                fetchPriority="high"
                sizes="(max-width: 768px) calc(100vw - 4rem), (max-width: 1200px) 25vw, 300px"
              />
              <h2>The best Linux distros for gaming in 2026</h2>
            </Link>
          </div>
        </aside>

        <main className="grid-news-featured">
          <div>
            <Link href="/latest/c-vs-cpp-vs-csharp">
              <Image
                src="/mergesociety/audio_1755435512328_9gyci_tujfgy_pn1l4g.webp"
                alt="C vs C++ vs C#"
                width={600}
                height={350}
                sizes="(max-width: 768px) calc(100vw - 4rem), (max-width: 1200px) 50vw, 600px"
              />
              <h2>C vs C++ vs C#</h2>
            </Link>
          </div>
        </main>

        <aside className="grid-news-right">
          <div>
            <Link href="/latest/top-free-websites-to-learn-programming">
              <Image
                src="/mergesociety/top_ten_websites_to_learn_coding_for_free.webp"
                alt="10 Best Websites To Learn How To Code For Free"
                width={400}
                height={250}
                sizes="(max-width: 768px) calc(100vw - 4rem), (max-width: 1200px) 25vw, 300px"
              />
              <h2>10 Best Websites To Learn How To Code For Free</h2>
            </Link>
          </div>
          <div>
            <Link href="/latest/github-repositories">
              <Image
                src="/mergesociety/audio_1755527219890_ndn0m6_qmhpsb_fcljoo.webp"
                alt="GitHub Repositories: 17 must-see open source projects that will level up your coding"
                width={600}
                height={350}
                sizes="(max-width: 768px) calc(100vw - 4rem), (max-width: 1200px) 25vw, 300px"
              />
              <h2>
                GitHub Repositories: 17 must-see open source projects that will
                level up your coding
              </h2>
            </Link>
          </div>
          <div>
            <Link href="/latest/most-used-git-commands">
              <Image
                src="/mergesociety/most_used_git_commands.webp"
                alt="Most used git commands workflow Guide"
                width={400}
                height={250}
                sizes="(max-width: 768px) calc(100vw - 4rem), (max-width: 1200px) 25vw, 300px"
              />
              <h2>Most used git commands workflow Guide</h2>
            </Link>
          </div>
          <div>
            <Link href="/latest/list-of-free-apis">
              <Image
                src="/mergesociety/free_apis.webp"
                alt="40 Free APIs You Can Use In Your Next Programming Project"
                width={400}
                height={250}
                sizes="(max-width: 768px) calc(100vw - 4rem), (max-width: 1200px) 25vw, 300px"
              />
              <h2>40 Free APIs You Can Use In Your Next Programming Project</h2>
            </Link>
          </div>
        </aside>
        <div style={{ textAlign: "center", marginTop: "24px" }}>
          <Link href="/latest" className="next-btn">
            See all Latest articles →
          </Link>
        </div>
      </section>
    </div>
  );
}
