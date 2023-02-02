import React, { useState } from 'react';
import Cart from './components/Cart';
import Header from './components/Header';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';


const App = () => {
  const [isPaneOpen, setIsPaneOpen] = useState(false);
  return (
    <div>
      <Header setIsPaneOpen={setIsPaneOpen} />
      <div className='mt-6'>
        <ProductList />
      </div>
      <AddProduct/>
      <Cart isPaneOpen={isPaneOpen} setIsPaneOpen={setIsPaneOpen} />
    </div>
  );
};

export default App;