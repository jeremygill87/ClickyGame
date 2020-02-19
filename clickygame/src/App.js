import React, { Component } from 'react';
import Gamboard from "./components/Gameboard";
import Score from "./components/Score";
import './App.css';

class App extends Component {
  state = {
    dicks,
    clickedDicks: [],
    score: 0,
    goal: 20,
    status: ""
  };

  // shuffle the cards
  shuffleCards = id => {
    let clickedDicks = this.state.clickedDicks;

    if(clickedDicks.includes(id)){
      this.setState({ clickedDicks: [], score: 0, status: "You lost.  What a dick." });
      return;
    } else {
      clickedDicks.push(id)

      if(clickedDicks.length === 20) {
        this.setState({ score: 20, status: "You sure know your dicks!", clickedDicks: []});
        console.log("A winner is you!");
        return;
      }

      this.setState({ dicks, clickedDicks, score: clickedDicks.length, status: " " });

      for (let i = dicks.length -1; i > 0; i--) {
        let random = Math.floor(Math.random() * (i + 1));
        [dicks[i], dicks[random]] = [dicks[random], dicks[i]];
      }
    }
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
