
 import { useContext } from "react";
import { MyContext } from "./Contxt";
function Done() {
        const username = useContext(MyContext);
    return (
      <>
        <h1>HI {username}</h1>
        <h2>YOUR ORDER WILL BE ON TIME </h2>
      </>
    );
};
export default Done;