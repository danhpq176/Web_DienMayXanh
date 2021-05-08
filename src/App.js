import {
	Hotline,
	Logo,
	Navbar,
	SlideShow,
	CardHotline,
	CardServices,
	News,
	PaddingContent,
	Footer,
	ContainerRow,
	ContainerColumn,
	ContainerContent,
	ScrollButton,
	PhoneCall,
	SocialMedia,
	ZaloSticky,
} from 'Components'
import { Product, PostsPage, Contact, HomePage, ProductByType } from 'pages'
import { Switch, Route } from 'react-router-dom'
import { productsType } from 'constants/list-type'
import { listOldProduct } from 'constants/old-products'
import { listContentServices } from 'constants/content-services'
import { listServicesWithImg } from 'constants/list-services-img'
import { listContentRepairServices } from 'constants/content-RepairServices'
import { listContentoldProduct } from 'constants/content-oldproduct'
import { useGetProducts } from 'queries/useProducts'
import { useLocation } from 'react-router-dom'
const DefaultRoute = () => {
	const location = useLocation()
	if (
		location.pathname === '/posts' ||
		location.pathname === '/services' ||
		location.pathname === '/contact'
	) {
		return null
	}
	return (
		<>
			{/* <div className='mt-30'>
				<News list={purchaseList} title='DỊCH VỤ SỬA CHỮA ĐỒ CŨ' />
			</div> */}
			<div className='mt-30'>
				<News list={listOldProduct} title='TIN TỨC ĐỒ CŨ' />
			</div>
		</>
	)
}
function App() {
	const { data: products, status } = useGetProducts()
	return (
		<div className='App'>
			<ZaloSticky />
			<PhoneCall />
			<SocialMedia />
			<ScrollButton />
			<Hotline />
			<Logo />
			<Navbar />
			<PaddingContent>
				<SlideShow />
				<ContainerRow>
					<ContainerContent>
						<Switch>
							{listContentoldProduct.map((list, index) => {
								return (
									<Route key={index} exact path={`/posts/${list.href}`}>
										<PostsPage list={list} />
									</Route>
								)
							})}
							{listContentRepairServices.map((list, index) => {
								return (
									<Route key={index} exact path={`/services/${list.href}`}>
										<PostsPage list={list} />
									</Route>
								)
							})}
							{listContentServices.map((list, index) => (
								<Route key={index} exact path={`/services/${list.href}`}>
									<PostsPage list={list} />
								</Route>
							))}
							{productsType.map((type, index) => (
								<Route key={index} exact path={`/products/${type}`}>
									<ProductByType products={products || []} type={type} />
								</Route>
							))}
							<Route exact path='/services'>
								<News title='Dịch vụ' list={listServicesWithImg} />
							</Route>
							<Route exact path='/posts'>
								<News list={listOldProduct} title='TIN TỨC ĐỒ CŨ' />
							</Route>
							<Route exact path='/contact' component={Contact} />
							<Route exact path='/products'>
								{status ? <Product products={products} /> : null}
							</Route>
							<Route exact path='/' component={HomePage} />
						</Switch>
					</ContainerContent>
					<ContainerColumn>
						<CardHotline title='HỖ TRỢ TRỰC TUYẾN' />
						<CardServices />
					</ContainerColumn>
				</ContainerRow>
				<DefaultRoute />
			</PaddingContent>

			<Footer />
		</div>
	)
}

export default App
