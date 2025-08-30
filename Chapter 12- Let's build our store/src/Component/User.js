import { useEffect, useState } from "react";

const User = ({ name }) => {
   // this is how we create multiple state variable inside functional component
  const [count, setcount] = useState(0);
  const [count2] = useState(1);

  useEffect(()=>{
    //Api  calls
  },[])
  return (
    <div className="user-card">
      <h2>Count: {count}</h2>
      <h2>Count2: {count2}</h2>
      <h2>{name}</h2>
      <h3>Location : Bihar</h3>
      <h4>Contact : @ayush14019</h4>
    </div>
  );
};

export default User;
