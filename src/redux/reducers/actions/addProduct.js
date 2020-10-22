import { ADD_PRODUCT } from '../../CONSTANTS';

const addProduct = (productName) => {
  return (dispatch) => {
    try {
      console.log('Adding');
      console.log(productName);
      dispatch({
        type: ADD_PRODUCT,
        payload:productName
      });
    } catch (error) {
      console.log(error.response);
    }
  };
};
export default addProduct;
