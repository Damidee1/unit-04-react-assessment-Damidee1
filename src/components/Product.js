import React from "react";

const Product = ({ item, ...props }) => {
  console.log(props);

  const { trackName, trackId, artistName, trackPrice, artworkUrl60 } = item;
  return (
    <div
      id={"items-container"}
      style={{
        backgroundColor: "pink",
        padding: "10px",
        marginBottom: "6px",
        textAlign: "center",
      }}
    >
      <img src={artworkUrl60} alt={artistName} />
      <ul className="musiclist">
        <h2>{trackName}</h2>
        <h2>{artistName}</h2>
        <h4 className="price">{trackPrice ? "£" + trackPrice : "0"} </h4>
      </ul>
      <div className="buttons">
        {item.inBasket ? (
          <button
            id="add-button"
            onClick={() => props.removeFromBasket(trackId)}
          >
            {" "}
            Remove
          </button>
        ) : (
          <button id="add-button" onClick={() => props.addToBasket(trackId)}>
            {" "}
            Add to basket
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
