import React from 'react'

const MainImage = ({props}) => {
	
	let { image, correctSize, planetData } = props

	let backImage = {
		position: "absolute",
		backgroundImage: `url(./resources/geology-${planetData.name.toLowerCase()}.png)`,
		backgroundSize: "contain",
		backgroundRepeat: "no-repeat",
		height: "10rem",
		width: "10rem",
		top: "60%",
		left: "calc(50% - 4rem)",
	}

	

	if (!image.includes("geology")) {
		return (
			<div>
				<img src={image} alt="Planet" style={correctSize(planetData.name)}/>
			</div>
		)
	} else if (image.includes("geology")) {
			return (
				<div>
					<img src={`./resources/planet-${planetData.name.toLowerCase()}.svg`} alt="Planet" style={correctSize(planetData.name)}/>
					<span style={backImage}></span>
				</div>
			)
	}
}

export default MainImage