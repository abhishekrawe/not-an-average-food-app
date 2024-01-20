import { useSelector } from "react-redux";
import FoodItem from "../components/FoodItem";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div>
      <h1 className="text-3xl font-bold">  Cart items - {cartItems.length} </h1>
      {cartItems.map((card, index) => (
        <FoodItem key={index} card={card} />
      ))}
    </div>
  )
}

export default Cart;