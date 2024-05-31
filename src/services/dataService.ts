//products:

export async function fetchProducts(): Promise<TypeProduct[]> {
  const response = await fetch("https://denisrudiy.github.io/host_api_bud_prod/db.json");
  if (!response.ok) {
    throw new Error("Помилка при отриманні продуктів");
  }
  return await response.json();
}

export type TypeProduct = {
  id: string;
  title: string;
  img: string;
  price: number;
};

//JOBS
export async function fetchWork(): Promise<TypeWork[]> {
  const response = await fetch("https://denisrudiy.github.io/host_adpi_bud_works/db.json");
  if (!response.ok) {
    throw new Error("Помилка при отриманні продуктів");
  }
  return await response.json();
}

export type TypeWork = {
  id: string;
  title: string;
  img: string;
  price: number;
};

//HOUSES

export async function fetchHouses(): Promise<TypeHouses[]> {
  const response = await fetch("http://localhost:7000/Houses");
  if (!response.ok) {
    throw new Error("Помилка при отриманні продуктів");
  }
  return await response.json();
}

export type TypeHouses = {
  id: string;
  title: string;
  price: number;
};

//Recyclables
export async function fetchrRecyclables(): Promise<TypeRecyclables[]> {
  const response = await fetch("https://denisrudiy.github.io/host_api_bud_remat/db.json");
  if (!response.ok) {
    throw new Error("Помилка при отриманні продуктів");
  }
  return await response.json();
}

export type TypeRecyclables = {
  id: string;
  title: string;
  img: string;
  price: number;
};

//TECHNIQU
export async function fetchTechnicTypes(): Promise<TypeTechnicTypes[]> {
  const response = await fetch("http://localhost:7000/TechnicTypes");
  if (!response.ok) {
    throw new Error("Помилка при отриманні продуктів");
  }
  return await response.json();
}

export type TypeTechnicTypes = {
  id: string;
  title: string;
  type: string;
  img: string;
};

//TECHNIQU
export async function fetchTechnic(): Promise<TypeTechnic[]> {
  const response = await fetch(`https://denisrudiy.github.io/host_api_budd/db.json`);
  if (!response.ok) {
    throw new Error("Помилка при отриманні продуктів");
  }
  return await response.json();
}

export type TypeTechnic = {
  id: string;
  titleUkr: string;
  titleEng: string;
  img: string;
  loadCapacity: string;
  volume: string;
  size: string;
  deep: string;
  heigh: string;
  price: string;
};

//Outsoursing

export async function fetchOutsourcing(): Promise<TypeOutsourcing[]> {
  const response = await fetch("http://localhost:7000/Business");
  if (!response.ok) {
    throw new Error("Помилка при отриманні продуктів");
  }
  return await response.json();
}

export type TypeOutsourcing = {
  id: string;
  title: string;
};
