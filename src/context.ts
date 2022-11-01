import React, { useContext } from "react";

 export const ProductContext = React.createContext<any>('');
 export const useProductContext = () => useContext(ProductContext);