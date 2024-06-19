import { useNavigate } from "react-router-dom";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { DiMysql } from "react-icons/di";
import { SiAstro } from "react-icons/si";
const About = () => {
  const navigate = useNavigate();

  const GoToback = () => {
    navigate("/");
  };
  return (
    <div style={{ backgroundColor: "black", minHeight: "100vh" }}>
      <div className="navbar">
        <h1 onClick={GoToback}>{"<"}</h1>
        <h1>About</h1>
      </div>
      <div className="container-about">
        <div className="content-about">
          <h1>About me</h1>
          <h3>My skill</h3>
          <div className="content-about-icon">
            <FaReact color="white" style={{ fontSize: "100px" }} />
            <FaNodeJs color="white" style={{ fontSize: "100px" }} />
            <SiAstro color="white" style={{ fontSize: "100px" }} />
            <RiNextjsFill color="white" style={{ fontSize: "100px" }} />
            <RiTailwindCssFill color="white" style={{ fontSize: "100px" }} />
            <DiMysql color="white" style={{ fontSize: "100px" }} />
            <FaPython color="white" style={{ fontSize: "100px" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
