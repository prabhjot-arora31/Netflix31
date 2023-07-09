function Card(props) {
  return (
    <>
      <div
        style={{
          width: "280px",
          border: `3px solid ${props.bordercolor}`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: `${props.txtcolor}`,
          padding: "0.6rem",
        }}
      >
        <h1 style={{ textAlign: "center" }}>{props.ele.title}</h1>

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
