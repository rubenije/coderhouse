import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import FormatNumber from '../../utils/FormatNumber';

import { collection, doc, setDoc, serverTimestamp, updateDoc, increment } from "firebase/firestore";
import db from '../../data/firebaseConfig';

const Checkout = () => {

  const ctx = useContext(CartContext);

  const createOrder = () => {
    const itemsForDB = ctx.cartList.map(item => ({
      id: item.idItem,
      title: item.titleItem,
      qty: item.qtyItem,
      price: item.priceItem, 
      priceTotal: ctx.calcTotalPerItem(item.idItem)
    }));

    ctx.cartList.forEach(async (item) => {
    
      const itemRef = doc(db, "productos", item.idItem);
    
      await updateDoc(itemRef, {
        stock: increment(-item.qtyItem)
      });
    });

    let order = {
      buyer: {
        name: "Leo Messi",
        email: "leo@messi.com",
        phone: "123456789"
      },
      total: ctx.calcTotal(),
      items: itemsForDB,
      date: serverTimestamp()
    };
  
    
    const createOrderInFirestore = async () => {
      const newOrderRef = doc(collection(db, "orders"));
      await setDoc(newOrderRef, order);
      return newOrderRef;
    }
    
    createOrderInFirestore()
      .then(result => alert('Your order has been created. Please take note of the ID of your order.\n\n\nOrder ID: ' + result.id + '\n\n'))
      .catch(err => console.log(err));
  
    //ctx.removeList();
    
  }
  
    return (
      <>
        <section className="mt-0">
          <div className="container">
              <div className="row g-0">
                  <div className="col-lg-7 pt-5 pt-lg-10">
                      <div className="pe-lg-5">
                          <a className="navbar-brand fw-bold fs-3 flex-shrink-0 mx-0 px-0" href="./index.html">
                                  <div className="d-flex align-items-center">
                                      <svg className="f-w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 77.53 72.26"><path d="M10.43,54.2h0L0,36.13,10.43,18.06,20.86,0H41.72L10.43,54.2Zm67.1-7.83L73,54.2,68.49,62,45,48.47,31.29,72.26H20.86l-5.22-9L52.15,0H62.58l5.21,9L54.06,32.82,77.53,46.37Z" fill="currentColor" fillRule="evenodd"/></svg>
                                  </div>
                              </a>
                          <nav className="d-none d-md-block">
                              <ul className="list-unstyled d-flex justify-content-start mt-4 align-items-center fw-bolder small">
                                  <li className="me-4"><a className="nav-link-checkout "
                                          href="./cart.html">Your Cart</a></li>
                                  <li className="me-4"><a className="nav-link-checkout active"
                                          href="./checkout.html">Information</a></li>
                                  <li className="me-4"><a className="nav-link-checkout "
                                          href="./checkout-shipping.html">Shipping</a></li>
                                  <li><a className="nav-link-checkout nav-link-last "
                                          href="./checkout-payment.html">Payment</a></li>
                              </ul>
                          </nav>                        <div className="mt-5">
                              <div className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-4">
                                <h3 className="fs-5 fw-bolder m-0 lh-1">Contact Information</h3>
                                <small className="text-muted fw-bolder">Already registered? <a href="./login.html">Login</a></small>
                              </div>
                              <div className="row">
                                <div className="col-sm-6">
                                  <div className="form-group">
                                    <label htmlFor="firstNameBilling" className="form-label">First name</label>
                                    <input type="text" className="form-control" id="firstNameBilling" placeholder="" defaultValue="" required="" />
                                  </div>
                                </div>
                              
                                <div className="col-sm-6">
                                  <div className="form-group">
                                    <label htmlFor="lastNameBilling" className="form-label">Last name</label>
                                    <input type="text" className="form-control" id="lastNameBilling" placeholder="" defaultValue="" required="" />
                                  </div>
                                </div>
                              
                                <div className="col-12">
                                  <div className="form-group">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                                  </div>
                              
                                  <div className="form-group form-check m-0">
                                    <input type="checkbox" className="form-check-input" id="add-mailinglist" defaultChecked />
                                    <label className="form-check-label small text-muted" htmlFor="add-mailinglist">Keep me updated with your latest news and offers</label>
                                  </div>
                                </div>
                              </div>
                              
                              <h3 className="fs-5 mt-5 fw-bolder mb-4 border-bottom pb-4">Shipping Address</h3>
                              <div className="row">
                                <div className="col-sm-6">
                                  <div className="form-group">
                                    <label htmlFor="firstName" className="form-label">First name</label>
                                    <input type="text" className="form-control" id="firstName" placeholder="" defaultValue="" required="" />
                                  </div>
                                </div>
                              
                                <div className="col-sm-6">
                                  <div className="form-group">
                                    <label htmlFor="lastName" className="form-label">Last name</label>
                                    <input type="text" className="form-control" id="lastName" placeholder="" defaultValue="" required="" />
                                  </div>
                                </div>
                              
                                <div className="col-12">
                                  <div className="form-group">
                                    <label htmlFor="address" className="form-label">Address</label>
                                    <input type="text" className="form-control" id="address" placeholder="123 Some Street Somewhere" required="" />
                                  </div>
                                </div>
                              
                                <div className="col-md-12">
                                  <div className="form-group">
                                    <label htmlFor="country" className="form-label">Country</label>
                                    <select className="form-select" id="country" required="">
                                      <option defaultValue="">Please Select...</option>
                                      <option>United States</option>
                                    </select>
                                  </div>
                                </div>
                              
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <label htmlFor="state" className="form-label">State</label>
                                    <select className="form-select" id="state" required="">
                                      <option defaultValue="">Please Select...</option>
                                      <option>California</option>
                                    </select>
                                  </div>
                                </div>
                              
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <label htmlFor="zip" className="form-label">Zip/Post Code</label>
                                    <input type="text" className="form-control" id="zip" placeholder="" required="" />
                                  </div>
                                </div>
                              </div>
                              
                              <div className="pt-4 mt-4 pb-5 border-top d-flex justify-content-between align-items-center">
                                <div className="form-group form-check m-0">
                                  <input type="checkbox" className="form-check-input" id="same-address" defaultChecked />
                                  <label className="form-check-label" htmlFor="same-address">Use htmlFor billing address</label>
                                </div>
                              </div>
                              
                              <div className="billing-address d-none">
                                <h3 className="fs-5 fw-bolder mb-4 border-bottom pb-4">Billing Address</h3>
                                <div className="row">
                                  <div className="col-sm-6">
                                    <div className="form-group">
                                      <label htmlFor="firstNameAddress" className="form-label">First name</label>
                                      <input type="text" className="form-control" id="firstNameAddress" placeholder="" defaultValue="" required="" />
                                    </div>
                                  </div>
                              
                                  <div className="col-sm-6">
                                    <div className="form-group">
                                      <label htmlFor="lastNameAddress" className="form-label">Last name</label>
                                      <input type="text" className="form-control" id="lastNameAddress" placeholder="" defaultValue="" required="" />
                                    </div>
                                  </div>
                              
                                  <div className="col-12">
                                    <div className="form-group">
                                      <label htmlFor="addressAddress" className="form-label">Address</label>
                                      <input type="text" className="form-control" id="addressAddress" placeholder="123 Some Street Somewhere" required="" />
                                    </div>
                                  </div>
                              
                                  <div className="col-md-12">
                                    <div className="form-group">
                                      <label htmlFor="countryAddress" className="form-label">Country</label>
                                      <select className="form-select" id="countryAddress" required="">
                                        <option defaultValue="">Please Select...</option>
                                        <option>United States</option>
                                      </select>
                                    </div>
                                  </div>
                              
                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <label htmlFor="stateAddress" className="form-label">State</label>
                                      <select className="form-select" id="stateAddress" required="">
                                        <option defaultValue="">Please Select...</option>
                                        <option>California</option>
                                      </select>
                                    </div>
                                  </div>
                              
                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <label htmlFor="zipAddress" className="form-label">Zip/Post Code</label>
                                      <input type="text" className="form-control" id="zipAddress" placeholder="" required="" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="pt-5 mt-5 pb-5 border-top d-flex justify-content-md-end align-items-center">
                                <button onClick={createOrder} className="btn btn-dark w-100 w-md-auto" role="button">Proceed to shipping</button>
                              </div>                        </div>
                      </div>
                  </div>
                  <div className="col-12 col-lg-5 bg-light pt-lg-10 aside-checkout pb-5 pb-lg-0 my-5 my-lg-0">
                      <div className="p-4 py-lg-0 pe-lg-0 ps-lg-5">
                          <div className="pb-3">
                              {
                                ctx.cartList.length > 0 &&
                                  ctx.cartList.map((item, i) => 
                                  <div key={Math.random()} className="row mx-0 py-4 g-0 border-bottom">
                                      <div className="col-2 position-relative">
                                              <span className="checkout-item-qty">{item.qtyItem}</span>
                                          <picture className="d-block border">
                                              <img className="img-fluid" src={item.thumbnailItem} alt="{item.titleItem}" />
                                          </picture>
                                      </div>
                                      <div className="col-9 offset-1">
                                          <div>
                                              <h6 className="justify-content-between d-flex align-items-start mb-2">
                                                {item.titleItem}
                                                  <i style={{cursor: 'pointer'}} onClick={() => ctx.deleteItem(item.idItem)} className="ri-close-line ms-3"></i>
                                              </h6>
                                              <span className="d-block text-muted fw-bolder text-uppercase fs-9">Qty: {item.qtyItem}</span>
                                          </div>
                                          <p className="fw-bolder text-end text-muted m-0"><FormatNumber number={ctx.calcTotalPerItem(item.idItem)} /></p>
                                      </div>
                                  </div>   
                                  )
                              } 
                               
                          </div>
                          <div className="py-4 border-bottom">
                              <div className="d-flex justify-content-between align-items-center mb-2">
                                  <p className="m-0 fw-bolder fs-6">Subtotal</p>
                                  <p className="m-0 fs-6 fw-bolder"><FormatNumber number={ctx.calcSubTotal()} /></p>
                              </div>
                              <div className="d-flex justify-content-between align-items-center ">
                                  <p className="m-0 fw-bolder fs-6">Taxes</p>
                                  <p className="m-0 fs-6 fw-bolder"><FormatNumber number={ctx.calcTaxes()} /></p>
                              </div>
                              
                          </div>
                          <div className="py-4 border-bottom">
                              <div className="d-flex justify-content-between">
                                  <div>
                                      <p className="m-0 fw-bold fs-5">Total</p>
                                      { /* <span className="text-muted small">Inc $45.89 sales tax</span> */ }
                                  </div>
                                  <p className="m-0 fs-5 fw-bold"><FormatNumber number={ctx.calcTotal()} /></p>
                              </div>
                          </div>
                          { /*
                          <div className="py-4">
                              <div className="input-group mb-0">
                                  <input type="text" className="form-control" placeholder="Enter your coupon code" />
                                  <button className="btn btn-dark btn-sm px-4">Apply</button>
                              </div>
                          </div>
                          */ }
                      </div>
                  </div>
              </div>
          </div>
          
      </section>
      </>
    )
  
  };
  export default Checkout;