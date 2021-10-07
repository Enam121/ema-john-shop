import { useEffect, useState } from "react"
import { getStoredCart } from "../utilities/fakedb";


const useCard = (products) => {

  const [card, setCard] = useState([]);

  useEffect(() => {

    if (products.length) {
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
    }

  }, [products]);

  return [card, setCard];

}


export default useCard;