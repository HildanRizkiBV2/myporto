import { useState, useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
const CekKodam = () => {
  const [kodam, setKodam] = useState([]);
  const [name, setName] = useState([]);
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get("name");
    if (name) {
      setName(name);
    }
  }, []);
  const arr = ["ratu iblis"];

  useEffect(() => {
    const kodamnya = arr[Math.floor(Math.random() * arr.length)];
    setKodam(kodamnya);
  }, []);
  return (
    <div className="cekkodam-bg">
      <IoIosArrowBack
        onClick={() => window.history.back()}
        style={{ fontSize: "50px", fontWeight: "bold" }}
      />
      <div className="container-cekkodam">
        <div className="cekkodam">
          <h1>Cek kodam</h1>
          <h3>di dalam diri {name} saya merasakan adanya </h3>
          <h3>kodam</h3>
          <h1>{kodam}</h1>

          <h3>terima kasih</h3>
        </div>
      </div>
    </div>
  );
};

export default CekKodam;
