import React from "react";

function BasketCount(props) {
  return (
    <div className="basket-count">
      {props.basketCount} item{props.basketCount !== 0 ? "k" : ""}
    </div>
  );
}

export default BasketCount;
