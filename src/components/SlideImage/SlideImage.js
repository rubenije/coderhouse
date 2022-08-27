import { Link } from 'react-router-dom';

const SlideImage = ( { id, index, link, title, small, image, button } ) => {
  
  const name = (index === 0) ? 'carousel-item active' : 'carousel-item';
  return (
    <>
      <div className={name}>
          <img src={image} className="d-block w-100" alt={title} />
          <div className="carousel-caption d-none d-md-block">
              <p className="title-small text-white opacity-75 mb-0">{small}</p>
              <h2 className="display-3 tracking-wide fw-bold text-uppercase tracking-wide text-white">Adidas <span className="text-outline-light">SS21</span></h2>
              <div>
                  <Link to={link} className="btn btn-psuedo text-white" role="button">{button}</Link>
              </div>
          </div>
      </div>
    </>
  )

};
export default SlideImage;