import { useEffect, useState } from 'react';

const ItemCount = ({ item, inicial = 1, addItemCarro }) => {
  const [count, setContador] = useState(0);

  useEffect(() => {
    setContador(inicial);
  },[]);
  
  const addContador = () => {
    if (count < item.stock) {
        setContador(count + 1);
    }
  }

  const removeContador = () => {
      if (count > inicial) {
          setContador(count - 1);
      }
  }
  return (
    <>
      <div className="border-top mt-5 mb-1 product-option">
        <div className="flex ml-auto w-1/5">
          <div className="input-group mb-0">
              <button className="btn btn-dark btn-sm px-4" onClick={removeContador}>-</button>
              <input type="text" className="form-control" id="quantity" placeholder={count} />
              <button className="btn btn-dark btn-sm px-4" onClick={addContador}>+</button>
          </div>
        </div>
      </div>
      <button className="btn btn-dark w-100 mt-4 mb-0 hover-lift-sm hover-boxshadow" onClick={() => addItemCarro(count)}>Add To Shopping Bag</button>
    </>
  )

};
export default ItemCount;