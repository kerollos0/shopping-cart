import { INCREASE_QUANTITY, DECREASE_QUANTITY } from '../../CONSTANTS';

const productQuantity = (action, name) => {
  return (dispatch) => {
    console.log('action', action);
    console.log('name', name);
    try {
      dispatch({
        type: action == 'increase' ? INCREASE_QUANTITY : DECREASE_QUANTITY,
        payload: name,
      });
    } catch (error) {
      console.log(error.response);
    }
  };
};

export default productQuantity;
