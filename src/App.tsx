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
import BtnUp from "./components/BtnUp";
import { useEffect, useState } from "react";
import CurrHouse from "./components/CurrHouse";
function App() {
  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoad(false);
    }, 3400);
  }, []);

  return (
    <div className="App">
      <Router>
        {isLoad === true ? (
          <div className="Preloader">
            <div
              className="PreloaderPattern"
              style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/patrn1.png"})` }}
            ></div>
            <section className="loader">
              <div>
                <div>
                  <span className="one h6"></span>
                  <span className="two h3"></span>
                </div>
              </div>

              <div>
                <div>
                  <span className="one h1"></span>
                </div>
              </div>

              <div>
                <div>
                  <span className="two h2"></span>
                </div>
              </div>
              <div>
                <div>
                  <span className="one h4"></span>
                </div>
              </div>
            </section>
          </div>
        ) : (
          <></>
        )}
        <Header></Header>
        <Phone></Phone>
        <BtnUp></BtnUp>
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
          <Route path="/buddesign/houses/:id" Component={() => <CurrHouse data={"bulldozer"}></CurrHouse>}></Route>
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
