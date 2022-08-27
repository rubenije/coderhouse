import { Link } from 'react-router-dom';

const Filter = ({idCategory}) => {

    return (
      <>
        <div className="container-fluid">
                <div className="row">
                    <div className="d-flex justify-content-between items-center pt-5 pb-4 flex-column flex-lg-row">
                        
                        <div>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                    <li className="breadcrumb-item"><Link to="#">Sneakers</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">New Releases</li>
                                </ol>
                            </nav>        
                            <h1 className="fw-bold fs-3 mb-2">New Releases (121)</h1>
                            { /* <p className="m-0 text-muted small">Showing 1 - 9 of 121</p> */ }
                        </div>
                        
                        <div className="d-flex justify-content-end align-items-center mt-4 mt-lg-0 flex-column flex-md-row">
                            <button className="btn bg-light p-3 me-md-3 d-flex align-items-center fs-7 lh-1 w-100 mb-2 mb-md-0 w-md-auto " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasFilters" aria-controls="offcanvasFilters">
                                <i className="ri-equalizer-line me-2"></i> Filters
                            </button>
                            <select className="form-select form-select-sm border-0 bg-light p-3 pe-5 lh-1 fs-7">
                                <option>Sort By</option>
                                <option value="1">Hi Low</option>
                                <option value="2">Low Hi</option>
                                <option value="3">Name</option>
                            </select>
                        
                        </div>
                    </div>  
                </div>
            </div>


            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasFilters" aria-labelledby="offcanvasFiltersLabel">
                <div className="offcanvas-header pb-0 d-flex align-items-center">
                    <h5 className="offcanvas-title" id="offcanvasFiltersLabel">Category Filters</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className="d-flex flex-column justify-content-between w-100 h-100">
                
                    <div>
                
                        <div className="py-4 widget-filter widget-filter-price border-top">
                        <a className="small text-body text-decoration-none text-secondary-hover transition-all transition-all fs-6 fw-bolder d-block collapse-icon-chevron"
                            data-bs-toggle="collapse" href="#filter-modal-price" role="button" aria-expanded="true"
                            aria-controls="filter-modal-price">
                            Price
                        </a>
                        <div id="filter-modal-price" className="collapse show">
                            <div className="filter-price mt-6"></div>
                            <div className="d-flex justify-content-between align-items-center mt-7">
                                <div className="input-group mb-0 me-2 border">
                                    <span className="input-group-text bg-transparent fs-7 p-2 text-muted border-0">$</span>
                                    <input type="number" min="00" max="1000" step="1" className="filter-min form-control-sm border flex-grow-1 text-muted border-0" />
                                </div>   
                                <div className="input-group mb-0 ms-2 border">
                                    <span className="input-group-text bg-transparent fs-7 p-2 text-muted border-0">$</span>
                                    <input type="number" min="00" max="1000" step="1" className="filter-max form-control-sm flex-grow-1 text-muted border-0" />
                                </div>                
                            </div>          </div>
                        </div>
                        
                        <div className="py-4 widget-filter border-top">
                            <a className="small text-body text-decoration-none text-secondary-hover transition-all transition-all fs-6 fw-bolder d-block collapse-icon-chevron"
                                data-bs-toggle="collapse" href="#filter-modal-brands" role="button" aria-expanded="true"
                                aria-controls="filter-modal-brands">
                                Brands
                            </a>
                            <div id="filter-modal-brands" className="collapse show">
                                <div className="input-group my-3 py-1">
                                <input type="text" className="form-control py-2 filter-search rounded" placeholder="Search"
                                    aria-label="Search" />
                                <span className="input-group-text bg-transparent p-2 position-absolute top-10 end-0 border-0 z-index-20"><i
                                    className="ri-search-2-line text-muted"></i></span>
                                </div>
                                <div className="simplebar-wrapper">
                                <div className="filter-options" data-pixr-simplebar>
                                    <div className="form-group form-check-custom mb-1">
                                        <input type="checkbox" className="form-check-input" id="filter-brands-modal-0" />
                                        <label className="form-check-label fw-normal text-body flex-grow-1 d-flex align-items-center"
                                            htmlFor="filter-brands-modal-0">Adidas  <span
                                                className="text-muted ms-1 fs-9">(21)</span></label>
                                    </div>                <div className="form-group form-check-custom mb-1">
                                        <input type="checkbox" className="form-check-input" id="filter-brands-modal-1" />
                                        <label className="form-check-label fw-normal text-body flex-grow-1 d-flex align-items-center"
                                            htmlFor="filter-brands-modal-1">Asics  <span
                                                className="text-muted ms-1 fs-9">(13)</span></label>
                                    </div>                <div className="form-group form-check-custom mb-1">
                                        <input type="checkbox" className="form-check-input" id="filter-brands-modal-2" />
                                        <label className="form-check-label fw-normal text-body flex-grow-1 d-flex align-items-center"
                                            htmlFor="filter-brands-modal-2">Canterbury  <span
                                                className="text-muted ms-1 fs-9">(18)</span></label>
                                    </div>                <div className="form-group form-check-custom mb-1">
                                        <input type="checkbox" className="form-check-input" id="filter-brands-modal-3" />
                                        <label className="form-check-label fw-normal text-body flex-grow-1 d-flex align-items-center"
                                            htmlFor="filter-brands-modal-3">Converse  <span
                                                className="text-muted ms-1 fs-9">(25)</span></label>
                                    </div>                <div className="form-group form-check-custom mb-1">
                                        <input type="checkbox" className="form-check-input" id="filter-brands-modal-4" />
                                        <label className="form-check-label fw-normal text-body flex-grow-1 d-flex align-items-center"
                                            htmlFor="filter-brands-modal-4">Donnay  <span
                                                className="text-muted ms-1 fs-9">(11)</span></label>
                                    </div>                <div className="form-group form-check-custom mb-1">
                                        <input type="checkbox" className="form-check-input" id="filter-brands-modal-5" />
                                        <label className="form-check-label fw-normal text-body flex-grow-1 d-flex align-items-center"
                                            htmlFor="filter-brands-modal-5">Nike  <span
                                                className="text-muted ms-1 fs-9">(19)</span></label>
                                    </div>                <div className="form-group form-check-custom mb-1">
                                        <input type="checkbox" className="form-check-input" id="filter-brands-modal-6" />
                                        <label className="form-check-label fw-normal text-body flex-grow-1 d-flex align-items-center"
                                            htmlFor="filter-brands-modal-6">Millet  <span
                                                className="text-muted ms-1 fs-9">(24)</span></label>
                                    </div>                <div className="form-group form-check-custom mb-1">
                                        <input type="checkbox" className="form-check-input" id="filter-brands-modal-7" />
                                        <label className="form-check-label fw-normal text-body flex-grow-1 d-flex align-items-center"
                                            htmlFor="filter-brands-modal-7">Puma  <span
                                                className="text-muted ms-1 fs-9">(11)</span></label>
                                    </div>                <div className="form-group form-check-custom mb-1">
                                        <input type="checkbox" className="form-check-input" id="filter-brands-modal-8" />
                                        <label className="form-check-label fw-normal text-body flex-grow-1 d-flex align-items-center"
                                            htmlFor="filter-brands-modal-8">Reebok  <span
                                                className="text-muted ms-1 fs-9">(19)</span></label>
                                    </div>                <div className="form-group form-check-custom mb-1">
                                        <input type="checkbox" className="form-check-input" id="filter-brands-modal-9" />
                                        <label className="form-check-label fw-normal text-body flex-grow-1 d-flex align-items-center"
                                            htmlFor="filter-brands-modal-9">Under Armour  <span
                                                className="text-muted ms-1 fs-9">(24)</span></label>
                                    </div>              </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="py-4 widget-filter border-top">
                            <a className="small text-body text-decoration-none text-secondary-hover transition-all transition-all fs-6 fw-bolder d-block collapse-icon-chevron"
                                data-bs-toggle="collapse" href="#filter-modal-sizes" role="button" aria-expanded="true"
                                aria-controls="filter-modal-sizes">
                                Sizes
                            </a>
                            <div id="filter-modal-sizes" className="collapse show">
                                <div className="filter-options mt-3">
                                <div className="form-group d-inline-block mr-2 mb-2 form-check-bg form-check-custom">
                                    <input type="checkbox" className="form-check-bg-input" id="filter-sizes-modal-0" />
                                    <label className="form-check-label fw-normal" htmlFor="filter-sizes-modal-0">6.5</label>
                                </div>              <div className="form-group d-inline-block mr-2 mb-2 form-check-bg form-check-custom">
                                    <input type="checkbox" className="form-check-bg-input" id="filter-sizes-modal-1" />
                                    <label className="form-check-label fw-normal" htmlFor="filter-sizes-modal-1">7</label>
                                </div>              <div className="form-group d-inline-block mr-2 mb-2 form-check-bg form-check-custom">
                                    <input type="checkbox" className="form-check-bg-input" id="filter-sizes-modal-2" />
                                    <label className="form-check-label fw-normal" htmlFor="filter-sizes-modal-2">7.5</label>
                                </div>              <div className="form-group d-inline-block mr-2 mb-2 form-check-bg form-check-custom">
                                    <input type="checkbox" className="form-check-bg-input" id="filter-sizes-modal-3" />
                                    <label className="form-check-label fw-normal" htmlFor="filter-sizes-modal-3">8</label>
                                </div>              <div className="form-group d-inline-block mr-2 mb-2 form-check-bg form-check-custom">
                                    <input type="checkbox" className="form-check-bg-input" id="filter-sizes-modal-4" />
                                    <label className="form-check-label fw-normal" htmlFor="filter-sizes-modal-4">8.5</label>
                                </div>              <div className="form-group d-inline-block mr-2 mb-2 form-check-bg form-check-custom">
                                    <input type="checkbox" className="form-check-bg-input" id="filter-sizes-modal-5" />
                                    <label className="form-check-label fw-normal" htmlFor="filter-sizes-modal-5">9</label>
                                </div>              <div className="form-group d-inline-block mr-2 mb-2 form-check-bg form-check-custom">
                                    <input type="checkbox" className="form-check-bg-input" id="filter-sizes-modal-6" />
                                    <label className="form-check-label fw-normal" htmlFor="filter-sizes-modal-6">9.5</label>
                                </div>              <div className="form-group d-inline-block mr-2 mb-2 form-check-bg form-check-custom">
                                    <input type="checkbox" className="form-check-bg-input" id="filter-sizes-modal-7" />
                                    <label className="form-check-label fw-normal" htmlFor="filter-sizes-modal-7">10</label>
                                </div>              <div className="form-group d-inline-block mr-2 mb-2 form-check-bg form-check-custom">
                                    <input type="checkbox" className="form-check-bg-input" id="filter-sizes-modal-8" />
                                    <label className="form-check-label fw-normal" htmlFor="filter-sizes-modal-8">10.5</label>
                                </div>              <div className="form-group d-inline-block mr-2 mb-2 form-check-bg form-check-custom">
                                    <input type="checkbox" className="form-check-bg-input" id="filter-sizes-modal-9" />
                                    <label className="form-check-label fw-normal" htmlFor="filter-sizes-modal-9">11</label>
                                </div>              <div className="form-group d-inline-block mr-2 mb-2 form-check-bg form-check-custom">
                                    <input type="checkbox" className="form-check-bg-input" id="filter-sizes-modal-10" />
                                    <label className="form-check-label fw-normal" htmlFor="filter-sizes-modal-10">11.5</label>
                                </div>            </div>
                            </div>
                        </div>
                        
                        <div className="py-4 widget-filter border-top">
                        <a className="small text-body text-decoration-none text-secondary-hover transition-all transition-all fs-6 fw-bolder d-block collapse-icon-chevron"
                            data-bs-toggle="collapse" href="#filter-modal-colour" role="button" aria-expanded="true"
                            aria-controls="filter-modal-colour">
                            Colour
                        </a>
                        <div id="filter-modal-colour" className="collapse show">
                            <div className="filter-options mt-3">
                            <div className="form-group d-inline-block mr-1 mb-1 form-check-solid-bg-checkmark form-check-custom form-check-primary">
                                <input type="checkbox" className="form-check-color-input" id="filter-colours-modal-0" />
                                <label className="form-check-label" htmlFor="filter-colours-modal-0"></label>
                            </div>              <div className="form-group d-inline-block mr-1 mb-1 form-check-solid-bg-checkmark form-check-custom form-check-success">
                                <input type="checkbox" className="form-check-color-input" id="filter-colours-modal-1" />
                                <label className="form-check-label" htmlFor="filter-colours-modal-1"></label>
                            </div>              <div className="form-group d-inline-block mr-1 mb-1 form-check-solid-bg-checkmark form-check-custom form-check-danger">
                                <input type="checkbox" className="form-check-color-input" id="filter-colours-modal-2" />
                                <label className="form-check-label" htmlFor="filter-colours-modal-2"></label>
                            </div>              <div className="form-group d-inline-block mr-1 mb-1 form-check-solid-bg-checkmark form-check-custom form-check-info">
                                <input type="checkbox" className="form-check-color-input" id="filter-colours-modal-3" />
                                <label className="form-check-label" htmlFor="filter-colours-modal-3"></label>
                            </div>              <div className="form-group d-inline-block mr-1 mb-1 form-check-solid-bg-checkmark form-check-custom form-check-warning">
                                <input type="checkbox" className="form-check-color-input" id="filter-colours-modal-4" />
                                <label className="form-check-label" htmlFor="filter-colours-modal-4"></label>
                            </div>              <div className="form-group d-inline-block mr-1 mb-1 form-check-solid-bg-checkmark form-check-custom form-check-dark">
                                <input type="checkbox" className="form-check-color-input" id="filter-colours-modal-5" />
                                <label className="form-check-label" htmlFor="filter-colours-modal-5"></label>
                            </div>              <div className="form-group d-inline-block mr-1 mb-1 form-check-solid-bg-checkmark form-check-custom form-check-secondary">
                                <input type="checkbox" className="form-check-color-input" id="filter-colours-modal-6" />
                                <label className="form-check-label" htmlFor="filter-colours-modal-6"></label>
                            </div>            </div>
                        </div>
                        </div>
                    </div>
                    <div className="border-top pt-3">
                        <a href="#" className="btn btn-dark mt-2 d-block hover-lift-sm hover-boxshadow" data-bs-dismiss="offcanvas" aria-label="Close">Done</a>
                    </div>
                    </div>
                </div>
            </div>
      </>
    )
  
  };
  export default Filter;




            