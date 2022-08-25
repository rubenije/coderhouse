import customFetch from '../../data/customFetch';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

/* Components */
import ItemList from '../ItemList/ItemList';
import Slide from '../Slide/Slide';
import Header from '../Header/Header';

/* Datos */
const { products } = require('../../data/products');


const ItemListContainer = () => {
  
    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();

    useEffect(() => {
        customFetch(5000, products.filter(item => {
            if (idCategory === undefined) return item;
            return item.categoria === parseInt(idCategory)
        }))
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, [datos]);

    useEffect(() => {
        return (() => {
            setDatos([]);
        })
    }, []);
    
    return (
        <>
            { idCategory === undefined ? <Slide/> : <Header/> }
            <div className="pt-5 mt-5"></div>
            <ItemList items={datos}></ItemList>
        </>
    )
};
export default ItemListContainer;