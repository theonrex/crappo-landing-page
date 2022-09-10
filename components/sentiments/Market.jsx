import React from 'react'
import Chart from '../../public/images/Chart.png'
import Cic from '../../public/images/cic.png'

function Market() {
  return (
		<div className="market container">
			<div className="cic">
				<img src={Cic.src} alt="circle" />
			</div>
			<header
				data-aos="zoom-out"
				data-aos-easing="linear"
				data-aos-duration="1500"
			>
				Market sentiments, portfolio, and run the infrastructure of your choice
			</header>
			<section className="rowx ">
				<div
					className="col50 Invest"
					data-aos="fade-down"
					data-aos-easing="linear"
					data-aos-duration="1500"
				>
					<header>Invest Smart</header>
					<p>
						Get full statistic information about the behavior of buyers and
						sellers will help you to make the decision.
					</p>
					<button className="market-btn">
						{" "}
						<a href="#/"> Learn More</a>{" "}
					</button>
				</div>
				<div
					className="col50"
					data-aos="zoom-in"
					data-aos-easing="linear"
					data-aos-duration="1500"
				>
					<img src={Chart.src} alt="" />
				</div>
			</section>
		</div>
	);
}

export default Market