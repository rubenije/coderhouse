/* Componentes */
import Item from '../Item/Item';
import Spinner from '../Spinner/Spinner';


const ItemList = ( { items } ) => {

  return (
    <>
      <div className="container-fluid">
        <div className="row">
        {
            items.length > 0
            ? items.map(item => <Item key={item.id} id={item.id} title={item.title} description={item.description} price={item.price} thumbnail={item.thumbnail} stock={item.stock} category={item.category} />)
            : <Spinner></Spinner>
        }
        </div>
      </div>
    </>
  )

};
export default ItemList;