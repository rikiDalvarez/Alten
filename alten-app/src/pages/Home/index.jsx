import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from "../../Components/Header"
import Search from "../../Components/Search"

function Home() {

	return (
		<>
			<Header></Header>
			<Search></Search>
			<Outlet></Outlet>
		</>
	)
}

export default Home