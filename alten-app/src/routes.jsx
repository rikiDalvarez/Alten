import Home from "./pages/Home"
import Product from "./pages/Product"
import ProductList from "./pages/ProductList";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element:
			<Home>
			</Home>,
		children: [
			{
				path: "products",
				element:
					<ProductList>
					</ProductList>
			},
			{
				path: "product/:id",
				element:
					<Product>
					</Product>
			}
		]
	},
])

export default router;