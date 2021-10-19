import React from 'react';
import styled from 'styled-components';
import HeaderComp from "./components/HeaderComp";
import TitleComp from "./components/TitleComp";
import ProductCard from "./components/ProductCard";

const App = () => {
	return (
		<Wrapper className="app">
			<main className="main" id="home">
              <HeaderComp />
			  	<div className="banner">   
				  	<div className="banner-inner container">
				  		<div className="wrapper">
						  	<div className="wrapper-inner">
								<h1>Equipment that <br /> are built to last</h1>
									<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, ipsam reiciendis, 
									laborum, doloremque nobis ex suscipit perferendis nemo architecto at laudantium 
									incidunt dolor minima non culpa possimus. Quia, sequi incidunt?
									</p>
							</div>
						</div>
					</div>  	
			  </div>
			</main>

    		<section className="section-1 container" id="products">
				<TitleComp title="Products"/> 
				<p className="text-center fst-italic w-75 mx-auto">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
					Magna vulputate blandit amet laoreet pretium purus mauris. 
					Risus pharetra semper fames maecenas auctor accumsan amet 
					interdum maecenas. Elit integer ipsum turpis netus condimentum 
					non egestas tortor amet.
				</p>
				
				<div className="products">
					{products.map((product, i) =>(
						<ProductCard product={product} key={i}/>
					))}
				</div>

					<div className="my-4 text-center">
						<button className="btn btn-outline-success">
							Contact Us
						</button>
					</div>
			</section>

			<section className="section-2" id="about">
				<div className="container">
				 <TitleComp title="About Us"/>
				</div>
					<img src="/images/bg-2.png" alt="Farmer" />
						
				<div className="container mt-4">
					<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. 
					Pariatur iste laudantium accusantium aliquid commodi architecto, 
					consequuntur ipsum repellat rem labore?Lorem ipsum dolor sit amet consectetur adipisicing elit. 
					Pariatur iste laudantium accusantium aliquid commodi architecto, 
					consequuntur ipsum repellat rem labore
					</p>

					<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam nam 
					voluptatibus, error cumque eos a nulla dicta iste quaerat perspiciatis 
					sint odit doloribus corporis fugiat!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam nam 
					voluptatibus, error cumque eos a nulla dicta iste quaerat perspiciatis 
					sint odit doloribus corporis fugiat!
					</p>

					<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis in 
					quos quod aut aspernatur non cum molestias illo iste, provident asperiores
					error modi at, quis blanditiis autem aliquam libero nobis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis in 
					quos quod aut aspernatur non cum molestias illo iste, provident asperiores
					error modi at, quis blanditiis autem aliquam libero nobis.
					</p>
				</div>
			</section>

			<div className="container">
				<TitleComp title="Our Clients"/>
			</div>
			<section className="section-3">
				<div className="container">
					<div className="logo">
						<div className="logo-first">
							<BrandImage src="/images/brand-9.svg"/>
							<BrandImage src="/images/brand-10.svg"/>
							<BrandImage src="/images/brand-1.svg"/>
							<BrandImage src="/images/brand-5.svg"/>
						</div>
						<div className="logo-second">
							<BrandImage src="/images/brand-7.svg"/>
							<BrandImage src="/images/brand-3.svg"/>
							<BrandImage src="/images/brand-2.png"/>
						</div>
						<div className="logo-second">
							<BrandImage src="/images/brand-4.svg"/>
							<BrandImage src="/images/brand-6.svg"/>
							<BrandImage src="/images/brand-8.svg"/>
						</div>
					</div>
				</div>
			</section>

			
			<section className="section-4 container"
			id="contact">
			<TitleComp title="Contact"/>
				<p className="text-center">Question not answer yet? We are here to help.</p>

				<div className="form-wrapper">
					<div className="inner">
						<h6 className="fw-bold">How can we help you today?</h6>
						<div className="d-flex">
							<input type="text" className="form-control rounded-0 border-2  border-dark" />
							<button className="btn btn-success rounded-0">
								<img src="/images/send.svg" alt="" />
							</button>
						</div>
							
					</div>
				</div>
			</section>


		</Wrapper>
	);
};

export default App;

const Wrapper = styled.div`
	.section-1 {
		.products {
			display: grid;
			gap: 2rem;
			@media screen and (min-width:768px) {
				grid-template-columns: repeat (2, 1fr);
			}
		}
	}

	.section-2 {
		img{
			width:100%;
		}
	}

	.section-3{
		min-height:100vh;
		display:flex;
		flex-direction:column;
		justify-content:center;
	
		.logo{
			&-brand {
				width:8.05rem;
				object-fit:contain;
			}
		}
		.logo-first{
			display:flex;
			justify-content: space-between;
			margin-bottom:1rem;
		}
		.logo-second{
			margin-bottom:1rem;
			display:flex;
			justify-content: space-between;
		}
	}

	.section-4{
		min-height:60vh;
		display:flex;
		flex-direction:column;

		.form-wrapper{
			flex:1;
			display:flex;
			align-items:center;
			justify-content: center;

			.inner{
				input{
					background-color: #FFFDF3;
				}
				img{
					width: 100%;
				}
			}
		}
	}
`;
const products =[
	{image:"/images/pic-2.png", 
	title:"Purity Knapsack Sprayer" ,
	desc:`Lorem ipsum dolor sit, amet consectetur 
	adipisicing elit. Suscipit nesciunt facere, similique 
	quisquam adipisci fugit repudiandae nostrum reiciendis est cum.`
}, 
	{image:"/images/pic-3.png", 
	title:"Purity Knapsack Sprayer",
	desc:`Lorem ipsum dolor sit, amet consectetur 
	adipisicing elit. Suscipit nesciunt facere, similique 
	quisquam adipisci fugit repudiandae nostrum reiciendis est cum.`
}, 	

	{image:"/images/pic-4.png", 
	title:"Purity Knapsack Sprayer" ,
	desc:`Lorem ipsum dolor sit, amet consectetur 
	adipisicing elit. Suscipit nesciunt facere, similique 
	quisquam adipisci fugit repudiandae nostrum reiciendis est cum.`
	},
 
	{image:"/images/pic-5.png", 
	title:"Purity Knapsack Sprayer",
	desc:`Lorem ipsum dolor sit, amet consectetur 
	adipisicing elit. Suscipit nesciunt facere, similique 
	quisquam adipisci fugit repudiandae nostrum reiciendis est cum.`
	}, 
];

const BrandImage = ({src}) =>{
	return <img className="logo-brand" src={src} alt="" />
};