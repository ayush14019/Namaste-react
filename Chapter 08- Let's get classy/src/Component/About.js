import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);

   // console.log("Parent Constructo is called");
  }

  componentDidMount() {
    //console.log("Parent Component Did mount");
  }

  render() {
    //console.log("Parent Render is called");
    return (
      <div>
        <h1>About Class Component</h1>
        <h2>This is About</h2>
        <UserClass name={"First (classs)"} location={"Bihar class"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is About</h2>
//       // To create a functional component, we define it as a function and pass
//       props (or arguments like name) inside it.
//       {/* <User name={"Ayush Raj(function)"} /> */}
//       // We define a class component and pass props to it. Inside, we use
//       this.props to access them. Always use constructor(props) and super(props)
//       if you define a constructor.

//       // when the parent renders after reaching
//       this line it see userclass so enter inside this and First constructor is
//       called after that, Render is called .

//       <UserClass name={"Ayush Raj (classs)"} location={"Bihar class"} />
//     </div>
//   );
// };

/*

- Parent Constructor
- Parent Render
    / Render phase /
  - First Constructor     
  - First Render

  - Second Constructor
  - Second Render

  <DOM UPDATED - IN SINGLE BATCH> 
  / Commit phase /
  - First ComponentDidmount
  - Second ComponentDidmount

- Parent ComponentDidmount
*/
export default About;
