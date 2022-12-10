import Home from "./pages/Home"
import Product from "./pages/Product"

import { createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
	{
		path: "/",
		element:
			<Home>
			</Home>
	},
	{
		path: "/product/:id",
		element:
			<Product>
			</Product>
	}
])

export default router;