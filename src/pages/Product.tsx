import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import MainLayout from '@/layouts/MainLayout';
import Header from '@/components/product-page/header/Header';
import CarouselCard from '@/components/product-page/carousel-card/CarouselCard';

import { useProductsService, type IProduct } from '@/services/productsService';

const Product = () => {
	const { id } = useParams();
	const { loading, getProductById } = useProductsService();

	const [product, setProduct] = useState<IProduct | null>(null);

	useEffect(() => {
		if (!id) return;

		const fetchProduct = async () => {
			const res = await getProductById(id);
			if (res) setProduct(res.data[0]);
		};

		fetchProduct();
	}, [id]);

	if (loading || !product) return <div>loading product...</div>;

	return (
		<MainLayout>
			<Header category={product?.category.name} brand={product?.brand.name} />
			<CarouselCard product={product} />
		</MainLayout>
	);
};

export default Product;
