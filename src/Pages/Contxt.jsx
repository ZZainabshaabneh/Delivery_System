import { createContext } from "react";

export const MyContext = createContext();

function  MyProvider  () {
  const Username = "zainab";
    return <MyContext.Provider value={Username}>
  
    </MyContext.Provider>;
};
export default MyProvider;