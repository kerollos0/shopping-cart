import { GET_NUMBERS } from '../../CONSTANTS';

const getNumbers = () => {
  return (dispatch) => {
    try {
      console.log('Getting');
      dispatch({
        type: GET_NUMBERS,
      });
    } catch (error) {
      console.log(error.response);
    }
  };
};
export default getNumbers;
