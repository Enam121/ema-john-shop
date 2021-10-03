import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Card from '../card/card';
import Product from '../Product/product';
import './shop.css'

const Shop = () => {

    const [products, setProducts] = useState([]);

    const [card, setCard] = useState([]);
    //product to be rendered on the UI
    const [displayData, setDisplayData] = useState([])


    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setDisplayData(data)
            })

    }, []);


    useEffect(() => {
        const savedCard = getStoredCart();
        const storedCard = [];

        for (const keys in savedCard) {
            if (products.length) {
                const addedProduct = products.find(product => product.key === keys)
                if (addedProduct) {
                    addedProduct.quantity = savedCard[keys];
                    storedCard.push(addedProduct)

                }
            }

        }
        setCard(storedCard)

    }, [products]);


    const handleCard = (product) => {

        const newCard = [...card, product];

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
                    <Card card={card}></Card>
                </div>
            </div>
        </>
    );
};

export default Shop;