import ItemList from "./ItemList"

function RestaurantCategory(props) {
    const handleClick =()=>{
        props.setShowIndex();
    }
    console.log(props)
  return (
    <div>
      {/* Accordion Header */}
      <div className="w-8/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div  className="flex justify-between cursor-pointer" onClick={handleClick}>
            <span className="font-bold text-lg">{props.data.title} ({props.data.itemCards.length})</span>
            {props.showItems ? <span>&#9650;</span> : <span>&#9660;</span>}
        </div>
        
        {props.showItems?<ItemList items={props.data.itemCards}/>:null}
      </div>
      
      {/* Accordion Body */}

      
    </div>
  )
}

export default RestaurantCategory
