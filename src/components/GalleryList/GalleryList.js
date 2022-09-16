/* Componentes */
import GalleryImage from '../GalleryImage/GalleryImage';
import Spinner from '../Spinner/Spinner';


const GalleryList = ({elements}) => {
  
    return (
      <>
        {
            elements.length > 0 ?
                elements.map((element, index) => {
                    return <GalleryImage key={index} image={element}  />
                })
            : <Spinner></Spinner>
        }
      </>
    )
  
  };
  export default GalleryList;