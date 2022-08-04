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

    // console.log(productDetail)
    let allProducts = useSelector(state => state.productsSlice)
    let productDetail = product[0]

     let category = product[0].category.name
     let filtered = allProducts.filter((e) => {
        return e.category.name === category
    })

     console.log(filtered)

    return (
        <div className='Produc-detail-Container'>
            <div className='history'>
                <a href="#">Home</a>
                <b>{productDetail.title}</b>
            </div>

            <div className='Produc-inf'>

                <div className='Product-images'>
                    <div className='Product-Photo'>
                        <img src={productDetail.productImgs?.[0]} alt="" />
                    </div>
                    <div className='Product-gallery'>
                        <ul>
                            <li > <img src={productDetail.productImgs?.[0]} alt="" /></li>
                            <li className='selected'><img src={productDetail.productImgs?.[1]} alt="" /></li>
                            <li > <img src={productDetail.productImgs?.[2]} alt="" /></li>
                        </ul>
                    </div>


                </div>

                <div className='Produc-details'>
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
                                    <div className='quantity-Label'>Qauntity</div>
                                    <div className='quantity-counter'>
                                        <button disabled>
                                            <i className='Icon-minus'>
                                                -
                                            </i>
                                        </button>
                                        <div className='value'>1</div>
                                        <button>
                                            <i className='icon-plus'>
                                                +
                                            </i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <button className='add-cart-button'>
                                Add to shop card
                                <i className='icon-shopping-cart'>

                                </i>
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            <div className='Product-Descripcion'>
                {productDetail.description}
            </div>
            <img src={filtered[0].productImgs[0]} alt="" />
            <div className='Pricee'>
            ${filtered[0].price}
            </div>         

            <div className='SimilarItems'>
            {filtered[0].title}
            </div>

            <img src={filtered[1].productImgs[0]} alt="" />
            <div className='Pricee'>
            ${filtered[1].price}
            </div>         

            <div className='SimilarItems'>
            {filtered[1].title}
            </div>

            
            <img src={filtered[2].productImgs[0]} alt="" />
            <div className='Pricee'>
            ${filtered[2].price}
            </div>         

            <div className='SimilarItems'>
            {filtered[2].title}
            </div>

            <img src={filtered[3].productImgs[0]} alt="" />
            <div className='Pricee'>
            ${filtered[3].price}
            </div>         

            <div className='SimilarItems'>
            {filtered[3].title}
            </div>


        </div>
    );
};

export default ProductDetails;