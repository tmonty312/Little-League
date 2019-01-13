import React, { Component } from 'react';
import Home from './components/Home/Home.js'
// import Login from './components/Login/Login.js'

export class App extends Component {
  render() {
          return(
        <Home/>
          )
      }
    }


const mapStateToProps = state => {
  return {
      user: state.user.data
  }
}

export default App;
