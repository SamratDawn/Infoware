import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const { title, price, description, id , img} = props;

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: id,
        title: title,
        price: price,
      })
    );
  };

  return (
    <li className={classes.item}>
      <Card>
        <div>
          <img src={img}  width="150px"/>
        </div>
        <div>
          <header>
            <h3>{title}</h3>
            <div className={classes.price}>₹{price.toFixed(2)}</div>
          </header>
          <p>{description}</p>
          <div className={classes.actions}>
            <button onClick={addToCartHandler}>Add to Cart</button>
          </div>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
