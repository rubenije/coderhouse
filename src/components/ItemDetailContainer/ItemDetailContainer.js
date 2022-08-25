import customFetch from "../../data/customFetch";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

/* Componentes */
import ItemDetail from "../ItemDetail/ItemDetail";
/* Datos */
const { products } = require("../../data/products"); 


const ItemDetailContainer = () => {
  
  const [dato, setDato] = useState({});
  const { idItem } = useParams();

  useEffect(() => {
      customFetch(500, products.find(item => item.id === parseInt(idItem)))
          .then(result => setDato(result))
          .catch(err => console.log(err))
  }, []);

  return (
    <>
      <ItemDetail item={dato}></ItemDetail>
    </>
  )

};
export default ItemDetailContainer;