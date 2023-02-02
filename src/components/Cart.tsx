import React, { FC, useEffect } from 'react'
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { countTotalPrice } from '../store/features/favoriteSlice';
import { useAppDispatch, useAppSelector } from '../store/store';
import FavProductItem from './FavProductItem';
import ProductItem from './ProductItem';

interface Props {
    isPaneOpen: boolean,
    setIsPaneOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

const Cart:FC<Props> = ({isPaneOpen, setIsPaneOpen}) => {
    const favProducts = useAppSelector(state => state.favProduct.favoriteProducts)
    const totalPrice = useAppSelector(state => state.favProduct.totalPrice);
    const dispatch = useAppDispatch();

    useEffect(() => { 
      dispatch(countTotalPrice())
    },[favProducts])
  return (
    <div className=''>
        <SlidingPane
        className="relative max-w-[400px]"
        overlayClassName="absolute right-[0px]"
        isOpen={isPaneOpen}
        title="Yor cart"
        subtitle="Here you can see products which you added"
        onRequestClose={() => {
          setIsPaneOpen( false );
        }}
      >
        {favProducts.map((item,index)=> <div key={index} className='mb-[40px]'><FavProductItem item={item}/></div>)}
        <div className='py-[12px] px-[24px] rounded-[8px] bg-blue text-white'>
          Total price: {totalPrice}$
        </div>
      </SlidingPane>
    </div>
  )
}

export default Cart