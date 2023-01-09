import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <div id="navigation">
      <h1 className="title" style={{ color: "pink" }}>
        My Media store
      </h1>
      <div
        style={{
          textAlign: "center",
          display: "block",
          alignItems: "center",
          listStyleType: "none",
        }}
      >
        <div>
          <Link className="Link" to="/" id="homelink">
            {" "}
            <h3>Home</h3>
          </Link>
        </div>
        <div>
          <Link className="Link" to="/about" id="aboutlink">
            <h3>About </h3>
          </Link>
        </div>
        <div>
          <Link className="Link" to="/basket" id="basketlink">
            <h3>Basket:{props.itemCount}</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}
