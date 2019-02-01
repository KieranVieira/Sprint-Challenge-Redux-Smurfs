import React, { Component } from 'react';
import { connect } from 'react-redux'

import { getSmurfs, addSmurf, deleteSmurf, updateSmurf } from '../actions'

import SmurfList from './SmurfList'
import SmurfForm from './SmurfForm'
import './App.css';

class App extends Component {
  state = {
    smurf: {
      name:'',
      age:'',
      height:''
    },
    isUpdatingSmurf: false,
    updatingId: ''
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

  startUpdatingSmurf = (e, smurf) => {
    e.preventDefault();
    this.setState({
      smurf:{
        name: smurf.name,
        age: smurf.age,
        height: smurf.height
      },
      isUpdatingSmurf: true,
      updatingId: smurf.id
    })
  }

  updateSmurfSubmit = e => {
    e.preventDefault();
    this.props.updateSmurf(this.state.smurf, this.state.updatingId);
    this.setState({
      smurf: {
        name:'',
        age:'',
        height:''
      },
      isUpdatingSmurf: false,
      updatingId: ''
    })
  }

  render() {
    return (
      <div className="App">
        <SmurfList 
          smurfs={this.props.smurfs} 
          deleteSmurf={this.deleteSmurf} 
          startUpdatingSmurf={this.startUpdatingSmurf}
        />
        <SmurfForm 
          handleFormChange={this.handleFormChange} 
          addSmurf={this.addSmurfSubmit} 
          updateSmurfSubmit={this.updateSmurfSubmit}
          isUpdatingSmurf={this.state.isUpdatingSmurf}
          values={this.state.smurf}
        />
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
    deleteSmurf,
    updateSmurf
  }
)(App);
