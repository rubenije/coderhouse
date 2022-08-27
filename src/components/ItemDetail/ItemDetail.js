import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

import ItemCount from '../ItemCount/ItemCount';


const ItemDetail = ( {item} ) => {
  
  const [itemCount, setItemCount] = useState(0);
  const test = useContext(CartContext);

  //const onAdd = (qty) => {
const addItemCarro = (cantidad) => {
    console.log('Producto agregado : ' + item.title + ' la cantidad de : ' + cantidad)
    setItemCount(cantidad);
    test.addToCart(item, cantidad);
  }

  return (
    <>
      {
      item && item.thumbnail
      ? 
      <section className="mt-0 ">
          <div className="bg-dark py-6">
            <div className="container-fluid">
              <nav className="m-0" aria-label="breadcrumb">
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item breadcrumb-light"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item breadcrumb-light"><Link to={`/item/${item.id}`}>{item.category}</Link></li>
                    <li className="breadcrumb-item  breadcrumb-light active" aria-current="page">{item.title}</li>
                  </ol>
              </nav>            
            </div>
          </div>
          
        <div className="container-fluid mt-5">

            <div className="row g-9" data-sticky-container>

                <div className="col-12 col-md-6 col-xl-7">
                    <div className="row g-3" data-aos="fade-right">
                        <div className="col-12">
                            <picture>
                                <img className="img-fluid" data-zoomable src="/assets/images/products/product-page-1.jpeg" alt="HTML Bootstrap Template by Pixel Rocket" />
                            </picture>
                        </div>
                        <div className="col-12">
                            <picture>
                                <img className="img-fluid" data-zoomable src="/assets/images/products/product-page-2.jpeg" alt="HTML Bootstrap Template by Pixel Rocket" />
                            </picture>
                        </div>
                        <div className="col-12">
                            <picture>
                                <img className="img-fluid" data-zoomable src="/assets/images/products/product-page-3.jpeg" alt="HTML Bootstrap Template by Pixel Rocket" />
                            </picture>
                        </div>
                        <div className="col-12">
                            <picture>
                                <img className="img-fluid" data-zoomable src="/assets/images/products/product-page-4.jpeg" alt="HTML Bootstrap Template by Pixel Rocket" />
                            </picture>
                        </div>
                    </div>
                </div>
                
                <div className="col-12 col-md-6 col-lg-5">
                    <div className="sticky-top top-5">
                        <div className="pb-3" data-aos="fade-in">
                            <div className="d-flex align-items-center mb-3">
                                <p className="small fw-bolder text-uppercase tracking-wider text-muted m-0 me-4">{item.category}</p>
                                <div className="d-flex justify-content-start align-items-center disable-child-pointer cursor-pointer">
                            </div>
                            </div>
                            
                            <h1 className="mb-1 fs-2 fw-bold">{item.title}</h1>
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="fs-4 m-0">${item.price}</p>
                            </div>
                            
                            <ItemCount item={item} inicial={1} addItemCarro={addItemCarro}></ItemCount>
                            
                                <div className="my-5">
                                    <div className="row">
                                        <div className="col-12 col-md-4">
                                            <div className="text-center px-2">
                                                <i className="ri-24-hours-line ri-2x"></i>
                                                <small className="d-block mt-1">Next-day Delivery</small>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4">
                                            <div className="text-center px-2">
                                                <i className="ri-secure-payment-line ri-2x"></i>
                                                <small className="d-block mt-1">Secure Checkout</small>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4">
                                            <div className="text-center px-2">
                                                <i className="ri-service-line ri-2x"></i>
                                                <small className="d-block mt-1">Free Returns</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
                            <div className="accordion" id="accordionProduct">
                                <div className="accordion-item">
                                  <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                      Product Details
                                    </button>
                                  </h2>
                                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionProduct">
                                    <div className="accordion-body">
                                        <p className="m-0">Made from 100% organic cotton, The Kiikii Osaka Japan T-Shirt was created with everyday use in mind. It features printed graphics and heavyweight fabric for maximum comfort and lifespan.</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Details & Care
                                      </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionProduct">
                                      <div className="accordion-body">
                                          <ul className="list-group list-group-flush">
                                              <li className="list-group-item d-flex border-0 row g-0 px-0">
                                                  <span className="col-4 fw-bolder">Composition</span>
                                                  <span className="col-7 offset-1">98% Cotton, 2% elastane</span>
                                              </li>
                                              <li className="list-group-item d-flex border-0 row g-0 px-0">
                                                  <span className="col-4 fw-bolder">Care</span>
                                                  <span className="col-7 offset-1">Professional dry clean only. Do not bleach. Do not iron.</span>
                                              </li>
                                          </ul>
                                      </div>
                                    </div>
                                  </div>        
                                <div className="accordion-item">
                                  <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                      Delivery & Returns
                                    </button>
                                  </h2>
                                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionProduct">
                                    <div className="accordion-body">
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item d-flex border-0 row g-0 px-0">
                                                <span className="col-4 fw-bolder">Delivery</span>
                                                <span className="col-7 offset-1">Standard delivery free for orders over $99. Next day delivery $9.99</span>
                                            </li>
                                            <li className="list-group-item d-flex border-0 row g-0 px-0">
                                                <span className="col-4 fw-bolder">Returns</span>
                                                <span className="col-7 offset-1">30 day return period. See our <a className="text-link-border" href="#">terms & conditions.</a></span>
                                            </li>
                                        </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              </div> </div>
                        </div>                   
                    </div>
                </div>
      </section>
      : <p>Cargando...</p>
    }
    </>
  )

};
export default ItemDetail;