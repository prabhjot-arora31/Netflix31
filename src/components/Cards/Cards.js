import React from "react";
import { useEffect, useState } from "react";
import Card from "../Card/Card";
import CardInfo from "../cardInfo/cardInfo";
import "./Cards.css";
function Cards(props) {
  const [data, setData] = useState("");
  const [showWholeCard, setShowWholeCard] = useState(true);
  // const [dataToBePassed, setDataToBePassed] = useState("");

  useEffect(() => {
    async function fetchAPI() {
      const tempData = await fetch(
        "https://api.themoviedb.org/3/tv/top_rated?api_key=fafef439971c0bedf1c12e7a5be971c2"
      );
      const Data = await tempData.json();
      setData(Data.results);
    }
    fetchAPI();
  }, []);
  // var [element, setElement] = useState([]);
  var [dataToBePassed, setDataToBePassed] = useState();
  function yoData(dataParam) {
    setDataToBePassed(dataParam);
  }
  return (
    <>
      {console.log(dataToBePassed)}
      <h1 style={{ textAlign: "center" }}>Top Rated Shows</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
          flexWrap: "wrap",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          marginBottom: "2rem",
        }}
      >
        {/* {data &&
          data.forEach((ele) => {
            element.push(ele);
          })} */}
        {/* {data &&
          data.forEach((element) => {
            console.log(element);
          })} */}
        {data !== "" ? (
          showWholeCard ? (
            data.map((ele) => {
              return (
                <Card
                  key={ele.poster_path}
                  ele={ele}
                  data={yoData}
                  show={setShowWholeCard}
                />
              );
            })
          ) : (
            <CardInfo show={setShowWholeCard} data={dataToBePassed} />
          )
        ) : null}
      </div>
    </>
  );
}

export default Cards;
