import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {

  const ctx = useContext(CartContext);
  
  return (
    <>
      Bag ({ctx.cartList.length})
    </>
  )

};
export default CartWidget;