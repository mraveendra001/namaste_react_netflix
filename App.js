
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
  
  const parent =React.createElement("div",
                              {id:"parent"},[
                React.createElement("div",{id:"child"},
                [React.createElement("h1",{},"i am h1 tag"),
                React.createElement("h2",{},"i am h2 tag")
            ]) ,
 React.createElement("div",{id:"child2"},
 [React.createElement("h1",{},"i am h12 tag"),
 React.createElement("h2",{},"i am h22 tag")
                       ])
                         ]
                        );

    console.log(parent);
            // const heading=React.createElement("h1",
            // {id:"heading",xyz:"abc"},
            // "hi from react");

            // console.log(heading);

            const root=ReactDOM.createRoot(document.getElementById("root"));

            root.render(parent);
       