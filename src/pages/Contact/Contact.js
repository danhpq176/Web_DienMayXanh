import React from 'react'
import { SimpleMap } from 'Components'
import { useContact } from 'queries/useContact'
import './contact.css'

export const Contact = () => {
	const [info, setInfo] = React.useState({
		name: '',
		email: '',
		phone: '',
		title: '',
		message: '',
	})
	const { mutate: postContact } = useContact(setInfo)

	const onValidateField = () => {
		const error = []
		if (!info.name) {
			error.push('name')
		}
		if (!info.email) {
			error.push('email')
		}
		if (!info.phone) {
			error.push('phone')
		}
		if (!info.title) {
			error.push('title')
		}
		if (!info.message) {
			error.push('message')
		}
		if (error.length === 0) {
			postContact(info)
		} else {
			for (let i = 0; i < error.length; i++) {
				document.querySelector(`#${error[i]}`).style.border = '1px solid red'
			}
		}
	}
	React.useEffect(() => {
		if (info.name) {
			document.querySelector(`#name`).style.border = '1px solid #ccc'
		}
		if (info.email) {
			document.querySelector(`#email`).style.border = '1px solid #ccc'
		}
		if (info.phone) {
			document.querySelector(`#phone`).style.border = '1px solid #ccc'
		}
		if (info.title) {
			document.querySelector(`#title`).style.border = '1px solid #ccc'
		}
		if (info.message) {
			document.querySelector(`#message`).style.border = '1px solid #ccc'
		}
	}, [info.name, info.email, info.message, info.phone, info.title])
	return (
		<div className='container-contact'>
			<h1 className='heading-primary'>Liên hệ</h1>
			<div className='main-contact'>
				<div className='left-info'>
					<h3>Điện máy Xanh</h3>
					<div className='sub-content'>
						<div className='label'>Trụ sở chính:</div>
						<div>179B Lý Thường Kiệt, phường 8, Quận Tân Bình TP.HCM</div>
					</div>
					<div className='sub-content'>
						<div className='label'>Chi nhánh:</div>
						<div>Cao ốc A, Ngô Gia Tự, Phường 3, Quận 10, TP HCM</div>
					</div>
					<div className='sub-content'>
						<div className='label'>Tỉnh/TP:</div>
						<div>TP HCM</div>
					</div>
					<div className='sub-content'>
						<div className='label'>Điên thoại:</div>
						<a href='www.suachua-dienmayxanh.com'>0888262052</a>
					</div>
					<div className='sub-content'>
						<div className='label'>Hotline:</div>
						<a href='www.suachua-dienmayxanh.com'>0888262052</a>
					</div>
					<div className='sub-content'>
						<div className='label'>E-mail:</div>
						<div>trungtambaohanh-dienmayxanh.com@gmail.com</div>
					</div>
					<div className='sub-content'>
						<div className='label'>Website:</div>
						<a href='https://www.trungtambaohanh-dienmayxanh.com/'>
							www.trungtambaohanh-dienmayxanh.com
						</a>
					</div>
				</div>
				<div className='right-info'>
					<div className='sub-input'>
						<div className='label-input'>Tên *</div>
						<input
							value={info.name}
							onChange={(e) =>
								setInfo({
									...info,
									name: e.target.value,
								})
							}
							type='text'
							id='name'
							className='form-control'
						></input>
					</div>
					<div className='sub-input'>
						<div className='label-input'>E-mail *</div>
						<input
							value={info.email}
							onChange={(e) =>
								setInfo({
									...info,
									email: e.target.value,
								})
							}
							type='email'
							id='email'
							className='form-control'
						></input>
					</div>
					<div className='sub-input'>
						<div className='label-input'>Điện thoại *</div>
						<input
							value={info.phone}
							onChange={(e) =>
								setInfo({
									...info,
									phone: e.target.value,
								})
							}
							type='tel'
							id='phone'
							className='form-control'
						></input>
					</div>
					<div className='sub-input'>
						<div className='label-input'>Chủ đề *</div>
						<input
							value={info.title}
							onChange={(e) =>
								setInfo({
									...info,
									title: e.target.value,
								})
							}
							type='text'
							id='title'
							className='form-control'
						></input>
					</div>
					<div className='sub-input'>
						<div className='label-input'>Tin nhắn *</div>
						<textarea
							value={info.message}
							onChange={(e) =>
								setInfo({
									...info,
									message: e.target.value,
								})
							}
							name=''
							id='message'
							cols='30'
							rows='10'
							className='form-control'
							style={{
								height: '80px',
							}}
						></textarea>
					</div>
					<button onClick={onValidateField} type='button' className='btn btn-sent'>
						Gửi yêu cầu
					</button>
				</div>
			</div>
			<div className='container-map'>
				<SimpleMap />
			</div>
		</div>
	)
}
