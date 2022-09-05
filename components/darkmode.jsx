import React, { useState, useEffect } from "react";
import { FcNightLandscape, FcLandscape } from "react-icons/fc";


function UseDarkMode() {
	

	const [darkMode, setDarkMode] = useState(false);
	const ActiveMode = async () => {
		setDarkMode(!darkMode)
		if (darkMode !== undefined){
			if( darkMode === true) {
				document.body.classList.add('light');
				document.body.classList.remove('dark');
				await localStorage.setItem('Theme', 'light');
			}
			if(darkMode === false){
				document.body.classList.add('dark');
				document.body.classList.remove('light');
				await localStorage.setItem('Theme', 'dark')
			}
		}
	};
	useEffect( () => {
		if (darkMode !== undefined){
			if ( localStorage.getItem('Theme') === 'light' ){
				document.body.classList.add('light');
			} else if (localStorage.getItem("Theme") === 'dark'){
				document.body.classList.add('dark');
				setDarkMode(!darkMode);
			}
		}
	}, [])

	




	return (
		<div>
			<div>
				{darkMode === true ? (
					<FcNightLandscape onClick={ActiveMode} />
				) : (
					<FcLandscape onClick={ActiveMode} />
				)}
			</div>

			{/* {localStorage.getItem("Theme") === "dark" ? (
				<FcNightLandscape onClick={ActiveMode} />
			) : (
				<FcLandscape onClick={ActiveMode} />
			)} */}
		</div>
	);
}

export default UseDarkMode;
