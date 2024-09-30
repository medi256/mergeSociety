import ScrollToTop from "../ScrollToTop";

export const metadata = {
  title:
    "Learn Web Development Through Engaging Video Tutorials | YourPlatform",
  description:
    "Explore our extensive library of video tutorials covering HTML, JavaScript, and React.js. Perfect for beginners and experienced developers looking to enhance their skills. Start your coding journey today!",
  keywords:
    "web development tutorials, video tutorials, HTML tutorials, JavaScript videos, React.js courses, coding for beginners, learn to code, online programming courses, front-end development, web design tutorials",
  openGraph: {
    title: "Master Web Development with Video Tutorials | YourPlatform",
    description:
      "Join our interactive platform to learn web development with step-by-step video tutorials. From HTML basics to advanced React.js concepts, we've got you covered!",
  },
};

const LearnByWatchingVideos = () => {
  return (
    <div>
      <div className="welcome-header">
        <ScrollToTop />
        <p>
          Welcome to our web development learning platform! Dive into the world
          of web development with easy-to-follow video tutorials. Whether you're
          a beginner or looking to enhance your skills, our step-by-step guides
          will help you grasp web development concepts effortlessly. Just press
          play and start your coding journey!
        </p>
        <h2>HTML videos</h2>

        <div className="container-for-videos">
          <div>
            <iframe
              src="https://www.youtube.com/embed/GzCm-kVOjwo?si=RDkiWyK-XVbjrbwQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              width="560"
              height="315"
            ></iframe>
          </div>

          <div>
            <iframe
              src="https://www.youtube.com/embed/kUMe1FH4CHE?si=-lKu41UeA99oUEO3"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              width="560"
              height="315"
            ></iframe>
          </div>
        </div>

        <div className="container-for-videos">
          <div>
            <iframe
              src="https://www.youtube.com/embed/OXGznpKZ_sA?si=eY6Jr8pc4_XSyDlA"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              width="560"
              height="315"
            ></iframe>
          </div>

          <div>
            <iframe
              src="https://www.youtube.com/embed/Icf5D3fEKbM?si=RNDcTN_zhzIpG-MJ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              width="560"
              height="315"
            ></iframe>
          </div>
        </div>

        <h2>Javascript videos</h2>
        <div className="container-for-videos">
          <div>
            <iframe
              src="https://www.youtube.com/embed/8dWL3wF_OMw?si=cb18oo_yL_T5L0-t"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              width="560"
              height="315"
            ></iframe>
          </div>
          <div>
            <iframe
              src="https://www.youtube.com/embed/PkZNo7MFNFg?si=4aYJEikCuqDF0C9r"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              width="560"
              height="315"
            ></iframe>
          </div>
        </div>
        <h2>React.js videos</h2>
        <div className="container-for-videos">
          <div>
            <iframe
              src="https://www.youtube.com/embed/2-crBg6wpp0?si=mcW8G-H-NIyc3EIq"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              width="560"
              height="315"
            ></iframe>
          </div>
          <div>
            <iframe
              src="https://www.youtube.com/embed/LDB4uaJ87e0?si=QdqcS_UPuQWQgzbX"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              width="560"
              height="315"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnByWatchingVideos;
