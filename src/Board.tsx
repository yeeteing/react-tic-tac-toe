import React, { Component } from "react";
import Square from "./Square";

interface IProps {
  squares: string[]
  onClick: Function
  nextMove: string
  winnerFound: string | undefined
}


interface IStats {
}

class Board extends React.Component <IProps, any> {
  constructor(props: IProps) {
    super(props);
    console.log("Board " + JSON.stringify(props))
    
  }

  renderSquare(i: number) {
    return <Square 
      value = {this.props.squares[i]} 
      onClick = {()=> this.props.onClick(i)}
    />
  }

  render() {
    const status = this.props.winnerFound?`Winner is ${this.props.winnerFound}`:`Next player: ${this.props.nextMove}`;
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
      <div>
        <div className="status">{status}</div>
        {numbers.map((number, index) => {
          if (number % 3 === 0){
            return <div className="board-row">
                    {this.renderSquare(index - 2)}
                    {this.renderSquare(index - 1)}
                    {this.renderSquare(index)}
                  </div>;
          }
        })}
      </div>
    );
  }
}
export default Board;
