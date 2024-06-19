import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ChatAiPage from "./pages/ChatAiPage";
import About from "./pages/About";
import CekKodam from "./pages/CekKodam";
import FormCekkodam from "./pages/FormCekkodam";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/chat/ai" Component={ChatAiPage} />
        <Route path="/about" Component={About} />
        <Route path="/cekkodam" Component={CekKodam} />
        <Route path="/form" Component={FormCekkodam} />
      </Routes>
    </div>
  );
};

export default App;
