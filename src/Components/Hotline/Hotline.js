import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons'
import './Hotline.css'

export const Hotline = () => {
	return (
		<div className='hotline'>
			<span>Chăm Sóc Điện Máy Chính Hãng 100%</span>
			<span className='phone-number'>
				<FontAwesomeIcon icon={faPhoneSquareAlt} /> Hotline: 0888262052 - 0888262052{' '}
			</span>
		</div>
	)
}
