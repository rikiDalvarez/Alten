import { Link, useLocation, useParams } from 'react-router-dom'
import "./style.css"

function BreadCrumbs() {
	const location = useLocation();
	const { id } = useParams();
	console.log(location)

	return (
		<nav>
			<Link to="/"
				className={location.pathname === "/" ? "breadcrumb-active" : "breadcrumb-not-active"}
			>
				Home
			</Link>

			{
				location.pathname.startsWith("/products") || location.pathname.startsWith("/product/") ?
					<>
						<span className="text-yellow-400"> {">"}</span>
						<Link to="/products"
							className={location.pathname.startsWith("/products") || location.pathname === "/products/:id" ? "breadcrumb-active" : "breadcrumb-not-active"}>
							Products
						</Link>
					</>
					: ""
			}
			{
				location.pathname.startsWith("/product/") ?
					<>
						<span className="text-yellow-400"> {">"}</span>
						<Link to={location.pathname}
							className={location.pathname.startsWith("/product/") ? "breadcrumb-active" : "breadcrumb-not-active"}>
							Product {id}
						</Link>
					</>
					:
					""
			}
		</nav>
	);
}

export default BreadCrumbs;