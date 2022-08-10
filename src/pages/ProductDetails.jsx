import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux/es/exports';
import Header from '../Components/Header';
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Footer from '../Components/Footer';

const ProductDetails = () => {

    const [indexPhoto, setIndexPhoto] = useState(0)

    const { id } = useParams()
    let product = useSelector(state => state.productsSlice)
        .filter((e) => {
            return parseInt(e.id) === parseInt(id)
        })

    let allProducts = useSelector(state => state.productsSlice)
    let productDetail = product[0]

    let category = product[0].category.name
    let filtered = allProducts.filter((e) => {
        return e.category.name === category
    })

    let Products = [];
    filtered.forEach((filterProduct)=>{

        Products.push(
            <div className='Productcard'>
                <div className='ImgproductPreview'>
                    <img className='Primary' src={filterProduct.productImgs[0]} alt="" />
                    <img className='Secundary' src={filterProduct.productImgs[1]} alt="" />
                </div>

                <div className='Inf-product-preview'>
                    <div className='ProductTittlePreview'>
                        <b>{filterProduct.title}</b>
                    </div>
                    <div className='ProductPricePreview'>
                        <a>Price</a>
                        <div>
                            <b> ${filterProduct.price} </b>
                        </div>
                    </div>

                </div>

                <div className='ButtoCardPreview'>
                    <button className='p-2 border-0 fs-4 buton-cart'>
                        <i className="fa-solid fa-cart-plus"></i>
                    </button>
                </div>
            </div>
        )

    })

    return (
        <div className='Produc-detail-Container'>

            <Header />

            <div className='DetailsProduct'>
                <div className='history'>
                    <a href="#">Home</a>
                    <b>{productDetail.title}</b>
                </div>
                <div className='Produc-inf'>

                    <div className='Product-images'>
                        <div className='Product-Photo'>
                            <img src={productDetail.productImgs?.[indexPhoto]} alt="" />
                        </div>
                        <div className='Product-gallery'>
                            <ul>
                                <li onClick={() => { setIndexPhoto(0) }}> <img src={productDetail.productImgs?.[0]} alt="" /></li>
                                <li onClick={() => { setIndexPhoto(1) }}> <img src={productDetail.productImgs?.[1]} alt="" /> </li>
                                <li onClick={() => { setIndexPhoto(2) }}> <img src={productDetail.productImgs?.[2]} alt="" /></li>
                            </ul>
                        </div>

                    </div>

                    <div className='Product-details'>
                        <div className='brand'></div>
                        <h2>{productDetail.title}</h2>

                        <div className='Product-Descripcion'>
                            {productDetail.description}
                        </div>

                        <div className='ProducOptions'>
                            <div className='Price'>
                                <div>
                                    <span className='label'>Price </span>
                                </div>
                                <span className='amount'>
                                    <b>$ {productDetail.price}</b>
                                </span>
                            </div>
                            <div className='quantity'>
                                <div className='quantity-Label'>Quantity</div>
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
                            Add to shop card <i className="fa-solid fa-cart-plus"></i>
                        </button>

                    </div>
                </div>
                <div className='ProductPreviewtitle'>
                    <strong>Discover similar items</strong>
                </div>
                <div className='Container-product-card-preview'>
                    
                    {Products}                    

                </div>
            </div>

            <Footer />



        </div>


    );
};

export default ProductDetails;