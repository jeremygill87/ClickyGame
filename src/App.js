import React from 'react';
import Gameboard from "./components/Gameboard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import dicks from "./dicks.json";
import './App.css';

class App extends React.Component {
  state = {
    message: "Click a Dick to start",
    highScore: 0,
    currentScore: 0,
    dicks: dicks,
    unselectedDicks: dicks
  };

  shuffleCards = array => {
    for (let i = array.length -1; i > 0; i--) {
      let random = Math.floor(Math.random() * ( i + 1));
      [array[i], array[random]] = [array[random], array[i]];
    };
  };

  selectDick = name => {
    const findDick = this.state.unselectedDicks.find(item => item.name === name);

    if (findDick === undefined) {
      this.setState({
        message: "Wrong!  You need to bone up on your dick recognition",
        highScore: (this.state.currentScore > this.state.highScore) ? this.state.currentScore: this.state.highScore,
        currentScore: 0,
        dicks: dicks,
        unselectedDicks: dicks
      });
    } else {
      const newDick = this.state.unselectedDicks.filter(item => item.name !== name);

      this.setState({
        message: "Ugh, what a dick",
        currentScore: this.state.currentScore + 1,
        dicks: dicks,
        unselectedDicks: newDick
      });
    }
    this.shuffleCards(dicks);
  }

  render() {
    return (
      <Wrapper>
        <Navbar
        message = {this.state.message}
        currentScore = {this.state.currentScore}
        highScore = {this.state.highScore}
        />
        <Title/>
        <div className="containerDiv">
          {this.state.dicks.map(dick => (
            <Gameboard
            name={dick.name}
            id={dick.id}
            key={dick.id}
            image={dick.image}
            selectDick={this.selectDick}
            currentScore={this.state.currentScore}
            highScore={this.state.highScore}
            />
          ))}
        </div>
      </Wrapper>
    );
  }
}

export default App;
