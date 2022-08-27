/* Componentes */
import SlideImage from '../SlideImage/SlideImage';
import Spinner from '../Spinner/Spinner';


const SlideList = ({ elements }) => {
  
    return (
      <>
        {
            elements.length > 0 ?
                elements.map((element, index) => {
                    return <SlideImage key={element.id} index={index} id={element.id} link={element.link} title={element.title} small={element.small} image={element.image} button={element.button} />
                })
            : <Spinner></Spinner>
        }
      </>
    )
  
  };
  export default SlideList;