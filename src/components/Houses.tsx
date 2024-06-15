import "./Technic/TechnicMain/TechnicMain.scss";
import HousesCards from "./Houses/HousesCards/HousesCards";
import HousesMain from "./Houses/HousesMain/HousesMain";
import HousesAbout from "./Houses/HousesAbout/HousesAbout";

let houses: any;
houses = [
  {
    id: 0,
    img: "https://i.postimg.cc/zfT8WsM6/orange1.webp",
    titleUkr: "ЖК “озерна панорама” №10,12",
    titleEng: "Residential complex “lake panorama” №10,12",
  },
  {
    id: 1,
    img: "https://i.postimg.cc/vZJG4YP5/beige1.webp",
    titleUkr: "ЖК “озерна панорама” №18,20",
    titleEng: "Residential complex “lake panorama” №18,20",
  },
  {
    id: 2,
    img: "https://i.postimg.cc/jdkxrQPg/yellow1.webp",
    titleUkr: "ЖК “озерна панорама” №2,4",
    titleEng: "Residential complex “lake panorama” №2,4",
  },
  {
    id: 3,
    img: "https://i.postimg.cc/wjy6xyk6/milky1.webp",
    titleUkr: "ЖК “озерна панорама” №14,16",
    titleEng: "Residential complex “lake panorama” №14,`16",
  },
  {
    id: 4,
    img: "https://i.postimg.cc/m2rLq6z1/pink1.webp",
    titleUkr: "ЖК “озерна панорама” №6,8",
    titleEng: "Residential complex “lake panorama” №6,8",
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
