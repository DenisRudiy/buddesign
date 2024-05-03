import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Home";
import Technique from "./components/Technique";
import "./styles/App.scss";
import Phone from "./components/Phone";
import Work from "./components/Work";
import Products from "./components/Products";
import Outsourcing from "./components/Outsourcing";
import Houses from "./components/Houses";
import Recyclables from "./components/Recyclables";
import AboutUs from "./components/AboutUs";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Phone></Phone>
        <Routes>
          <Route path="/buddesign/" Component={Main}></Route>
          <Route path="/buddesign/technique" Component={Technique}></Route>
          <Route path="/buddesign/works" Component={Work}></Route>
          <Route path="/buddesign/products" Component={Products}></Route>
          <Route path="/buddesign/outsourcing" Component={Outsourcing}></Route>
          <Route path="/buddesign/houses" Component={Houses}></Route>
          <Route path="/buddesign/recyclables" Component={Recyclables}></Route>
          <Route path="/buddesign/about" Component={AboutUs}></Route>
          <Route path="/buddesign/projects" Component={Projects}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;