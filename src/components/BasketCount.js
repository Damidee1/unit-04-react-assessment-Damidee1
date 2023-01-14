import React from "react";

function BasketCount(props) {
  return (
    <div className="basket-count">
      {props.basketCount} item{props.basketCount !== 10 ? "k" : ""}
    </div>
  );
}

export default BasketCount;
