import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { request } from 'https';
import React, { FC, useEffect, useState } from 'react';
import { json } from 'stream/consumers';
import { addProductFav } from '../store/features/favoriteSlice';
import { addProduct, changeCurrency, IProduct } from '../store/features/productSlice';
import { useAppDispatch } from '../store/store';

interface Props {
    item: IProduct;
}

const ProductItem: FC<Props> = ({ item }) => {
    const dispatch = useAppDispatch();
    const [currency, setCurrency] = React.useState('UAH');
    const [currencyData, setCurrencyData] = useState<any>([])

    const handleChange = (event: SelectChangeEvent) => {
        setCurrency(event.target.value as string);
    };
    const currencyChecker = (price:number) => {
        const itemPrice = currencyData.find((i:any) => i.cc === item.currency);
        const result = itemPrice ? price / itemPrice.rate : price;
        return <h3>{item.currency === "USD" ? "$" : item.currency === "EUR" ? "€" : "₴"} {result?.toFixed(0)}</h3>
    }


    useEffect(() => {
        dispatch(changeCurrency({currency, id:item.id}))
    }, [currency])

    useEffect(() => {
        const getCurrencyData = async() => {
            const res = await fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
            const data = await res.json()
            setCurrencyData(data)
        };
        getCurrencyData()
    }, [])
    
    
    return (
        <div className=''>
            <img className='h-[250px] w-[350px] object-fill' src={item.image} alt={item.title} />
            <div className='flex justify-between px-[8px] mt-2'>
                <h3 className='font-[600] text-[18px]'>{item.title}</h3>
                {currencyChecker(item.price)}
            </div>
            <div className='mt-4 grid grid-cols-2 gap-[16px] flex'>
                <button onClick={() => dispatch(addProductFav({...item, currency:currency}))} className='bg-gray py-[12px] text-blue font-bold text-[18px] rounded-[8px] px-[24px]'>
                    Add
                </button>

                <FormControl sx={{zIndex: 0}} fullWidth>
                    <InputLabel id="demo-simple-select-label">Currency</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={currency}
                        label="Currency"
                        onChange={handleChange}
                    >
                        <MenuItem value="USD">USD</MenuItem>
                        <MenuItem value="UAH">UAH</MenuItem>
                        <MenuItem value="EUR">EUR</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>
    );
};

export default ProductItem;