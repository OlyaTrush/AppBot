// Products

export const products = [
  {
    id: 1,
    title: " Накопичувач USB 3.2 Kingston 128GB Gen1 DT Exodia (DTX/128GB) ",
    description:
      "Внутрішня пам'ять (об'єм), ГБ: 128\n" +
      "Тип корпусу: Моноблок, Із захисним ковпачком\n" +
      "Інтерфейс підключення: USB 3.2\n" +
      "Вага, грам: 11\n" +
      "Загальна довжина виробу (L), мм : 67,3\n" +
      "Загальна ширина виробу (W), мм: 21,04\n" +
      "Загальна висота виробу (H), мм: 10,14",
    image: "https://img.moyo.ua/img/gallery/4787/52/987453_tn.jpg?1603881920",
    price: 20.0,
    text: {
      "Тип корпусу": "Моноблок, Із захисним ковпачком",
      "Інтерфейс підключення": "USB 3.2",
      "Вага, грам": 11,
    }, // може бути як text або object
    categoryId: 1,
    categoryName: "",
    slides: [
      "https://img.moyo.ua/img/gallery/4787/52/987453_tn.jpg?1603881920",
      "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
      "https://wallpapercave.com/wp/wp3386769.jpg",
      "https://wallpaperaccess.com/full/809523.jpg",
      "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
    ],
  },
  {
    id: 2,
    title:
      "Накопичувач USB 3.2 SanDisk 256GB Type-A Ultra Curve Black (SDCZ550-256G-G46)",
    description: "",
    image: "https://img.moyo.ua/img/gallery/5453/25/1681165_tn.jpg?1689834982",
    price: 699.0,
    text: "", // може бути як text або object
    categoryId: 1,
    categoryName: "Flash-картки",
    slides: [
      "https://img.moyo.ua/img/gallery/5453/25/1681165_tn.jpg?1689834982",
      "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
      "https://wallpapercave.com/wp/wp3386769.jpg",
      "https://wallpaperaccess.com/full/809523.jpg",
      "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
    ],
  },
  {
    id: 3,
    title: "Накопичувач USB 3.0 SANDISK Flair 64GB 150MB/s (SDCZ73-064G-G46)",
    description: "",
    image: "https://img.moyo.ua/img/gallery/1914/56/160101_tn.png?1498779750",
    price: 269.0,
    text: "", // може бути як text або object
    categoryId: 1,
    categoryName: "Flash-картки",
    slides: [
      "https://img.moyo.ua/img/gallery/1914/56/160101_tn.png?1498779750",
      "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
      "https://wallpapercave.com/wp/wp3386769.jpg",
      "https://wallpaperaccess.com/full/809523.jpg",
      "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
    ],
  },
  {
    id: 4,
    title: 'SSD накопичувач KINGSTON A400 480GB 2.5" SATAIII (SA400S37/480G)',
    description: "",
    image: "https://img.moyo.ua/img/gallery/4186/79/1146111_tn.jpg?1619166645",
    price: 1469.0,
    text: "", // може бути як text або object
    categoryId: 2,
    categoryName: "SSD-накопичувачі",
    slides: [
      "https://img.moyo.ua/img/gallery/4186/79/1146111_tn.jpg?1619166645",
      "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
      "https://wallpapercave.com/wp/wp3386769.jpg",
      "https://wallpaperaccess.com/full/809523.jpg",
      "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
    ],
  },
  {
    id: 5,
    title: "Накопичувач SSD Kingston M.2 1TB PCIe 4.0 NV2",
    description: "",
    image: "https://img.moyo.ua/img/gallery/5243/95/1435465_tn.jpg?1665503339",
    price: 2599.0,
    text: "", // може бути як text або object
    categoryId: 2,
    categoryName: "SSD-накопичувачі",
    slides: [
      "https://img.moyo.ua/img/gallery/5243/95/1435465_tn.jpg?1665503339",
      "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
      "https://wallpapercave.com/wp/wp3386769.jpg",
      "https://wallpaperaccess.com/full/809523.jpg",
      "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
    ],
  },
];

export const getProductById = (productId) => {
  return products.find((product) => product.id === productId);
};

// Category;
export const category = [
  {
    id: 1,
    title: "Flash-картки",
    image: "https://img.moyo.ua/img/categories_page/30/29_167x_1697035526.jpg",
  },
  {
    id: 2,
    title: "SSD-накопичувачі",
    image:
      "https://img.moyo.ua/img/gallery/5243/95/1435465_zoom.jpg?1665503339",
  },
  {
    id: 3,
    title: "Флешки",
    image: "https://img.moyo.ua/img/categories_page/30/30_167x_1697029240.jpg",
  },
  {
    id: 4,
    title: "Корпуси для жорстких дисків",
    image: "https://img.moyo.ua/img/categories_page/30/64_167x_1697029280.jpg",
  },
];

//DeliveryMethod

export const postServices = [
  {
    id: 1,
    title: "Нова Пошта",
  },
  {
    id: 2,
    title: "MistExpress",
  },
  {
    id: 3,
    title: "УкрПошта",
  },
];

export const postOffice = [
  {
    id: 1,
    title: "Нова Пошта 67",
  },
  {
    id: 2,
    title: "MistExpress 55",
  },
  {
    id: 3,
    title: "УкрПошта 70999",
  },
];
