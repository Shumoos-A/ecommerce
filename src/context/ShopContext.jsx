import { createContext } from "react";


export const ShopContext = createContext(props);

const value = {

}
return (
  <ShopContext.Provider value={value}  >
    {props.children}
  </ShopContext.Provider>
)
export default ShopContextProvider;