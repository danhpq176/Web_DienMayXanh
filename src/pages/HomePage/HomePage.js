import React from 'react'
import { useFilterByNumber } from 'services/filter'
import { RepairHome } from 'pages/RepairHome/RepairHome'
import './HomePage.css'

export const HomePage = () => {
	const products = useFilterByNumber()
	return (
		<div className='home-page'>
			<RepairHome></RepairHome>
		</div>
	)
}
