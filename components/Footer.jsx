import React from 'react'
import Subscribe from './Subscribe';
import visa from "../public/images/bx_bxl-visa.png";
import masterCard from "../public/images/logos_mastercard.png";
import Bitcoin from "../public/images/logos_bitcoin.png";


function Footer() {
  return (
		<div>
			<Subscribe />

			<footer className="deneb_footer">
				<div className="widget_wrapper">
					<div className="container">
						<div className="row">
							<div className="col-lg-3 col-md-6 col-12">
								<div className="widget widegt_about">
									<div className="widget_title">
										<svg
											width="135"
											height="40"
											viewBox="0 0 135 40"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M19.9999 40C31.0456 40 39.9999 31.0457 39.9999 20C39.9999 8.9543 31.0456 0 19.9999 0C8.95424 0 -6.10352e-05 8.9543 -6.10352e-05 20C-6.10352e-05 31.0457 8.95424 40 19.9999 40Z"
												fill="white"
												fill-opacity="0.1"
											/>
											<path
												d="M18.8424 28.0463C14.9124 27.4707 11.8964 24.0828 11.8964 19.9891C11.8964 15.8954 14.9124 12.5075 18.8424 11.9322V7.69238C12.5855 8.29084 7.69232 13.5677 7.69232 19.9891C7.69232 26.4104 12.5855 31.687 18.8424 32.2858V28.0463Z"
												fill="white"
											/>
											<path
												d="M26.9983 12L26.8891 12.3711V23.1393L26.9983 23.2483L31.9968 20.2937L26.9983 12Z"
												fill="white"
											/>
											<path
												d="M26.9984 12L21.9999 20.2937L26.9984 23.2483V18.0217V12Z"
												fill="white"
											/>
											<path
												d="M26.9986 24.8742L26.937 24.9492V28.7851L26.9986 28.9648L32 21.9211L26.9986 24.8742Z"
												fill="white"
											/>
											<path
												d="M26.9984 28.9648V24.8742L21.9999 21.9211L26.9984 28.9648Z"
												fill="white"
											/>
											<path
												d="M26.9984 23.2482L31.9968 20.2937L26.9984 18.0217V23.2482Z"
												fill="white"
											/>
											<path
												d="M21.9999 20.2937L26.9983 23.2482V18.0217L21.9999 20.2937Z"
												fill="white"
											/>
											<path
												d="M68.4964 18.326C68.0938 15.4176 65.8565 13.7301 62.9545 13.7301C59.5348 13.7301 56.9588 16.223 56.9588 20.4545C56.9588 24.6797 59.5028 27.179 62.9545 27.179C66.0675 27.179 68.1321 25.1655 68.4964 22.6662L66.1058 22.6534C65.8054 24.1875 64.5526 25.0504 62.9865 25.0504C60.8643 25.0504 59.343 23.4588 59.343 20.4545C59.343 17.5014 60.8516 15.8587 62.9929 15.8587C64.5845 15.8587 65.831 16.7599 66.1058 18.326H68.4964ZM71.3881 27H73.7596V22.206H76.1758L78.7454 27H81.3917L78.56 21.8097C80.1005 21.1896 80.9123 19.8729 80.9123 18.0959C80.9123 15.5966 79.3015 13.9091 76.2972 13.9091H71.3881V27ZM73.7596 20.2372V15.8906H75.9329C77.7035 15.8906 78.4961 16.7024 78.4961 18.0959C78.4961 19.4893 77.7035 20.2372 75.9457 20.2372H73.7596ZM85.4963 27L86.5765 23.772H91.4984L92.5851 27H95.1163L90.5013 13.9091H87.5737L82.965 27H85.4963ZM87.2157 21.8672L88.9863 16.5938H89.0886L90.8592 21.8672H87.2157ZM97.5606 27H99.932V22.5767H102.438C105.461 22.5767 107.085 20.7614 107.085 18.2429C107.085 15.7436 105.48 13.9091 102.47 13.9091H97.5606V27ZM99.932 20.6271V15.8906H102.105C103.882 15.8906 104.669 16.8494 104.669 18.2429C104.669 19.6364 103.882 20.6271 102.118 20.6271H99.932ZM109.865 27H112.236V22.5767H114.742C117.765 22.5767 119.389 20.7614 119.389 18.2429C119.389 15.7436 117.784 13.9091 114.774 13.9091H109.865V27ZM112.236 20.6271V15.8906H114.409C116.186 15.8906 116.973 16.8494 116.973 18.2429C116.973 19.6364 116.186 20.6271 114.422 20.6271H112.236ZM133.866 20.4545C133.866 16.223 131.284 13.7301 127.851 13.7301C124.412 13.7301 121.836 16.223 121.836 20.4545C121.836 24.6797 124.412 27.179 127.851 27.179C131.284 27.179 133.866 24.6861 133.866 20.4545ZM131.482 20.4545C131.482 23.4332 129.986 25.0504 127.851 25.0504C125.723 25.0504 124.22 23.4332 124.22 20.4545C124.22 17.4759 125.723 15.8587 127.851 15.8587C129.986 15.8587 131.482 17.4759 131.482 20.4545Z"
												fill="white"
											/>
										</svg>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 col-sm-12">
								<div className="widget widget_link">
									<div className="widget_title">
										<h4>Quick Link</h4>
									</div>
									<ul>
										<li>
											<a href="#"> Home </a>
										</li>
										<li>
											<a href="#"> Products</a>
										</li>
										<li>
											<a href="#"> About </a>
										</li>
										<li>
											<a href="#"> Features </a>
										</li>{" "}
										<li>
											<a href="#"> Contact </a>
										</li>
									</ul>
								</div>
							</div>{" "}
							<div className="col-lg-3 col-md-6 col-sm-12">
								<div className="widget widget_link">
									<div className="widget_title">
										<h4>Resources</h4>
									</div>
									<ul>
										<li>
											<a href="#"> Download Whitepaper </a>
										</li>
										<li>
											<a href="#">Smart Token</a>
										</li>
										<li>
											<a href="#"> Blockchain Explore </a>
										</li>
										<li>
											<a href="#"> Crypto Api</a>
										</li>{" "}
										<li>
											<a href="#"> Internet </a>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 col-sm-12">
								<div className="widget widget_contact">
									<div className="widget_title">
										<h4> We accept following payment systems</h4>
									</div>
									<div className="widget widegt_about">
										<ul className="social">
											<li>
												<a href="#">
													<img src={visa.src} alt="" />
												</a>
											</li>
											<li>
												<a href="#">
													<img src={masterCard.src} alt="" />
												</a>
											</li>
											<li>
												<a href="#">
													<img src={Bitcoin.src} alt="" />
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="copyright_area">
					<div className="container">
						<div className="row">
							<div className="col-lg-12 copyright_text_bg">
								<div className="copyright_text">
									<p>©2021 CRAPPO. All rights reserved</p>
								</div>{" "}
								<div className="copyright_text_icons">
									<i class="bi bi-facebook"></i>
									<i class="bi bi-instagram"></i>
									<i class="bi bi-youtube"></i>
									<i class="bi bi-twitter"></i>
									<i class="bi bi-linkedin"></i>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default Footer