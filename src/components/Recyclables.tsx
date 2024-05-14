import RecyclablesMain from "./Recyclables/RecyclablesMain/RecyclablesMain";
import RecyclablesAbout from "./Recyclables/RecyclablesAbout/RecyclablesAbout";
import RecyclablesCards from "./Recyclables/RecyclablesCards/RecyclablesCards";

let recyclables: any;
recyclables = [
  {
    id: 0,
    title: "МАКУЛАТУРА",
    price: 500,
  },
  {
    id: 1,
    title: "МАКУЛАТУРА",
    price: 4000,
  },
  {
    id: 2,
    title: "МАКУЛАТУРА",
    price: 2000,
  },
  {
    id: 3,
    title: "МАКУЛАТУРА",
    price: 5000,
  },
  {
    id: 4,
    title: "МАКУЛАТУРА",
    price: 6000,
  },
  {
    id: 5,
    title: "МАКУЛАТУРА",
    price: 1000,
  },
  {
    id: 6,
    title: "МАКУЛАТУРА",
    price: 4000,
  },
  {
    id: 7,
    title: "МАКУЛАТУРА",
    price: 5000,
  },
  {
    id: 8,
    title: "МАКУЛАТУРА",
    price: 5000,
  },
];

const Recyclables = () => {
  // const [recyclables, setRecyclables] = useState<TypeRecyclables[]>([]);

  // useEffect(() => {
  //   const loadRecyclables = async () => {
  //     try {
  //       const data = await fetchrRecyclables();
  //       setRecyclables(data);
  //     } catch (error) {
  //       console.error("Помилка при завантаженні продуктів:", error);
  //     }
  //   };

  //   loadRecyclables();
  // }, []);
  return (
    <>
      <div className="Main">
        <RecyclablesMain />
        <RecyclablesAbout />
        <RecyclablesCards recyclables={recyclables} />
      </div>
    </>
  );
};

export default Recyclables;
