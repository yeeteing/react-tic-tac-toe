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
    
    // if winner is found, end game? 
    // if winner have not found, keep adding squares, history, and is next
    // and if squares i is empty
    if(!this.winnerIsFound(squares) && !squares[i]){
      squares[i] = this.state.isNext?'X':'O';
      this.setState({
        currentSquares: squares,
        history: history.concat([{squares}]),
        isNext:  !this.state.isNext
      });
      console.log('here')
    }
    
  }

  winnerIsFound(currentSquares: Array<string>){
    const defineWin = 
    [
      [2,4,6],
      [0,4,8],
      [2,5,8],
      [1,4,7],
      [0,3,6],
      [0,1,2],
      [3,4,5],
      [6,7,8]
    ]

    for (let i=0;i<defineWin.length; i++){
      const a = defineWin[i][0];
      const b = defineWin[i][1];
      const c = defineWin[i][2];

      if (currentSquares[a] && currentSquares[a] === currentSquares[b] && currentSquares[c] === currentSquares[b]){
        // what to show if winner is found?

        return currentSquares[a];
      } 
    }
  }

  render() {
    const history = this.state.history;
    const squares = this.state.currentSquares.slice();

    const winnerFound = this.winnerIsFound(squares)?`Winner is ${this.winnerIsFound(squares)}`:'';
    return (
      <div className="game">
        <div className="game-board">
          <Board 
            squares={this.state.currentSquares} 
            onClick = {(i: number)=>this.handleClick(i)}
            nextMove = {this.state.isNext?'X':'O'}
          />
        </div>
        <div className="game-info">
          {winnerFound}
          History
          <div>{/* status */}</div>
          <div>
          <ol>
            {this.state.history.map((element, index) => {
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
