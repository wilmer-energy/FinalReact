import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux/es/exports';

const ProductDetails = () => {

    const { id } = useParams()
    let product = useSelector(state => state.productsSlice)
        .filter((e) => {
            return parseInt(e.id) === parseInt(id)
        })

//Variable a usar "productDetail"  FABIAN

    let productDetail = product[0]
    console.log(productDetail)

    return (
        <div className='Container'>
            <div>
            <span>{productDetail.title}</span>
            <img src={productDetail.productImgs?.[0]} alt="" />
            </div>
            
        </div>
    );
};

export default ProductDetails;