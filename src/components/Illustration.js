import React, { useEffect } from "react";
import img1 from "../img/4.jpeg";
import img2 from "../img/illustration/2.jpeg";
import img3 from "../img/illustration/1.jpeg";

const Illustration = () => {
  return (
    <div className="home">
      <div className="home__description">
        <p style={{ fontSize: "3vw", fontWeight: "700", color: "white" }}>
          Illustration
        </p>
        <p
          style={{
            fontSize: "2vw",
            color: "white",
            textAlign: "center",
            padding: "0vw 5vw",
          }}
        >
          Earlier, I developed Illustration skills so I started making my own
          characters. Uptil now I have created 3 characters.
        </p>
      </div>
      <div
        style={{
          display: "grid",
          justifyContent: "center",
          gap: "5vw",
          padding: "3vw 0vw",
        }}
      >
        <div>
          <img
            style={{ height: "40vw", width: "50vw" }}
            src={img1}
            alt="img1"
          ></img>
          <br />
          <br />
          <br />
          <h1
            style={{ color: "#797979", textAlign: "center", fontWeight: "700" }}
          >
            JACO
          </h1>
        </div>

        <div>
          <img
            style={{ height: "40vw", width: "50vw" }}
            src={img2}
            alt="img1"
          ></img>
          <br />
          <br />
          <br />
          <h1
            style={{ color: "#797979", textAlign: "center", fontWeight: "700" }}
          >
            OSCAR
          </h1>
        </div>

        <div>
          <img
            style={{ height: "40vw", width: "50vw" }}
            src={img3}
            alt="img1"
          ></img>
          <br />
          <br />
          <br />
          <h1
            style={{ color: "#797979", textAlign: "center", fontWeight: "700" }}
          >
            ELWIN
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Illustration;
