import { useEffect, useState } from "react";
import OutsourcingMain from "./Outsourcing/OutsourcingMain/OutsourcingMain";
import OutsourcingCards from "./Outsourcing/OutsourcingCards/OutsourcingCards";
import OutsourcingAbout from "./Outsourcing/OutsourcingAbout/OutsourcingAbout";
import { collection, getDocs } from "firebase/firestore";
import db from "../firebase";

const Outsourcing = () => {
  const [outsourcing, setOtsourcing] = useState<any>([]);
  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    if (outsourcing.length !== 0) {
      setIsLoad(false);
    }
  }, [outsourcing]);

  useEffect(() => {
    const colRef = collection(db, "outsorcing");
    getDocs(colRef)
      .then((snapshot) => {
        let outsorcing: any = [];
        snapshot.docs.forEach((doc) => {
          outsorcing.push({ ...doc.data(), id: doc.id });
        });
        outsorcing = outsorcing.sort((a: any, b: any) => a.id - b.id);
        setOtsourcing(outsorcing);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <div className="Main">
        <OutsourcingMain />
        <OutsourcingAbout />
        {isLoad ? <>Loading...</> : <OutsourcingCards outsourcing={outsourcing} />}
      </div>
    </>
  );
};

export default Outsourcing;
