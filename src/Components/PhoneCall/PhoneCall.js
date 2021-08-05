import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import './PhoneCall.css'

export const PhoneCall = () => {
	return (
		<div className='phone-call'>
			<div onClick={() => window.open('tel:0888262052', '_self')} className='call-animation'>
				<FontAwesomeIcon icon={faPhone} />
			</div>
			<span className='phone'>0888262052 - 0899302728</span>
		</div>
	)
}
