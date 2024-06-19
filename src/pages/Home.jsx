import { Typewriter } from "react-simple-typewriter";
import TextSpan from "../component/TextSpan";
import ParticlesComponent from "../component/ParticlesComponent";
import Navbar from "../component/Navbar";
import Image from "../assets/image/image1.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const text = "My Portofolio".split("");
  const text2 = "Hildan Rizki".split("");
  const text3 = "I am a   ".split("");
  const navigate = useNavigate();
  const ChatAi = () => {
    navigate("/chat/ai");
  };

  return (
    <div className="app">
      <Navbar />

      <ParticlesComponent id="particles"></ParticlesComponent>
      <div className="content">
        <div>
          {text.map((t, i) => (
            <TextSpan key={i}>{t === " " ? "\u00A0" : t}</TextSpan>
          ))}
        </div>
        <div>
          {text2.map((t, i) => (
            <TextSpan key={i}>{t === " " ? "\u00A0" : t}</TextSpan>
          ))}
        </div>
        <div className="text-berjalan">
          {text3.map((t, i) => (
            <TextSpan key={i}>{t === " " ? "\u00A0" : t}</TextSpan>
          ))}

          <Typewriter
            className="text-berjalan2"
            words={[
              "UI/UX Designer",
              "Web Developer",
              "Fullstack Developer",
              "Editor",
            ]}
            loop
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>
      </div>
      <div className="buletan" onClick={ChatAi}>
        <img src={Image} alt="helpp" />
        <p>chat ai</p>
      </div>
    </div>
  );
};

export default Home;
