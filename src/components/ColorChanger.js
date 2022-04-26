import React from 'react'
import Button from './Button'
import DisplayColor from './DisplayColor'


class ColorChanger extends React.Component {

  state = {
    currentBackgroundColor: "red",
    something: "something"
  }

  handleClick = (arg) => {
    console.log('color should change...')
    this.setState({
      currentBackgroundColor: arg,
    })
  }

  render() {

    return (
      <div>
        <p>{this.props.title}</p>
        <Button handleClick={this.handleClick} currentColor={this.state.currentBackgroundColor}/>
        <DisplayColor currentColor={this.state.currentBackgroundColor}/>
      </div>
    )
  }

}

export default ColorChanger