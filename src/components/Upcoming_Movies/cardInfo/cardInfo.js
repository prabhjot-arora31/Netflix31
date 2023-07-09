import React from "react";
import "./cardInfo.css";
function CardInfo(props) {
  // const data = props.ele;
  // console.log(typeof data);
  return (
    <>
      <div className="main">
        <button
          style={{
            width: "290px",
          }}
          onClick={() => {
            props.show(true);
          }}
        >
          Click to show all the upcoming movies
        </button>
        <h1 style={{ textAlign: "center", color: "darkblue" }}>
          {props.data.title}
        </h1>

        <div className="cardMain">
          <div className="imgContainer">
            <img
              src={`https://image.tmdb.org/t/p/original/${props.data.backdrop_path}`}
            />
          </div>
          <div className="info">
            <h4>
              Rating : {props.data.vote_average}/10({props.data.vote_count})
            </h4>
            <h4>Release date: {props.data.release_date}</h4>
            <h3 style={{ textAlign: "center", fontSize: "13px" }}>
              <span
                style={{
                  textAlign: "left",
                  textDecoration: "underline",
                  fontSize: "15px",
                }}
              >
                {" "}
                Overview:
              </span>{" "}
              {props.data.overview}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardInfo;
