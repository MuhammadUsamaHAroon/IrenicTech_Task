import {GET_COUNTRIES} from './constant';
import {GET_CITIES} from './constant';

const initialState = {
  countries: [],
  cities: [],
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return {...state, countries: action.payload};
    case GET_CITIES:
      return {...state, cities: action.payload};
    default:
      return state;
  }
}
export default userReducer;
