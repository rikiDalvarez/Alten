import { useState, useEffect } from 'react'
import ApiClient from './Services/ApiClient';
import router from "./routes"
import { RouterProvider } from "react-router-dom"

function App() {

  return (
    <>

      <RouterProvider router={router} />
    </>

  )
}

export default App
