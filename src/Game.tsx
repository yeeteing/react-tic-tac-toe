import React, { Component } from "react";
import Board from "./Board";

interface IProps {
}

interface IStats {
  currentSquares: Array<string>,
  history: Array<Array<string>>,
  isNext: boolean,
  steps: number

}

class Game extends React.Component <IProps, IStats> {
  constructor(props: any) {
    super(props);
    console.log("Game" + JSON.stringify(props))
    this.state = {
      history: [],
      currentSquares: Array(9).fill(null),
      isNext: true,
      steps: 0
    }
  }

  handleClick(i: number) {
    const history = this.state.history;
    const squares = this.state.currentSquares.slice();
    const nextSteps =  this.state.steps + 1;
    // if winner is found, end game? 
    // if winner have not found, keep adding squares, history, and is next
    // and if squares i is empty
    if(!this.winnerIsFound(squares) && !squares[i]){
      squares[i] = this.state.isNext?'X':'O';
      this.setState({
        currentSquares: squares,
        history: history.concat([squares]),
        steps: nextSteps,
        isNext:  nextSteps%2 === 0?true:false
      });
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

  backTo(i: number){
    const history = this.state.history;
    const nextSteps =  i;
    const nextHistory = history.slice(0,i);
    const nextSquares = nextHistory[nextHistory.length-1];

    this.setState({
      currentSquares: nextSquares,
      history: nextHistory,
      steps: nextSteps,
      isNext:  nextSteps%2 === 0?true:false
    });
  }

  render() {
    const history = this.state.history;
    const squares = this.state.currentSquares.slice();

    return (
      <div className="game">
        <div className="game-board">
          <Board 
            squares={this.state.currentSquares} 
            onClick = {(i: number)=>this.handleClick(i)}
            nextMove = {this.state.isNext?'X':'O'}
            winnerFound = {this.winnerIsFound(this.state.currentSquares)}
          />
        </div>
        <div className="game-info">
          History
          <div>{/* status */}</div>
          <div>
          <ol>
          <div>
            {this.state.history.map((element, index) => {
              return <li>
                <button key={index} onClick={()=>this.backTo(index)}>{index===0?"Go to start game":`Go to move # ${index}`}</button>
              </li>;
            })}
          </div>

          </ol>
          </div>
          
        </div>
      </div>
    );
  }
}
export default Game;
