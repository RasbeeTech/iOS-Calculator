import React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';

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
          <button id={x} className={x !== 'zero' ? 'col-3 bg-secondary text-white' : 'col-6 bg-secondary text-white'}>{index}</button>
      );});

    let arithematics = this.state.ariths.map((x, index) => {
      return(
        <button id={x} className='col-3 bg-warning text-white'>{this.state.symbols[index]}</button>
      );});
    
    return (
      <div className='container-fluid'>
        <div className='bg-success'>
          <div className='h-100 row w-75'>
            <div id='display' className='col-12 bg-warning'>{this.state.output}</div>
            <button id='clear' className ='col-3' onClick={this.clear}>C</button>
            <button className='col-3'>+/-</button>
            <button id='percent' className = 'col-3'>%</button>
            {arithematics[3]}
            {numbers.slice(7,10)}
            {arithematics[2]}
            {numbers.slice(4,7)}
            {arithematics[1]}
            {numbers.slice(1,4)}
            {arithematics[0]}
            {numbers.slice(0,1)}
            <button id='decimal' className='col-3 bg-secondary text-white'>.</button>
            <button id='equals' className='col-3 bg-warning text-white'>{'='}</button>
          </div>
        </div>
      </div>
    );
  }
}

const numberStyling = '';
const ariStyling = '';
export default App;
