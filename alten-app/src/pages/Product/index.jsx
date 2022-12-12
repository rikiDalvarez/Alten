import React, { useEffect, useState } from 'react'
import { useLocation, useParams, } from "react-router-dom"
import products from "../../Mocks/index"
import { useForm } from "react-hook-form"

export default function Product() {
	const { id } = useParams()
	const [product, setProduct] = useState();

	const { register, handleSubmit } = useForm();

	const onSubmit = (data) => {
		console.log(data)
	}

	useEffect(() => {
		const filteredProduct = products.find((element) => element.id == id)
		setProduct(filteredProduct)
	}, [])


	return (
		<div className="bg-white">
			<div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8  px-4 sm:px-6 sm:py-4 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
				<div>
					<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Technical Specifications</h2>
					<dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
						<div className="border-t border-gray-200 pt-4">
							<dt className="font-medium text-gray-900">Brand: {product?.brand}</dt>
							<dd className="mt-2 text-sm text-gray-500">Name: {product?.name}</dd>
							<dd className="mt-2 text-sm text-gray-500">Price: €{product?.price}</dd>
							<dd className="mt-2 text-sm text-gray-500">CPU: {product?.cpu}</dd>
							<dd className="mt-2 text-sm text-gray-500">Memory: {product?.memory}</dd>
							<dd className="mt-2 text-sm text-gray-500">Operating System: {product?.operative_system}</dd>
							<dd className="mt-2 text-sm text-gray-500">Resolution:{product?.resolution}</dd>
							<dd className="mt-2 text-sm text-gray-500">Battery: {product?.battery}</dd>
							<dd className="mt-2 text-sm text-gray-500">Camera: {product?.camera}</dd>
							<dd className="mt-2 text-sm text-gray-500">Dimension: {product?.dimension}</dd>
							<dd className="mt-2 text-sm text-gray-500">Weight: {product?.weight}</dd>
						</div>
					</dl>
					<form onSubmit={handleSubmit(onSubmit)} className="actions m-6 flex">
						<div classNmae="m-4 p-4">
							<label>Color:</label>
							<select className="">
								<option value="black">Black</option>
								<option value="silver">Silver</option>
								<option value="white">White</option>
							</select>
						</div>
						<div className="ml-6">
							<label>Size:</label>
							<select>
								<option value="medium">Medium</option>
								<option value="small">Small</option>
							</select>
						</div>
						<input className="ml-6 border-4 border-gray-500 " type="submit" value="add"></input>
					</form>
				</div>
				<div className="">
					<img
						src="../../../public/iphone.webp"
						alt="a gray mobile phone "
						className="rounded-lg bg-gray-100"
					/>
				</div>
			</div>
		</div>
	)
}
