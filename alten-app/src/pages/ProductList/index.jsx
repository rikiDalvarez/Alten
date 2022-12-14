/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import ApiClient from '../../Services/ApiClient';
import { Link } from 'react-router-dom';
import Search from '../../Components/Search';

function ProductList() {
	const [products, setProducts] = useState([]);
	const [filter, setFilter] = useState('');

	useEffect(() => {
		ApiClient.getData().then((products) => {
			setProducts(products);
		});
	}, []);

	return (
		<>
			<Search value={filter} changeValue={setFilter}></Search>
			<div className="bg-white">
				<div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
					<h2 className="text-2xl font-bold tracking-tight text-gray-900">Products</h2>

					<div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
						{products
							?.filter((product) => {
								if (product.name.includes(filter) || product.brand.includes(filter)) return true;
							})
							.map((product) => (
								<Link
									key={product.id}
									state={product}
									to={`/product/${product.id}`}
									className="hover:bg-blue-300 active:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 rounded-md">
									<div key={product.id} className="group relative">
										<div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
											<img
												src="../../../public/iphone.webp"
												alt={product.imageAlt}
												className="h-full w-full object-cover object-center lg:h-full lg:w-full"
											/>
										</div>
										<div className="mt-4 flex justify-between">
											<div>
												<h3 className="text-sm text-gray-700">
													<span aria-hidden="true" className="absolute inset-0" />
													{product.name}
												</h3>
												<p className="mt-1 text-sm text-gray-500">{product.brand}</p>
											</div>
											<p className="text-sm font-medium text-gray-900">€{product.price}</p>
										</div>
									</div>
								</Link>
							))}
					</div>
				</div>
			</div>
		</>
	);
}

export default ProductList;
