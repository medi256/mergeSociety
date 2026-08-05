import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./section.css";

const Section5 = () => {
  const blogPosts = [
    {
      id: 1,
      title:
        "How Tencent Quietly Built a Digital Empire: The Untold Story of Pony Ma and China’s Homegrown Tech Giant",
      image:
        "/mergesociety/Ma-Huateng_uii6rl_nthmg3.jpg",
      alt: "How Tencent Quietly Built a Digital Empire: The Untold Story of Pony Ma and China’s Homegrown Tech Giant",
      date: " April 27, 2025",
      articleRoute: "pony-ma",
    },
    {
      id: 2,
      title:
        "The Fine Line Between Faking It and Fraud: How Fake It Till You Make It Shapes Success, Scandal, and Everything In Between",
      image:
        "/mergesociety/fakeit-800x445_zlq56h_dgu41v.jpg",
      alt: "The Fine Line Between Faking It and Fraud: How Fake It Till You Make It Shapes Success, Scandal, and Everything In Between",
      date: " April 27, 2025",
      articleRoute: "fake-it",
    },
    {
      id: 3,
      title:
        " How Snapchat Became a Social Media Giant—Yet Still Struggles to Make Money",
      image:
        "/mergesociety/alexander-shatov-fRjjnN_8njo-unsplash.jpg",
      alt: " How Snapchat Became a Social Media Giant—Yet Still Struggles to Make Money",
      date: " April 27, 2025",
      articleRoute: "snap-chat",
    },
    {
      id: 4,
      title:
        "Tech’s Hidden Shift: Why the 2025 Job Market Is Leaving So Many Behind—Despite Record Profits",
      image:
        "/mergesociety/clem-onojeghuo-fY8Jr4iuPQM-unsplash_io8ddi_lv15hh.jpg",
      alt: "Tech’s Hidden Shift: Why the 2025 Job Market Is Leaving So Many  Behind—Despite Record Profits",
      date: " April 27, 2025",
      articleRoute: "hiring",
    },
    {
      id: 5,
      title:
        "Satya Nadella on the Future Beyond SaaS: How AI Agents Are Reshaping Business, Science, and Opportunit",
      image:
        "/mergesociety/MS-Exec-Nadella-Satya-2017-08-31-22__cropped_hwaupv_fn8ksz.jpg",
      alt: " Satya Nadella on the Future Beyond SaaS: How AI Agents Are Reshaping   Business, Science, and Opportunit",
      date: " April 27, 2025",
      articleRoute: "satya",
    },
    {
      id: 6,
      title:
        "Nvidia’s Meteoric Rise: How the AI Chip Giant Became the World’s Most Valuable—and What Could Take It Down",
      image:
        "/mergesociety/boliviainteligente--ZS3S9a3jEQ-unsplash_syfnrb_wwtzcc.jpg",
      alt: "Nvidia’s Meteoric Rise: How the AI Chip Giant Became the World’s Most Valuable—and What Could Take It Down",
      date: " April 30, 2025",
      articleRoute: "invidia",
    },
  ];

  return (
    <>
      <div className="h-ai">
        <h2>Startup Stories</h2>
      </div>

      <div className="bg-grid-4">
        {blogPosts.map((project) => (
          <Link
            key={project.id}
            href={`/startup-stories/${project.articleRoute}`}
            passHref
          >
            <div className="bg-image-4">
              <Image
                src={project.image}
                alt={project.alt}
                width={600}
                height={400}
                className="bg-image-4"
                priority
              />
            </div>
            <div className="bg-content-4">
              <h2 className="bg-title-4">{project.title}</h2>
              <time
                className="bg-date-4"
                dateTime={new Date(project.date).toISOString()}
              >
                {project.date}
              </time>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Section5;
