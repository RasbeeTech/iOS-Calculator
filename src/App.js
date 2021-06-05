import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      nums: ['zero','one','two','three','four','five','six','seven','eight','nine'],
      ariths: ['add','subtract','multiply','divide'],
      symbols: ['+','-','X','/'],
      input: 0,
      output: 0
    };
    this.clear = this.clear.bind(this);
  }
  clear(){
    this.setState({
      input: 0,
      output: 0
    });
  }
  render(){
    return (
      <div id='container'>
        <div id='display'>{this.state.output}</div>
        <button id='equals'>{'='}</button>
        {this.state.nums.map((x, index) => {
          return(
            <button id={x}>{index}</button>
          );
        })}
        {this.state.ariths.map((x, index) => {
          return(
            <button id={x}>{this.state.symbols[index]}</button>
          );
        })}
        <button id='decimal'>.</button>
        <button id='clear' onClick={this.clear}>C</button>
      </div>
    );
  }
}

export default App;
