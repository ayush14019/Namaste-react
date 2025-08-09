import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Object => HTMLElement(render)

// React Element
// JSX (transpiled before it reaches the JS)- PARCEL - Babel(Package) - HTML- like or XML -like structure

// JSX => Babel transpiles it to React.createElement => ReactElements.Object => HTMLElement(render)

// If want to give multiple code in react we have to use () bracket and we put code inside of bracket
const heading = (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX 🚀
  </h1>
);

// arrow function shorthand
const fn = () => true;

// arrow function
const fn2 = () => {
  return true;
};

// React Component
// Class based component - OLD

// Functional based component - NEW - is a normal javascript function that return  some piece of jsx code 0r A function that is returning some piece of jsx is known as functional based component.

// If we have to declare functional based component we have to use capital letter of the function name.

// If we want to skip the return, wrap JSX in () parentheses directly after the arrow =>:

// Component composition : component inside component is known as compositition
/*
const Title = () => (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX 🚀
  </h1>
);

we can call title inside the react component like this
1. {Title()} : because this is a function
2. <Title /> : this is a normal syntaz to call a react component
3. <Title><Title/> : This is also way to call a react component inside the any react element ( just a name of react element) or react component or render the component .
 
const HeadingComponent = () => (
  <div id="container">
    <Title />
    
    <h1 className="heading">Namaste React Functional Component 🚀 </h1>;
  </div>
);
*/

// we can also put react element inside the react element and we can also put react component inside the react element <HeadingComponent /> like this 

const element = <span>React Element</span>
const title = (
  <h1 className="head" tabIndex="5">
    {element}
    Namaste React using JSX 🚀
  </h1>
);

const numbers = 10000;

// we can inject anything inside like anything or we can perform any operation also in the {} JSX = {numbers} and we can call react elements also

// this is how we put react element inside the react component : {title}
const HeadingComponent = () => (
  <div id="container">
    {title}
    {numbers}
    <h1 className="heading">Namaste React Functional Component 🚀 </h1>;
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// this is syntax to render react element
// root.render(heading);

// this is syntax to render react component
root.render(<HeadingComponent />);
