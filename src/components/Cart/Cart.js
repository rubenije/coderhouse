import { React } from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  
    return (
      <>
        <section className="mt-0 overflow-lg-hidden  vh-lg-100">
            <div className="container">
                <div className="row g-0 vh-lg-100">
                    <div className="col-12 col-lg-7 pt-5 pt-lg-10">
                        <div className="pe-lg-5">
                            <a className="navbar-brand fw-bold fs-3 flex-shrink-0 mx-0 px-0" href="./index.html">
                                    <div className="d-flex align-items-center">
                                        <svg className="f-w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 77.53 72.26"><path d="M10.43,54.2h0L0,36.13,10.43,18.06,20.86,0H41.72L10.43,54.2Zm67.1-7.83L73,54.2,68.49,62,45,48.47,31.29,72.26H20.86l-5.22-9L52.15,0H62.58l5.21,9L54.06,32.82,77.53,46.37Z" fill="currentColor" fill-rule="evenodd"/></svg>
                                    </div>
                                </a>
                            <nav className="d-none d-md-block">
                                <ul className="list-unstyled d-flex justify-content-start mt-4 align-items-center fw-bolder small">
                                    <li className="me-4"><a className="nav-link-checkout active"
                                            href="./cart.html">Your Cart</a></li>
                                    <li className="me-4"><a className="nav-link-checkout "
                                            href="./checkout.html">Information</a></li>
                                    <li className="me-4"><a className="nav-link-checkout "
                                            href="./checkout-shipping.html">Shipping</a></li>
                                    <li><a className="nav-link-checkout nav-link-last "
                                            href="./checkout-payment.html">Payment</a></li>
                                </ul>
                            </nav>                        <div className="mt-5">
                                <h3 className="fs-5 fw-bolder mb-0 border-bottom pb-4">Your Cart</h3>
                                <div className="table-responsive">
                                    <table className="table align-middle">
                                        <tbody className="border-0">
                                            <div className="row mx-0 py-4 g-0 border-bottom">
                                                <div className="col-2 position-relative">
                                                    <picture className="d-block border">
                                                        <img className="img-fluid" src="./assets/images/products/product-cart-1.jpg" alt="HTML Bootstrap Template by Pixel Rocket" />
                                                    </picture>
                                                </div>
                                                <div className="col-9 offset-1">
                                                    <div>
                                                        <h6 className="justify-content-between d-flex align-items-start mb-2">
                                                            Nike Air VaporMax 2021
                                                            <i className="ri-close-line ms-3"></i>
                                                        </h6>
                                                        <span className="d-block text-muted fw-bolder text-uppercase fs-9">Size: 9 / Qty: 1</span>
                                                    </div>
                                                    <p className="fw-bolder text-end text-muted m-0">$85.00</p>
                                                </div>
                                            </div>                                        
                                            <div className="row mx-0 py-4 g-0 border-bottom">
                                                <div className="col-2 position-relative">
                                                    <picture className="d-block border">
                                                        <img className="img-fluid" src="./assets/images/products/product-cart-2.jpg" alt="HTML Bootstrap Template by Pixel Rocket" />
                                                    </picture>
                                                </div>
                                                <div className="col-9 offset-1">
                                                    <div>
                                                        <h6 className="justify-content-between d-flex align-items-start mb-2">
                                                            Nike ZoomX Vaporfly
                                                            <i className="ri-close-line ms-3"></i>
                                                        </h6>
                                                        <span className="d-block text-muted fw-bolder text-uppercase fs-9">Size: 11 / Qty: 1</span>
                                                    </div>
                                                    <p className="fw-bolder text-end text-muted m-0">$125.00</p>
                                                </div>
                                            </div>                                        
                                        </tbody>
                                    </table>
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
                                        <span className="text-muted small">Inc $45.89 sales tax</span>
                                    </div>
                                    <p className="m-0 fs-5 fw-bold">$422.99</p>
                                </div>
                            </div>
                            <div className="py-4">
                                <div className="input-group mb-0">
                                    <input type="text" className="form-control" placeholder="Enter coupon code" />
                                    <button className="btn btn-secondary btn-sm px-4">Apply</button>
                                </div>
                            </div>
                            <Link to="/checkout" className="btn btn-dark w-100 text-center" role="button">Proceed to checkout</Link>                    </div>
                    </div>
                </div>
            </div>
            
        </section>
      </>
    )
  
  };
  export default Cart;