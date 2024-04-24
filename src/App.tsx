import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Technique from "./components/Technic";
import "./styles/App.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" Component={Main}></Route>
          <Route path="/technique" Component={Technique}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
