import { createContext, useContext, useReducer } from "react";
import { ACTIONS } from "../../utils";

const DishContext = createContext(null);
const initialDishState = {
  dishes: [],
};
const dishReducer = (dishState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTIONS.GET_DISHES:
      return {
        ...dishState,
        dishes: payload.map((item) => ({ ...item, rank: "", points: 0 })),
      };
    case ACTIONS.SELECT_DISH:
      const num =
        payload.rank === "first"
          ? 1
          : payload.rank === "second"
          ? 2
          : payload.rank === "third"
          ? 3
          : 4;
      return {
        ...dishState,
        dishes: dishState.dishes.map((item) =>
          item.rank === payload.rank
            ? { ...item, rank: 0, points: 0 }
            : item.id === payload.id
            ? { ...item, rank: payload.rank, points: 40 - num * 10 }
            : item
        ),
      };
    case ACTIONS.DESELECT_DISH:
      return {
        ...dishState,
        dishes: dishState.dishes.map((item) =>
          item.id === payload.id ? { ...item, rank: 0, points: 0 } : item
        ),
      };
    default:
      return dishState;
  }
};
const DishProvider = ({ children }) => {
  const [dishState, dispatchDish] = useReducer(dishReducer, initialDishState);
  return (
    <DishContext.Provider value={{ dishState, dispatchDish }}>
      {children}
    </DishContext.Provider>
  );
};

const useDish = () => useContext(DishContext);
export { useDish, DishProvider };
