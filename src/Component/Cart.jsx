import React from 'react';
import { connect } from 'react-redux';
import productQuantity from '../redux/reducers/actions/productQuantity';
import deleteProduct from '../redux/reducers/actions/deleteProduct';

import './Cart.css';
const Cart = ({ basket, productQuantity, deleteProduct }) => {
  let productsInCart = [];
  console.log(basket);
  Object.keys(basket.products).forEach((item) => {
    console.log(item);
    console.log(basket.products[item].inCart);
    if (basket.products[item].inCart) {
      productsInCart.push(basket.products[item]);
    }
    console.log(productsInCart);
  });

  return (
    <div className='container'>
      {productsInCart
        ? productsInCart.map((product, i) => {
            return (
              <div className='row' key={i}>
                <div className='col'>
                  <table className='table content text-center'>
                    <thead>
                      <tr>
                        <th scope='col'>ID </th>
                        <th scope='col'>Image </th>
                        <th scope='col'>name</th>
                        <th scope='col'>price</th>
                        <th scope='col'>quantity</th>
                        <th scope='col'>total</th>
                        <th scope='col'>delete product</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{i + 1}</td>
                        <td>
                          <img src={product.img} />
                        </td>
                        <td>{product.name}</td>
                        <td>
                          <div className='price'>${product.price}</div>
                        </td>
                        <td>
                          <i
                            className='fas fa-arrow-circle-left decrease'
                            onClick={() =>
                              productQuantity('decrease', product.name)
                            }
                          ></i>
                          {product.numbers}
                          <i
                            className='fas fa-arrow-circle-right increase'
                            onClick={() =>
                              productQuantity('increase', product.name)
                            }
                          ></i>
                        </td>
                        <td>${product.numbers * product.price}</td>
                        <td>
                          <i
                            className='fas fa-times-circle '
                            onClick={() => deleteProduct(product.name)}
                          ></i>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })
        : 'No Products In Your Cart'}

      <h4 className='d-flex justify-content-center mt-4'>
        Total Cost : ${basket.cartCost}
      </h4>
    </div>
  );
};

const mapStateToProps = (state) => ({
  basket: state,
});

export default connect(mapStateToProps, { productQuantity, deleteProduct })(
  Cart
);
