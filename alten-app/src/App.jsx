import { useState, useEffect } from 'react'
import ApiClient from './Services/ApiClient';

import './App.css'

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    ApiClient.getData()
      .then(products => {
        setProducts(products.data)
      })
  }, [])

  return (
    <>
      {console.log(products)}
      {products.map(product => (
        <div>
          {product._id}
        </div>
      ))}
    </>
  )
}

export default App
