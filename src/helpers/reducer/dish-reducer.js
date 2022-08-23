import { ACTIONS } from "../../utils";

export const dishReducer = (dishState, action) => {
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
            ? { ...item, rank: "", points: 0 }
            : item.id === payload.id
            ? { ...item, rank: payload.rank, points: 40 - num * 10 }
            : item
        ),
      };
    case ACTIONS.DESELECT_DISH:
      return {
        ...dishState,
        dishes: dishState.dishes.map((item) =>
          item.id === payload.id ? { ...item, rank: "", points: 0 } : item
        ),
      };
    case ACTIONS.SET_SEARCH_QUERY:
      return {
        ...dishState,
        searchTerm: payload,
      };
    default:
      return dishState;
  }
};
