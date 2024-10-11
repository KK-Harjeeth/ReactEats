import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
function RestaurantMenu() {
  const params = useParams();
  const resInfo = useRestaurantMenu(params.resId);

  const [showIndex,setShowIndex] = useState(0);
  if (resInfo === null) {
    return <Shimmer />;
  }
  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards ||
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.categories[0]?.itemCards;

  console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards);

  const cuisines = resInfo?.cards[2]?.card?.card?.info?.cuisines;
  const costForTwoMessage =
    resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">
        {resInfo?.cards[2]?.card?.card?.info?.name}
      </h1>
      <p className="font-bold text-lg">
        {cuisines.join(" , ")} - {costForTwoMessage}
      </p>
      {categories.map((category,index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index===showIndex && true}
          setShowIndex={()=>setShowIndex(index)}
        />
      ))}
    </div>
  );
}

export default RestaurantMenu;
