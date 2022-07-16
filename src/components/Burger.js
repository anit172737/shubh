import React from "react";
import img1 from "../img/6.png";
import img2 from "../img/7.png";

const Burger = () => {
  return (
    <div className="home">
      <div className="home__description">
        <p style={{ fontSize: "3vw", fontWeight: "700", color: "white" }}>
          PRACTICE PROJECTS
        </p>
        <p
          style={{
            fontSize: "2vw",
            color: "white",
            textAlign: "center",
            padding: "0vw 5vw",
          }}
        >
          Social Merdia post for BurgerCorner - Small Startup.
        </p>
      </div>
      <div
        style={{
          display: "grid",
          justifyContent: "center",
          padding: "2vw 0vw",
        }}
      >
        <img
          style={{ height: "40vw", width: "50vw" }}
          src={img1}
          alt="img1"
        ></img>
      </div>

      <div style={{ paddingBottom: "8vw" }}>
        <p
          style={{
            fontSize: "2vw",
            color: "white",
            textAlign: "center",
            padding: "5vw 5vw",
          }}
        >
          Nike Shoe Post - Graphic Design Post.
        </p>

        <div style={{ display: "grid", justifyContent: "center" }}>
          <img
            style={{ height: "40vw", width: "50vw" }}
            src={img2}
            alt="img1"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Burger;
