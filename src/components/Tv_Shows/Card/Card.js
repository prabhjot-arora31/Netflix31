function Card(props) {
  return (
    <>
      <div
        style={{
          width: "280px",
          border: "3px solid black",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "0.6rem",
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
        <button
          className="justToHover"
          style={{ width: "120px", marginTop: "0.7rem", padding: "10px" }}
          onClick={() => {
            //   console.log(props.ele.name, "clicked");
            props.data(props.ele);
            props.show(false);
          }}
        >
          More info..
        </button>
      </div>
    </>
  );
}

export default Card;
