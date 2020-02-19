import React from 'react';
import Gameboard from "./components/Gameboard";
import Score from "./components/Score";
import Wrapper from "./components/Wrapper";
import dicks from "./dicks.json";
import './App.css';

class App extends React.Component {
  state = {
    message: "Click a Dick to start",
    hightscore: 0,
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
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Click-A-Dick</h1>
          <p className="App-Intro">
            Don't click a dick more than once.  The journey is long and hard, but I know you can finish
          </p>
        </header>
        <Score total={this.state.score}
                    goal={20}
                    status={this.state.status}
                    />
          <Wrapper>
            {this.state.dicks.map(dick => (
              <Gameboard
                shuffleCards={this.shuffleCards}
                id={dick.id}
                key={dick.id}
                image={dick.image}/>
            ))}
          </Wrapper>
      </div>
    )
  }
}

export default App;
