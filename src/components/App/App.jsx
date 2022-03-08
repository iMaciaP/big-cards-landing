import React from "react";
import "./App.css";
import image1 from "../../imgs/zyr1.jpg";
import image2 from "../../imgs/2.jpg";
import image3 from "../../imgs/3.jpg";
import logo1 from "../../imgs/zyr_logo.png";
import Card from "../Card/Card";
import Arrow from "../Arrow/Arrow";
import {
  faChess,
  faChessBishop,
  faChessBoard,
  faChessKing,
  faChessKnight,
  faChessPawn,
  faChessQueen,
  faChessRook,
} from "@fortawesome/free-solid-svg-icons";
import Carousel from "../Carousel/Carousel";

const data = [
  {
    title: "TEXT 1",
    desc: "Nuestra nueva gama de burgers plant-based: un mundo de sabores inspirados en la más pura esencia mediterránea.",
    background: image1,
    logo: logo1,
    tourLocation : './app-files/index.html',
    buttons: [
      { icon: faChess },
      { icon: faChessBishop },
      { icon: faChessBoard },
    ],
  },
  {
    title: "TEXT 2",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt purus eget justo dignissim euismod. Donec non quam commodo, consequat orci nec...",
    background: image2,
    tourLocation : './app-files/index2.html',
    buttons: [
      { icon: faChessRook },
      { icon: faChessKnight },
      { icon: faChessRook },
    ],
  },
  {
    title: "TEXT 3",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt purus eget justo dignissim euismod. Donec non quam commodo, consequat orci nec...",
    background: image3,
    tourLocation : './app-files/index3.html',
    buttons: [
      { icon: faChessRook },
      { icon: faChessBishop },
      { icon: faChessPawn },
    ],
  },
  {
    title: "TEXT 4",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt purus eget justo dignissim euismod. Donec non quam commodo, consequat orci nec...",
    background: image3,
    tourLocation : './app-files/index4.html',
    buttons: [
      { icon: faChessRook },
      { icon: faChessBishop },
      { icon: faChessPawn },
    ],
  },
];

const App = () => {
  return (
    <div className="App">
      <Carousel show={3} infiniteLoop>
        {data.map((element, index) => {
          return (
            <div key={index}>
              <Card
                image={element.background}
                title={element.title}
                desc={element.desc}
                logo={element.logo}
                buttons={element.buttons}
                tourLocation={element.tourLocation}
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default App;
