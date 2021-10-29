import { useEffect, useState } from "react"
import { getStoredCart } from "../utilities/fakedb";


const useCard = () => {

  const [card, setCard] = useState([]);

  useEffect(() => {
    const savedCard = getStoredCart();
    const productkeys = Object.keys(savedCard)

    fetch('http://localhost:5200/products/byKeys', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(productkeys)
    })
      .then(res => res.json())
      .then(products => {

        if (products.length) {
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
        }

      })




  }, []);

  return [card, setCard];

}


export default useCard;