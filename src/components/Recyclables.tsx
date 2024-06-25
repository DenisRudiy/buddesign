import RecyclablesMain from "./Recyclables/RecyclablesMain/RecyclablesMain";
import RecyclablesAbout from "./Recyclables/RecyclablesAbout/RecyclablesAbout";
import RecyclablesCards from "./Recyclables/RecyclablesCards/RecyclablesCards";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../firebase";

const Recyclables = () => {
  const [recyclables, setRecyclables] = useState<any>([]);
  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    if (recyclables.length !== 0) {
      setIsLoad(false);
    }
  }, [recyclables]);

  useEffect(() => {
    const colRef = collection(db, "rematerial");
    getDocs(colRef)
      .then((snapshot) => {
        let recyclables: any = [];
        snapshot.docs.forEach((doc) => {
          recyclables.push({ ...doc.data(), id: doc.id });
        });
        recyclables = recyclables.sort((a: any, b: any) => a.id - b.id);
        setRecyclables(recyclables);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <div className="Main">
        <RecyclablesMain />
        <RecyclablesAbout />
        {isLoad ? <>Loading...</> : <RecyclablesCards recyclables={recyclables} />}
      </div>
    </>
  );
};

export default Recyclables;
