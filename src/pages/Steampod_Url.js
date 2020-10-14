import React from 'react'
import '../styles/sale.css'
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import Banner1 from "../assets/images/banner1.jpg";
import Banner2 from "../assets/images/banner2.jpg";
import User1 from "../assets/images/user1.jpg";
import User2 from "../assets/images/user2.jpg";
import User3 from "../assets/images/user3.jpg";
import User4 from "../assets/images/user4.jpg";
import User5 from "../assets/images/user5.jpg";
import Placeholder from "../assets/images/610x360.png";
export default function Delivery() {
	return (
		<>
			<Helmet>
				<title>SteamPod</title>
				<meta name="keywords" content="Beauty And Personal Care" />
				<meta name="description" content="Shop cosmetics online in Pakistan at aodour.pk. We provide huge range of imported beauty products like Makeup, Skincare, Hair Care with Payment on delivery." />
			</Helmet>

			<div className="offer_page">
				<div className="mb30">
					<div className="container-fluid">
					<a href="" className="floating"><img src={Banner1} alt="banner image here" /></a>
					</div>
				</div>	
				<div className="floating">
					<div className="container-fluid">
						<div className="row">
							<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
								<div className="grid-column">
									<img src={Placeholder} className="placeholderbg" alt="image here" />
									<iframe
										src="https://www.youtube.com/embed/DdeP1IWmnog"
										frameborder="0"
										allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
										allowfullscreen
									></iframe>
								</div>
							</div>
							<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
								<div className="grid-column">
									<img src={Placeholder} className="placeholderbg" alt="image here" />
									<iframe
										src="https://www.youtube.com/embed/DdeP1IWmnog"
										frameborder="0"
										allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
										allowfullscreen
									></iframe>
								</div>
							</div>

							<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
								<div className="streemvideos">
									<h5>X2 FASTER</h5>
									<span>straightening</span>
									<div className="grid-column">
										<img src={Placeholder} className="placeholderbg" alt="image here" />
										<iframe
											src="https://www.youtube.com/embed/DdeP1IWmnog"
											frameborder="0"
											allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
											allowfullscreen
										></iframe>
									</div>
								</div>	
							</div>
							<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
								<div className="streemvideos">
									<h5>78% less</h5>
									<span>breakage</span>
									<div className="grid-column">
										<img src={Placeholder} className="placeholderbg" alt="image here" />
										<iframe
											src="https://www.youtube.com/embed/DdeP1IWmnog"
											frameborder="0"
											allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
											allowfullscreen
										></iframe>
									</div>
								</div>	
							</div>
							<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
								<div className="streemvideos">
									<h5>2-in-1</h5>
									<span>tool</span>
									<div className="grid-column">
										<img src={Placeholder} className="placeholderbg" alt="image here" />
										<iframe
											src="https://www.youtube.com/embed/DdeP1IWmnog"
											frameborder="0"
											allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
											allowfullscreen
										></iframe>
									</div>
								</div>	
							</div>
						</div>
					</div>	
				</div>
				<div className="banners">
					<div className="container-fluid">
						<a href="" className="floating"><img src={Banner2} alt="banner image here" /></a>
					</div>
				</div>
				<div className="last-section">
					<div className="container-fluid">
						<div className="syle-heading">
							<h2>create 5 signature looks with <span>Steam<span>Pod</span></span></h2>
						</div>
						<div className="row">
							<ul className="users_images">
								<li className="">
									<h6>Glass Hair</h6>
									<img src={User1} className="placeholderbg" alt="image here" />
								</li>
								<li className="">
									<h6>blow-dry</h6>
									<img src={User2} className="placeholderbg" alt="image here" />
								</li>
								<li className="">
									<h6>s-wave</h6>
									<img src={User3} className="placeholderbg" alt="image here" />
								</li>
								<li className="">
									<h6>2-waves</h6>
									<img src={User4} className="placeholderbg" alt="image here" />
								</li>
								<li className="">
									<h6>hollywood waves</h6>
									<img src={User5} className="placeholderbg" alt="image here" />
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
