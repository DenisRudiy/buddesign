import "./Technic/TechnicMain/TechnicMain.scss";
import OutsourcingMain from "./Outsourcing/OutsourcingMain/OutsourcingMain";
import OutsourcingCards from "./Outsourcing/OutsourcingCards/OutsourcingCards";
import OutsourcingAbout from "./Outsourcing/OutsourcingAbout/OutsourcingAbout";

let outsourcing: any;
outsourcing = [
  {
    id: 0,
    title: "ВАНТАЖНІ РОБОТИ",
  },
  {
    id: 1,
    title: "ВАНТАЖНІ РОБОТИ",
  },
  {
    id: 2,
    title: "ВАНТАЖНІ РОБОТИ",
  },
  {
    id: 3,
    title: "ВАНТАЖНІ РОБОТИ",
  },
  {
    id: 4,
    title: "ВАНТАЖНІ РОБОТИ",
  },
  {
    id: 5,
    title: "ВАНТАЖНІ РОБОТИ",
  },
  {
    id: 6,
    title: "ВАНТАЖНІ РОБОТИ",
  },
  {
    id: 7,
    title: "ВАНТАЖНІ РОБОТИ",
  },
  {
    id: 8,
    title: "ВАНТАЖНІ РОБОТИ",
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
