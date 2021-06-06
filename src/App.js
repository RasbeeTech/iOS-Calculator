import React from 'react';
import './App.css'

const NUMS = ['zero','one','two','three','four','five','six','seven','eight','nine'];
const ARITHS = ['add','subtract','multiply','divide'];
const SYMS = ['+','-','X','/'];

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      input: [],
      newInput: false,
      output: '0'
    };
    this.clear = this.clear.bind(this);
    this.numberPress = this.numberPress.bind(this);
    this.operation = this.operation.bind(this);
  }
  clear(){
    this.setState({
      prevInput: 0,
      input: [],
      newInput: false,
      output: '0'
    });
  }
  numberPress(value){
    let output = '';
    if(this.state.output === '0'){
      output = value.toString();
    } else if(this.state.newInput) {
      output = value.toString();
      this.setState({newInput: false});
    } else {
      output = this.state.output + value.toString();
    }
    this.setState({output: output});
  }
  operation(value){
    switch(value){
      case 'add':
      case 'subtract':
      case 'multiply':
      case 'divide':
        if(this.state.input.length == 2 && !SYMS.includes(this.state.input[1])){
          this.evaluate();
        } else{
          this.setState(() => {
            return {input: [this.state.output, value], newInput: true};
          }, ()=> console.log(this.state.input));
        }
        break;
      case 'decimal':
        this.setState({output: this.state.output.includes('.') ? this.state.output :this.state.output.concat('.')});
        break;
      case 'negative':
        this.setState({output: (Number(this.state.output) * -1).toString()});
        break;
      case 'percent':
        this.setState({output: (Number(this.state.output) * 0.01).toString()});
        break;
      case 'equals':
        this.evaluate();
        break;
    }
  }
  evaluate(){
    let num1 = Number(this.state.input[0]);
    let num2 = Number(this.state.output);
    switch(this.state.input[1]){
      case 'add':
        this.setState({output: (num1 + num2).toString(), input: [(num1 + num2).toString(), 'add'], newInput: true},
          () => console.log(this.state.output, this.state.input));
        break;
      case 'subtract':
        this.setState({output: (num1 - num2).toString(), input: [(num1 - num2).toString(), 'subtract'], newInput: true},
          () => console.log(this.state.output, this.state.input));
        break;
      case 'multiply':
        this.setState({output: (num1 * num2).toString(), input: [(num1 * num2).toString(), 'multiply'], newInput: true},
          () => console.log(this.state.output, this.state.input));
        break;
      case 'divide':
        this.setState({output: (num1 / num2).toString(), input: [(num1 / num2).toString(), 'divide'], newInput: true},
          () => console.log(this.state.output, this.state.input));
        break;
    }
  }

  render(){
    let numbers = NUMS.map((x, index) => {
      return(
        <button id={x} onClick={() => this.numberPress(index)} className={x !== 'zero' ? 'col-3 rounded-circle' : 'col-6 rounded-pill'}>{index}</button>
      );});

    let arithematics = ARITHS.map((x, index) => {
      return(
        <button id={x} onClick={() => this.operation(x)}className='col-3 rounded-circle'>{SYMS[index]}</button>
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
