import { NavLink } from "react-router-dom";

const CourseNavLinks = () => {
  return (
    <div>
      <main className="nav-links">
        <NavLink to={"/HTMLcourse/IntroductionH"}>
          <span title="HTML course">HTML</span>
        </NavLink>
        <NavLink to={"/cssCourse/introduction"}>
          {" "}
          <span title="CSS course">CSS</span>{" "}
        </NavLink>
        {/* <NavLink to={"/videoTutorial"}>
          {" "}
          <span title="Learn by watching video tutorials">Videos</span>{" "}
        </NavLink> */}
        <NavLink to={"/javascriptCourse"}>
          {" "}
          <span title="Javascript course">JavaScript</span>{" "}
        </NavLink>
        <NavLink to={"/react"}>
          {" "}
          <span title="React course">React</span>{" "}
        </NavLink>
        <NavLink to={"/KnowledgeAndSkills"}>
          {" "}
          <span title=" Skills and Knowledge">Skills & 📚</span>{" "}
        </NavLink>
      </main>
    </div>
  );
};

export default CourseNavLinks;
