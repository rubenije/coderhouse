//import customFetch from '../../data/customFetch';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

/* Components */
import SlideListContainer from '../SlideListContainer/SlideListContainer';
import Header from '../Header/Header';
import Filter from '../Filter/Filter';
import ItemList from '../ItemList/ItemList';

/* Datos */
//const { products } = require('../../data/products');
import { firestoreFetch } from '../../data/firestoreFetch';

const ItemListContainer = () => {
  
    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();

     //componentDidUpdate
    useEffect(() => {
        firestoreFetch(idCategory)
            .then(result => setDatos(result))
            .catch(err => console.log(err));
    }, [datos]);

    //componentWillUnmount
    useEffect(() => {
        return (() => {
            setDatos([]);
        })
    }, []);
    
    return (
        <>
            { idCategory === undefined ? <SlideListContainer/> : <Header/> }
            
            <Filter idCategory={idCategory}></Filter>
            <ItemList items={datos}></ItemList>
        </>
    )
};
export default ItemListContainer;