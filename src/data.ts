export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  imageUrl: string;
  category:
    | "Health & Supplements"
    | "Learning Toys"
    | "Soft Toys"
    | "Home Decor"
    | "Sports Shoes"
    | "T-Shirts";
  affiliateLink: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Dabur Chyawanprash",
    brand: "Dabur",
    price: 345,
    imageUrl: "/71oPudCSyBL._SX679_.jpg",
    category: "Health & Supplements",
    affiliateLink: "https://amzn.to/4f3q3QI",
  },
  {
    id: "2",
    name: "Zandu Chyawanprash Avaleha",
    brand: "Zandu",
    price: 320,
    imageUrl: "/61OfthxINgL._SX679_.jpg",
    category: "Health & Supplements",
    affiliateLink: "https://amzn.to/3BFvMxP",
  },
  {
    id: "3",
    name: "Baidyanath Ashwagandha Tablet",
    brand: "Baidyanath",
    price: 450,
    imageUrl: "/71xQQD0vbWL._SX679_.jpg",
    category: "Health & Supplements",
    affiliateLink: "https://amzn.to/404HXyf",
  },
  {
    id: "4",
    name: "HK Vitals Multivitamin",
    brand: "HealthKart",
    price: 499,
    imageUrl: "/41dqHQbgu-L._SY300_SX300_QL70_ML2_.jpg",
    category: "Health & Supplements",
    affiliateLink: "https://amzn.to/47KyRbP",
  },
  {
    id: "5",
    name: "7 Legions Peanut Butter",
    brand: "7 Legions",
    price: 420,
    imageUrl: "/61rU39CP2pL._SX679_.jpg",
    category: "Health & Supplements",
    affiliateLink: "https://amzn.to/3TMQamL",
  },
  {
    id: "6",
    name: "Dabur Shilajit Gold",
    brand: "Dabur",
    price: 520,
    imageUrl: "/41AeSBvu5AL._QL70_FMwebp_.webp",
    category: "Health & Supplements",
    affiliateLink: "https://amzn.to/3BONwqy",
  },
  {
    id: "7",
    name: "Kids Educational Building Blocks",
    brand: "FunLearn",
    price: 450,
    imageUrl:
      "https://images.unsplash.com/photo-1587654780228-6a457ea06280?w=500&q=80",
    category: "Learning Toys",
    affiliateLink: "https://link.amazon/B08h8Ykzz",
  },
  {
    id: "8",
    name: "Interactive Puzzle Set",
    brand: "BrainyKids",
    price: 399,
    imageUrl:
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=500&q=80",
    category: "Learning Toys",
    affiliateLink: "https://link.amazon/B03VCflsA",
  },
  {
    id: "9",
    name: "Cute Teddy Bear Plush",
    brand: "Snuggle Co.",
    price: 599,
    imageUrl:
      "https://images.unsplash.com/photo-1559454403-b8fb88521f11?w=500&q=80",
    category: "Soft Toys",
    affiliateLink: "https://link.amazon/B0cMxHbbZ",
  },
  {
    id: "10",
    name: "Modern Wall Art Painting",
    brand: "Artisans",
    price: 850,
    imageUrl:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500&q=80",
    category: "Home Decor",
    affiliateLink: "https://link.amazon/B00gaFUmV",
  },
  {
    id: "11",
    name: "Indoor Plant Ceramic Pot",
    brand: "GreenSpace",
    price: 349,
    imageUrl:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500&q=80",
    category: "Home Decor",
    affiliateLink: "https://link.amazon/B0j54w660",
  },
  {
    id: "12",
    name: "Breathable Running Shoes (Black)",
    brand: "Sprint",
    price: 999,
    imageUrl:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
    category: "Sports Shoes",
    affiliateLink: "https://link.amazon/B065TlgnU",
  },
  {
    id: "13",
    name: "Classic Black Oversized T-Shirt",
    brand: "Urban Basics",
    price: 699,
    imageUrl:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&q=80",
    category: "T-Shirts",
    affiliateLink: "https://link.amazon/B05aVmyof",
  },
];
