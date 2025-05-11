// productData.js
const products = [
  {
    id: 1,
    title: "NOIR HEAVEN",
    brand: "adidas",
    price: 1499,
    img: "img/products/apparel1.jpg",
    description: "Black streetwear-inspired t-shirt from Adidas.",
    color: "Black"
  },
  {
    id: 2,
    title: "BLUSH BREEZE",
    brand: "CARLO SNITCH",
    price: 1799,
    img: "img/products/apparel2.jpg",
    description: "Multicolor stylish large hat, perfect for travelers.",
    color: "Multicolor"
  },
   {
    id: 3,
    title: "TRIRI MUSE",
    brand: "H&M",
    price: 1999,
    img: "https://boogzelclothing.com/cdn/shop/files/ginghampicnicruffleskirtboogzelclothing_4_1000x.jpg?v=1746060989",
    description: "Women Solid Pencil Black, White Skirt",
    color: "WHITE AND BLACK"
  },
   {
    id: 4,
    title: "SHADOW BLOOM",
    brand: "H&M",
    price: 1799,
    img: "img/products/apparel3.jpg",
    description: "WOMEN BLACK COAT",
    color: "BLACK"
  },
  {
    id: 5,
    title: "URBAN EASE",
    brand: "THEREALB",
    price: 1499,
    img: "img/products/a6.jpg",
    description: "BLUE PANTS",
    color: "BLUE"
  },
  {
    id: 6,
    title: "GREY SLIM SKIRT",
    brand: "H&M",
    price: 1599,
    img: "img/products/apparel4.jpg",
    description: "SLIM GREY SKIRTS",
    color: "GREY"
  },
  {
    id: 7,
    title: "FLOWER COLOR T-SHIRT",
    brand: "H&M",
    price: 1799,
    img: "img\products\f5.jpg",
    description: "BLUE COLOR TSHIRT WITH PINK FLOWER PRINTED TSHIRT",
    color: "MULTICOLOR"
  },
  {
    id: 8,
    title: "COLOR T-SHIRT",
    brand: "ADIDAS",
    price: 1499,
    img: "img/products/f6.jpg",
    description: "BLUE COLOR TSHIRT WITH ORANGE PACH  TSHIRT",
    color: "MULTICOLOR"
  },
  {
    id: 9,
    title: "PRINTED PANTS",
    brand: "ADIDAS",
    price: 1699,
    img: "img/products/f7.jpg",
    description: "PANYS WITH FLOWER PRINTED",
    color: "MULTICOLOR"
  },
  {
    id: 10,
    title: "Purple Floral Print short top And Crop Top Set ",
    brand: "THEREALB",
    price: 1599,
    img: "img/products/f8.jpg",
    description: "PANYS WITH FLOWER PRINTED",
    color: "MULTICOLOR"
  },
   {
    id: 11,
    title: "GINGER Floral Lace Layered Skirt ",
    brand: "THEREALB",
    price: 1399,
    img: "https://media.landmarkshops.in/cdn-cgi/image/h=730,w=540,q=85,fit=cover/lifestyle/1000014794063-White-White-1000014794063_01-2100.jpg",
    description: "LAYERED SKIRT EITH WHITE DESIGN IN FLOWERS",
    color: "WHITE"
  },
 {
    id: 12,
    title: "GINGER Printed Pencil Skirt",
    brand: "SNITCH",
    price: 1599,
    img: "https://media.landmarkshops.in/cdn-cgi/image/h=1125,w=1125,q=85,fit=cover/lifestyle/1000014751930-Green-DarkGreen-1000014751930_01-2100.jpg",
    description: "LAYERED SKIRT EITH WHITE DESIGN IN FLOWERS",
    color: "WHITE"
  },
  {
    id: 13,
    title: "SUNSET HARVEST LARGE HAT",
    brand: "THEREALB",
    price: 1499,
    img: "https://therealb.in/cdn/shop/files/Img3188_d7f47733-0857-4782-b6ce-2b7cd86f9132_400x.jpg?v=1683372601",
    description: "LAYERED SKIRT EITH WHITE DESIGN IN FLOWERS",
    color: "WHITE"
  },
  {
    id: 14,
    title: "TRAVELER'S TALE LARGE HAT",
    brand: "THEREALB",
    price: 1799,
    img: "https://therealb.in/cdn/shop/files/Img2934_89a057a2-b858-42b0-903f-4af7a16fc193_400x.jpg?v=1683372582",
    description: "LAYERED SKIRT EITH WHITE DESIGN IN FLOWERS",
    color: "WHITE"
  },
  {
    id: 15,
    title: "HIDDEN GEM STRAPLESS MIDI DRESS",
    brand: "SNITCH",
    price: 1599,
    img: "https://therealb.in/cdn/shop/files/IMG_2698_400x.jpg?v=1720088485",
    description: "LAYERED SKIRT EITH WHITE DESIGN IN FLOWERS",
    color: "WHITE"
  },
  {
    id: 16,
    title: "ENCHANTED GARDEN FLORAL MINI DRESS",
    brand: "SNITCH",
    price: 1699,
    img: "https://therealb.in/cdn/shop/files/25_400x.jpg?v=1712468519",
    description: "LAYERED SKIRT EITH WHITE DESIGN IN FLOWERS",
    color: "WHITE"
  },
  {
    id: 17,
    title: "FIELD OF DREAMS SLIP DRESS",
    brand: "SNITCH",
    price: 1599,
    img: "https://therealb.in/cdn/shop/files/Photo06-05-23_114912AM_400x.jpg?v=1720077546",
    description: "LAYERED SKIRT EITH WHITE DESIGN IN FLOWERS",
    color: "WHITE"
  },
  {
    id: 18,
    title: "MULTICOLOUR PRINTED CROP TOP AND SHORTS CASUALS CO ORD SET ",
    brand: "THEREALB",
    price: 1899,
    img: "https://therealb.in/cdn/shop/files/Img3021_a0edea54-c000-4205-988c-7be450dbd5b1_400x.jpg?v=1742549712",
    description: "LAYERED SKIRT EITH WHITE DESIGN IN FLOWERS",
    color: "WHITE"
  },
  {
    id: 19,
    title: "Multicolour Floral Print Long Skirt And Crop Top Se",
    brand: "SNITCH",
    price: 1499,
    img: "https://therealb.in/cdn/shop/files/Img3069_80c967fe-0107-45e9-be7b-87b9a0051d37_400x.jpg?v=1742545589",
    description: "LAYERED SKIRT EITH WHITE DESIGN IN FLOWERS",
    color: "WHITE"
  },
  {
    id: 20,
    title: "Nomadic Heart Hat",
    brand: "THEREALB",
    price: 1599,
    img: "https://therealb.in/cdn/shop/files/Img2834_d3aa450b-8a0c-4184-af53-278036a2af21_400x.jpg?v=1683372565",
    description: "LAYERED SKIRT EITH WHITE DESIGN IN FLOWERS",
    color: "WHITE"
  },
  

  // Add more products here
];
