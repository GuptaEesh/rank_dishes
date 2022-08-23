import React from "react";
import { DishCard } from "../components";
import { useDish } from "../helpers";
import { App_Routes } from "../utils";
import { Link } from "react-router-dom";
import "./screens.css";

const PollResults = () => {
  const {
    dishState: { dishes },
  } = useDish();
  const isRanked = dishes.some((dish) => dish.rank !== "");
  return (
    <>
      <h1 className="lg text-center underline">Poll Results</h1>
      {!isRanked && (
        <section className="flex flex-col align-center vote-dish">
          <h1>
            You didn't vote any of the dishes! Please go ahead and do that
          </h1>
          <Link className="cta-btn r-05" to={App_Routes.home}>
            Let's vote
          </Link>
        </section>
      )}

      {!dishes.length ? (
        <h1 className="lg text-center m-1">
          OhHo! Dishes are afraid of being judged, can you come again in some
          time!
        </h1>
      ) : (
        <div className="grid dish-grid m-1 g-1">
          {dishes
            .sort((a, b) => b.points - a.points)
            .map((dish) => (
              <DishCard key={dish.id} dish={dish} page="results" />
            ))}
        </div>
      )}
    </>
  );
};

export { PollResults };
