
const SlideIndicator = ({ elements }) => {
  
    return (
      <>
      {elements.map((element, index) => (  
          index > 0 ?
            <button key={element.id} type="button" data-bs-target="#slideHome" data-bs-slide-to={index} className="active" aria-current="true" aria-label={element.small}></button>
          : <button key={element.id} type="button" data-bs-target="#slideHome" data-bs-slide-to={index} aria-label={element.small}></button>
      ))}  
      </>
    )
  
  };
  export default SlideIndicator;