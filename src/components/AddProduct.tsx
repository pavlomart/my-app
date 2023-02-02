import React, { useState } from 'react';
import { addProduct } from '../store/features/productSlice';
import { useAppDispatch } from '../store/store';
import { v4 as uuidv4 } from 'uuid';
import AddProductPane from './AddProductPane';


const AddProduct = () => {
    const dispatch = useAppDispatch();

    const [isPaneOpen, setIsPaneOpen] = useState(false);
    const [item, setItem] = useState({
        id: '',
        title: '',
        price: 0,
        image: '',
    });

    return (
        <div className='flex flex-col items-center'>
            <button onClick={() => setIsPaneOpen(!isPaneOpen)} className='mt-[40px] bg-blue rounded-[8px] text-white py-[12px] px-[24px]'>
                + Add product
            </button>
            <AddProductPane setIsPaneOpen={setIsPaneOpen} isPaneOpen={isPaneOpen}/>
        </div>
    );
};

export default AddProduct;