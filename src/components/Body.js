//now we need to have different restaurants passed dynamically so we pass this through props , its like passing arguments to a function
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
const Body=()=>{
    //local state variable scope is inside the component
    //const [resList]= useState([]); //state variable with the default variable as []
    // let resList=[] - normal varaible

const [resl,setResl]= useState(resList);
    return(
      <div className="Body">
       {/* <div className="search">Search</div> */}
       <div className="filter">
        <button className="filter-btn" onClick={()=>{
             const filteredData = resl.filter(res => res.info.avgRating > 4);
                setResl(filteredData); 
        }
            }>Top rated Restaurants</button>
            
       </div>
       <div className="res-container">
        {/*Restaurantcard - we will take it as component since it has to repeated*/}
        { resl.map((info)=> (<RestaurantCard key={info.info.id} resData={info}/>)) }
        {/* u must use key for iteration . coz react wont be able to find which restaurant card
         has been newly added if it has unique key then it can rendered easily
        its not recommeded to use index as key */}
        {/* <RestaurantCard 
        resName="KFC" cuisine="Rice Bowl, Burgers, fries"/> these are props */}
       
       </div>
  
      </div>
    )
  }

  export default Body;