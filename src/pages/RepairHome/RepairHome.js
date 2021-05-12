import React from 'react'
import './RepairHome.css'
import { listRepair } from 'constants/repair'

export const RepairHome = () => {
	return (
		<div className='repair-page'>
			<div className='title'>Trung tâm sửa chữa</div>
			<div className='box-repair'>
				{listRepair.map((item) => (
					<div className='item-repair'>
						<div className='head-repair'>{item.title}</div>
						<div className='img-repair'>
							<img src={item.imgUrl} alt='Hinh TiVi' />
						</div>
						<div className='content-repair'>
							<div className='title-repair'>* Các sự cố thường gặp</div>
							<ul>
								{item.content.map((item, index) => (
									<li key={index}>{item}</li>
								))}
							</ul>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
