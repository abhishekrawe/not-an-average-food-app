const FoodItem = ({ title, price, image }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 flex p-3">
      <img
        className="w-60 h-40 object-cover rounded-3xl"
        src={image}
        alt={title}
      />
      <div className="flex-col p-5 text-left">
        <h3 className="mb-4 text-xl font-semibold">{title}</h3>
        <div className="mb-4 text-grey-darker text-sm font-medium">
          <p>Rs.{price}{" "}</p>
        </div>
        <button className="bg-green-500 px-6 rounded-3xl text-white">Checkout </button>
      </div>


    </div>
  );
};

export default FoodItem;
