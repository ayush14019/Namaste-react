/*
Manipulate the HTML DOM using Javscript
const heading = document.createElement("h1");
heading.innerHTML = "Namaste Everyone";
const root = document.getElementById("root");
root.appendChild(heading);
*/

// Manipulate the HTML DOM using React

// creating Nested React Elements Object
/*
 * <div id="parent">
 *   <div id="child">
 *     <h1>I am an h1 tag</h1>
 *   </div>
 * </div>
 *
 * ReactElement(Object) => HTML(Browser Understands)
 */

const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I'm the h1 tag"),
    React.createElement("h2", {}, "I'm the h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm the h1 tag"),
    React.createElement("h2", {}, "I'm the h2 tag"),
  ]),
);

console.log(heading);
// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(heading);

// const heading = React.createElement("h1", {}, "Hello World!");

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
