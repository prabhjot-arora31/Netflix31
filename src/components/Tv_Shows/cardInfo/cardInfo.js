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
            width: "250px",
          }}
          onClick={() => {
            props.show(true);
          }}
        >
          Click to show all the shows
        </button>
        <h1 style={{ textAlign: "center", color: "darkblue" }}>
          {props.data.name}
        </h1>
        <h2 style={{ textDecoration: "underline" }} className="on">
          Original Name: {props.data.original_name}
        </h2>
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
            <h4>Country: {props.data.origin_country}</h4>
            <h4>Release date: {props.data.first_air_date}</h4>
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
