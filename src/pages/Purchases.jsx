
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { getPurchasesThunk } from '../store/slices/purchases.slice';

const Purchases = () => {
    
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getPurchasesThunk())
    },[])
    
    const purchases=useSelector(state=>state.purchases)

    console.log(purchases)

    return (
        <div>
            <div>
                {purchases.map(e=>{
                    return (<div className="purchasesCard" key={e.id}>
                        <span>
                            {e.createdAt}
                        </span>
                    </div>)
                })}
            </div>
            
            <button >check</button>
        </div>
    );
};

export default Purchases;