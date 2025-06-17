import { useParams } from 'react-router'
import { useContext, useEffect, useState } from 'react'

import PageHeader from '@/components/catalog-page/header/PageHeader'
import SortingControl from '@/components/catalog-page/sorting-control/SortingControl'
import ProductsContainer from '@/components/catalog-page/products/ProductsContainer'
import Spinner from '@/components/common/spinner/Spinner'
import MainLayout from '@/layouts/MainLayout'

import { useProductsService, type IProduct } from '@/services/productsService'
import { SortContext } from '@/stores/contexts/SortContext'

const Catalog = () => {
	const { unit, id } = useParams()
	const { loading, getAllProductsFromCategory, getAllProductsFromBrand } = useProductsService()
	const [products, setProducts] = useState<null | IProduct[]>(null)
	const [sortedProducts, setSortedProducts] = useState<null | IProduct[]>(null)
	const { sortConfig } = useContext(SortContext)

	useEffect(() => {
		const fetchProducts = async (id: string) => {
			if (unit === 'category') {
				const res = await getAllProductsFromCategory(id)
				if (res) setProducts(res.data)
			} else {
				const res = await getAllProductsFromBrand(id)
				if (res) setProducts(res.data)
			}
		}

		if (id) fetchProducts(id)
	}, [unit, id])

	useEffect(() => {
		const sortProducts = () => {
			if (!products) return

			const sorted = [...products].sort((a, b) => {
				if (sortConfig === 'best_seller') {
					if (a.best_seller && !b.best_seller) return -1
					if (!a.best_seller && b.best_seller) return 1
					return 0
				} else if (sortConfig === 'regular_price') {
					return b.regular_price - a.regular_price
				} else if (sortConfig === 'sale_price') {
					return a.sale_price - b.sale_price
				}
				return 0
			})

			setSortedProducts(sorted)
		}

		sortProducts()
	}, [sortConfig, products])

	return (
		<MainLayout>
			<PageHeader unit={unit} />
			{loading ? (
				<Spinner />
			) : (
				<>
					<SortingControl unit={unit} /> <ProductsContainer data={sortedProducts} />
				</>
			)}
		</MainLayout>
	)
}

export default Catalog
