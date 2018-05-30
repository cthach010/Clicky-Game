import React, { Component } from 'react';
import FriendCard from "./components/FriendCard";
import Navbar from "./components/Navbar";
import wrapper from "./components/wrapper";
import Title from "./components/Title";
import Container from "./Container";
import Row from "./Row";
import Column from "./Column";
import friends from "./friends.json";
import './App.css';


function shuffleFriends(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {
  // Set this.state
  state = {
    friends,
   score: 0,
    highScore: 0,
    rightWrong: 12,
    clicked: [],
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const score = this.state.score + 1;
    this.setState({
      score: score,
      rightorWrong: ""
    });
    if (score >= this.state.highScore) {
      this.setState({ highScore: score });
    }
    else if (score === 12) {
      this.setState({ rightorWrong: "Yay! you win!" });
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      score: 0,
      highScore: this.state.highScore,
      rightorWrong: "Aww, try again!!",
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledFriends = shuffleFriends(friends);
    this.setState({ friends: shuffledFriends });
  };

  render() {
    return (
      <wrapper>
        <Navbar
          title="Kingdom Heart Click Game"
          score={this.state.score}
          highScore={this.state.highScore}
          rightorWrong={this.state.rightorWrong}
        />

       <Title>
     Test your skills! Click on a Kingdom Heart Character and don't repeat them or you'll loose!
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
      </wrapper>
    );
  }
}

export default App;