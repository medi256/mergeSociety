

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { PolicyView } from "./Policy";

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: "#191B21",
      color: "#FFC107",
      padding: "20px 10px",
      textAlign: "center",
      marginTop: "20px"
    }}>
      <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginBottom: "10px" }}>
        <a href="#" style={{ color: "#FFC107", fontSize: "20px" }}><FaFacebookF /></a>
        <a href="#" style={{ color: "#FFC107", fontSize: "20px" }}><FaTwitter /></a>
        <a href="#" style={{ color: "#FFC107", fontSize: "20px" }}><FaInstagram /></a>
        <a href="#" style={{ color: "#FFC107", fontSize: "20px" }}><FaLinkedin /></a>
      </div>
      <nav style={{ marginBottom: "10px" }}>
        <a href="#" style={{ color: "#FFC107", margin: "0 15px", textDecoration: "none" }}>Home</a>
        <a href="#" style={{ color: "#FFC107", margin: "0 15px", textDecoration: "none" }}>Courses</a>
        <a href="#" style={{ color: "#FFC107", margin: "0 15px", textDecoration: "none" }}>Contact</a>
      </nav>

      <PolicyView/>

      <p style={{ fontSize: "14px" }}>© {new Date().getFullYear()} LearnCodeEra. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
