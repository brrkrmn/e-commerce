export const products: Product[] = [
  {
    id: "1",
    src: "/src/assets/images/shopPage/product.png",
    title: "Graphic Design",
    description: "English Department",
    price: "$16.48",
    salePrice: "$6.48",
    address: "/",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#23856D"],
  },
  {
    id: "2",
    src: "/src/assets/images/shopPage/product.png",
    title: "Graphic Design",
    description: "English Department",
    price: "$16.48",
    salePrice: "$6.48",
    address: "/",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#23856D"],
  },
  {
    id: "3",
    src: "/src/assets/images/shopPage/product.png",
    title: "Graphic Design",
    description: "English Department",
    price: "$16.48",
    salePrice: "$6.48",
    address: "/",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#23856D"],
  },
];

export type Product = {
  id: string;
  src: string;
  title: string;
  description: string;
  price: string;
  salePrice: string;
  address: string;
  colors: string[];
}