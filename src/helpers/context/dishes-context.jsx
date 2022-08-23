import { createContext, useContext, useReducer, useState } from "react";
import { dishReducer } from "../reducer";

const DishContext = createContext(null);
const initialDishState = {
  dishes: [],
  searchTerm: "",
};
const DishProvider = ({ children }) => {
  const [dishState, dispatchDish] = useReducer(dishReducer, initialDishState);
  const [loading, setLoading] = useState(false);
  return (
    <DishContext.Provider
      value={{ dishState, dispatchDish, loading, setLoading }}
    >
      {children}
    </DishContext.Provider>
  );
};

const useDish = () => useContext(DishContext);
export { useDish, DishProvider };
