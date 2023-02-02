import React, { FC } from 'react';
import { addProductFav, deleteProductFav } from '../store/features/favoriteSlice';
import { IProduct } from '../store/features/productSlice';
import { useAppDispatch } from '../store/store';

interface Props {
    item: IProduct;
}

const FavProductItem: FC<Props> = ({ item }) => {
    const dispatch = useAppDispatch();
    return (
        <div className=''>
            <img className='h-[250px] w-[350px] object-fill' src={item.image} alt={item.title} />
            <div className='flex justify-between px-[8px] mt-2'>
                <h3 className='font-[600] text-[18px]'>{item.title}</h3>
                <h3 className='text-gray text-[18px]'>{`$${item.price}`}</h3>
            </div>
            <div className='mt-4'>
                <button onClick={() => dispatch(deleteProductFav(item))} className='bg-gray py-[12px] text-blue font-bold text-[18px] rounded-[8px] px-[24px]'>
                    Delete
                </button>
            </div>
        </div>
    );
};

export default FavProductItem;