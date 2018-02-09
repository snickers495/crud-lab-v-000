import React, { Component } from 'react';
import Reviews from './Reviews';
import cuid from 'cuid';

class ReviewInput extends Component {
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
      type: "ADD_REVIEW",
      review: {
        text: this.state.text,
        restaurantId: this.props.restaurantId,
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
        <Reviews restaurantId={this.props.restaurantId} store={this.props.store}/>
      </div>

    );
  }
};

export default ReviewInput;
