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

 class FooWorld {
   id: 0;
   title = '';
   score = 0;
 }
  
  class AnimationsDemo extends React.Component {
    constructor(props) {
        super(props); 
        /*
        const row1 = FooWorld();
        row1.title = 'Foo World 123';
        row1.score = 88;
        row1.id = 999;
        */
        this.state = { 
          counter: 0,
          acctList: [{title: 'foo world A', score: 88, id: 999}]
         }
        //this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (event, index) => {
        console.log('add row', index);
        const newRow = {
          title: 'Another row ' + index,
          score: 99,
          id: index + 1
        }
        this.setState((prevState) => ({
           counter: prevState.counter + 1,
           acctList: [...prevState.acctList, newRow] 
        }));
    };

    render() {
      console.log('render() starting');
      return (
        <span>
          <div>
            <button onClick={(e) => { this.handleClick(e, 999) }} >
              {this.state.counter}
            </button>
          </div>
          {this.state.acctList.map((item, i) => {
            return( 
            <div key={i} className="inputRow animateRow" >
               <span className='item field1'>{item.title}</span>
               <span className='item field2'> test 123</span>
               <span className='item btn'>
                  <button onClick={(e) => { this.handleClick(e, i) }} >
                    add row
                     {this.state.counter}
                  </button>
                </span>
            </div>
              )
          } )}
        </span>
        );
    }
  }
  
  // ========================================
  
  /*
            <div key={i} className="inputRow" >
               <span className='item field1'>{item.title}</span>
               <span className='item field2'> test 123</span>
               <span className='item btn'>
                 <button onClick={this.handleClick}> add2 </button>
                </span>
                <button onClick={this.handleClick}>
                   {this.state.counter}
                </button>
            </div>


  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  */
  
  export default AnimationsDemo;