import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from "../../Components/Header"
import ApiClient from "../../Services/ApiClient"

function Home() {

	return (
		<>
			<Header></Header>
			<Outlet></Outlet>
		</>
	)
}

export default Home