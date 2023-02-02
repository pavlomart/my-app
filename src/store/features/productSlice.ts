import { curency } from './../../utils/curencyData';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { data } from '../../utils/data';
export interface IProduct {
    id: string,
    title: string,
    price: number,
    image?: string,
    currency?: string,
}

interface ProductState {
    products: IProduct[];
}

const initialState: ProductState = {
    products: data
};

export const ProductSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addProduct: (state, { payload }: PayloadAction<IProduct>) => {
            state.products.push({
                id: payload.id,
                title: payload.title,
                price: payload.price,
                image: payload.image,
                currency: payload.currency,
            },
            );
        },
        changeCurrency: (state, { payload }: PayloadAction<{currency:string, id: string}>) => {
            state.products = state.products.map(item => ({...item, currency: item.id === payload.id ? payload.currency : item.currency}))
        },
    }
});

export default ProductSlice.reducer;
export const { addProduct, changeCurrency } = ProductSlice.actions;