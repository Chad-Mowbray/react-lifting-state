import './App.css';
import { Component } from 'react'
import ColorChanger from './components/ColorChanger';


class App extends Component{

  render() {
    return (
      <div className='box-outer'>
          <p>Welcome to React</p>
          <ColorChanger title={"Color Changer Component"} />
      </div>
    )
  }

}

export default App;