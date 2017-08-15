import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor() {
		super();

		this.state = {
			value: ''
		}

		this.stringLength = this.stringLength.bind(this);
	}

	stringLength(event) {
		this.setState ({
			value: event.target.value
		})
	}

  render() {
    return (
      <div className="container">
        <textarea value={this.state.value} onChange={this.stringLength} rows="3"></textarea>
        <div className="counter">{this.state.value.length}</div>
      </div>
    );
  }
}

export default App;
