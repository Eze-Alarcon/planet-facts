import React from 'react'

const MainImage = ({props}) => {
	
	let { image, planetData } = props
	let shortcut = planetData.name.toLowerCase()

	let backImage = {
		backgroundImage: `url(./resources/geology-${shortcut}.png)`,
	}

	

	if (!image.includes("geology")) {
		return (
			<div>
				<img src={image} alt="Planet" data-url={shortcut}/>
			</div>
		)
	} else if (image.includes("geology")) {
			return (
				<div>
					<img src={`./resources/planet-${shortcut}.svg`} alt="Planet" data-url={planetData.name.toLowerCase()}/>
					<span class="geology--img" style={backImage}></span>
				</div>
			)
	}
}

export default MainImage