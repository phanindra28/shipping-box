import React, { createContext, useState } from "react";
import { INITIAL_DATA } from "../data/seed-data.js";

const ShippingContext = createContext(null);

export const ShippingProvider = ({ children }) => {
  const [boxes, setBoxes] = useState(INITIAL_DATA);

  const handleAddBox = (box) => {
    console.log("New Box", box);
    setBoxes([...boxes, box]);
  };

  return (
    <ShippingContext.Provider value={{ boxes, handleAddBox }}>
      {children}
    </ShippingContext.Provider>
  );
};

export default ShippingContext;
