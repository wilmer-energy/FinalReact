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
                        <h2><span>{productDetail.title}</span></h2>


                        <div className='Product-Descripcion'>
                            {productDetail.description}
                        </div>

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

                        <button className='add-cart-button'>
                            Add to shop card <i className="fa-solid fa-cart-plus"></i>
                        </button>

                    </div>
                </div>
                <div className='ProductPreviewtitle'>
                    <strong>Discover similar items</strong>
                </div>
                <div className='Container-product-card-preview'>


                    <div className='Productcard'>
                        <div className='ImgproductPreview'>
                            <img className='Primary' src={filtered[0].productImgs[0]} alt="" />
                            <img className='Secundary' src={filtered[0].productImgs[1]} alt="" />
                        </div>

                        <div className='Inf-product-preview'>
                            <div className='ProductTittlePreview'>
                                <b>{filtered[0].title}</b>
                            </div>
                            <div className='ProductPricePreview'>
                                <a>Price</a>
                                <div>
                                    <b> ${filtered[0].price} </b>
                                </div>
                            </div>

                        </div>

                        <div className='ButtoCardPreview'>
                            <button className='p-2 border-0 fs-4 buton-cart'>
                                <i className="fa-solid fa-cart-plus"></i>
                            </button>
                        </div>
                    </div>
                    <div className='Productcard'>
                        <div className='ImgproductPreview'>
                            <img className='Primary' src={filtered[1].productImgs[0]} alt="" />
                            <img className='Secundary' src={filtered[1].productImgs[1]} alt="" />
                        </div>

                        <div className='Inf-product-preview'>
                            <div className='ProductTittlePreview'>
                                <b>{filtered[1].title}</b>
                            </div>
                            <div className='ProductPricePreview'>
                                <a>Price</a>
                                <div>
                                    <b> ${filtered[1].price} </b>
                                </div>
                            </div>

                        </div>

                        <div className='ButtoCardPreview'>
                            <button className='p-2 border-0 fs-4 buton-cart'>
                                <i className="fa-solid fa-cart-plus"></i>
                            </button>
                        </div>
                    </div>
                    <div className='Productcard'>
                        <div className='ImgproductPreview'>
                            <img className='Primary' src={filtered[2].productImgs[0]} alt="" />
                            <img className='Secundary' src={filtered[2].productImgs[1]} alt="" />
                        </div>

                        <div className='Inf-product-preview'>
                            <div className='ProductTittlePreview'>
                                <b>{filtered[2].title}</b>
                            </div>
                            <div className='ProductPricePreview'>
                                <a>Price</a>
                                <div>
                                    <b> ${filtered[2].price} </b>
                                </div>
                            </div>

                        </div>
                        <div className='ButtoCardPreview'>
                            <button className='p-2 border-0 fs-4 buton-cart'>
                                <i className="fa-solid fa-cart-plus"></i>
                            </button>
                        </div>
                    </div>
                    <div className='Productcard'>
                        <div className='ImgproductPreview'>
                            <img className='Primary' src={filtered[3].productImgs[0]} alt="" />
                            <img className='Secundary' src={filtered[3].productImgs[1]} alt="" />
                        </div>

                        <div className='Inf-product-preview'>
                            <div className='ProductTittlePreview'>
                                <b>{filtered[3].title}</b>
                            </div>
                            <div className='ProductPricePreview'>
                                <a>Price</a>
                                <div>
                                    <b> ${filtered[3].price} </b>
                                </div>
                            </div>

                        </div>

                        <div className='ButtoCardPreview'>
                            <button className='p-2 border-0 fs-4 buton-cart'>
                                <i className="fa-solid fa-cart-plus"></i>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />



        </div>


    );
};

export default ProductDetails;