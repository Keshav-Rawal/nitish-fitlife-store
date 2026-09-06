export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  imageUrl: string;
  category: "Wellness" | "Vitamins" | "Food" | "Strength";
  affiliateLink: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Dabur Chyawanprash",
    brand: "Dabur",
    price: 345,
    imageUrl: "/71oPudCSyBL._SX679_.jpg", // Bina rename kiye exact wahi naam
    category: "Wellness",
    affiliateLink: "https://amzn.to/4f3q3QI",
  },
  {
    id: "2",
    name: "Zandu Chyawanprash Avaleha",
    brand: "Zandu",
    price: 320,
    imageUrl: "/61OfthxINgL._SX679_.jpg",
    category: "Wellness",
    affiliateLink: "https://amzn.to/3BFvMxP",
  },
  {
    id: "3",
    name: "Baidyanath Ashwagandha Tablet",
    brand: "Baidyanath",
    price: 450,
    imageUrl: "/71xQQD0vbWL._SX679_.jpg",
    category: "Strength",
    affiliateLink: "https://amzn.to/404HXyf",
  },
  {
    id: "4",
    name: "HK Vitals Multivitamin",
    brand: "HealthKart",
    price: 499,
    imageUrl: "/41dqHQbgu-L._SY300_SX300_QL70_ML2_.jpg",
    category: "Vitamins",
    affiliateLink: "https://amzn.to/47KyRbP",
  },
  {
    id: "5",
    name: "7 Legions Peanut Butter",
    brand: "7 Legions",
    price: 420,
    imageUrl: "/61rU39CP2pL._SX679_.jpg",
    category: "Food",
    affiliateLink: "https://amzn.to/3TMQamL",
  },
  {
    id: "6",
    name: "Dabur Shilajit Gold",
    brand: "Dabur",
    price: 520,
    imageUrl: "/41AeSBvu5AL._QL70_FMwebp_.webp",
    category: "Strength",
    affiliateLink: "https://amzn.to/3BONwqy",
  },
];
