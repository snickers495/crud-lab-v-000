import React, { Component } from 'react';
import cuid from 'cuid';

class RestaurantInput extends Component {
  constructor(){
    super()
    this.state = {
      text: ''
    }
  }

  handleKeydown(event){
    this.setState({text: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.store.dispatch({
      type: "ADD_RESTAURANT",
      restaurant: {
        text: this.state.text,
        id: cuid()
      }
    })
    this.setState({text: ""})
  }
  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
        <input onChange={(event) => this.handleKeydown(event)} type="text"/>
        <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
