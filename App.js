import React from 'react';
import ReactDOM from 'react-dom';
// <div id='parent'>
//     <div id='child1'>
//         <h1>h1 tag</h1>
//         <h2>h2 tag</h2>
//     </div>
//     <div id="child2">
//         <h1>h1 tag</h1>
//         <h2>h2 tag</h2>
//     </div> 
// </div>

const parent = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child1"},[
        React.createElement("h1",{},"h1 tag changed"),
        React.createElement("h2",{},"h2 tag")
    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"h1 tag"),
        React.createElement("h2",{},"h2 tag")
    ])
])
const heading = React.createElement("h1",{id:"heading"},"Hello world from React changed!");
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);