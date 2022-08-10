import React from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { getPurchasesThunk } from '../store/slices/purchases.slice';

const Purchases = () => {
    const dispatch=useDispatch()
    dispatch(getPurchasesThunk())
    return (
        <div>
            
        </div>
    );
};

export default Purchases;