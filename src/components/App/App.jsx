import React from 'react';
import './App.css';
import image1 from "../../imgs/zyr1.jpg";
// import image2 from "../../imgs/2.jpg";
// import image3 from "../../imgs/3.jpg";
import logo1 from "../../imgs/zyr_logo.png";
// import logo1 from "../../imgs/logo1.png";
import Card from '../Card/Card';
// import Arrow from '../Arrow/Arrow';
import { faChess, faChessBishop, faChessBoard, faChessKing, faChessKnight, faChessPawn, faChessQueen, faChessRook } from '@fortawesome/free-solid-svg-icons'


const data = [{
  title: "TEXT 1",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt purus eget justo dignissim euismod. Donec non quam commodo, consequat orci nec...",
  background: image1,
  logo: logo1,
  buttons: [
    { icon: faChess },
    { icon: faChessBishop },
    { icon: faChessBoard },
  ]
}
//   , {
//   title: "TEXT 2",
//   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt purus eget justo dignissim euismod. Donec non quam commodo, consequat orci nec...",
//   background: image2,
//   buttons: [
//     { icon: faChessRook },
//     { icon: faChessKnight },
//     { icon: faChessKing },
//     { icon: faChessQueen },
//     { icon: faChessKnight },
//     { icon: faChessRook },
//   ]
// }, {
//   title: "TEXT 3",
//   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt purus eget justo dignissim euismod. Donec non quam commodo, consequat orci nec...",
//   background: image3,
//   buttons: [
//     { icon: faChessRook },
//     { icon: faChessBishop },
//     { icon: faChessPawn },
//   ]
// }
];

const App = () => {
  return (
    <div className="App">
      <div className="slider" id={"a"}>
        {
          data.map((element, index) => {
            return <Card key={index} image={element.background} title={element.title} desc={element.desc} logo={element.logo} buttons={element.buttons} />
          })
        }
      </div>
      {/* <div style={{ postion: 'absolute' }}>
        <Arrow />
      </div> */}
    </div>
  );
}

export default App;
