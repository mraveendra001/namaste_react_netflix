
/**
 * <div id="parent">
 *    <div id="child">
 *     <h1>i am h1 tag</h1>
 *     <h2>i am h2 tsg</h2>
 *    </div>
 * <div id="child2">
 *     <h1>i am h12 tag</h1>
 *     <h2>i am h22 tsg</h2>
 *    </div>
 * </div>
 * 
 * 
 * react element is a javascript object which converts to html (browser understandable)
 * 
 * const parent = React.createElement("div", { id: "parent" }, [
 * React.createElement("div", { id: "child" }, [
 *  React.createElement("h1", {}, "This is Namaste React 🚀"),
 * React.createElement("h2", {}, "by Meghana R"),
 * ]),
 * React.createElement("div", { id: "child2" }, [
 * React.createElement("h1", {}, "I'm an h1 tag"),
 * React.createElement("h2", {}, "I'm an h2der tag"),
 * ]),
]);

 * console.log(parent); // object

 * const root = ReactDOM.createRoot(document.getElementById("root"));

*  root.render(parent);
 * 
 */
//JSX => React.createElement => ReactElement JS Object => HTMLElement(render)
//jsx - jsx is different , we can write react code without jsx
//jsx makes developers life easy
//jsx is html like syntax
//jsx understands ecma script 6 ,es6
//JSX (transpiled before reaching java script engine) - PARCEL (parcel is a manager) this transpiling is done by Babel 
// const Heading=
// (<h1  className="head">namaste react using jsx
// </h1>); //this becomes a react element ,html tag insde jsx
// const root= ReactDOM.createRoot(document.getElementById("root"));
// root.render(Heading);
import React from "react";
import ReactDOM from "react-dom/client";
//class based components-old way and functional component - new way
//react functional component just a normal javascript function , which returns a jsx

// const Heading =()=>{
//   return <h1>namaste react functional component</h1>;
// };
const elem =<span>React Element</span>
const Title = ()=>{
  return (
    <h1 className="head" tabIndex="5">title🚀{elem}</h1>
  )
}

const v=1000;
//now say for example say u have const data = api.getData(); say this 
// api is having some malicious data and we are executing this in thr form
//of js expression {data} ,then the attacker may get hold of certain things of my browser in my laptop
//if the attacker csn execute any java script, then attacker can read my local storage,cookies and all
// this attack is called cross-site-scripting , but jsx takes care of this attack , it escpaes it ,it sanitize the data and prevents cross site scripting
//component composition -component inside the component
const Heading =()=>{
  return(
    <div id="container">
      <h1>{v}</h1>  
       <Title/>
      {Title()}   
      <Title></Title> {/* 3 ways of calling component ,since component is also a function  */}
      <h1 id="heading">functional component of react</h1>
    </div>
    //<Title></Title> - title component can be written like this
  )
  // anything inside {} is a javascript expression
  //u  can also write {100+200}
}

//const root= ReactDOM.createRoot(document.getElementById("root")); -- this is to render react element
//root.render(Heading);  -- this is to render react element

const root= ReactDOM.createRoot(document.getElementById("root")); 
root.render(<Heading/>);  