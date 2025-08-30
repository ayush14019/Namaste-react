import React from "react";

class UserClass extends React.Component {
  // this is the best place to receive props from functional component and create state varibale too.
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        // avatar_url: "htp://dummy-photo.com",
      },
      // count: 0,
      // count2: 2,
    };
    console.log(props);
    // console.log("First Constructor is called")
    // console.log(this.props.name + "Child Constructor is called");
  }

  async componentDidMount() {
    // console.log(this.props.name + "Child Component Did mount");
    // Api calls
    const data = await fetch("https://api.github.com/users/ayush14019");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    //console.log(json);
  }

  componentDidUpdate() {
    // console.log("Component Did update");
  }
  componentWillUnmount() {
    // console.log("component Will Unmount");
  }


  render() {
    // we can also store name and location inside the const = this.props so we don't need to do this everytime we will like to do.
    // const { name, location } = this.props;
    // we can also store count inside the const variable so we don't have to write this.state.count to acces everytime.
    //-----
    // this is how we create multiple state variable inside class
    // const { count, count2 } = this.state;

    // console.log("After that , Render is called")

    // console.log(this.props.name + "Child Render is called");

    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        {/* <h1>Count:{count}</h1> */}
        {/* <button
          onClick={() => {
            // NEVER EVER UPDATE STATE VARIABLE DIRECTLY
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count++
        </button> */}
        {/* <h1>Count2:{count2}</h1> */}
        <img src={avatar_url} />
        <h2>Name : {name}</h2>
        <h3>Location :{location} </h3>
        <h4>Contact : @ayush14019</h4>
      </div>
    );
  }
}


export default UserClass;

/****
* ---Mounting---
*
* Constructor (dummy)
* Render(dummy)
*       <HTML Dummy>
* Component Did Mount
*       <Api call>
*       <this.setState> -> State variable is updated
* --- updated ---
*
*       render(api data)
*       <HTML (new api data)>
*       componentDid update
*
*/ 
