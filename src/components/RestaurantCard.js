import { CDN_URL } from "../utils/constants";

const styleCard={
    backgroundColor:"#f0f0f0"
  }
  
const RestaurantCard=(props)=>{
    //here props is an object , props means properties
    //const RestaurantCard=(resName,cusine)=>{ // de structuring of props
   // const props ={resName , cuisine}
   //swiggy is a config driven ui . the data from backend comes from backend
   //for example the carasol , is different for different location
   // console.log(props);
   const {resData}=props;
  
   const {
   cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo
   
   } = resData?.info;
  
   const {deliveryTime}= resData?.info?.sla;
    return (
      <div className="res-card" style={styleCard}>
         <img
          className="res-logo"
          alt="res-logo"
          src={CDN_URL+
          cloudinaryImageId}   
        />
        <h3>{name}</h3> {/*u can write only resName if you are de structuring*/}
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating} ratings</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime} minutes</h4>
      </div>
    )
  }

  export default RestaurantCard;