import "./Technic/TechnicMain/TechnicMain.scss";
import HousesCards from "./Houses/HousesCards/HousesCards";
import HousesMain from "./Houses/HousesMain/HousesMain";
import HousesAbout from "./Houses/HousesAbout/HousesAbout";

let houses: any;
houses = [
  {
    id: 0,
    title: "Будинок",
    price: 500,
  },
  {
    id: 1,
    title: "Будинок",
    price: 4000,
  },
  {
    id: 2,
    title: "Будинок",
    price: 2000,
  },
  {
    id: 3,
    title: "Будинок",
    price: 5000,
  },
  {
    id: 4,
    title: "Будинок",
    price: 6000,
  },
  {
    id: 5,
    title: "Будинок",
    price: 1000,
  },
  {
    id: 6,
    title: "Будинок",
    price: 4000,
  },
  {
    id: 7,
    title: "Будинок",
    price: 5000,
  },
  {
    id: 8,
    title: "Будинок",
    price: 5000,
  },
];

const Houses = () => {
  // const [houses, setHouses] = useState<TypeHouses[]>([]);

  // useEffect(() => {
  //   const loadHouses = async () => {
  //     try {
  //       const data = await fetchHouses();
  //       setHouses(data);
  //     } catch (error) {
  //       console.error("Помилка при завантаженні продуктів:", error);
  //     }
  //   };

  //   loadHouses();
  // }, []);
  return (
    <>
      <div className="Main">
        <HousesMain />
        <HousesAbout />
        <HousesCards houses={houses} />
      </div>
    </>
  );
};

export default Houses;
