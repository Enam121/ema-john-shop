import React from 'react';
import { useHistory } from 'react-router';
import useCard from '../../hooks/useCard';
import { deleteFromDb, getStoredCart } from '../../utilities/fakedb';
import Card from '../card/card';
import OrderedItem from '../DisplayOrderdItem/OrderedItem';


const ViewOrder = () => {

  const [card, setCard] = useCard();

  const history = useHistory();

  const handleRemove = (id) => {
    deleteFromDb(id);
    const newCard = card.filter(item => item.key !== id)
    setCard(newCard)

    // const storedItem = getStoredCart()
    // const cardItem = [];
    // for (const key in storedItem) {
    //   if (products.length) {

    //     const savedItem = products.find(product => product.key === key);
    //     cardItem.push(savedItem)
    //   }
    // }
    // setCard(cardItem)

  }

  const handleOrder = () => {
    setCard([])
    history.push("/shipping")

  }


  return (
    <div className="shop">
      <div></div>
      <div className="product-container">
        <h2 style={{ textAlign: 'center' }}>Your orders here</h2>
        {
          card.map(item => <OrderedItem item={item} key={item.key} handleRemove={handleRemove} />)
        }

      </div>
      <div className="card-container">
        <Card card={card}>
          <button onClick={handleOrder} className="btn-regular">Place  Order</button>
        </Card>
      </div>

    </div>

  );
};

export default ViewOrder;