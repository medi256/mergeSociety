import React, { useState } from "react";
import CourseNavLinks from "./CourseNavLinks";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import About from "./About"
import Contact from "./Contact"
import Services  from "./Services"
const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const sidebarVariants = {
    open: { left: "0" },
    closed: { left: "-250px" },
  };

  const sidebarStyle = {
    width: "250px",
    backgroundColor: "#191B21",
    color: "#fff",
    padding: "10px",
    position: "fixed",
    top: "0",
    height: "100%",
    transition: "left 0.3s ease",
    overflowY: "auto",
    boxSizing: "border-box",
    zIndex: 200,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  return (
    <div>
      <header
        style={{
          backgroundColor: "#343A45",
          color: "#ffc107",
          padding: "10px 0",
          position: "fixed",
          top: "0",
          left: "0",
          right: "0",
          zIndex: "100",
          width: "100%",
          height: "6rem",
        }}
      >
        <div
          style={{
            width: "80%",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ color: "#ffc107", fontSize: "24px" }}>
              <i className="fa-solid fa-code"></i>
            </span>
            <h1 style={{ marginLeft: "10px", fontSize: "24px" }}>
            <NavLink to="/" style={{ cursor: "pointer", color: "#ffc107", textDecoration: "none" }}>
          LearnCodeEra
        </NavLink></h1>
          </div>
          <div>
            <button
              onClick={toggleSidebar}
              style={{
                background: "none",
                border: "none",
                color: "#ffc107",
                fontSize: "24px",
                cursor: "pointer",
              }}
            >
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
        <nav
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10px",
          }}
        >
          <CourseNavLinks />
        </nav>
      </header>

      <motion.div
        animate={sidebarOpen ? "open" : "closed"}
        variants={sidebarVariants}
        style={sidebarStyle}
      >
        <button
          onClick={toggleSidebar}
          style={{
            background: "none",
            border: "none",
            color: "#ffc107",
            fontSize: "24px",
            cursor: "pointer",
            marginBottom: "10px",
            background: "#191B21",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
                    <i className="fa-solid fa-code"></i>
          <i className="fa-solid fa-xmark" style={{marginLeft:"11rem"}}></i>
        </button>

        <ul style={{ listStyle: "none", padding: "0", marginLeft:"8px"}}>
          {/* {['Home', 'About', 'Contact', 'Services', 'Portfolio'].map((item, index) => (
            <li key={index} style={{ margin: "15px 0" }}>
              <a href="#" style={{ color: "#ffc107", textDecoration: "none", fontSize: "18px" }}>{item}</a>
            </li>
          ))} */}

          <li style={{ margin: "15px 0" , color: "#ffc107", textDecoration: "none", fontSize: "18px", cursor:"pointer" }}> 
  <NavLink to={"/"} style={{textDecoration:"none", color: "#ffc107"}}>
          <span>Home</span>
        </NavLink></li>
        <li style={{margin: "15px 0" , color: "#ffc107", textDecoration: "none", fontSize: "18px", cursor:"pointer" }}> 
  <NavLink to="/About" style={{textDecoration:"none", color: "#ffc107"}}>
          <span>About</span>
        </NavLink></li>

        <li style={{margin: "15px 0" , color: "#ffc107", textDecoration: "none", fontSize: "18px", cursor:"pointer" }}> 
  <NavLink to="Contact" style={{textDecoration:"none", color: "#ffc107"}}>
          <span>Contact</span>
        </NavLink></li>

        <li style={{ margin: "15px 0" , color: "#ffc107", textDecoration: "none", fontSize: "18px", cursor:"pointer" }}> 
  <NavLink to={"Services"} style={{textDecoration:"none", color: "#ffc107"}}>
          <span>Servies</span>
        </NavLink></li>

        </ul>

        <div style={{ color: "#ffc107", marginLeft:"8px",  }}>
   
          <p style={{color:"white"}}>Email Us At</p>
          <p>contact@glintsite.com</p>
          <p>info@glintsite.com</p>
          <p style={{color:"white"}}>Call Us At</p>
          <p> <span style={{color:"white"}}>Phone:</span> (+63) 555 1212</p>
          <p><span style={{color:"white"}}>Mobile:</span> (+63) 555 0100</p>
          <p>
            
          </p>
        </div>

        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          marginBottom: "20px",
        }}>
          {[
            { icon: "fa-facebook", link: "https://www.facebook.com", name: "Facebook" },
            { icon: "fa-twitter", link: "https://www.twitter.com", name: "Twitter" },
            { icon: "fa-instagram", link: "https://www.instagram.com", name: "Instagram" },
            { icon: "fa-linkedin", link: "https://www.linkedin.com", name: "LinkedIn" },
            { icon: "fa-youtube", link: "https://www.youtube.com", name: "YouTube" },
            { icon: "fa-github", link: "https://www.github.com", name: "GitHub" },
          ].map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              style={{ color: "#ffc107", fontSize: "20px", position: "relative" }}
            >
              <i className={`fa-brands ${social.icon}`}></i>
              <span style={{
                position: "absolute",
                bottom: "-25px",
                left: "50%",
                transform: "translateX(-50%)",
                background: "#343A45",
                color: "#ffc107",
                padding: "3px 7px",
                borderRadius: "5px",
                fontSize: "12px",
                opacity: 0,
                transition: "opacity 0.3s ease",
              }}
                className="tooltip"
              >
                {social.name}
              </span>
              <style>{`
                a:hover .tooltip {
                  opacity: 1;
                }
              `}</style>
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default App;


