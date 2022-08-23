import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { DishCard } from "../components";
import { useDish } from "../helpers";
import { ACTIONS, App_Routes, getAllDishes } from "../utils";

const DishesScreen = () => {
  const {
    dishState: { dishes, searchTerm },
    dispatchDish,
  } = useDish();
  useEffect(() => {
    getAllDishes(dispatchDish);
  }, []);
  const navigate = useNavigate();
  const dishesToDisplay = /^\s*$/.test(searchTerm)
    ? dishes
    : dishes.filter(
        (dish) =>
          dish.dishName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          dish.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
  const inputHandler = (e) => {
    dispatchDish({ type: ACTIONS.SET_SEARCH_QUERY, payload: e.target.value });
  };
  const clickHandler = () => {
    navigate(App_Routes.results);
  };
  return (
    <>
      <h1 className="text-center underline lg">Different Type of Dishes</h1>
      <section className="flex justify-center gap-1 search-submit">
        <input
          value={searchTerm}
          onChange={inputHandler}
          className="search-field"
          placeholder="search dish..."
        />
        <button onClick={clickHandler} className="cursor-ptr r-05 submit-poll">
          Submit Poll
        </button>
      </section>
      <div className="grid dish-grid m-1 g-1">
        {dishesToDisplay.map((dish) => (
          <DishCard dish={dish} key={dish.id} />
        ))}
      </div>
    </>
  );
};

export { DishesScreen };
