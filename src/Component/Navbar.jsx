import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import getNumbers from '../redux/reducers/actions/getNumbers';
const Navbar = ({ getNumbers, basket }) => {
  useEffect(() => {
    getNumbers();
  }, []);
  return (
    <nav className='navbar navbar-dark bg-dark'>
      <a className='navbar-brand ml-3'>Shopping Cart</a>
      <form className='form-inline'>
        <Link to='/' style={{ marginRight: '20px', color: '#FFF' }}>
          Home
        </Link>
        <Link to='/cart' style={{ marginRight: '20px', color: '#FFF' }}>
          <i className='fas fa-cart-plus' name='basket'></i> Cart{' '}
          <span className='badge badge-light'>{basket}</span>
        </Link>
      </form>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  basket: state.basket,
});

export default connect(mapStateToProps, { getNumbers })(Navbar);
