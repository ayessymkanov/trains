import React from 'react';
import './App.css';
import Line from './components/Line';
import map from './map';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = map;
  }
  count = 0;

  handleClick = () => {
    setInterval(() => {
      Object.keys(map).forEach(lineKey => {
        const line = map[lineKey];
        if (line.current === line.stations.length - 1) {
          line.dir = 1;
        } else if (line.current === 0) {
          line.dir = 0;
        }
        if (line.dir === 0) {
          line.current++;
        } else {
          line.current--;
        }
        if (line.current === 0) {
          line.next = 1;
        } else if (line.next === line.stations.length - 1) {
          line.next = line.stations.length - 2;
        } else {
          line.next = line.dir === 0 ? line.next + 1 : line.next - 1;
        }
      });
      this.setState({ ...map });
    }, 2000);
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick}>start</button>
        {Object.keys(this.state).map(lineKey => {
          return <Line key={lineKey} stations={map[lineKey].stations} current={map[lineKey].current} lineColor={lineKey} />
        })}
      </div>
    );
  }
}

export default App;