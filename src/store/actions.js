import {GET_COUNTRIES} from './constant';
import {GET_CITIES} from './constant';

const API_GET_COUNTRIES =
  'https://mocki.io/v1/5f0e3d86-9d72-4785-8d98-adf9aaa9eec0';

export const getCountries = () => {
  try {
    return async dispatch => {
      const result = await fetch(API_GET_COUNTRIES, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        },
      });
      const json = await result.json();
      if (json) {
        dispatch({
          type: GET_COUNTRIES,
          payload: json,
        });
      } else {
        console.log('Unable to fetch!');
      }
    };
  } catch (e) {
    console.log(e);
  }
};

const API_GET_CITIES =
  'https://mocki.io/v1/f75f4386-e1e1-43e5-a245-d1318ccd93fd';

export const getCities = () => {
  try {
    return async dispatch => {
      const result = await fetch(API_GET_CITIES, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        },
      });
      const json = await result.json();
      if (json) {
        dispatch({
          type: GET_CITIES,
          payload: json,
        });
      } else {
        console.log('Unable to fetch!');
      }
    };
  } catch (e) {
    console.log(e);
  }
};
