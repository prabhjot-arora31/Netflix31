// import React, { useCallback, useState } from "react";s
function Card(props) {
  //   console.log(props.ele.name, "");
  return (
    <>
      {/* {props.handleCallBack(props.ele)} */}
      <div
        onClick={() => {
          //   console.log(props.ele.name, "clicked");
          props.data(props.ele);
          props.show(false);
        }}
        className="justToHover"
        style={{
          width: "280px",
          border: "3px solid black",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 style={{ textAlign: "center" }}>{props.ele.name}</h1>
        <h3 style={{ textAlign: "center" }}>
          Original Name = {props.ele.original_name}
        </h3>
        <div className="imgDiv" style={{ width: 200 }}>
          <img
            style={{ width: "100%" }}
            className="imgs"
            alt="Images"
            src={`https://image.tmdb.org/t/p/original/${props.ele.poster_path}`}
          />
        </div>
      </div>
    </>
  );
}

export default Card;
