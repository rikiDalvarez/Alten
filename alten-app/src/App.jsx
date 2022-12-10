import { useState, useEffect } from 'react'
import ApiClient from './Services/ApiClient';



function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    ApiClient.getData()
      .then(products => {
        setProducts(products.data)
      })
  }, [])

  return (
    <div className="bg-amber-200">
      {console.log(products)}
      {products.map(product => (
        <div>
          {product._id}
        </div>
      ))}
    </div>
  )
}

export default App
