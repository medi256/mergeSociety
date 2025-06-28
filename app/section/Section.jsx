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
            <Link href="/tech/21-devTools">
              <Image
                src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1746774652/971_dx26ro.jpg"
                alt="21 Powerful Chrome DevTools Tips Every Web Developer Should Be Using"
                width={400}
                height={250}
              />
              <h2>
                {" "}
                Chrome DevTools: 21+ Insane Browser Developer Tools Tricks Every
                Web Developer Needs (Most Pros Miss #13)
              </h2>
            </Link>
          </div>
          <div>
            <Link href="/tech/vibe-coding">
              <Image
                src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1746771091/pexels-shkrabaanthony-5475784_zkjf9p.jpg"
                alt="Vibe Coding: Why Everyone Is Wrong About AI-Generated Code (And How to Beat the 2025 Mind Virus)"
                width={400}
                height={250}
              />
              <h2>
                Vibe Coding: Why Everyone Is Wrong About AI-Generated Code (And
                How to Beat the 2025 Mind Virus)
              </h2>
            </Link>
          </div>
          <div>
            <Link href="/ai/what-is-agents">
              <Image
                src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1746601327/julien-tromeur-6UDansS-rPI-unsplash_ugchfx.jpg"
                alt="What are AI Agents?"
                width={400}
                height={250}
              />
              <h2> What are AI Agents?</h2>
            </Link>
          </div>
        </aside>

        <main className="grid-news-featured">
          <div>
            <Link href="/ai/ai-ml-dp">
              <Image
                src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1746551037/possessed-photography-g29arbbvPjo-unsplash_ug6art.jpg"
                alt="AI, Machine Learning, Deep Learning & Generative AI: What’s the Real Difference?"
                width={600}
                height={350}
              />
              <h2>
                AI, Machine Learning, Deep Learning & Generative AI: What’s the
                Real Difference?
              </h2>
            </Link>
          </div>
        </main>

        <aside className="grid-news-right">
          <div>
            <Link href="/code-report/websocets-explained">
              <Image
                src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1746949778/websoket_fi0nin.jpg"
                alt="WebSockets in 100 Seconds: An In Depth Guide to WebSockets, Socket.IO, and the Future of Real Time Communication"
                width={400}
                height={250}
              />
              <h2>
                {" "}
                WebSockets in 100 Seconds: An In Depth Guide to WebSockets,
                Socket.IO, and the Future of Real Time Communication
              </h2>
            </Link>
          </div>
          <div>
            <Link href="code-report/websocket-polling">
              <Image
                src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1746868335/miguel-angel-padrinan-alba-rX15QZv2Tng-unsplash_qbwgmy.jpg"
                alt="WebSockets vs. Polling vs. Long Polling: How Web Sockets work | System Design Interview Basics"
                width={600}
                height={350}
              />
              <h2>
                {" "}
                WebSockets vs. Polling vs. Long Polling: How Web Sockets work |
                System Design Interview Basics
              </h2>
            </Link>
          </div>
          <div>
            <Link href="/code-report/http1-http2-http3">
              <Image
                src="https://res.cloudinary.com/dhgjhspsp/image/upload/v1746865685/pexels-padrinan-1591059_tc0afv.jpg"
                alt="HTTP 1 Vs HTTP 2 Vs HTTP 3!"
                width={400}
                height={250}
              />
              <h2>HTTP 1 Vs HTTP 2 Vs HTTP 3!</h2>
            </Link>
          </div>
        </aside>
        <MoreArticles route={"/latest"} />
      </section>
    </>
  );
}
