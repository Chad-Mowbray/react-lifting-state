import { Component } from "react";

class Button extends Component {


  render() {
    const styles = {
      backgroundColor: this.props.currentColor
    }
    return(
      <button style={styles} onClick={() => this.props.handleClick("purple")}>Change Color</button>
    )
  }
}

export default Button