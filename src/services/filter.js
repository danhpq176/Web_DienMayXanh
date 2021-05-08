import React from 'react'
import { useGetProducts } from 'queries/useProducts'

export const useFilterProducts = () => {
	const { data: products } = useGetProducts()
	return (type = '') => {
		if (type) {
			return products ? products.filter((product) => product.type === type) : []
		}
		return products
	}
}
export const useFilterByNumber = () => {
	const { data: products } = useGetProducts()
	const [productsFilter, setProductsFilter] = React.useState([])
	React.useEffect(() => {
		if (products) {
			const temp = []
			for (let i = 0; i < products.length; i += 1) {
				if (temp.length === 0) {
					temp.push(products[i])
				} else {
					for (let j = 0; j < temp.length; j++) {
						if (products[i].type === temp[j].type) {
							console.log(products[i].type === temp[j].type)
						} else {
							if (j === temp.length - 1) {
								temp.push(products[i])
							}
						}
					}
				}
			}

			setProductsFilter(temp)
		}
	}, [products])
	return productsFilter
}
export function removeAccents(str) {
	return str
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.replace(/đ/g, 'd')
		.replace(/Đ/g, 'D')
}
export const useFilterByType = () => {
	return (products, route) => {
		return products.filter((product) => {
			const reAccent = removeAccents(product.type).toLowerCase().replaceAll(' ', '-')
			return reAccent === route
		})
	}
}
