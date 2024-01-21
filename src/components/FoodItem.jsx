const FoodItem = ({ title, price, image }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 flex flex-col p-3">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col">
        <img
          className="w-full h-full object-cover"
          src={image}
          alt={title}
        />
      </div>
      <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
      <div className="mb-4 text-grey-darker text-sm font-medium">
        <p>Rs.{price}{" "}</p>
      </div>
      <button className="bg-green-500 px-2 py-2 mx-12 rounded-3xl text-white">Checkout + </button>
    </div>
  );
};

export default FoodItem;
