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
    name: "Kids Learning Toy 1",
    brand: "Generic",
    price: 499,
    imageUrl:
      "https://images.unsplash.com/photo-1587654780228-6a457ea06280?w=300&q=80",
    category: "Learning Toys",
    affiliateLink: "https://link.amazon/B08h8Ykzz",
  },
  {
    id: "8",
    name: "Kids Learning Toy 2",
    brand: "Generic",
    price: 499,
    imageUrl:
      "https://images.unsplash.com/photo-1587654780228-6a457ea06280?w=300&q=80",
    category: "Learning Toys",
    affiliateLink: "https://link.amazon/B03VCflsA",
  },
  {
    id: "9",
    name: "Kids Learning Toy 3",
    brand: "Generic",
    price: 499,
    imageUrl:
      "https://images.unsplash.com/photo-1587654780228-6a457ea06280?w=300&q=80",
    category: "Learning Toys",
    affiliateLink: "https://link.amazon/B07zt7MZf",
  },
  {
    id: "10",
    name: "Kids Learning Toy 4",
    brand: "Generic",
    price: 499,
    imageUrl:
      "https://images.unsplash.com/photo-1587654780228-6a457ea06280?w=300&q=80",
    category: "Learning Toys",
    affiliateLink: "https://link.amazon/B0hHOJYCB",
  },
  {
    id: "11",
    name: "Kids Learning Toy 5",
    brand: "Generic",
    price: 499,
    imageUrl:
      "https://images.unsplash.com/photo-1587654780228-6a457ea06280?w=300&q=80",
    category: "Learning Toys",
    affiliateLink: "https://link.amazon/B0fM5elKs",
  },
  {
    id: "12",
    name: "Kids Learning Toy 6",
    brand: "Generic",
    price: 499,
    imageUrl:
      "https://images.unsplash.com/photo-1587654780228-6a457ea06280?w=300&q=80",
    category: "Learning Toys",
    affiliateLink: "https://link.amazon/B08voyHbQ",
  },
  {
    id: "13",
    name: "Kids Learning Toy 7",
    brand: "Generic",
    price: 499,
    imageUrl:
      "https://images.unsplash.com/photo-1587654780228-6a457ea06280?w=300&q=80",
    category: "Learning Toys",
    affiliateLink: "https://link.amazon/B04CrD13f",
  },
  {
    id: "14",
    name: "Kids Learning Toy 8",
    brand: "Generic",
    price: 499,
    imageUrl:
      "https://images.unsplash.com/photo-1587654780228-6a457ea06280?w=300&q=80",
    category: "Learning Toys",
    affiliateLink: "https://link.amazon/B03FclpiQ",
  },
  {
    id: "15",
    name: "Kids Learning Toy 9",
    brand: "Generic",
    price: 499,
    imageUrl:
      "https://images.unsplash.com/photo-1587654780228-6a457ea06280?w=300&q=80",
    category: "Learning Toys",
    affiliateLink: "https://link.amazon/B01XIUaAQ",
  },
  {
    id: "16",
    name: "Kids Learning Toy 10",
    brand: "Generic",
    price: 499,
    imageUrl:
      "https://images.unsplash.com/photo-1587654780228-6a457ea06280?w=300&q=80",
    category: "Learning Toys",
    affiliateLink: "https://link.amazon/B0cbbG4Mi",
  },
  {
    id: "17",
    name: "Kids Learning Toy 11",
    brand: "Generic",
    price: 499,
    imageUrl:
      "https://images.unsplash.com/photo-1587654780228-6a457ea06280?w=300&q=80",
    category: "Learning Toys",
    affiliateLink: "https://link.amazon/B08V51JNA",
  },
  {
    id: "18",
    name: "Kids Learning Toy 12",
    brand: "Generic",
    price: 499,
    imageUrl:
      "https://images.unsplash.com/photo-1587654780228-6a457ea06280?w=300&q=80",
    category: "Learning Toys",
    affiliateLink: "https://link.amazon/B02tYvfI5",
  },

  {
    id: "19",
    name: "Soft Toy Plush 1",
    brand: "Generic",
    price: 399,
    imageUrl:
      "https://images.unsplash.com/photo-1559454403-b8fb88521f11?w=300&q=80",
    category: "Soft Toys",
    affiliateLink: "https://link.amazon/B0cMxHbbZ",
  },
  {
    id: "20",
    name: "Soft Toy Plush 2",
    brand: "Generic",
    price: 399,
    imageUrl:
      "https://images.unsplash.com/photo-1559454403-b8fb88521f11?w=300&q=80",
    category: "Soft Toys",
    affiliateLink: "https://link.amazon/B01fq0WyB",
  },
  {
    id: "21",
    name: "Soft Toy Plush 3",
    brand: "Generic",
    price: 399,
    imageUrl:
      "https://images.unsplash.com/photo-1559454403-b8fb88521f11?w=300&q=80",
    category: "Soft Toys",
    affiliateLink: "https://link.amazon/B00Ub2klm",
  },
  {
    id: "22",
    name: "Soft Toy Plush 4",
    brand: "Generic",
    price: 399,
    imageUrl:
      "https://images.unsplash.com/photo-1559454403-b8fb88521f11?w=300&q=80",
    category: "Soft Toys",
    affiliateLink: "https://link.amazon/B00nwbHYW",
  },
  {
    id: "23",
    name: "Soft Toy Plush 5",
    brand: "Generic",
    price: 399,
    imageUrl:
      "https://images.unsplash.com/photo-1559454403-b8fb88521f11?w=300&q=80",
    category: "Soft Toys",
    affiliateLink: "https://link.amazon/B02eS0z8Z",
  },
  {
    id: "24",
    name: "Soft Toy Plush 6",
    brand: "Generic",
    price: 399,
    imageUrl:
      "https://images.unsplash.com/photo-1559454403-b8fb88521f11?w=300&q=80",
    category: "Soft Toys",
    affiliateLink: "https://link.amazon/B08InGQMu",
  },
  {
    id: "25",
    name: "Soft Toy Plush 7",
    brand: "Generic",
    price: 399,
    imageUrl:
      "https://images.unsplash.com/photo-1559454403-b8fb88521f11?w=300&q=80",
    category: "Soft Toys",
    affiliateLink: "https://link.amazon/B0czifssk",
  },
  {
    id: "26",
    name: "Soft Toy Plush 8",
    brand: "Generic",
    price: 399,
    imageUrl:
      "https://images.unsplash.com/photo-1559454403-b8fb88521f11?w=300&q=80",
    category: "Soft Toys",
    affiliateLink: "https://link.amazon/B0e4nJEnC",
  },
  {
    id: "27",
    name: "Soft Toy Plush 9",
    brand: "Generic",
    price: 399,
    imageUrl:
      "https://images.unsplash.com/photo-1559454403-b8fb88521f11?w=300&q=80",
    category: "Soft Toys",
    affiliateLink: "https://link.amazon/B02vnRsfu",
  },
  {
    id: "28",
    name: "Soft Toy Plush 10",
    brand: "Generic",
    price: 399,
    imageUrl:
      "https://images.unsplash.com/photo-1559454403-b8fb88521f11?w=300&q=80",
    category: "Soft Toys",
    affiliateLink: "https://link.amazon/B0hBT85CT",
  },
  {
    id: "29",
    name: "Soft Toy Plush 11",
    brand: "Generic",
    price: 399,
    imageUrl:
      "https://images.unsplash.com/photo-1559454403-b8fb88521f11?w=300&q=80",
    category: "Soft Toys",
    affiliateLink: "https://link.amazon/B08zePGKT",
  },
  {
    id: "30",
    name: "Soft Toy Plush 12",
    brand: "Generic",
    price: 399,
    imageUrl:
      "https://images.unsplash.com/photo-1559454403-b8fb88521f11?w=300&q=80",
    category: "Soft Toys",
    affiliateLink: "https://link.amazon/B0bQFMceg",
  },
  {
    id: "31",
    name: "Soft Toy Plush 13",
    brand: "Generic",
    price: 399,
    imageUrl:
      "https://images.unsplash.com/photo-1559454403-b8fb88521f11?w=300&q=80",
    category: "Soft Toys",
    affiliateLink: "https://link.amazon/B0dXOKmCZ",
  },
  {
    id: "32",
    name: "Soft Toy Plush 14",
    brand: "Generic",
    price: 399,
    imageUrl:
      "https://images.unsplash.com/photo-1559454403-b8fb88521f11?w=300&q=80",
    category: "Soft Toys",
    affiliateLink: "https://link.amazon/B080DqpAP",
  },
  {
    id: "33",
    name: "Soft Toy Plush 15",
    brand: "Generic",
    price: 399,
    imageUrl:
      "https://images.unsplash.com/photo-1559454403-b8fb88521f11?w=300&q=80",
    category: "Soft Toys",
    affiliateLink: "https://link.amazon/B00Bd6xN0",
  },
  {
    id: "34",
    name: "Soft Toy Plush 16",
    brand: "Generic",
    price: 399,
    imageUrl:
      "https://images.unsplash.com/photo-1559454403-b8fb88521f11?w=300&q=80",
    category: "Soft Toys",
    affiliateLink: "https://link.amazon/B06CDVjQV",
  },
  {
    id: "35",
    name: "Soft Toy Plush 17",
    brand: "Generic",
    price: 399,
    imageUrl:
      "https://images.unsplash.com/photo-1559454403-b8fb88521f11?w=300&q=80",
    category: "Soft Toys",
    affiliateLink: "https://link.amazon/B09vgVZSl",
  },
  {
    id: "36",
    name: "Soft Toy Plush 18",
    brand: "Generic",
    price: 399,
    imageUrl:
      "https://images.unsplash.com/photo-1559454403-b8fb88521f11?w=300&q=80",
    category: "Soft Toys",
    affiliateLink: "https://link.amazon/B033CoLPT",
  },
  {
    id: "37",
    name: "Soft Toy Plush 19",
    brand: "Generic",
    price: 399,
    imageUrl:
      "https://images.unsplash.com/photo-1559454403-b8fb88521f11?w=300&q=80",
    category: "Soft Toys",
    affiliateLink: "https://link.amazon/B03VjVaeg",
  },
  {
    id: "38",
    name: "Soft Toy Plush 20",
    brand: "Generic",
    price: 399,
    imageUrl:
      "https://images.unsplash.com/photo-1559454403-b8fb88521f11?w=300&q=80",
    category: "Soft Toys",
    affiliateLink: "https://link.amazon/B0erwRryF",
  },

  {
    id: "39",
    name: "Home Decor Item 1",
    brand: "Generic",
    price: 599,
    imageUrl:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=300&q=80",
    category: "Home Decor",
    affiliateLink: "https://link.amazon/B00gaFUmV",
  },
  {
    id: "40",
    name: "Home Decor Item 2",
    brand: "Generic",
    price: 599,
    imageUrl:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=300&q=80",
    category: "Home Decor",
    affiliateLink: "https://link.amazon/B0j54w660",
  },
  {
    id: "41",
    name: "Home Decor Item 3",
    brand: "Generic",
    price: 599,
    imageUrl:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=300&q=80",
    category: "Home Decor",
    affiliateLink: "https://link.amazon/B06eLueWH",
  },
  {
    id: "42",
    name: "Home Decor Item 4",
    brand: "Generic",
    price: 599,
    imageUrl:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=300&q=80",
    category: "Home Decor",
    affiliateLink: "https://link.amazon/B0cNEXEHn",
  },
  {
    id: "43",
    name: "Home Decor Item 5",
    brand: "Generic",
    price: 599,
    imageUrl:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=300&q=80",
    category: "Home Decor",
    affiliateLink: "https://link.amazon/B0fxMFjG7",
  },
  {
    id: "44",
    name: "Home Decor Item 6",
    brand: "Generic",
    price: 599,
    imageUrl:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=300&q=80",
    category: "Home Decor",
    affiliateLink: "https://link.amazon/B04uAwoKp",
  },
  {
    id: "45",
    name: "Home Decor Item 7",
    brand: "Generic",
    price: 599,
    imageUrl:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=300&q=80",
    category: "Home Decor",
    affiliateLink: "https://link.amazon/B0ig1BuFp",
  },
  {
    id: "46",
    name: "Home Decor Item 8",
    brand: "Generic",
    price: 599,
    imageUrl:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=300&q=80",
    category: "Home Decor",
    affiliateLink: "https://link.amazon/B0doUhxeS",
  },
  {
    id: "47",
    name: "Home Decor Item 9",
    brand: "Generic",
    price: 599,
    imageUrl:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=300&q=80",
    category: "Home Decor",
    affiliateLink: "https://link.amazon/B0bgHaSsy",
  },
  {
    id: "48",
    name: "Home Decor Item 10",
    brand: "Generic",
    price: 599,
    imageUrl:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=300&q=80",
    category: "Home Decor",
    affiliateLink: "https://link.amazon/B0geiJddK",
  },
  {
    id: "49",
    name: "Home Decor Item 11",
    brand: "Generic",
    price: 599,
    imageUrl:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=300&q=80",
    category: "Home Decor",
    affiliateLink: "https://link.amazon/B09UFDrth",
  },
  {
    id: "50",
    name: "Home Decor Item 12",
    brand: "Generic",
    price: 599,
    imageUrl:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=300&q=80",
    category: "Home Decor",
    affiliateLink: "https://link.amazon/B07rTHC8A",
  },
  {
    id: "51",
    name: "Home Decor Item 13",
    brand: "Generic",
    price: 599,
    imageUrl:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=300&q=80",
    category: "Home Decor",
    affiliateLink: "https://link.amazon/B0cPBpArl",
  },
  {
    id: "52",
    name: "Home Decor Item 14",
    brand: "Generic",
    price: 599,
    imageUrl:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=300&q=80",
    category: "Home Decor",
    affiliateLink: "https://link.amazon/B03qRv0MW",
  },
  {
    id: "53",
    name: "Home Decor Item 15",
    brand: "Generic",
    price: 599,
    imageUrl:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=300&q=80",
    category: "Home Decor",
    affiliateLink: "https://link.amazon/B0fATI8bG",
  },
  {
    id: "54",
    name: "Home Decor Item 16",
    brand: "Generic",
    price: 599,
    imageUrl:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=300&q=80",
    category: "Home Decor",
    affiliateLink: "https://link.amazon/B02o8Je20",
  },
  {
    id: "55",
    name: "Home Decor Item 17",
    brand: "Generic",
    price: 599,
    imageUrl:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=300&q=80",
    category: "Home Decor",
    affiliateLink: "https://link.amazon/B0eUKmjFJ",
  },
  {
    id: "56",
    name: "Home Decor Item 18",
    brand: "Generic",
    price: 599,
    imageUrl:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=300&q=80",
    category: "Home Decor",
    affiliateLink: "https://link.amazon/B0hNcTKAV",
  },
  {
    id: "57",
    name: "Home Decor Item 19",
    brand: "Generic",
    price: 599,
    imageUrl:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=300&q=80",
    category: "Home Decor",
    affiliateLink: "https://link.amazon/B02ZdcsFc",
  },
  {
    id: "58",
    name: "Home Decor Item 20",
    brand: "Generic",
    price: 599,
    imageUrl:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=300&q=80",
    category: "Home Decor",
    affiliateLink: "https://link.amazon/B06V4VulL",
  },
  {
    id: "59",
    name: "Home Decor Item 21",
    brand: "Generic",
    price: 599,
    imageUrl:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=300&q=80",
    category: "Home Decor",
    affiliateLink: "https://link.amazon/B0i5yILNd",
  },
  {
    id: "60",
    name: "Home Decor Item 22",
    brand: "Generic",
    price: 599,
    imageUrl:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=300&q=80",
    category: "Home Decor",
    affiliateLink: "https://link.amazon/B0fRdA7dE",
  },
  {
    id: "61",
    name: "Home Decor Item 23",
    brand: "Generic",
    price: 599,
    imageUrl:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=300&q=80",
    category: "Home Decor",
    affiliateLink: "https://link.amazon/B00goBXeb",
  },
  {
    id: "62",
    name: "Home Decor Item 24",
    brand: "Generic",
    price: 599,
    imageUrl:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=300&q=80",
    category: "Home Decor",
    affiliateLink: "https://link.amazon/B03KvcHY7",
  },
  {
    id: "63",
    name: "Home Decor Item 25",
    brand: "Generic",
    price: 599,
    imageUrl:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=300&q=80",
    category: "Home Decor",
    affiliateLink: "https://link.amazon/B09DKmGWY",
  },

  {
    id: "64",
    name: "Sports Shoes 1",
    brand: "Generic",
    price: 999,
    imageUrl:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&q=80",
    category: "Sports Shoes",
    affiliateLink: "https://link.amazon/B065TlgnU",
  },
  {
    id: "65",
    name: "Sports Shoes 2",
    brand: "Generic",
    price: 999,
    imageUrl:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&q=80",
    category: "Sports Shoes",
    affiliateLink: "https://link.amazon/B09zVP87w",
  },
  {
    id: "66",
    name: "Sports Shoes 3",
    brand: "Generic",
    price: 999,
    imageUrl:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&q=80",
    category: "Sports Shoes",
    affiliateLink: "https://link.amazon/B0aQSEZce",
  },
  {
    id: "67",
    name: "Sports Shoes 4",
    brand: "Generic",
    price: 999,
    imageUrl:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&q=80",
    category: "Sports Shoes",
    affiliateLink: "https://link.amazon/B0b9D8qVZ",
  },
  {
    id: "68",
    name: "Sports Shoes 5",
    brand: "Generic",
    price: 999,
    imageUrl:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&q=80",
    category: "Sports Shoes",
    affiliateLink: "https://link.amazon/B05sPFDSU",
  },
  {
    id: "69",
    name: "Sports Shoes 6",
    brand: "Generic",
    price: 999,
    imageUrl:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&q=80",
    category: "Sports Shoes",
    affiliateLink: "https://link.amazon/B07jkuyjA",
  },
  {
    id: "70",
    name: "Sports Shoes 7",
    brand: "Generic",
    price: 999,
    imageUrl:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&q=80",
    category: "Sports Shoes",
    affiliateLink: "https://link.amazon/B04iKPk7f",
  },
  {
    id: "71",
    name: "Sports Shoes 8",
    brand: "Generic",
    price: 999,
    imageUrl:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&q=80",
    category: "Sports Shoes",
    affiliateLink: "https://link.amazon/B09vhqX1J",
  },
  {
    id: "72",
    name: "Sports Shoes 9",
    brand: "Generic",
    price: 999,
    imageUrl:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&q=80",
    category: "Sports Shoes",
    affiliateLink: "https://link.amazon/B079Svh98",
  },
  {
    id: "73",
    name: "Sports Shoes 10",
    brand: "Generic",
    price: 999,
    imageUrl:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&q=80",
    category: "Sports Shoes",
    affiliateLink: "https://link.amazon/B0h8Vf0MF",
  },
  {
    id: "74",
    name: "Sports Shoes 11",
    brand: "Generic",
    price: 999,
    imageUrl:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&q=80",
    category: "Sports Shoes",
    affiliateLink: "https://link.amazon/B01SenPwS",
  },
  {
    id: "75",
    name: "Sports Shoes 12",
    brand: "Generic",
    price: 999,
    imageUrl:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&q=80",
    category: "Sports Shoes",
    affiliateLink: "https://link.amazon/B0iUlK1Nr",
  },
  {
    id: "76",
    name: "Sports Shoes 13",
    brand: "Generic",
    price: 999,
    imageUrl:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&q=80",
    category: "Sports Shoes",
    affiliateLink: "https://link.amazon/B0cJwHc9A",
  },
  {
    id: "77",
    name: "Sports Shoes 14",
    brand: "Generic",
    price: 999,
    imageUrl:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&q=80",
    category: "Sports Shoes",
    affiliateLink: "https://link.amazon/B02ZS31m8",
  },
  {
    id: "78",
    name: "Sports Shoes 15",
    brand: "Generic",
    price: 999,
    imageUrl:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&q=80",
    category: "Sports Shoes",
    affiliateLink: "https://link.amazon/B0gIW3G69",
  },
  {
    id: "79",
    name: "Sports Shoes 16",
    brand: "Generic",
    price: 999,
    imageUrl:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&q=80",
    category: "Sports Shoes",
    affiliateLink: "https://link.amazon/B0bGdkAcd",
  },
  {
    id: "80",
    name: "Sports Shoes 17",
    brand: "Generic",
    price: 999,
    imageUrl:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&q=80",
    category: "Sports Shoes",
    affiliateLink: "https://link.amazon/B03t8WDrK",
  },

  {
    id: "81",
    name: "T-Shirt 1",
    brand: "Generic",
    price: 499,
    imageUrl:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&q=80",
    category: "T-Shirts",
    affiliateLink: "https://link.amazon/B05aVmyof",
  },
  {
    id: "82",
    name: "T-Shirt 2",
    brand: "Generic",
    price: 499,
    imageUrl:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&q=80",
    category: "T-Shirts",
    affiliateLink: "https://link.amazon/B0ei9FUDw",
  },
  {
    id: "83",
    name: "T-Shirt 3",
    brand: "Generic",
    price: 499,
    imageUrl:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&q=80",
    category: "T-Shirts",
    affiliateLink: "https://link.amazon/B09sWHucA",
  },
  {
    id: "84",
    name: "T-Shirt 4",
    brand: "Generic",
    price: 499,
    imageUrl:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&q=80",
    category: "T-Shirts",
    affiliateLink: "https://link.amazon/B0a1AMi44",
  },
  {
    id: "85",
    name: "T-Shirt 5",
    brand: "Generic",
    price: 499,
    imageUrl:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&q=80",
    category: "T-Shirts",
    affiliateLink: "https://link.amazon/B03oYDeiQ",
  },
  {
    id: "86",
    name: "T-Shirt 6",
    brand: "Generic",
    price: 499,
    imageUrl:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&q=80",
    category: "T-Shirts",
    affiliateLink: "https://link.amazon/B053vwfRP",
  },
  {
    id: "87",
    name: "T-Shirt 7",
    brand: "Generic",
    price: 499,
    imageUrl:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&q=80",
    category: "T-Shirts",
    affiliateLink: "https://link.amazon/B07jMeaVh",
  },
  {
    id: "88",
    name: "T-Shirt 8",
    brand: "Generic",
    price: 499,
    imageUrl:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&q=80",
    category: "T-Shirts",
    affiliateLink: "https://link.amazon/B0cnC0ae9",
  },
];
