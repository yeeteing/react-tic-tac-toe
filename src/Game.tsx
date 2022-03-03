import React, { Component } from "react";
import Board from "./Board";
interface IProps {
}

interface IStats {
  currentSquares: Array<string>,
  history: Array<Array<Object>>,
  isNext: boolean

}

class Game extends React.Component <IProps, IStats> {
  constructor(props: any) {
    super(props);
    console.log("Game" + JSON.stringify(props))
    this.state = {
      history: [],
      currentSquares: Array(9).fill(null),
      isNext: true
    }
  }

  handleClick(i: number) {
    const history = this.state.history;
    const squares = this.state.currentSquares.slice();
    squares[i] = this.state.isNext?'X':'O';

    this.setState({
      currentSquares: squares,
      history: history.concat([{squares}]),
      isNext:  !this.state.isNext
    });
    console.log(this.state.history)
  }

  render() {
    const history = this.state.history;
    const listHistory = history.map((element, index) => {
      console.log(index);
      console.log(element);
      return <li key={index}>{index}</li>;
    })
    return (
      <div className="game">
        <div className="game-board">
          <Board squares={this.state.currentSquares} onClick = {(i: number)=>this.handleClick(i)}/>
        </div>
        <div className="game-info">
          History
          <div>{/* status */}</div>
          <div>
          <ol>
            {this.state.history.map((element, index) => {
              console.log(index);
              console.log(element);
              return <li key={index}>{index}</li>;
            })}
          </ol>
          </div>
          
        </div>
      </div>
    );
  }
}
export default Game;
