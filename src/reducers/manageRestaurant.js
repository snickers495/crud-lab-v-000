
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: [], reviews: []
}, action) {
  switch (action.type) {
    case "ADD_RESTAURANT":
      return Object.assign({}, state, {restaurants: state.restaurants.concat(action.restaurant)})
    case "DELETE_RESTAURANT":
      return Object.assign({}, state, {restaurants: state.restaurants.filter(res=> res.id !== action.id)})
    case "ADD_REVIEW":
      return Object.assign({}, state, {reviews: state.reviews.concat(action.review)})
    case "DELETE_REVIEW":
      return Object.assign({}, state, {reviews: state.reviews.filter(res=> res.id !== action.id)})

    default:
      return state;
  }
}
