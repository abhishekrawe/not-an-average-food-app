import { useSelector } from "react-redux";
import FoodItem from "../components/FoodItem";


const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <>
      <h1 className="pt-32 text-3xl font-bold text-left px-4">  Total Items - {cartItems.length} </h1>
      <div className="flex">
        <div className="justify-center flex">
          <div className="flex flex-wrap">
            {cartItems.map((card, index) => (
              <FoodItem key={index}
                title={card.card.card.title}
                price={card.card.card.itemCards[0].card.info.price / 100}
                image={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${card.card.card.itemCards[0].card.info.imageId}`} />
            ))}
          </div>
        </div>
      </div>


    </>

  )
}

export default Cart;