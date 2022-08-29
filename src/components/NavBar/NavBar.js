import React, { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';
import { getCategorias } from '../../data/firestoreFetch';



/* Components */
import CartWidget from '../CartWidget/CartWidget';
import NavBarItem from '../NavBarItem/NavBarItem';

const NavBar = () => {
  
  const [categorias, setCategoria] = useState([]);

  //componentDidUpdate
  useEffect(() => {
      getCategorias()
          .then(result => setCategoria(result))
          .catch(err => console.log(err));
  }, []);

  
    categorias.map(function(element){
      console.log(element.id);
    })
  

  //componentWillUnmount
  /*
  useEffect(() => {
      return (() => {
        setCategoria([]);
      })
  }, []);
  */
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white flex-column border-0  ">
        <div className="container-fluid">
          <div className="w-100">
            <div className="d-flex justify-content-between align-items-center flex-wrap">
              <Link className="navbar-brand fw-bold fs-3 m-0 p-0 flex-shrink-0 order-0" to="/">
                <div className="d-flex align-items-center">
                  <svg className="f-w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 77.53 72.26"><path d="M10.43,54.2h0L0,36.13,10.43,18.06,20.86,0H41.72L10.43,54.2Zm67.1-7.83L73,54.2,68.49,62,45,48.47,31.29,72.26H20.86l-5.22-9L52.15,0H62.58l5.21,9L54.06,32.82,77.53,46.37Z" fill="currentColor" fillRule="evenodd"/></svg>
                </div>
              </Link>
              
              <ul className="list-unstyled mb-0 d-flex align-items-center order-1 order-lg-2 nav-sidelinks">
                <li className="d-lg-none">
                  <span className="nav-link text-body d-flex align-items-center cursor-pointer" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"><i className="ri-menu-line ri-lg me-1"></i> Menu</span>
                </li>
                <li className="ms-1 d-none d-lg-inline-block">
                  <Link className="nav-link text-body" to="/login">Account</Link>
                </li>
                <li className="ms-1 d-inline-block position-relative dropdown-cart">
                  <Link  to="/cart" className="nav-link me-0 disable-child-pointer border-0 p-0 bg-transparent text-body"><CartWidget></CartWidget></Link>
                </li>
              </ul>
                    
              <div className="flex-shrink-0 collapse navbar-collapse navbar-collapse-light w-auto flex-grow-1 order-2 order-lg-1" id="navbarNavDropdown">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link" to="/" role="button">HOME</Link>
                  </li>
                  <NavBarItem elements={categorias}></NavBarItem>
                  { /*
                  <li className="nav-item">
                    <Link className="nav-link" to="/category/2" role="button">laptops</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/category/3" role="button">fragrances</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/category/4" role="button">skincare</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/category/5" role="button">groceries</Link>
                  </li>
                  */}
                </ul>                    
              </div>
            </div>
          </div>
        </div>
    </nav>
    <div className="clearfix"></div>
    </>
  )

};
export default NavBar;