import axios from 'axios';

export const FETCH_EMPLOYEES_SUCCESS = 'FETCH_EMPLOYEES_SUCCESS';

export const fetchEmployees = () => async (dispatch) => {
  try {
    const response = await axios.get('https://restful-api.dev/');
    dispatch({ type: FETCH_EMPLOYEES_SUCCESS, payload: response.data });
  } catch (error) {
    console.error('Error fetching employees', error);
  }
};