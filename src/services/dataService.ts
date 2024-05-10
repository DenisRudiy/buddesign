//products:


export async function fetchProducts(): Promise<TypeProduct[]> {
    const response = await fetch('http://localhost:7000/Goods');
    if (!response.ok) {
        throw new Error('Помилка при отриманні продуктів');
    }
    return await response.json();
} 

export type TypeProduct = {
    id: string;
    title: string;
    price: number;
    weight: number;
    deep: number;
    obem: number; 
}; 

//JOBS
export async function fetchWork(): Promise<TypeWork[]> {
    const response = await fetch('http://localhost:7000/products');
    if (!response.ok) {
        throw new Error('Помилка при отриманні продуктів');
    }
    return await response.json();
} 

export type TypeWork = {
    id: string;
    title: string;
    price: number;
}; 

//HOUSES

export async function fetchHouses(): Promise<TypeHouses[]> {
    const response = await fetch('http://localhost:7000/Houses');
    if (!response.ok) {
        throw new Error('Помилка при отриманні продуктів');
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
    const response = await fetch('http://localhost:7000/Rematerial');
    if (!response.ok) {
        throw new Error('Помилка при отриманні продуктів');
    }
    return await response.json();
} 

export type TypeRecyclables = {
    id: string;
    title: string;
    price: number;
}; 

//TECHNIQU
export async function fetchTechnicTypes(): Promise<TypeTechnicTypes[]> {
    const response = await fetch('http://localhost:7000/TechnicTypes');
    if (!response.ok) {
        throw new Error('Помилка при отриманні продуктів');
    }
    return await response.json();
} 

export type TypeTechnicTypes = {
    id: string;
    title: string;
    price: number;
    weight:number;
    deep:number;
    obem:number;
}; 

//Outsoursing

export async function fetchOutsourcing(): Promise<TypeOutsourcing[]> {
    const response = await fetch('http://localhost:7000/Business');
    if (!response.ok) {
        throw new Error('Помилка при отриманні продуктів');
    }
    return await response.json();
} 

export type TypeOutsourcing = {
    id: string;
    title: string;
   
}; 
