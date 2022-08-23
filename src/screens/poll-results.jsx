import React from "react";
import { DishCard } from "../components";
import { useDish } from "../helpers";

const PollResults = () => {
  const {
    dishState: { dishes },
  } = useDish();
  return (
    <>
      <h1 className="lg text-center underline">Poll Results</h1>
      <div className="grid dish-grid m-1 g-1">
        {dishes
          .sort((a, b) => b.points - a.points)
          .map((dish) => (
            <DishCard dish={dish} page="results" />
          ))}
      </div>
    </>
  );
};

export { PollResults };
