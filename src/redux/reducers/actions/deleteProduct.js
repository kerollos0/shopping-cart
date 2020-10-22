import { DELETE_PRODUCT } from '../../CONSTANTS';

const deleteProduct = (name) => {
  return (dispatch) => {
    console.log('name', name);
    try {
      dispatch({
        type: DELETE_PRODUCT,
        payload: name,
      });
    } catch (error) {
      console.log(error.response);
    }
  };
};

export default deleteProduct;
