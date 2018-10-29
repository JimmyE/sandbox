import React from 'react';
import './AnimationsDemo.css';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { CSSTransition, TransitionGroup } from 'react-transition-group';



/*
class AccountRow extends React.Component {
    render() {
      return (
      );
    }
  }
  */

  class AnimationsDemo extends React.Component {
    constructor(props) {
        super(props); 
        this.state = { 
          counter: 0,
          acctList: [{title: 'foo world A', score: 88, id: 999}]
         }
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

    handleClickDelete = (event, index) => {
        console.log('delete row', index);

        // remove the last item, don't care what row
        const newList = this.state.acctList.po
        //this.setState((prevState) => ({
           //acctList: [...prevState.acctList.splice(-1, 1)]
        //}));

        this.setState({
          acctList: this.state.acctList.filter((_, i) => i !== index)
        });
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
          <div>
          <TransitionGroup className="todo-list">
              {this.state.acctList.map((item, i) => {
                return( 
               <CSSTransition key={i} classNames="move" timeout={900} active="true">
                <div key={i} className="inputRow old_animateRow" >
                   <span className='item field1'>{item.title}</span>
                   <span className='item field2'> test 123</span>
                   <span className='item btn'>
                      <button onClick={(e) => { this.handleClick(e, i) }} >
                        add row
                         {this.state.counter}
                      </button>
                    </span>
                   <span className='item btn'>
                      <button onClick={(e) => { this.handleClickDelete(e, i) }} >
                        delete
                      </button>
                    </span>
                </div>
                </ CSSTransition>
                  )
              } )}
          </TransitionGroup >
          </div>
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