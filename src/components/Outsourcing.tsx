import "./Technic/TechnicMain/TechnicMain.scss";
import OutsourcingMain from "./Outsourcing/OutsourcingMain/OutsourcingMain";
import OutsourcingCards from "./Outsourcing/OutsourcingCards/OutsourcingCards";
import OutsourcingAbout from "./Outsourcing/OutsourcingAbout/OutsourcingAbout";

let outsourcing: any;
outsourcing = [
  {
    id: 0,
    titleUkr: "ВАНТАЖНІ РОБОТИ",
    titleEng: "LOADING OPERATIONS",
  },
  {
    id: 1,
    titleUkr: "ВАНТАЖНІ РОБОТИ",
    titleEng: "LOADING OPERATIONS",
  },
  {
    id: 2,
    titleUkr: "ВАНТАЖНІ РОБОТИ",
    titleEng: "LOADING OPERATIONS",
  },
  {
    id: 3,
    titleUkr: "ВАНТАЖНІ РОБОТИ",
    titleEng: "LOADING OPERATIONS",
  },
  {
    id: 4,
    titleUkr: "ВАНТАЖНІ РОБОТИ",
    titleEng: "LOADING OPERATIONS",
  },
  {
    id: 5,
    titleUkr: "ВАНТАЖНІ РОБОТИ",
    titleEng: "LOADING OPERATIONS",
  },
  {
    id: 6,
    titleUkr: "ВАНТАЖНІ РОБОТИ",
    titleEng: "LOADING OPERATIONS",
  },
  {
    id: 7,
    titleUkr: "ВАНТАЖНІ РОБОТИ",
    titleEng: "LOADING OPERATIONS",
  },
  {
    id: 8,
    titleUkr: "ВАНТАЖНІ РОБОТИ",
    titleEng: "LOADING OPERATIONS",
  },
];

const Outsourcing = () => {
  // const [outsourcing, setOutsourcing] = useState<TypeOutsourcing[]>([]);

  // useEffect(() => {
  //   const loadOutsourcing = async () => {
  //     try {
  //       const data = await fetchOutsourcing();
  //       setOutsourcing(data);
  //     } catch (error) {
  //       console.error("Помилка при завантаженні продуктів:", error);
  //     }
  //   };

  //   loadOutsourcing();
  // }, []);
  return (
    <>
      <div className="Main">
        <OutsourcingMain />
        <OutsourcingAbout />
        <OutsourcingCards outsourcing={outsourcing} />
      </div>
    </>
  );
};

export default Outsourcing;
