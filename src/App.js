import { Component } from 'react';
import './App.css';
import AddColorForm from './components/AddColorForm';
import ColorList from './components/ColorList';
import colors from './data/colors';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      colors
    }
    this.addColor = this.addColor.bind(this)
  }

  addColor(title, color) {
    const newId = this.state.colors.length
    const colors = [
      ...this.state.colors,
      {
        id: newId,
        title,
        color,
        rating: 0
      }
    ]
    this.setState({colors})
  }

  render() {
    const { addColor } = this
    const { colors } = this.state
    return (
      <div className="App">
        <div className="container">
          <h1>Color Manager</h1>
          <AddColorForm onNewColor={addColor} />
          <ColorList colors={colors} />
        </div>
      </div>
    );
  }
}

export default App;
