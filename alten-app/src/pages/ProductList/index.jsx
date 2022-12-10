import React, { useEffect, useState } from 'react'
import ApiClient from "../../Services/ApiClient"

function ProductList() {
	const [products, setProducts] = useState([])
	useEffect(() => {
		ApiClient.getData()
			.then(products => {
				setProducts(products.data)
			})
	}, [])

	return (
		<div className="bg-amber-200 flex container mx-auto flex-wrap flex-row gap-10 ">
			{console.log(products)}
			{products.map(product => (
				<div key={product._id} >
					{product._id}

				</div>
			))}
		</div>
	)
}

export default ProductList