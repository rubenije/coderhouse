import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import FormatNumber from '../../utils/FormatNumber';

const Cart = () => {
  
    const ctx = useContext(CartContext);

        /*
        ctx.cartList.forEach(async (item) => {
            console.log(item);
        });
        */
        
    return (
      <>
        <section className="mt-0 overflow-lg-hidden  vh-lg-100">
            <div className="container">
                <div className="row g-0 vh-lg-100">
                    
                
                    
                    <div className="col-12 col-lg-7 pt-5 pt-lg-10">
                        <div className="pe-lg-5">
                            <Link className="navbar-brand fw-bold fs-3 flex-shrink-0 mx-0 px-0" to="./index.html">
                                <div className="d-flex align-items-center">
                                    <svg className="f-w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 77.53 72.26"><path d="M10.43,54.2h0L0,36.13,10.43,18.06,20.86,0H41.72L10.43,54.2Zm67.1-7.83L73,54.2,68.49,62,45,48.47,31.29,72.26H20.86l-5.22-9L52.15,0H62.58l5.21,9L54.06,32.82,77.53,46.37Z" fill="currentColor" fillRule="evenodd"/></svg>
                                </div>
                            </Link>
                            <nav className="d-none d-md-block">
                                <ul className="list-unstyled d-flex justify-content-start mt-4 align-items-center fw-bolder small">
                                    <li className="me-4"><Link className="nav-link-checkout active" to="./cart.html">Your Cart</Link></li>
                                    <li className="me-4"><Link className="nav-link-checkout" to="./checkout.html">Information</Link></li>
                                    <li className="me-4"><Link className="nav-link-checkout" to="./checkout-shipping.html">Shipping</Link></li>
                                    <li><Link className="nav-link-checkout nav-link-last" to="./checkout-payment.html">Payment</Link></li>
                                </ul>
                            </nav>                        
                            <div className="mt-5">
                                <h3 className="fs-5 fw-bolder mb-0 border-bottom pb-4">Your Cart</h3>
                                <div className="table-responsive">
                                    <div className="table align-middle">

                                    {
                                        (ctx.cartList.length > 0)
                                        ? <button className="btn btn-dark text-center" onClick={ctx.removeList}  role="button">DELETE ALL PRODUCTS</button> 
                                        : ''
                                    }
                                    
                                    {
                                    ctx.cartList.length > 0 &&
                                        ctx.cartList.map(item => 
                                        <div key={item.idItem} className="border-0">
                                            <div className="row mx-0 py-4 g-0 border-bottom">
                                                <div className="col-2 position-relative">
                                                    <picture className="d-block border">
                                                        <img className="img-fluid" src={item.thumbnailItem} alt="{item.titleItem}" />
                                                    </picture>
                                                </div>
                                                <div className="col-9 offset-1">
                                                    <div>
                                                        <h6 className="justify-content-between d-flex align-items-start mb-2">
                                                            {item.titleItem}
                                                            <i onClick={() => ctx.deleteItem(item.idItem)} className="ri-close-line ms-3"></i>
                                                        </h6>
                                                        <span className="d-block text-muted fw-bolder text-uppercase fs-9">Qty: {item.qtyItem}</span>
                                                    </div>
                                                    <p className="fw-bolder text-end text-muted m-0"><FormatNumber number={item.priceItem} /></p>
                                                </div>
                                            </div>                                        
                                                                                 
                                        </div>
                                        )
                                    }
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>



                    <div className="col-12 col-lg-5 bg-light pt-lg-10 aside-checkout pb-5 pb-lg-0 my-5 my-lg-0">
                        <div className="p-4 py-lg-0 pe-lg-0 ps-lg-5">
                            <div className="pb-4 border-bottom">
                                <div className="d-flex flex-column flex-md-row justify-content-md-between mb-4 mb-md-2">
                                    <div>
                                        <p className="m-0 fw-bold fs-5">Grand Total</p>
                                        { /* <span className="text-muted small">Inc $45.89 sales tax</span> */}
                                    </div>
                                    <p className="m-0 fs-5 fw-bold"><FormatNumber number={ctx.calcTotal()} /></p>
                                </div>
                            </div>
                            <Link to="/checkout" className="btn btn-dark w-100 text-center" role="button">Proceed to checkout</Link> 
                            
                        </div>
                    </div>



                </div>
            </div>
        </section>
      </>
    )
  
  };
  export default Cart;