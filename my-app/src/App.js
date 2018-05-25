import React, { Component } from 'react';
// import logo from './logo.svg';
import FriendCard from "./components/FriendCard";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Container from "./Container";
import Row from "./Row";
import Column from "./Column";
import friends from "./friends.json";
import './App.css';


class App extends Component {
 state = {
   friends: friends,
   currentScore: 0,
   topScore: 0,
   rightorWrong: "",
   clicked: [],
  };
 
  // shuffle arrays
  shuffleFriends = array => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

handleClick = id => {
  if (this.state.clicked.indexOf(id) === -1) {
    this.handleIncrement();
    this.setState({ clicked: this.state.clicked.concat(id) });
  } else {
    this.handleReset();
  }
};

handleIncrement = () => {
  const newScore = this.state.currentScore + 1;
  this.setState({
    currentScore: newScore,
    rightorWrong: ""
  });
  if (newScore >= this.state.topScore) {
    this.setState({ topScore: newScore });
  }
  else if (newScore === 12) {
    this.setState({ rightorWrong: "Yay, you win!" });
  }
  this.handleShuffle();
};

handleReset = () => {
  this.setState({
    currentScore: 0,
    topScore: this.state.topScore,
    rightorWrong: "Aww, try again!",
    clicked: []
  });
  this.handleShuffle();
};

handleShuffle = () => {
  let shuffleFriends = shuffleFriends(friends);
  this.setState({ friends: shuffleFriends });
};

render() {
  return (
    <Wrapper>
      <Navbar
        title="Kingdom Heart Click Game"
        score={this.state.currentScore}
        topScore={this.state.topScore}
        rightorWrong={this.state.rightorWrong}
      />

      <Title>
      DIRECTION: Test your memory! Click on a Character and don't repeat them!
      </Title>

      <Container>
        <Row>
          {this.state.friends.map(friend => (
            <Column size="md-3 sm-6">
              <FriendCard
                key={friend.id}
                handleClick={this.handleClick}
                handleIncrement={this.handleIncrement}
                handleReset={this.handleReset}
                handleShuffle={this.handleShuffle}
                id={friend.id}
                image={friend.image}
              />
            </Column>
          ))}
        </Row>
      </Container>
    </Wrapper>
  );
}
}

export default App;
