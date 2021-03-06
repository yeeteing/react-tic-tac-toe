import React from 'react';
import './index.css';
class Square extends React.Component<any,any> {
  constructor(props: any) {
    super(props);
    console.log("Square " + JSON.stringify(props))

  }
  render() {
    return (
      <button
        className="square" onClick={() => this.props.onClick()}
      >
        {this.props.value}
      </button>
    );
  }
}

export default Square;