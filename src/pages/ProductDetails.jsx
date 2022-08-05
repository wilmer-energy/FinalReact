import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux/es/exports';
// import { fabfacebook } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
                        Add to shop card
                        <i className='icon-shopping-cart'>
                        </i>
                    </button>

                </div>
            </div>

            <div className='ProductPreviewtitle'>
                <strong>Discover similar items</strong>
            </div>

            <div className='Container-product-card-preview'>

                <div className='Productcard0'>
                    <div className='ImgprodcutPreview'>
                        <img src={filtered[0].productImgs[0]} alt="" />
                    </div>

                    <div className='Inf-product-preview'>
                        <div className='ProductTittlePreview'>
                            <b>{filtered[0].title}</b>
                        </div>
                        <div className='ProdcutPricePreview'>
                            <a>Price</a>
                            <div>
                                <b> ${filtered[0].price} </b>
                            </div>
                        </div>
                        <div className='ButtoCardPreview'>
                            <button className='add-cartProductPreview'>
                                Icon
                            </button>
                        </div>
                    </div>
                </div>
                <div className='Productcard1'>
                    <div className='ImgprodcutPreview'>
                        <img src={filtered[1].productImgs[0]} alt="" />
                    </div>

                    <div className='ProductTittlePreview'>
                        <b>{filtered[1].title}</b>
                    </div>
                    <div className='ProdcutPricePreview'>
                        <a>Price</a>
                        <div>
                            <b> ${filtered[1].price} </b>
                        </div>
                    </div>
                    <div className='ButtoCardPreview'>
                        <button className='add-cartProductPreview'>
                            Icon
                        </button>
                    </div>
                </div>
                <div className='Productcard2'>
                    <div className='ImgprodcutPreview'>
                        <img src={filtered[2].productImgs[0]} alt="" />
                    </div>

                    <div className='ProductTittlePreview'>
                        <b>{filtered[2].title}</b>
                    </div>
                    <div className='ProdcutPricePreview'>
                        <a>Price</a>
                        <div>
                            <b> ${filtered[2].price} </b>
                        </div>
                    </div>
                    <div className='ButtoCardPreview'>
                        <button className='add-cartProductPreview'>
                            Icon
                        </button>
                    </div>
                </div>
                <div className='Productcard3'>
                    <div className='ImgprodcutPreview'>
                        <img src={filtered[3].productImgs[0]} alt="" />
                    </div>

                    <div className='ProductTittlePreview'>
                        <b>{filtered[3].title}</b>
                    </div>
                    <div className='ProdcutPricePreview'>
                        <a>Price</a>
                        <div>
                            <b> ${filtered[3].price} </b>
                        </div>
                    </div>
                    <div className='ButtoCardPreview'>
                        <button className='add-cartProductPreview'>
                            Icon
                        </button>
                    </div>
                </div>

            </div>

            <footer class="">
                <div class="copyright">© Academlo 2022</div>
                <div class="social-networks">
                    <a href="https://www.instagram.com/academlohq/">
                        <i class="icon-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/company/academlo/">
                        <i class="icon-linkedin"></i>
                    </a>
                    <a href="https://www.youtube.com/c/academlo">

                    </a>
                </div>
            </footer>


        </div>


    );
};

export default ProductDetails;