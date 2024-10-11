import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, costForTwo, avgRating } = resData?.info;
  const { deliveryTime } = resData?.info?.sla;
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg hover:bg-gray-200 cursor-pointer flex flex-col h-full">
        {resData?.info?.veg?<label className="bg-green-600 text-white text-s font-bold rounded-lg px-2 py-1 absolute">Veg</label>:null}
      <img
        className="rounded-lg w-full h-48 object-cover"
        alt="restaurant-logo"
        src={CDN_URL + resData.info.cloudinaryImageId}
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines.join(" , ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

// Higher order component
// - input => RestaurantCard component
// - output => RestaurantCard with veg/non-veg tag component

export const withVegLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="bg-green-600 text-white text-s font-bold rounded-lg px-2 py-1 absolute">Veg</label>
        <RestaurantCard {...props} /> 
      </div>
    );
  };
};
export default RestaurantCard;