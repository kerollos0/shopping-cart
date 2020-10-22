import React, { useEffect, useState } from 'react';
import { products } from '../products';
import { connect } from 'react-redux';
import addProduct from '../redux/reducers/actions/addProduct';
const Home = ({ addProduct }) => {
  useEffect(() => {
    console.log(products);
  }, []);

  return (
    <div className='container text-center'>
      <div className='row'>
        {products
          ? products.map((product) => {
              return (
                <div className='col-lg-3 col-md-6 col-sm-6 ' key={product.id}>
                  <div className='card mt-5 mb-5  '>
                    <img
                      src={product.img}
                      className='card-img-top'
                      alt='test'
                    />
                    <div className='card-body'>
                      <h5 className='card-title'>{product.title}</h5>
                      <p className='card-text'>{product.info}</p>
                      <h5 className='card-title'>Price : {product.price}</h5>
                      <a
                        href='#'
                        className='btn btn-primary'
                        onClick={() => addProduct(product.title)}
                      >
                        Add To Cart
                      </a>
                    </div>
                  </div>
                </div>
              );
            })
          : ''}
      </div>
    </div>
  );
};

export default connect(null, { addProduct })(Home);
