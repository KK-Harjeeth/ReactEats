import React from "react";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
function ItemList(props) {

  const dispatch = useDispatch();
  const handleAddItem = (item)=>{
    dispatch(addItem(item));
  }
  console.log("items", props);
  return (
    <div>
      {props.items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-8 m-2 border-gray border-b-2 text-left flex justify-between"
        >
          <div className="w-11/12">
            <div className="py-2 text-base">
              <span>{item.card.info.name}</span>
              <span> - ₹ {item.card.info.price / 100}</span>
            </div>
            <p className="text-s">{item.card.info.description}</p>
          </div>
          {/* <img src={CDN_URL + item.card.info.imageId} className="w-2/12 h-auto" /> */}
          <div className="relative">
                {item?.card?.info?.imageId && (
                    <img 
                        src={CDN_URL + item?.card?.info?.imageId} 
                        className="w-[220px] h-auto rounded-lg object-cover"
                        alt={item.card.info.name}
                    />
                )} 
                {item?.card?.info?.imageId?<button 
                className="absolute bottom-[-12px] left-1/2 transform -translate-x-1/2 bg-white text-green-600 font-bold text-lg px-8 py-1 rounded-lg shadow-md"
                onClick={()=>handleAddItem(item)}
            >
                Add
            </button>:<button 
                className="absolute transform -translate-x-3/4 bg-white text-green-600 font-bold text-lg px-8 py-1 rounded-lg shadow-md"
                onClick={()=>handleAddItem(item)}
            >
                Add
            </button>} 
            
                
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
