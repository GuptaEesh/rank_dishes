import React from "react";
import { useDish } from "../../helpers";
import { ACTIONS } from "../../utils";
import {
  AiFillFire,
  AiFillHeart,
  AiOutlineFire,
  AiOutlineHeart,
  BsFillHandThumbsUpFill,
  BsHandThumbsUp,
} from "../../icons";
import "./dish-card.css";
const DishCard = ({ dish, page = null }) => {
  const { dispatchDish } = useDish();
  const { id, dishName, description, image, rank } = dish;
  const voteHandler = (rank) => {
    dispatchDish({ type: ACTIONS.SELECT_DISH, payload: { id, rank } });
  };
  const removeVoteHandler = (rank) => {
    dispatchDish({ type: ACTIONS.DESELECT_DISH, payload: { id, rank } });
  };
  return (
    <article
      className={`${rank}-card flex flex-col p-010 justify-space-between dish-card`}
    >
      {page && (
        <h1 className="text-center underline">
          {rank.length ? "You selected :" + rank.toUpperCase() : null}
        </h1>
      )}
      <img loading="lazy" src={image} alt={dishName} />
      {!page && (
        <section className="flex g-1 justify-center p-1">
          {rank === "first" ? (
            <AiFillFire
              onClick={() => removeVoteHandler("first")}
              className="error cursor-ptr lg"
            />
          ) : (
            <AiOutlineFire
              className=" cursor-ptr lg"
              onClick={() => voteHandler("first")}
            />
          )}
          {rank === "second" ? (
            <AiFillHeart
              onClick={() => removeVoteHandler("second")}
              className="error cursor-ptr lg"
            />
          ) : (
            <AiOutlineHeart
              className=" cursor-ptr lg"
              onClick={() => voteHandler("second")}
            />
          )}
          {rank === "third" ? (
            <BsFillHandThumbsUpFill
              onClick={() => removeVoteHandler("third")}
              className="cursor-ptr lg"
            />
          ) : (
            <BsHandThumbsUp
              className=" cursor-ptr lg"
              onClick={() => voteHandler("third")}
            />
          )}
        </section>
      )}
      <h1>{dishName}</h1>
      <small className="sm">{description}</small>
    </article>
  );
};

export { DishCard };
