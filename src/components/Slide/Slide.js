import { React } from 'react';
import { Link } from 'react-router-dom';

const Slide = () => (
    <div id="slideHome" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#slideHome" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#slideHome" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#slideHome" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#slideHome" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="/assets/images/banners/banner-1.jpg" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                    <p className="title-small text-white opacity-75 mb-0" data-swiper-parallax="-100">Everything You Need</p>
                    <h2 className="display-3 tracking-wide fw-bold text-uppercase tracking-wide text-white" data-swiper-parallax="100">
                    <span className="text-outline-light">Summer</span> Essentials</h2>
                    <div data-swiper-parallax-y="-25">
                      <Link to="/" className="btn btn-psuedo text-white" role="button">Shop New Arrivals</Link>
                    </div>
                </div>
            </div>
            <div className="carousel-item">
                <img src="/assets/images/banners/banner-2.jpg" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                    <p className="title-small text-white opacity-75 mb-0" data-swiper-parallax="-100">Spring Collection</p>
                    <h2 className="display-3 tracking-wide fw-bold text-uppercase tracking-wide text-white" data-swiper-parallax="100">Adidas <span className="text-outline-light">SS21</span></h2>
                    <div data-swiper-parallax-y="-25">
                      <Link to="/" className="btn btn-psuedo text-white" role="button">Shop Latest Adidas</Link>
                    </div>
                </div>
            </div>
            <div className="carousel-item">
                <img src="/assets/images/banners/banner-3.jpg" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                    <p className="title-small text-white opacity-75 mb-0" data-swiper-parallax="-100">Just Do it</p>
                    <h2 className="display-3 tracking-wide fw-bold text-uppercase tracking-wide text-white" data-swiper-parallax="100">Nike <span className="text-outline-light">SS21</span></h2>
                    <div data-swiper-parallax-y="-25">
                      <Link href="./category.html" className="btn btn-psuedo text-white" role="button">Shop Latest Nike</Link>
                    </div>
                </div>
            </div>
            <div className="carousel-item">
                <img src="/assets/images/banners/banner-4.jpg" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                    <p class="title-small text-white opacity-75 mb-0" data-swiper-parallax="-100">Look Good Feel Good</p>
                    <h2 class="display-3 tracking-wide fw-bold text-uppercase tracking-wide text-white" data-swiper-parallax="100">
                      <span class="text-outline-light">Sustainable</span> Fashion</h2>
                    <div data-swiper-parallax-y="-25">
                      <Link href="/" class="btn btn-psuedo text-white" role="button">Why We Are Different</Link>
                    </div>
                </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#slideHome" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Anterior</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#slideHome" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Siguiente</span>
        </button>
        </div>
);

export default Slide;