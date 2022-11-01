import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 50,
    title: "Haldiram's Nagpur Bhujia Sev",
    description: "200g",
    img: "https://m.media-amazon.com/images/I/515+5iJC+tL.jpg"
  },
  {
    id: "p2",
    price: 33,
    title: "Dukes Waffy Chocolate Wafers",
    description: "60g",
    img: "https://m.media-amazon.com/images/I/51vfJgZ7pnL._SX522_.jpg",
  },
  {
    id: "p3",
    price: 238,
    title: "Mortein Dual Insect Killer Spray",
    description: "600ml",
    img:"https://m.media-amazon.com/images/I/51HANA0xhTL._SL1000_.jpg"
  },
  {
    id: "p4",
    price: 50,
    title: "Cadbury Dairy Milk Silk",
    description: "100g",
    img:"https://m.media-amazon.com/images/I/61DwAbDEA0L._SX522_.jpg"
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            img={product.img}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
