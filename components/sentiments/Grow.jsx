import React from 'react'
import Table from "../../public/images/Table.png";
import Oshape from '../../public/images/oshape.png'

function Grow() {
  return (
		<div className="grow-bg">
			<div className="container ">
				<section className="rowx grow">
					<div className="col50">
						<header> Grow your profit and track your investments</header>
						<p>
							Use advanced analytical tools. Clear TradingView charts let you
							track current and historical profit investments.
						</p>
						<button className="market-btn">
							{" "}
							<a href="#/"> Learn More</a>{" "}
						</button>
					</div>
					<div className="col50 grow-img">
						<img src={Table.src} alt="" />
					</div>
				</section>
			</div>
			<div className="oshape">
				<img src={Oshape.src} alt="" />
			</div>
		</div>
	);
}

export default Grow