import { useState, useEffect } from 'react'
import ApiClient from './Services/ApiClient';
import router from "./routes"
import { RouterProvider } from "react-router-dom"

function App() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    ApiClient.getData()
      .then(products => {
        setProducts(products.data)
      })
  }, [])

  return (
    <RouterProvider router={router} />
  )
}

export default App
