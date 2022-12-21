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
  }

  render() {
    const { colors } = this.state

    return (
      <div className="App">
        <div className="container">
          <h1>Color Manager</h1>
          <AddColorForm />
          <ColorList colors={colors} />
        </div>
      </div>
    );
  }
}

export default App;
