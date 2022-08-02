import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux/es/exports';

const ProductDetails = () => {

    const { id } = useParams()
    let allProducts = useSelector(state => state.productsSlice)

    let products = useSelector(state => state.productsSlice)
        .filter((e) => {
            return parseInt(e.id) === parseInt(id)
        })




    //Variable a usar "productDetail"  FABIAN

    let productDetail = products[0]


    let category = products[0].category.name
    let filtered = allProducts.filter((e) => {
        return e.category.name === category
    })

    console.log(filtered) //filtered es un array de productos relacionados

    console.log(productDetail)

    return (
        <div className='Produc-detail-Container'>
            <div className='history'>
                <a href="#">Home</a>
                <div className='Separator'></div>
                <b>{productDetail.title}</b>
            </div>

            <div className='Produc-inf'>
                <div className='col'>
                    <div className='images-gallery'>
                        <div className='gallery'>
                            <div className='button-gallery left'>
                                <button>
                                    <i className='icon-cheveron-left'> :: before</i>
                                </button>
                            </div>
                            <div className='button-gallery rigth'>
                                <button>
                                    <i className='icon-cheveron-rigth'> :: before</i>
                                </button>
                            </div>
                            <ul className='image-list'>
                                <li><img src={productDetail.productImgs?.[0]} alt="" /></li>
                                <li><img src={productDetail.productImgs?.[1]} alt="" /></li>
                                <li><img src={productDetail.productImgs?.[2]} alt="" /></li>
                            </ul>
                        </div>
                        <ul className='imgages-preview'>
                            <li class> <img src={productDetail.productImgs?.[0]} alt="" /></li>
                            <li className='selected'><img src={productDetail.productImgs?.[1]} alt="" /></li>
                            <li class> <img src={productDetail.productImgs?.[2]} alt="" /></li>
                        </ul>
                    </div>
                </div>
                <div className='col'>
                    <div className='Produc-info'>
                        <div className='brand'></div>
                        <h2><span>{productDetail.title}</span></h2>
                        <div className='Produc-Data'>
                            <div className='Product-options'>
                                <div className='flex'>
                                    <div className='Price'>
                                        <span className='label'>Price </span>
                                        <span className='amount'>
                                            $ {productDetail.price}
                                        </span>
                                    </div>
                                    <div className='quantity'>
                                        <div className='Label'>Qauntity</div>
                                        <div className='flex'>
                                            <button disabled>
                                                <i className='Icon-minus'>
                                                    :: before
                                                </i>
                                            </button>
                                            <div className='value'>1</div>
                                            <button>
                                                <i className='icon-plus'>
                                                    ::before
                                                </i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <button className='add-cart-button'>
                                    Add to shop card
                                    <i className='icon-shopping-cart'>
                                        ::before
                                    </i>
                                </button>
                            </div>
                            <p className='product-descripcion'>
                                {productDetail.description}
                            </p>

                        </div>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default ProductDetails;