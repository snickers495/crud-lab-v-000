import React, { Component } from 'react';
import Review from './Review';


class Reviews extends Component {
  render() {
    const reviews = this.props.store.getState().reviews.filter(review => review.restaurantId === this.props.restaurantId)
    const reviewDivs = reviews.map((review, index) => {
      return <Review key={index} review={review}/>
    })
    return (
      <ul>
        {reviewDivs}
        
      </ul>
    );
  }
};

export default Reviews;
