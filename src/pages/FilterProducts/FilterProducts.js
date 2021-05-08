import React from 'react'
import { ProductList } from 'Components/Product-List/ProductList'
import { useFilterByType } from 'services/filter'

export const ProductByType = ({ products, type }) => {
	const filterByType = useFilterByType()
	console.log(filterByType(products, type))
	return (
		<div className='products'>
			<div className='title'>Sản phẩm</div>
			<ProductList list={filterByType(products, type)} />
		</div>
	)
}
