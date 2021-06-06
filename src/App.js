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
    let numbers = this.state.nums.map((x, index) => {
      return(
          <button id={x} 
          className={x !== 'zero' ? 'col-3 rounded-circle' : 'col-6 rounded-pill'}>{index}</button>
      );});

    let arithematics = this.state.ariths.map((x, index) => {
      return(
        <button id={x} className='col-3 rounded-circle'>{this.state.symbols[index]}</button>
      );});
    
    return (
      <div id='calculator' className='container'>
        <div className='row' style={{height: '90vh', marginTop:20}}>
          <div id='display' className='col-12'><span>{this.state.output}</span></div>
          <button id='clear' className ='col-3 rounded-circle' onClick={this.clear}>C</button>
          <button id='negative'className='col-3 rounded-circle'>+/-</button>
          <button id='percent' className = 'col-3 rounded-circle'>%</button>
          {arithematics[3]}
          {numbers.slice(7, 10)}
          {arithematics[2]}
          {numbers.slice(4, 7)}
          {arithematics[1]}
          {numbers.slice(1, 4)}
          {arithematics[0]}
          {numbers.slice(0, 1)}
          <button id='decimal' className='col-3 rounded-circle'>.</button>
          <button id='equals' className='col-3 rounded-circle'>=</button>
        </div>
      </div>
    );
  }
}
export default App;
