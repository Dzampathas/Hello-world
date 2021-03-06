

import React, { Component } from 'react';
import './App.css';

var wisdoms = [
  "Semper Ubi Sub Ubi. (Always wear underwear.)",
  "Floss your teeth every day.",
  "You will pay for your sins. If you have already paid, please disregard this message.",
  "Today is a day for firm decisions!! Or is it?",
  "Caution: Keep out of reach of children.",
  "You're growing out of some of your problems, but there are others that you're growing into.",
  "Every cloud engenders not a storm.",
  "Life isn't always about Potatoes and bacon.",
  "Don't lie in front of a tired dog.",
  "Go to sleep with itchy butthole, wake up with stinky finger.",
  "Love today, sleep tonight.",
  "A sharp eye can stab a weak surface."
]

var attributions = [
 "Power",
 "Love",
 "Entitlement",
 "Afraid",
 "Irritable",
 "Frustraited",
 "Uncomfortable",
 "Help",
 "Care",
 "Community",
 "Sharing",
 "Charitabe"
]
function randomizer(index, max){
    var newIndex = index;
    var count = 0;
    while(newIndex == index && count < 5){
      newIndex = Math.floor(Math.random() * max);
      count ++;
    }
    return newIndex;
}


class App extends Component {
  constructor(props) {
    super(props);
    
    var index = Math.floor(Math.random() * wisdoms.length);
    this.state = {
      wisdom: [wisdoms[index],wisdoms[(index+2)%wisdoms.length],wisdoms[(index+3)%wisdoms.length]],
      attribution: attributions[index]
    };
    this.setRandomWisdom();
    this.setRandomWisdom = this.setRandomWisdom.bind(this);
    this.addWisdom = this.addWisdom.bind(this);
    setInterval(this.setRandomWisdom, 15000);
  }
  setRandomWisdom() {
   var indexs = [
                 wisdoms.indexOf(this.state.wisdom[0]),
                 wisdoms.indexOf(this.state.wisdom[1]),
                 wisdoms.indexOf(this.state.wisdom[2])
                 ];
   var newIndexs = [randomizer(indexs[0], wisdoms.length-1),
                   randomizer(indexs[1], wisdoms.length-1),
                   randomizer(indexs[2], wisdoms.length-1)
                   ];
   while(newIndexs[0] == newIndexs[1] || newIndexs[0] == newIndexs[2] || newIndexs[1] == newIndexs[2]){
     newIndexs = [randomizer(indexs[0], wisdoms.length-1),
                  randomizer(indexs[1], wisdoms.length-1),
                  randomizer(indexs[2], wisdoms.length-1)
                 ];
   }
    this.setState({
      wisdom: [wisdoms[newIndexs[0]],
               wisdoms[newIndexs[1]],
               wisdoms[newIndexs[2]]],
      attribution: attributions[randomizer(attributions.indexOf(this.state.attribution),attributions.length)]
    });
  }

  addWisdom() {
    wisdoms.push(prompt("What new wisdom do you offer?"));
  }
  
  removeCurrentWisdom() {
    var index = wisdoms.indexOf(this.state.wisdom);
    wisdoms.splice(index, 1);
  }
  
  render() {
    return (
      <div className="App">
        {this.state.wisdom.map((number) =>
	<ol>{number}</ol>
	)}
        <hr></hr>
        {this.state.attribution}
        <button className="more" onClick={this.setRandomWisdom}>&#8635;</button>
	<button className="more" onClick={this.addWisdom}>+</button>
      </div>
    );
  }
}

export default App;
