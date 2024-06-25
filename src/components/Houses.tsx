import "./Technic/TechnicMain/TechnicMain.scss";
import HousesCards from "./Houses/HousesCards/HousesCards";
import HousesMain from "./Houses/HousesMain/HousesMain";
import HousesAbout from "./Houses/HousesAbout/HousesAbout";
import { useEffect, useState } from "react";
import db from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const Houses = () => {
  const [houses, setHouses] = useState<any>([]);
  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    if (houses.length !== 0) {
      setIsLoad(false);
    }
  }, [houses]);

  useEffect(() => {
    const colRef = collection(db, "houses");
    getDocs(colRef)
      .then((snapshot) => {
        let houses: any = [];
        snapshot.docs.forEach((doc) => {
          houses.push({ ...doc.data(), id: doc.id });
        });
        houses = houses.sort((a: any, b: any) => a.id - b.id);
        setHouses(houses);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <>
      <div className="Main">
        <HousesMain />
        <HousesAbout />
        {isLoad ? <>Loading...</> : <HousesCards houses={houses} />}
      </div>
    </>
  );
};

export default Houses;
