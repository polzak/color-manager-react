import { Component } from 'react';
import { v4 } from 'uuid'
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
    this.removeColor = this.removeColor.bind(this)
  }

  addColor(title, color) {
    const colors = [
      ...this.state.colors,
      {
        id: v4(),
        title,
        color,
        rating: 0
      }
    ]
    this.setState({colors})
  }

  removeColor(id) {
    const colors = this.state.colors.filter(color => color.id !== id)
    this.setState({
      colors
    })
  }


  render() {
    const { addColor, removeColor } = this
    const { colors } = this.state
    return (
      <div className="App">
        <div className="container">
          <h1>Color Manager</h1>
          <AddColorForm onNewColor={addColor} />
          <ColorList colors={colors} 
                  onRemove={removeColor}
          />
        </div>
      </div>
    );
  }
}

export default App;
