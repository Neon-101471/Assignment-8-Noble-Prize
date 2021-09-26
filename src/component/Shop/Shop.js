import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Writers from '../Writers/Writers';
import './Shop.css'

const Shop = () => {
    // use state for store all writers
    const [writers, setWriters] = useState([]);
    //  use state for store all added to list writer
    const [cart, setCart] = useState([]);
    // call json api
    useEffect(() => {
        fetch('./writers.JSON')
            .then(res => res.json())
            .then(data => setWriters(data))
    }, [])
    // ADD event function declare 
    const handleToCart = writer => {
        const newCart = [...cart, writer];
        setCart(newCart);
    }
    return (
        <main className='container my-5 row shop'>
            <div className="row">
                {/* display all writers */}
                <div className='col-md-8 col-lg-10'>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {//using map loop to display all writer
                            writers.map(writer => <Writers
                                key={writer.id}
                                writer={writer}
                                handleToCart={handleToCart}
                            ></Writers>)
                        }
                    </div>
                </div>
                {/* cart */}
                <div className="col-md-4 col-lg-2">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </main>
    );
};

export default Shop;