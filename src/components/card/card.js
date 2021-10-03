import React from 'react';
import './card.css'

const Card = (props) => {

    const { card } = props;

    let totalQuantity = 0;
    let totalPrice = 0;
    let shipping = 0;
    let tax = 0;
    let grandTotal = 0;
    for (const product of card) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        totalQuantity = totalQuantity + product.quantity;
        console.log(product.quantity)
        totalPrice = totalPrice + (product.price * product.quantity);
        shipping = shipping + (product.quantity * 15);

    }
    tax = tax + ((totalPrice + shipping) / 10);
    grandTotal = grandTotal + totalPrice + shipping + tax;

    return (
        <div className="card">
            <div className="card-title">
                <h3>Order Summary</h3>
                <p>Items Ordered: {totalQuantity}</p>
            </div>

            <div className="card-detail">

                <p className="flex">
                    <span>Items Price:</span>
                    <span>$ {totalPrice.toFixed(2)}</span>
                </p>
                <p className="flex">
                    <span>Shipping:</span>
                    <span>$ {shipping.toFixed(2)}</span>
                </p>
                <p className="flex">
                    <span>Tax:</span>
                    <span>$ {tax.toFixed(2)}</span>
                </p>

                <p className="flex">
                    <span className="color">Order Total:</span>
                    <span>$ {grandTotal.toFixed(2)}</span>

                </p>
            </div>
            <button className="regular-btn">View your order</button>

        </div>
    );
};

export default Card;