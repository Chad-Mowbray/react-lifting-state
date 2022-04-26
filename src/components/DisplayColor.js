import { Component } from "react";


class DisplayColor extends Component {
 
  render() { 
    return (
      <div>
        The current color is {this.props.currentColor}
      </div>
    );
  }
}
 
export default DisplayColor;