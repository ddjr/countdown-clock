import React, { Component } from 'react';
import './app.css';
import Clock from './clock';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      deadline: 'December 25, 2018',
      newDeadline: ''
    };
  }

  changeDeadLine() {
    if (!isNaN(Date.parse(this.state.newDeadline))) {
      this.setState({deadline: this.state.newDeadline});
    }
  }

  render() {
    return (
      <div className="App" >
        <div className="App-title" >Countdown to {this.state.deadline}</div>
        <Clock deadline={this.state.deadline}/>
        < Form inline={true}>
          <FormControl
            placeholder="new date"
            onChange={event => this.setState({newDeadline: event.target.value})}
            className="deadline-input"/>
          <Button onClick= {() => this.changeDeadLine()} >Submit</Button>
        </Form>
      </div>
    );
  }
}

export default App;
