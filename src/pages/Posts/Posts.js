import React from 'react'
import './Posts.css'

export const PostsPage = ({ list }) => {
	const [listContent, setListContent] = React.useState(null)
	React.useEffect(() => {
		const temp = []
		for (let key in list) {
			temp.push(list[key])
		}
		console.log(temp)
		setListContent(temp)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	return (
		<div className='posts-page'>
			<div className='heading-primary'>Bài viết</div>
			<div className='list-posts'>
				{listContent
					? listContent.map((content, index) => {
							return typeof content.content !== 'object' ? (
								content.imgUrl ? (
									<img key={index} className={content.className} src={content.imgUrl} alt='dsad' />
								) : (
									<div key={index} className={content.className}>
										{content.content}
									</div>
								)
							) : (
								<ul>
									{content.content.map((item, index) => (
										<li key={index}>{item}</li>
									))}
								</ul>
							)
					  })
					: null}
				<div className='footer'>
					<h2>
						<b>Sửa chữa điện máy xanh</b>
					</h2>
					<span>
						<b>Trụ sở chính: </b>179B Lý Thường Kiệt, phường 8, Quận Tân Bình
					</span>
					<span>
						<b>Tỉnh/TP:</b>Thành phố Hồ Chí Minh
					</span>
					<span>
						<b>Quốc gia:</b>Việt Nam
					</span>
					<span>
						<b>Hotline:</b> 0888262052
					</span>
					<span>
						<b>Điện thoại:</b> 0899302728
					</span>
					<span>
						<b>E-mail:</b> suachua-dienmayxanh@gmail.com
					</span>
					<span>
						<b>Website: </b> suachua-dienmayxanh.vn
					</span>
				</div>
			</div>
		</div>
	)
}
