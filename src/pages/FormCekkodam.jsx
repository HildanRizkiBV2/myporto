import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const FormCekkodam = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const handleEnter = () => {
    navigate("/cekkodam?name=" + name);
    console.log(name);
  };
  return (
    <div className="container-bg">
      <IoIosArrowBack
        onClick={() => window.history.back()}
        style={{ fontSize: "50px", fontWeight: "bold" }}
      />
      <div className="container-formkodam">
        <div className="container-form">
          <div className="form">
            <h1 style={{ color: "blue" }}>
              Web Cek Kodam{" "}
              <span style={{ color: "red", fontSize: "1rem" }}> Asli</span>
            </h1>
            <label htmlFor="name">Siapa nama anda ?</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Masukkan nama anda"
              onChange={(e) => setName(e.target.value)}
            />

            <button onClick={() => handleEnter()}>Cek Kodam</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormCekkodam;
