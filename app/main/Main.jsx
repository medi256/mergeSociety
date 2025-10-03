import Link from "next/link"; // ← you missed this import!
import "./main.css";
import { FaGithub, FaInstagram, FaSitemap } from "react-icons/fa";

export default function NewsTicker() {
  return (
    <div className="wrapper">
      <br />
      <br />
      <div className="flex space-x-6 text-2xl mt-4">
        {/* GitHub */}
        <Link href="https://github.com/medi256" target="_blank">
          <FaGithub />
        </Link>

        {/* Instagram */}
        <Link href="https://www.instagram.com/medi45.of" target="_blank">
          <FaInstagram />
        </Link>

        {/* Sitemap */}
        <Link href="/sitemap.xml">
          <FaSitemap />
        </Link>
      </div>
    </div>
  );
}
