import axios from "axios";
import { ACTIONS } from "./constants";
const url = "https://raw.githubusercontent.com/syook/react-dishpoll/main";
export const getAllUsers = async (dispatch) => {
  const response = await axios.get(url + "/users.json");
  dispatch({ type: ACTIONS.GET_ALL_USERS, payload: response.data });
};
export const getAllDishes = async (dispatch) => {
  const response = await axios.get(url + "/db.json");
  dispatch({ type: ACTIONS.GET_DISHES, payload: response.data });
};
