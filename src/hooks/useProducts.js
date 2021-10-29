import { useState } from "react";
import { useEffect } from "react";


function useProducts() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5200/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data.products)

      })

  }, []);


  return [products, setProducts]

}


export default useProducts;