import { Link } from 'react-router-dom';

const GalleryImage = ( { image } ) => {
 
  return (
    <>
        <div className="col-12">
            <picture>
                <img className="img-fluid" data-zoomable src={image} alt="HTML Bootstrap Template by Pixel Rocket" />
            </picture>
        </div>
    </>
  )

};
export default GalleryImage;