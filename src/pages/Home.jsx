import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux/es/exports';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { getProductsThunk, update } from '../store/slices/products.slice';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import Carousel from '../Components/Carousel';
import Category from '../Components/Category';
import Footer from '../Components/Footer';
import { useForm } from 'react-hook-form';
import { addCartThunk } from '../store/slices/car.slice';

const Home = () => {

    
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm()
    const categories=["Smart TV","Computers","Smartphones","Kitchen"]

    useEffect(() => {
        dispatch(getProductsThunk(dispatch))
    }, [])

    const products = useSelector(state => state.productsSlice)
    const [searchText, setSearchText] = useState("")
    const [productsFilter, setProductsFilter] = useState([])

    useEffect(() => {
        setProductsFilter(products)
    }, [products])


    //------------------FILTERS------------


    const filter = (e) => {
        setSearchText(e)
        let p = products.filter((elem) => {
            return elem.title.toLowerCase().indexOf(e.toLowerCase()) !== -1
        })
        setProductsFilter(p)
    }

    const filterByPrice = (data) => {

        let filtered = products.filter(e => {
            let price = parseInt(e.price)
            let to = parseInt(data.to)
            let from = parseInt(data.from)
            let final = price >= from && price <= to
            return final
        })
        setProductsFilter(filtered)
    }

    const filterByCategory = (index) => {

        let filtered = products.filter((e) => {
            return e.category.name === categories[index]
        })
        setProductsFilter(filtered)

    }
    const showDetails = (index) => {
        navigate(`/product/${index}`)
    }
     //--------------Cart-----------
    const addCart = (obj) => {
        //dispatch(addCartThunk(obj))
        console.log(obj)
    }

    return (
        <div className='home'>
            {/* <header>e-commerce</header> */}
            <Header />
            <Carousel />
            <Category />
            {/* <div>Price</div>
            <div>Filter by price</div>
            <div>Category</div>
            <div>List of categories</div> */}


            <div className='container'>
                <div className='row'>
                    <div className='col-12 d-none d-lg-block col-lg-3 mt-5'>
                        <div className='aside sticky-top pt-5 ps-0 pe-4'>
                            <h5 className='pt-5'>Price</h5>
                            <hr />
                            <form action="" className='mb-5'>
                                <label htmlFor="from" className='d-flex justify-content-between mb-2'>
                                    <span>From</span>
                                    <input className='input-c' type="number" id='from' />

                                </label>
                                <label htmlFor="to" className='d-flex justify-content-between'>
                                    <span>To</span>
                                    <input className='input-c' type="number" id='to' />

                                </label>
                                <div className='d-flex justify-content-end'>
                                    <button className='buton-filter ps-2 pe-2 mt-3 border-0 pt-1 pb-1'>Filter Price</button>
                                </div>
                            </form>
                            <h5>Category</h5>
                            <hr />
                            <h6 className='fw-normal mb-3'>Smart TV</h6>
                            <h6 className='fw-normal mb-3'>Smartphone</h6>
                            <h6 className='fw-normal mb-3'>Computer</h6>

                        </div>
                    </div>

                    <div className='col-12 col-lg-9'>
                        <div className='row'>
                            <div className='col'>
                                <form className='d-flex justify-content-center mt-5 mb-3 ps-2 pe-2 ps-lg-5 pe-lg-5'>
                                    <label htmlFor="search"></label>
                                    <input className='w-100 border border-secondary input-search' type="text" placeholder='Search by type' id='search' value={searchText} onChange={(e) => { filter(e.target.value) }} />
                                    <button className='buton-search ps-4 pe-4 rounded-end'>
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                    </button>
                                </form>

                            </div>



                        </div>

                        <div className='row pt-4'>


                            <h3>Productos</h3>
                            {productsFilter.map((e) => {
                                return (
                                    <div className='col-12 col-sm-6 col-lg-4 mb-3' key={e.title}>

                                        <div className='card ' onClick={() => { showDetails(e.id) }}>
                                            <img className='card-img-top p-4 pb-0 img-prod' src={e.productImgs?.[0]} alt="" />
                                            <hr />
                                            <div className="card-body pt-0 pb-5">
                                                <h6 className="card-title ">{e.title}</h6>

                                                <div className='detail-prod'>
                                                    <span className=''>Price: </span>
                                                    <span>{e.price}</span>



                                                </div>
                                                <button className='p-2 border-0 fs-4 buton-cart' onClick={()=>{addCart({id:e.id,quantity: 1})}}>
                                                    <i className="fa-solid fa-cart-plus"></i>
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                )
                            })}





                        </div>


                    </div>
                </div>

            </div>
            <Footer />

        </div>
    );
};

export default Home;