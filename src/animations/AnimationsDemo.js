import React from 'react';
import './AnimationsDemo.css';

/*
class Square extends React.Component {
    render() {
      return (
        <button className="square">
        </button>
      );
    }
  }
 */
  
  class AnimationsDemo extends React.Component {
    constructor(props) {
        super(props); 
        this.state = { counter: 0 }
        //this.handleClick = this.handleClick.bind(this);
    }

    /*
     handleClick() {
        console.log('add row');
      };
      */
     handleClick = () => {
        console.log('add row');
        this.setState((prevState) => ({
           counter: prevState.counter + 1
        }));
      };

    render() {
      return (
        <div className="inputRow">
           <span className='item field1'>FooBar</span>
           <span className='item field2'> test 123</span>
           <span className='item btn'>
             <button onClick={this.handleClick}> add2 </button>
            </span>
            <button onClick={this.handleClick}>
           {this.state.counter}
       </button>
        </div>

      );
    }
  }
  
  // ========================================
  
  /*
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  */
  
  export default AnimationsDemo;