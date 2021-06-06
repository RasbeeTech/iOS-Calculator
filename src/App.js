import React from 'react';
import './App.css'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      nums: ['zero','one','two','three','four','five','six','seven','eight','nine'],
      ariths: ['add','subtract','multiply','divide'],
      symbols: ['+','-','X','/'],
      input: 0,
      output: '0'
    };
    this.clear = this.clear.bind(this);
    this.numberPress = this.numberPress.bind(this);
    this.operation = this.operation.bind(this);
  }
  clear(){
    this.setState({
      input: 0,
      output: '0'
    });
  }
  
  numberPress(value){
    this.setState((state) => {
      return {output: state.output !== '0' ? state.output + value.toString() : value.toString()}
    });
  }
  operation(value){
    console.log(value);
    switch(value){
      case 'add':
      case 'subract':
      case 'multiply':
      case 'divide':
      case 'equals':
      case 'decimal':
      case 'percent':
      case 'negative':
    }
  }

  render(){
    let numbers = this.state.nums.map((x, index) => {
      return(
          <button id={x} onClick={() => this.numberPress(index)}className={x !== 'zero' ? 'col-3 rounded-circle' : 'col-6 rounded-pill'}>{index}</button>
      );});

    let arithematics = this.state.ariths.map((x, index) => {
      return(
        <button id={x} onClick={() => this.operation(x)}className='col-3 rounded-circle'>{this.state.symbols[index]}</button>
      );});
    
    return (
      <div id='calculator' className='container'>
        <div className='row' style={{height: '90vh', marginTop:20}}>
          <div id='display' className='col-12'><span>{this.state.output}</span></div>
          <button id='clear' className ='col-3 rounded-circle' onClick={this.clear}>C</button>
          <button id='negative' onClick={() => this.operation('negative')} className='col-3 rounded-circle'>+/-</button>
          <button id='percent' onClick={() => this.operation('percent')} className = 'col-3 rounded-circle'>%</button>
          {arithematics[3]}
          {numbers.slice(7, 10)}
          {arithematics[2]}
          {numbers.slice(4, 7)}
          {arithematics[1]}
          {numbers.slice(1, 4)}
          {arithematics[0]}
          {numbers.slice(0, 1)}
          <button id='decimal' onClick={() => this.operation('decimal')} className='col-3 rounded-circle'>.</button>
          <button id='equals' onClick={() => this.operation('equals')} className='col-3 rounded-circle'>=</button>
        </div>
      </div>
    );
  }
}
export default App;
