import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux/es/exports';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { getProductsThunk, update } from '../store/slices/products.slice';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import Carousel from '../Components/Carousel';
import Category from '../Components/Category';

const Home = () => {


    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getProductsThunk(dispatch))
    }, [])

    const products = useSelector(state => state.productsSlice)
    const [searchText, setSearchText] = useState("")
    const [productsFilter, setProductsFilter] = useState([])


    useEffect(() => {
        setProductsFilter(products)
    }, [products])


    const submit = (e) => {
        dispatch(getProductsThunk(dispatch))
    }

    const filter = (e) => {
        setSearchText(e)
        let p = products.filter((elem) => {
            return elem.title.toLowerCase().indexOf(e.toLowerCase()) !== -1
        })
        setProductsFilter(p)
    }
    const showDetails = (index) => {
        navigate(`/product/${index}`)
    }

    return (
        <div className='home'>
            {/* <header>e-commerce</header> */}
            <Header />
            <Carousel />
            <Category />
            <div>Price</div>
            <div>Filter by price</div>
            <div>Category</div>
            <div>List of categories</div>


            <form>
                <label htmlFor="search"></label>
                <input type="text" placeholder='Search by type' id='search' value={searchText} onChange={(e) => { filter(e.target.value) }} />
                <button>Search</button>
            </form>

            <div>Productos
                {productsFilter.map((e) => {
                    return (<div className='productCard' key={e.title} onClick={() => { showDetails(e.id) }}>
                        <img src={e.productImgs?.[0]} alt="" />
                        <span>{e.title}</span>
                        <div>
                            <span>Price: </span>
                            <span>{e.price}</span>
                            <button>Add to bag</button>
                        </div>
                    </div>)
                })}
            </div>
        </div>
    );
};

export default Home;