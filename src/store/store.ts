import { FavProductSlice } from './features/favoriteSlice';
import { ProductSlice } from './features/productSlice';
import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';


export const store = configureStore({
    reducer: {
        product: ProductSlice.reducer,
        favProduct: FavProductSlice.reducer
    }
})

export const useAppDispatch:()=>typeof store.dispatch = useDispatch;
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector