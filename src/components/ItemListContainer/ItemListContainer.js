import customFetch from '../../data/customFetch';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

/* Components */
import SlideListContainer from '../SlideListContainer/SlideListContainer';
import Header from '../Header/Header';
import Filter from '../Filter/Filter';
import ItemList from '../ItemList/ItemList';

/* Datos */
const { products } = require('../../data/products');

const ItemListContainer = () => {
  
    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();


    useEffect(() => {
        customFetch(2000, products.filter(item => {
            if (idCategory === undefined) return item;
            return item.categoria === parseInt(idCategory)
        }))
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, [datos]);


    //componentDidUpdate
    /*
    useEffect(() => {
        customFetch(2000, products.filter(item => {
            if (idCategory === undefined) return item;
            return item.categoria === parseInt(idCategory)
        }))
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, [datos]);
    */
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