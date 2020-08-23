import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

function App(props) {

  // increase = () => {
  //   this.setstate({
  //     count: this.state.count + 1
  //   })
  // }

  // decrease = () => {
  //   this.setstate({
  //     count: this.state.count - 1
  //   })
  // }


    return (
      <div className="App">
        <button onClick={props.increase} > + </button>
        <div> {props.count}</div>
        <button onClick={props.decrease}> - </button>
      </div>
    );

  }

function mapStateToProps(state) {
  return {
    count: state.count
  }
}

function mapDispatchToProps(dispatch) {
  return {
    increase: () => dispatch({type: "INCRASE"}),
    decrease: () => dispatch({ type: "DECRASE" })
  }

}


// action ={
//   type =""
// }
// dispatch(action)


export default connect(mapStateToProps,mapDispatchToProps)(App);
