import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import React, {useEffect, useState} from "react";
import Main from "./components/Home";
import Technique from "./components/Technic";
import "./styles/App.scss";
import Phone from "./components/Phone";
import Work from './components/Work'
import Products from "./components/Products";
import Outsourcing from "./components/Outsourcing";
import Houses from "./components/Houses";
import Recyclables from "./components/Recyclables";
import AboutUs from "./components/AboutUs";
import Projects from "./components/Projects";
import Footer from "./components/Footer/Footer";
import TechnicCardsTypes from "./components/Technic/TechnicCardsTypes/TechnicCardsTypes";
import { TypeTechnicTypes, fetchTechnicTypes } from "./services/dataService";
import Gellery from "./components/Gellery";
import Reasons from "./components/Reasons/Reasons";
function App() {
  const [technics, setTechnics] = useState<TypeTechnicTypes[]>([]);
  
  useEffect(() => {
    const loadTechnics = async () => {
      try {
        const data = await fetchTechnicTypes();
        setTechnics(data);
      } catch (error) {
        console.error('Помилка при завантаженні продуктів:', error);
      }
    };

    loadTechnics();
  }, []);
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Phone></Phone> 
        <Routes>
          <Route path="/" Component={Main}></Route>
          <Route path="/technique" Component={Technique}></Route>
          <Route path="/works" Component={Work}></Route>
          <Route path="/products" Component={Products}></Route>
          <Route path="/outsourcing" Component={Outsourcing}></Route>
          <Route path="/houses" Component={Houses}></Route>
          <Route path="/recyclables" Component={Recyclables}></Route>
          <Route path="/about" Component={AboutUs}></Route>
          <Route path="/projects" Component={Projects}></Route>
          <Route path="/technique/types" Component={(props) => <TechnicCardsTypes {...props}  technics={technics}/>} />
          <Route path="/gallery" Component={Gellery}></Route>
        </Routes>
        <Reasons/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
