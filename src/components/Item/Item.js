import { React } from 'react';
import { Link } from 'react-router-dom';

const Item = ( { id, title, description, price, thumbnail, stock } ) => {
  
  return (
    <>
      <div className="col-12 col-sm-6 col-lg-4">
          <div className="card border border-transparent position-relative overflow-hidden h-100 transparent">
              <div className="card-img position-relative">
                  <div className="card-badges">
                          <span className="badge badge-card"><span className="f-w-2 f-h-2 bg-success rounded-circle d-block me-1"></span> New In</span>
                  </div>
                  <span className="position-absolute top-0 end-0 p-2 z-index-20 text-muted"><i className="ri-heart-line"></i></span>
                  <picture className="position-relative overflow-hidden d-block bg-light">
                      <img className="w-100 img-fluid position-relative z-index-10" title="" src={thumbnail} alt="" />
                  </picture>
                      <div className="position-absolute start-0 bottom-0 end-0 z-index-20 p-2">
                          <Link to={`/item/${id}` }  className="btn btn-quick-add"><i className="ri-add-line me-2"></i> Quick Add</Link>
                      </div>
              </div>
              <div className="card-body px-0">
                  <Link to={`/item/${id}`} className="text-decoration-none link-cover">{title}</Link>
                  <small className="text-muted d-block">3 colours, 10 sizes</small>
                          <p className="mt-2 mb-0 small">${price}</p>
              </div>
          </div>
      </div>
      
      
    </>
  )

};
export default Item;