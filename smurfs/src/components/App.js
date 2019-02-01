import React, { Component } from 'react';
import { connect } from 'react-redux'

import { getSmurfs, addSmurf, deleteSmurf } from '../actions'

import SmurfList from './SmurfList'
import SmurfForm from './SmurfForm'
import './App.css';

class App extends Component {
  state = {
    smurf: {
      name:'',
      age:'',
      height:''
    }
  }

  componentDidMount(){
    this.props.getSmurfs()
  }

  handleFormChange = e => {
    this.setState({
      smurf:{
        ...this.state.smurf,
        [e.target.name]: e.target.value
      }
    })
  }

  addSmurfSubmit = e => {
    e.preventDefault();
    this.props.addSmurf(this.state.smurf)
    this.setState({
      smurf: {
        name:'',
        age:'',
        height:''
      }
    })
  }

  deleteSmurf = (e, id) => {
    e.preventDefault();
    this.props.deleteSmurf(id)
  }

  render() {
    return (
      <div className="App">
        <SmurfList smurfs={this.props.smurfs} deleteSmurf={this.deleteSmurf}/>
        <SmurfForm handleFormChange={this.handleFormChange} addSmurf={this.addSmurfSubmit} values={this.state.smurf}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    smurfs: state.smurfs
  }
}

export default connect(
  mapStateToProps, 
  {
    getSmurfs,
    addSmurf,
    deleteSmurf
  }
)(App);
