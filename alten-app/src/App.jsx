import { useState, useEffect } from 'react'
import ApiClient from './Services/ApiClient';
import router from "./routes"
import { RouterProvider } from "react-router-dom"
import Header from "./Components/Header"

function App() {

  return (
    <>
      <Header></Header>
      <RouterProvider router={router} />
    </>

  )
}

export default App
