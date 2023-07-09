import React from "react";
import { useEffect, useState } from "react";
import "./Cards.css";
import Card from "../Card/Card";
import CardInfo from "../cardInfo/cardInfo";
import { useNavigate } from "react-router-dom";
function TvCards(props) {
  const [data, setData] = useState("");
  const [showWholeCard, setShowWholeCard] = useState(true);
  // const [dataToBePassed, setDataToBePassed] = useState("");
  const [darkMode, setDarkMode] = useState({
    bgColor: "white",
    borderColor: "black",
    txtColor: "black",
    topIs: "6.2rem",
    btnText: "Switch to dark mode",
  });
  function switchToDarkMode() {
    if (darkMode.bgColor == "white") {
      setDarkMode({
        bgColor: "black",
        btnText: "Switch to light mode",
        borderColor: "white",
        txtColor: "white",
        topIs: "5.4rem",
      });
    } else {
      setDarkMode({
        bgColor: "white",
        borderColor: "black",
        txtColor: "black",
        btnText: "Switch to dark mode",
        topIs: "6.2rem",
      });
    }
  }
  useEffect(() => {
    async function fetchAPI() {
      const tempData = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=fafef439971c0bedf1c12e7a5be971c2"
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
  const navigate = useNavigate();
  return (
    <>
      {console.log(dataToBePassed)}
      <div style={{ position: "relative", right: "7px", top: "-10px" }}>
        <div
          style={{
            position: "fixed",
            zIndex: 1,
            backgroundColor: "black",
            width: "100%",
            height: "70px",
          }}
        >
          <div
            className="flex"
            style={{
              // backgroundColor: "black",
              color: "white",
              position: "relative",
              right: "6px",
              marginLeft: "auto",
              marginRight: "auto",
              width: "100%",
            }}
          >
            <button
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </button>
            <h1>Top Rated Movies</h1>
            {/* <button
              style={{ width: "160px" }}
              className="switch"
              onClick={switchToDarkMode}
            >
              {darkMode.btnText}
            </button> */}
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
          flexWrap: "wrap",
        }}
      ></div>
      <div style={{ width: "100%", backgroundColor: darkMode.bgColor }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",

            flexWrap: "wrap",
            // marginBottom: "6rem",
            width: "100%",
            // padding: "2rem",
            paddingLeft: "0.5rem",
            paddingRight: "0.5rem",
            marginLeft: "auto",
            marginRight: "auto",
            position: "relative",
            top: `${darkMode.topIs}`,
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
                    txtcolor={darkMode.txtColor}
                    show={setShowWholeCard}
                    bordercolor={darkMode.borderColor}
                  />
                );
              })
            ) : (
              <CardInfo show={setShowWholeCard} data={dataToBePassed} />
            )
          ) : null}
        </div>
      </div>
    </>
  );
}

export default TvCards;
