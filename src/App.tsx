import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Home";
import Technique from "./components/Technic";
import "./styles/App.scss";
import Phone from "./components/Phone";
import Work from "./components/Work";
import Products from "./components/Products";
import Outsourcing from "./components/Outsourcing";
import Houses from "./components/Houses";
import Recyclables from "./components/Recyclables";
import AboutUs from "./components/AboutUs";
import Projects from "./components/Projects";
import Footer from "./components/Footer/Footer";
import Gellery from "./components/Gellery";
import Reasons from "./components/Reasons/Reasons";
import CurrTechnic from "./components/CurrTechnic";
function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Phone></Phone>
        <Routes>
          <Route path="/buddesign/" Component={Main}></Route>
          <Route path="/buddesign/technique" Component={Technique}></Route>
          <Route
            path="/buddesign/technique/tipper"
            Component={() => <CurrTechnic type={"tipper"}></CurrTechnic>}
          ></Route>
          <Route
            path="/buddesign/technique/excavator"
            Component={() => <CurrTechnic type={"excavator"}></CurrTechnic>}
          ></Route>
          <Route
            path="/buddesign/technique/bulldozer"
            Component={() => <CurrTechnic type={"bulldozer"}></CurrTechnic>}
          ></Route>
          <Route path="/buddesign/technique/other" Component={() => <CurrTechnic type={"other"}></CurrTechnic>}></Route>
          <Route path="/buddesign/works" Component={Work}></Route>
          <Route path="/buddesign/products" Component={Products}></Route>
          <Route path="/buddesign/outsourcing" Component={Outsourcing}></Route>
          <Route path="/buddesign/houses" Component={Houses}></Route>
          <Route path="/buddesign/recyclables" Component={Recyclables}></Route>
          <Route path="/buddesign/about" Component={AboutUs}></Route>
          <Route path="/buddesign/projects" Component={Projects}></Route>
          <Route path="/buddesign/gallery" Component={Gellery}></Route>
        </Routes>
        <Reasons />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
