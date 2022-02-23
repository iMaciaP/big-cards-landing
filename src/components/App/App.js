import './App.css';
import image1 from "../../imgs/1.jpg";
import image2 from "../../imgs/2.jpg";
import image3 from "../../imgs/3.jpg";
import Card from '../Card/card';

const data = [{
  title: "TEXT 1",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt purus eget justo dignissim euismod. Donec non quam commodo, consequat orci nec...",
  background: image1
}, {
  title: "TEXT 2",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt purus eget justo dignissim euismod. Donec non quam commodo, consequat orci nec...",
  background: image2
}, {
  title: "TEXT 3",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt purus eget justo dignissim euismod. Donec non quam commodo, consequat orci nec...",
  background: image3
}];

const App = () => {

  return (
    <div className="App">
      {
        data.map((element) => {
          return <Card image={element.background} title={element.title} desc={element.desc} />
        })
      }
    </div>
  );
}

export default App;
