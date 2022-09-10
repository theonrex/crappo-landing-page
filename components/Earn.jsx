import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import CryptoData from "../Props/crypto";
import CryptoActive from "./CryptoActive";

function Earn() {
	//form
	const { register, handleSubmit } = useForm();
	const [data, setData] = useState("");

	return (
		<div className="earn">
			<header
				className="earn-header"
				data-aos="fade-up"
				data-aos-anchor-placement="top-bottom"
				data-aos-duration="3000"
			>
				Check how much you can earn
			</header>
			<p
				className="earn-rate"
				data-aos="fade-up"
				data-aos-anchor-placement="top-bottom"
				data-aos-duration="3000"
			>
				Let’s check your hash rate to see how much you will earn today,
				Exercitation veniam consequat sunt nostrud amet.
			</p>
			<div
				className="earn-form"
				data-aos="zoom-in"
				data-aos-anchor-placement="top-bottom"
				data-aos-duration="3000"
			>
				<section className="form-section">
					<form
						onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}
					>
						<input
							{...register("firstName")}
							placeholder="Enter your hash rate"
							className="input-text"
						/>

						<select {...register("TH/s")} className="select-option">
							<option value="">TH/s </option>
							<option value="">H/s </option>
							<option value="">KH/s </option>
							<option value="">MH/s </option> <option value="">GH/s </option>
						</select>
						{/* <p>{data}</p> */}
						<button className="calculate-btn"> Calculate</button>
					</form>
					<div className="ESTIMATED">
						<header>ESTIMATED 24 HOUR REVENUE:</header>
						<h1>
							0.055 130 59 ETH <span>($1275)</span>{" "}
						</h1>
						<p>
							Revenue will change based on mining difficulty and Ethereum price.
						</p>
					</div>
				</section>
				<br /> <br />
				<section className=" crypto-width  ">
					<CryptoActive />
				</section>
			</div>
		</div>
	);
}

export default Earn;
