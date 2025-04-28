import Image from "next/image";
import Link from "next/link";
import "./section.css";

export default function GridNews() {
  return (
    <>
      <div className="h-ai">
        <h2>Latest</h2>
        <h1>
          How Smart Developers Really Use AI—From Tutor to Supercharged Intern
          (and Why You Should Too)
        </h1>
      </div>
      <section className="grid-news-section">
        <aside className="grid-news-left">
          <div>
            <Link href="/latest/ai-is-officially-here">
              <Image
                src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1745577861/ai-is-here_ny0xf8.jpg"
                alt=" How Smart Developers Really Use AI—From Tutor to Supercharged Intern (and Why You Should Too)"
                width={400}
                height={250}
              />
              <h3>
                {" "}
                How Smart Developers Really Use AI—From Tutor to Supercharged
                Intern (and Why You Should Too)
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
            <Link href="/latest/why-my-side-hustle-failed">
              <Image
                src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1745589711/why-my-side-hustle-failed_gez4na.jpg"
                alt=" Why My Side Hustle Is Failing: Brutally Honest Lessons from Building
          in Public"
                width={600}
                height={350}
              />
              <h2>
                Why My Side Hustle Is Failing: Brutally Honest Lessons from
                Building in Public
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
