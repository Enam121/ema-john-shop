import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCard from '../../hooks/useCard';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Card from '../card/card';
import Product from '../Product/product';
import './shop.css'


const Shop = () => {

    const [products, setProducts] = useState([]);

    const [card, setCard] = useCard();

    //product to be rendered on the UI
    const [displayData, setDisplayData] = useState([])

    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const size = 10;

    useEffect(() => {
        fetch(`http://localhost:5200/products?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);
                setDisplayData(data.products);
                const count = data.count;
                const pageNumber = Math.ceil(count / size)
                setPageCount(pageNumber)
            })

    }, [page]);


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

                    <div className="pagination">
                        {
                            [...Array(pageCount).keys()]
                                .map(number => <button
                                    key={number}
                                    onClick={() => setPage(number)}
                                    className={number === page ? "selected" : ''}
                                >
                                    {number + 1}</button>)
                        }
                    </div>

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