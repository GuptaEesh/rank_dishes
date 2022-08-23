import React, { useEffect } from "react";
import { DishCard } from "../components";
import { useDish } from "../helpers";
import { getAllDishes } from "../utils";

const DishesScreen = () => {
  const {
    dishState: { dishes },
    dispatchDish,
  } = useDish();
  useEffect(() => {
    getAllDishes(dispatchDish);
  }, []);
  return (
    <>
      <h1 className="text-center underline lg">Different Type of Dishes</h1>
      <section className="flex justify-center gap-1">
        <input className="search-field" placeholder="search dish..." />
        <button
          // onClick={clickHandler}
          className="cursor-ptr r-05 submit-poll"
        >
          Submit Poll
        </button>
      </section>
      <div className="grid dish-grid m-1 g-1">
        {dishes
          .sort((a, b) => b.points - a.points)
          .map((dish) => (
            <DishCard dish={dish} key={dish.id} />
          ))}
      </div>
    </>
  );
};

export { DishesScreen };
