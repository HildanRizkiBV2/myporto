import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { requestGroq } from "../component/Groq";
import Typewriter from "../component/Typingwriter";
import { IoIosArrowBack } from "react-icons/io";

const ChatAiPage = () => {
  const [bar, setBar] = useState(false);
  const [search, setSearch] = useState("");
  const [pertanyaan, setpertanyaan] = useState("");
  const [an, setAn] = useState("");
  const navigate = useNavigate();

  const SearchSubmit = async () => {
    setpertanyaan(search);
    if (search === "") {
      setAn(search);
      setSearch("");
    } else {
      setAn("");
      setSearch("");
    }
    const ai = await requestGroq(search);
    setAn(ai);
    console.log(an);
  };
  const GoToback = () => {
    navigate("/");
  };
  useEffect(() => {}, [bar]);
  return (
    <div>
      <div className="container">
        <div className="navbar">
          <h1 onClick={GoToback}>
            <IoIosArrowBack style={{ fontSize: "50px", fontWeight: "bold" }} />
          </h1>
          <p>Chat Ai</p>
        </div>
        <div className="container-content">
          <div className="content-response">
            <div className="container-response">
              {pertanyaan === "" ? null : (
                <div className="text-response">
                  <p>{pertanyaan}</p>
                </div>
              )}
            </div>
            {an === "" ? null : (
              <div className="answer">
                <Typewriter text={an} delay={10} />
              </div>
            )}
          </div>
        </div>
        {bar ? <div className="menu-ai"></div> : null}

        <div className="search">
          <div className="bars" onClick={() => setBar(!bar)}>
            {bar ? <h3>-</h3> : <h3>=</h3>}
          </div>
          <input
            placeholder="Masukkan Pertanyaan"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={SearchSubmit}>ENTER</button>
        </div>
      </div>
    </div>
  );
};

export default ChatAiPage;
