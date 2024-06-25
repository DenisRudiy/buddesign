import { useState, useEffect } from "react";
import WorkMain from "./Works/WorkMain/WorkMain";
import WorksAbout from "./Works/WorksAbout/WorksAbout";
import WorkCards from "./Works/WorkCards/WorkCards";
import { collection, getDocs } from "firebase/firestore";
import db from "../firebase";

const Work = () => {
  const [works, setWorks] = useState<any>([]);
  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    if (works.length !== 0) {
      setIsLoad(false);
    }
  }, [works]);

  useEffect(() => {
    const colRef = collection(db, "works");
    getDocs(colRef)
      .then((snapshot) => {
        let works: any = [];
        snapshot.docs.forEach((doc) => {
          works.push({ ...doc.data(), id: doc.id });
        });
        works = works.sort((a: any, b: any) => a.id - b.id);
        setWorks(works);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <div className="Main">
        <WorkMain />
        <WorksAbout />
        {isLoad ? <>Loading...</> : <WorkCards works={works} />}
      </div>
    </>
  );
};

export default Work;
