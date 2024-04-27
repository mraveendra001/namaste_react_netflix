
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
 * 
 */
import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is Namaste React 🚀"),
    React.createElement("h2", {}, "by Meghana R"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2der tag"),
  ]),
]);

console.log(parent); // object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);