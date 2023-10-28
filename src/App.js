import { HashRouter, Route, Routes } from "react-router-dom";
import Main from "./Main.jsx";
import Sec from "./Sec"

function App() {

  return <HashRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/sales" element={<Sec />} />
    </Routes>
  </HashRouter>
}


export default App;