import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux/es/exports';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { getProductsThunk, update } from '../store/slices/products.slice';
import { useNavigate } from 'react-router-dom';
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
        
        let filtered= products.filter(e => {
            let price = parseInt(e.price)
            let to = parseInt(data.to)
            let from = parseInt(data.from)
            let final = price >= from && price <= to
            return final
        })
        setProductsFilter(filtered)
    }
    
    const filterByCategory=(index)=>{
        
        let filtered=products.filter((e)=>{
            return e.category.name===categories[index]
        })
        setProductsFilter(filtered)  

    }


    // ------------------NAVIGATES---------------



    const showDetails = (index) => {
        navigate(`/product/${index}`)
    }
    const showLogIn =()=>{
        navigate("/LogIn")
    }
    const showPurchases=()=>{
        navigate("/purchases")
    }
    const showCart=()=>{
        navigate("/cart")
    }

    //--------------Cart-----------
    const addCart =(obj)=>{
        dispatch(addCartThunk(obj))
    }




    return (
        <div className='home'>
            <header>e-commerce</header>

            <ul>
                <li><button>e-commerce</button></li>
                <li><button onClick={showLogIn}>Log in</button></li>
                <li><button onClick={showPurchases}>Purchases</button></li>
                <li><button onClick={showCart}>Cart</button></li>
            </ul>

            <div>Price</div>
            <form onSubmit={handleSubmit(filterByPrice)}>
                <label htmlFor="priceFrom"></label>
                <input type="number" id='priceFrom' {...register("from")} />
                <label htmlFor="priceTo"></label>
                <input type="number" id='priceTo' {...register("to")} />
                <button>Filter</button>

            </form>
            <div>Category
                <ul>
                    {categories?.map((e)=>{
                        return (<li key={e} onClick={()=>{filterByCategory(categories.indexOf(e))}}>{e}
                        
                        </li>)
                    })}
                </ul>
            </div>
            


            <form>
                <label htmlFor="search"></label>
                <input type="text" placeholder='Search by type' id='search' value={searchText} onChange={(e) => { filter(e.target.value) }} />
                <button>Search</button>
            </form>

            <div>Productos
                {productsFilter?.map((e) => {
                    return (<div className='productCard' key={e.title} onClick={() => { showDetails(e.id) }}>
                        <img src={e.productImgs?.[0]} alt="" />
                        <span>{e.title}</span>
                        <div>
                            <span>Price: </span>
                            <span>{e.price}</span>
                            <button onClick={()=>{}}>Add to bag</button>
                        </div>
                    </div>)
                })}
            </div>
        </div>
    );
};

export default Home;