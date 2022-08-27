import { React } from 'react';

const Header = () => (
    <div className="py-10 bg-img-cover bg-overlay-dark position-relative overflow-hidden bg-pos-center-center rounded-0 mb-5" style={{backgroundImage: 'url(/assets/images/banners/banner-category-top.jpg)'}}>
        <div className="container-fluid position-relative z-index-20">
            <h1 className="fw-bold display-6 mb-4 text-white">Latest Arrivals</h1>
            <div className="col-12 col-md-6">
                <p className="text-white mb-0 fs-5">
                    When it's time to head out and get your Kicks on, have a look at our latest arrivals. Whether you're into Nike, Adidas, Dunks or New Balance, we really have something for everyone!
                </p>
            </div>
        </div>
    </div>
);

export default Header;

