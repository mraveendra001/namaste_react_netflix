
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
//class based components-old way and functional component - new way
//react functional component just a normal javascript function , which returns a jsx

// const Heading =()=>{
//   return <h1>namaste react functional component</h1>;
// };





import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";


const AppLayout = () =>{
  return (
    <div className="app">
      <Header/>
      <Body/>
    </div>
  )
}


const root= ReactDOM.createRoot(document.getElementById("root")); 
root.render(<AppLayout/>);  