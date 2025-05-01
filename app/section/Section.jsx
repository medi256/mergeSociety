import Image from "next/image";
import Link from "next/link";
import "./section.css";

export default function GridNews() {
  return (
    <>
      <div className="h-ai">
        <Link href="/latest/learn-to-code">
          <h1>
            Why America Became Obsessed with "Learn to Code"—And Where That
            Strategy Went Wrong
          </h1>
        </Link>
        <h2>Latest</h2>
      </div>
      <section className="grid-news-section">
        <aside className="grid-news-left">
          <div>
            <Link href="/latest/internship-at-google">
              <Image
                src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1746014182/growtika-183Yxo3vsGY-unsplash_bqlqeh.jpg"
                alt="Google Internship & Entry-Level Applications: Myths, Truths, and How to Actually Get Hired"
                width={400}
                height={250}
              />
              <h3>
                {" "}
                Google Internship & Entry-Level Applications: Myths, Truths, and
                How to Actually Get Hired
              </h3>
            </Link>
          </div>
          <div>
            <Link href="/latest/friendship-that-saved-google">
              <Image
                src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1745576048/two_google_employes_ciaxcf.jpg"
                alt=" The Unsung Friendship That Saved Google—and Invented the Modern
          Internet"
                width={400}
                height={250}
              />
              <h3>
                The Unsung Friendship That Saved Google—and Invented the Modern
                Internet
              </h3>
            </Link>
          </div>
          <div>
            <Link href="/latest/1990s-Internet">
              <Image
                src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1745575607/1990s_Internet_blg5oq.jpg"
                alt="  The Wild West of the 1990s Internet: From Nick.com to the Dot-Com Bubble"
                width={400}
                height={250}
              />
              <h3>
                {" "}
                The Wild West of the 1990s Internet: From Nick.com to the
                Dot-Com Bubble
              </h3>
            </Link>
          </div>
        </aside>

        <main className="grid-news-featured">
          <div>
            <Link href="/latest/learn-to-code">
              <Image
                src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1746094162/mr-bochelly-IBKyH0V3rew-unsplash_dvk4ha.jpg"
                alt="Why America Became Obsessed with Learn to Code—And Where That Strategy Went Wrong"
                width={600}
                height={350}
              />
              <h2>
                Why America Became Obsessed with "Learn to Code"—And Where That
                Strategy Went Wrong
              </h2>
            </Link>
          </div>
        </main>

        <aside className="grid-news-right">
          <div>
            <Link href="/latest/mincraft">
              <Image
                src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1745586078/mincraft_kmdjhr.jpg"
                alt="Minecraft Redstone computer with visible logic circuits"
                width={400}
                height={250}
              />
              <h3>
                {" "}
                From Redstone to RAM: How Minecraft’s In-Game Logic Lets You
                Build a Real Computer
              </h3>
            </Link>
          </div>
          <div>
            <Link href="latest/how-graphics-cards-work">
              <Image
                src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1745588163/gpus_bmtfwz.jpg"
                alt="Inside the Mind of Modern GPUs: How Graphics Cards Power Your Games, AI, and the Future of Computing"
                width={600}
                height={350}
              />
              <h2>
                {" "}
                Inside the Mind of Modern GPUs: How Graphics Cards Power Your
                Games, AI, and the Future of Computing
              </h2>
            </Link>
          </div>
          <div>
            <Link href="/latest/link-in">
              <Image
                src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1745593266/link-in_vsxalr.jpg"
                alt="LinkedIn’s Cringe Paradox: Why the World’s Top Career Platform Is So Weird—and Here to Stay"
                width={400}
                height={250}
              />
              <h3>
                LinkedIn’s Cringe Paradox: Why the World’s Top Career Platform
                Is So Weird—and Here to Stay
              </h3>
            </Link>
          </div>
        </aside>
      </section>
    </>
  );
}
