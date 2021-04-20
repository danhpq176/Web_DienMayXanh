import React from 'react'
import { listProduct } from 'constants/products'
import { CardList } from '../Card-List/CardList'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import './SlideShow.css'

export const SlideShow = () => {
	return (
		<div className='slideshow-container'>
			<CardList title='Danh mục sản phẩm' list={listProduct} />
			<Slide>
				<div className='each-slide'>
					<div className='image img-1'></div>
				</div>
				<div className='each-slide'>
					<div className='image img-2'></div>
				</div>
				<div className='each-slide'>
					<div className='image img-3'></div>
				</div>
			</Slide>
		</div>
	)
}
