import { React } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  
  return (
    <>
        <footer className="border-top py-5 mt-4  ">
            <div className="container-fluid">
                <div className="d-flex justify-content-between align-items-center flex-column flex-lg-row">
                    <div>
                        <ul className="list-unstyled">
                            <li className="d-inline-block me-1"><a className="text-decoration-none text-dark-hover transition-all"
                                    href="#"><i className="ri-instagram-fill"></i></a></li>
                            <li className="d-inline-block me-1"><a className="text-decoration-none text-dark-hover transition-all"
                                    href="#"><i className="ri-facebook-fill"></i></a></li>
                            <li className="d-inline-block me-1"><a className="text-decoration-none text-dark-hover transition-all"
                                    href="#"><i className="ri-twitter-fill"></i></a></li>
                            <li className="d-inline-block me-1"><a className="text-decoration-none text-dark-hover transition-all"
                                    href="#"><i className="ri-snapchat-fill"></i></a></li>
                        </ul>
                    </div>
                    <div className="d-flex align-items-center justify-content-end flex-column flex-lg-row">
                        <p className="small m-0 text-center text-lg-start">&copy; 2021 OldSkool All Rights Reserved. Template by <a
                                href="https://www.pixelrocket.store">Pixel Rocket</a></p>
                        <ul className="list-unstyled mb-0 ms-lg-4 mt-3 mt-lg-0 d-flex justify-content-end align-items-center">
                            <li className="bg-light p-2 d-flex align-items-center justify-content-center me-2">
                                <i className="pi pi-sm pi-paypal"></i></li>
                            <li className="bg-light p-2 d-flex align-items-center justify-content-center me-2">
                                <i className="pi pi-sm pi-mastercard"></i></li>
                            <li className="bg-light p-2 d-flex align-items-center justify-content-center me-2">
                                <i className="pi pi-sm pi-american-express"></i></li>
                            <li className="bg-light p-2 d-flex align-items-center justify-content-center"><i
                                    className="pi pi-sm pi-visa"></i>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )

};
export default Footer;