import './product.css'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Rating from 'react-rating';

const Product = (props) => {
    const { name, img, price, stock, seller, star } = props.product;

    return (
        <div className="product">
            <img src={img} alt="" />
            <div>
                <h4 className="product-name">{name}</h4>
                <p><small>by: {seller}</small></p>
                <p>$ {price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <Rating
                    emptySymbol="fa fa-star-o star-color"
                    fullSymbol="fa fa-star star-color"

                    initialRating={star}
                    readonly
                />
                <br /> <br />
                <button onClick={() => props.handleCard(props.product)} className="regular-btn">{<FontAwesomeIcon icon={faShoppingCart} />} add to card</button>

            </div>
        </div>
    );
};

export default Product;