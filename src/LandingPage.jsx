import ScrollToTop from "./ScrollToTop";
import { NavLink } from "react-router-dom";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import React from "react";
import Footer from "./Footer";

const courses = {
  HTML: [
    { title: "HTML Full Course", url: "https://www.youtube.com/watch?v=pQN-pnXPaVg", thumbnail: "https://img.youtube.com/vi/pQN-pnXPaVg/hqdefault.jpg" },
    { title: "HTML Forms", url: "https://www.youtube.com/watch?v=XzhLr2ngAeM", thumbnail: "https://img.youtube.com/vi/XzhLr2ngAeM/hqdefault.jpg" },
    { title: "HTML Tables", url: "https://www.youtube.com/watch?v=ZP16kpsLf4Q", thumbnail: "https://img.youtube.com/vi/ZP16kpsLf4Q/hqdefault.jpg" },
    { title: "HTML Semantic Tags", url: "https://www.youtube.com/watch?v=UB1O30fR-EE", thumbnail: "https://img.youtube.com/vi/UB1O30fR-EE/hqdefault.jpg" },
    { title: "HTML5 New Features", url: "https://www.youtube.com/watch?v=bWPMSSsVdPk", thumbnail: "https://img.youtube.com/vi/bWPMSSsVdPk/hqdefault.jpg" },
  ],
  CSS: [
    { title: "CSS Crash Course", url: "https://www.youtube.com/watch?v=yfoY53QXEnI", thumbnail: "https://img.youtube.com/vi/yfoY53QXEnI/hqdefault.jpg" },
    { title: "Flexbox & Grid", url: "https://www.youtube.com/watch?v=6mM5i5JndpA", thumbnail: "https://img.youtube.com/vi/6mM5i5JndpA/hqdefault.jpg" },
    { title: "CSS Animations", url: "https://www.youtube.com/watch?v=YszONjKpgg4", thumbnail: "https://img.youtube.com/vi/YszONjKpgg4/hqdefault.jpg" },
    { title: "CSS Variables", url: "https://www.youtube.com/watch?v=PHO6TBq_auI", thumbnail: "https://img.youtube.com/vi/PHO6TBq_auI/hqdefault.jpg" },
    { title: "Responsive Design", url: "https://www.youtube.com/watch?v=srvUrASNj0s", thumbnail: "https://img.youtube.com/vi/srvUrASNj0s/hqdefault.jpg" },
  ],
  JavaScript: [
    { title: "JavaScript Basics", url: "https://www.youtube.com/watch?v=W6NZfCO5SIk", thumbnail: "https://img.youtube.com/vi/W6NZfCO5SIk/hqdefault.jpg" },
    { title: "ES6+ JavaScript", url: "https://www.youtube.com/watch?v=NCwa_xi0Uuc", thumbnail: "https://img.youtube.com/vi/NCwa_xi0Uuc/hqdefault.jpg" },
    { title: "JavaScript DOM", url: "https://www.youtube.com/watch?v=wiozYyXQEVk", thumbnail: "https://img.youtube.com/vi/wiozYyXQEVk/hqdefault.jpg" },
    { title: "Async JavaScript", url: "https://www.youtube.com/watch?v=PoRJizFvM7s", thumbnail: "https://img.youtube.com/vi/PoRJizFvM7s/hqdefault.jpg" },
    { title: "JavaScript Events", url: "https://www.youtube.com/watch?v=XF1_MlZ5l6M", thumbnail: "https://img.youtube.com/vi/XF1_MlZ5l6M/hqdefault.jpg" },
  ],
  React: [
    { title: "React JS Intro", url: "https://www.youtube.com/watch?v=w7ejDZ8SWv8", thumbnail: "https://img.youtube.com/vi/w7ejDZ8SWv8/hqdefault.jpg" },
    { title: "React Hooks", url: "https://www.youtube.com/watch?v=5LrDIWkK_Bc", thumbnail: "https://img.youtube.com/vi/5LrDIWkK_Bc/hqdefault.jpg" },
    { title: "React Router", url: "https://www.youtube.com/watch?v=Ul3y1LXxzdU", thumbnail: "https://img.youtube.com/vi/Ul3y1LXxzdU/hqdefault.jpg" },
    { title: "React State Management", url: "https://www.youtube.com/watch?v=35lXWvCuM8o", thumbnail: "https://img.youtube.com/vi/35lXWvCuM8o/hqdefault.jpg" },
    { title: "Next.js for Beginners", url: "https://www.youtube.com/watch?v=8aGhZQkoFbQ", thumbnail: "https://img.youtube.com/vi/8aGhZQkoFbQ/hqdefault.jpg" },
  ],
};

