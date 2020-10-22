import {
  ADD_PRODUCT,
  GET_NUMBERS,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  DELETE_PRODUCT,
} from '../CONSTANTS';
import iphone from '../../Images/iphone.jpg';
import samsung from '../../Images/samsung.jpg';
import nokia from '../../Images/nokia.jpg';
import blackberry from '../../Images/blackberry.jpg';
//Intial State
const initialState = {
  basket: 0,
  cartCost: 0,
  products: {
    Iphone: {
      name: 'Iphone',
      img: iphone,
      price: 250.0,
      numbers: 0,
      inCart: false,
    },
    Samsung: {
      name: 'Samsung',
      img: samsung,
      price: 200.0,
      numbers: 0,
      inCart: false,
    },
    Nokia: {
      name: 'Nokia',
      img: nokia,
      price: 120.0,
      numbers: 0,
      inCart: false,
    },
    Blackberry: {
      name: 'Blackberry',
      img: blackberry,
      price: 180.0,
      numbers: 0,
      inCart: false,
    },
  },
};

//Reducers
export default (state = initialState, action) => {
  let product = '';
  switch (action.type) {
    case ADD_PRODUCT:
      product = { ...state.products[action.payload] };
      console.log(product);
      product.numbers += 1;
      product.inCart = true;
      return {
        ...state,
        basket: state.basket + 1,
        cartCost: state.cartCost + state.products[action.payload].price,
        //numbers:state.numbers + state.products[action.payload].numbers,
        products: {
          ...state.products,
          [action.payload]: product,
        },
      };

    case GET_NUMBERS:
      return {
        ...state,
      };

    case INCREASE_QUANTITY:
      product = { ...state.products[action.payload] };
      product.numbers += 1;
      return {
        ...state,
        basket: state.basket + 1,
        cartCost: state.cartCost + state.products[action.payload].price,
        products: {
          ...state.products,
          [action.payload]: product,
        },
      };

    case DECREASE_QUANTITY:
      product = { ...state.products[action.payload] };
      let newCartCost = 0;
      let newBasket = 0;
      if (product.numbers == 0) {
        product.numbers = 0;
        newCartCost = state.cartCost;
        newBasket = state.basket;
      } else {
        product.numbers -= 1;
        newCartCost = state.cartCost - state.products[action.payload].price;
        newBasket = state.basket - 1;
      }
      return {
        ...state,
        cartCost: newCartCost,
        basket: newBasket,
        products: {
          ...state.products,
          [action.payload]: product,
        },
      };

    case DELETE_PRODUCT:
      product = { ...state.products[action.payload] };
      let numbers = product.numbers;
      product.numbers = 0;
      product.inCart = false;
      return {
        ...state,
        basket: state.basket - numbers,
        cartCost: state.cartCost - numbers * product.price,
        products: {
          ...state.products,
          [action.payload]: product,
        },
      };

    default:
      return { ...state };
  }
};
