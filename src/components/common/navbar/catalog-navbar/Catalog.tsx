import './catalog.style.css'

import { useEffect, useState } from 'react'
import { NavLink } from 'react-router'

import { useProductsService, type ICategory, type IBrand } from '@/services/productsService'
import Spinner from '@/components/common/spinner/Spinner'

interface CatalogProps {
	show: boolean
	toggleCatalog: (path: string) => (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
}

const Catalog = ({ show, toggleCatalog }: CatalogProps) => {
	const { loading, getAllCategories, getAllBrands } = useProductsService()
	const [categories, setCategories] = useState<ICategory[]>([])
	const [brands, setBrands] = useState<IBrand[]>([])

	useEffect(() => {
		const fetchCategories = async () => {
			const categoriesResponse = await getAllCategories()
			if (categoriesResponse) {
				setCategories(categoriesResponse.data)
			}
		}
		const fetchBrands = async () => {
			const brandsResponse = await getAllBrands()
			if (brandsResponse) {
				setBrands(brandsResponse.data)
			}
		}

		fetchCategories()
		fetchBrands()
	}, [])

	return (
		<div className={`catalog-container ${show ? 'catalog-enter' : 'catalog-leave'}`}>
			{loading ? (
				<Spinner />
			) : (
				<>
					<section className='catalog-section'>
						<h3>CATEGORIES</h3>
						<ul>
							{categories?.map((category) => (
								<li key={category.id}>
									<NavLink
										to={`/catalog/category/${category.id}/products`}
										onClick={toggleCatalog(`/catalog/category/${category.id}/products`)}
									>
										{category.name}
									</NavLink>
								</li>
							))}
						</ul>
					</section>
					<section className='catalog-section'>
						<h3>BRANDS</h3>
						<ul>
							{brands?.map((brand) => (
								<li key={brand.id}>
									<NavLink
										to={`/catalog/brand/${brand.id}/products`}
										onClick={toggleCatalog(`/catalog/brand/${brand.id}/products`)}
									>
										{brand.name}
									</NavLink>
								</li>
							))}
						</ul>
					</section>
				</>
			)}
		</div>
	)
}
export default Catalog