const CourseSection = ({ title, courses }) => (
  <section className="courses-section" style={{ padding: "40px 20px", backgroundColor: "#191B21" }}>
    <h2 style={{ textAlign: "center", color: "#FFC107", fontSize: "28px", marginBottom: "20px" }}>{title}</h2>
    <div className="courses-container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "15px", justifyContent: "center", padding: "0 10px" }}>
      {courses.map((course, index) => (
        <div key={index} className="course-card" style={{ backgroundColor: "#343A45", borderRadius: "8px", padding: "10px", textAlign: "center", color: "#FFC107", boxShadow: "0 4px 8px rgba(0,0,0,0.2)", transition: "transform 0.3s ease", width: "200px" }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <img src={course.thumbnail} alt={course.title} style={{ width: "100%", borderRadius: "5px", marginBottom: "8px" }} />
          <h3 style={{ fontSize: "16px" }}>{course.title}</h3>
          <a href={course.url} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", marginTop: "8px", padding: "6px 12px", backgroundColor: "#FFC107", color: "#191B21", borderRadius: "5px", textDecoration: "none", fontWeight: "bold", fontSize: "14px" }}>Watch Now</a>
        </div>
      ))}
    </div>
  </section>
);

const LandingPage = () => {
  return (
    <div>
      <div className="landing-page">
        <ScrollToTop />
        <div>
          <header>
            <h2 style={{ color: "#343A45" }}>Welcome to LearnCodeEra, your gateway to web development!</h2>
            <button>
              <NavLink to={"/HTMLcourse/IntroductionH"} style={{ textDecoration: "none", color: "#fff" }}>
                <span title="HTML course">Get Started</span>
              </NavLink>
            </button>
          </header>
        </div>
      </div>
 {/* New Section for Featured Courses */}
 <section className="featured-courses" style={{ padding: "40px 20px", backgroundColor: "#191B21" }}>
        <h2 style={{ textAlign: "center", color: "#FFC107", fontSize: "28px", marginBottom: "20px" }}>
          Explore Web Development
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "15px", justifyContent: "center", padding: "0 10px" }}>
          <div style={{ backgroundColor: "#343A45", padding: "20px", borderRadius: "10px", textAlign: "center", color: "#FFC107" }}>
            <FaHtml5 size={50} color="#FFC107" />
            <h3>HTML</h3>
            <p>Learn the basics of HTML and build strong web pages.</p>
          </div>
          <div style={{ backgroundColor: "#343A45", padding: "20px", borderRadius: "10px", textAlign: "center", color: "#FFC107" }}>
            <FaCss3Alt size={50} color="#FFC107" />
            <h3>CSS</h3>
            <p>Style your websites with modern CSS techniques.</p>
          </div>
          <div style={{ backgroundColor: "#343A45", padding: "20px", borderRadius: "10px", textAlign: "center", color: "#FFC107" }}>
            <FaJs size={50} color="#FFC107" />
            <h3>JavaScript</h3>
            <p>Make your websites interactive with JavaScript.</p>
          </div>
          <div style={{ backgroundColor: "#343A45", padding: "20px", borderRadius: "10px", textAlign: "center", color: "#FFC107" }}>
            <FaReact size={50} color="#FFC107" />
            <h3>React.js</h3>
            <p>Build dynamic web apps with React.js.</p>
          </div>
        </div>
      </section>
      {/* Sections for each category */}
      {Object.entries(courses).map(([category, courseList]) => (
        <CourseSection key={category} title={category} courses={courseList} />
      ))}

      <Footer />
    </div>
  );
};

export default LandingPage;
