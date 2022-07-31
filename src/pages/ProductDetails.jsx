import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux/es/exports';

const ProductDetails = () => {
    const {id}=useParams()
    let products=useSelector(state=>state.productsSlice)
    console.log(products)
    
    return (
        <div>
            <span>{id}</span>
        </div>
    );
};

export default ProductDetails;