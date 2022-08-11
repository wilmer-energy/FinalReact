
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { useNavigate } from 'react-router-dom';
import { getPurchasesThunk } from '../store/slices/purchases.slice';

const Purchases = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPurchasesThunk())
    }, [])
    const navigate = useNavigate()

    const purchases = useSelector(state => state.purchases)

    console.log(purchases)

    return (
        <div className='container vh-100'>

            <nav aria-label="breadcrumb ">
                <ol className="breadcrumb mt-3 ms-3">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Purchases</li>
                </ol>
            </nav>


            <h2 className='fw-bold ms-3'>My Purchases</h2>

            <div className="" >


                {purchases.map(e => {
                    return (

                        <div className="card mt-3" key={e.id}>

                            <div className="card-header">

                                August {e.createdAt.split('-')[2].substring(0, 2)}, {e.createdAt.split('-')[0]}
                            </div>

                            <ul className="list-group list-group-flush">

                                {
                                    e.cart.products.map((m, index) => (
                                        <div key={index} className='li-pro'>


                                            <li className='list-group-item' onClick={() => navigate(`/product/${m.id}`)}>

                                                <div className="container text-center">
                                                    <div className="row">
                                                        <div className="col">
                                                            {m.title}
                                                        </div>
                                                        <div className="col">
                                                            {m.productsInCart.quantity}
                                                        </div>
                                                        <div className="col">
                                                            {m.price}
                                                        </div>
                                                    </div>
                                                </div>

                                            </li>



                                        </div>
                                    ))
                                }

                            </ul>

                        </div>
                    )
                })}


            </div>


        </div>
    );
};

export default Purchases;