import React from 'react';

const OrderedItem = (props) => {

  const { name, seller, price, quantity, key } = props.item;

  const productStyle = {
    borderBottom: '1px solid rgb(223, 214, 214)',
    marginRight: '5px'
  };

  return (
    <div style={productStyle}>

      <h4 className="product-name">{name}</h4>
      <p>${price}</p>
      <p><small>sold by:</small>{seller}</p>
      <p>Quantity: {quantity}</p>

      <button onClick={() => { props.handleRemove(key) }} className="btn-regular">Remove</button>
    </div>
  );
};

export default OrderedItem;