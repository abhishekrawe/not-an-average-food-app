const FoodItem = ({ card }) => {
  return (
    <div>
      <h2>Hello :{card?.card?.title}</h2>
      {/* <p> {price/100} </p> */}
    </div>  
  );
}; 

export default FoodItem;