import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCard from '../../hooks/useCard';
import useProducts from '../../hooks/useProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Card from '../card/card';
import Product from '../Product/product';
import './shop.css'


const Shop = () => {

    const [products] = useProducts();

    const [card, setCard] = useCard(products);

    //product to be rendered on the UI
    const [displayData, setDisplayData] = useState([])

    useEffect(() => {

        setDisplayData(products)

    }, [products]);


    const handleCard = (product) => {

        const exists = card.find(pd => pd.key === product.key);
        let newCard = [];
        if (exists) {
            const remaining = card.filter(pd => pd.key !== product.key);
            exists.quantity = exists.quantity + 1;
            newCard = [...remaining, exists]
        }
        else {
            product.quantity = 1;
            newCard = [...card, product];
        }
        setCard(newCard)

        //set data in local storage
        addToDb(product.key)
    }

    const handleSearch = (event) => {
        const searchText = event.target.value;
        const machedProduct = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))

        setDisplayData(machedProduct)
    }

    return (
        <>
            <div className="search-container">
                <input type="search" placeholder="type here to search" onChange={handleSearch} />
            </div>
            <div className="shop">
                <div></div>
                <div className="product-container">
                    {
                        displayData.map(product => <Product key={product.key} product={product} handleCard={handleCard}></Product>)
                    }
                </div>
                <div className="card-container">
                    <Card card={card}>
                        <Link to="view-order">  <button className="btn-regular">View your order</button></Link>
                    </Card>
                </div>
            </div>
        </>
    );
};

export default Shop;