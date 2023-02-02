import { curency } from './../../utils/curencyData';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface IProduct {
    id: any,
    title: string,
    price: number,
    image?: string,
    currency?: string,
}

interface ProductState {
    favoriteProducts: IProduct[];
    totalPrice: number,
}

const initialState: ProductState = {
    favoriteProducts: [],
    totalPrice: 0,
}

export const FavProductSlice = createSlice({
    name: "favoriteProduct",
    initialState,
    reducers: {
        addProductFav:(state, {payload}:PayloadAction<IProduct>) => {
            state.favoriteProducts.forEach(item => {
                if (payload.title === item.title) {

                }
            })
            state.favoriteProducts.push({
                id: payload.id,
                image: payload.image,
                title: payload.title,
                price: payload.price,
                currency: payload.currency,
            })
        },
        deleteProductFav:(state, {payload}:PayloadAction<IProduct>) => {
            state.favoriteProducts = state.favoriteProducts.filter(item => item.id !== payload.id)
        },
        countTotalPrice:(state) => {
            state.totalPrice = state.favoriteProducts.reduce((acc, prev) => acc + prev.price, 0)
        },
    }
});

export default FavProductSlice.reducer;
export const {addProductFav, deleteProductFav, countTotalPrice} = FavProductSlice.actions;