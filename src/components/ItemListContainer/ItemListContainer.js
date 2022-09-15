//import customFetch from '../../data/customFetch';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

/* Components */
import SlideListContainer from '../SlideListContainer/SlideListContainer';
import Header from '../Header/Header';
import Filter from '../Filter/Filter';
import ItemList from '../ItemList/ItemList';
import Spinner from '../Spinner/Spinner';

/* Datos */
//const { products } = require('../../data/products');
import { firestoreFetch } from '../../data/firestoreFetch';
import { prettyDOM } from '@testing-library/react';

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
            
            {datos.length > 0 
                ?  <ItemList items={datos}></ItemList>
                : <Spinner></Spinner>

            } 
            </>
    )
};
export default ItemListContainer;