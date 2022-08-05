
const MainImage = (props) => {

	let { image, planetData } = props
	let shortcut = planetData.name.toLowerCase()

	let backImage = { backgroundImage: `url(../resources/geology-${shortcut}.png)` }

	if (!image.includes("geology")) {
		return (
			<div>
				<img className="" 
				src={image} 
				alt="Planet" 
				data-url={shortcut}/> 
			</div>
		)
	} 
	
	else if (image.includes("geology")) {
		return (
			<div>
				
				<img 
					className="" 
					src={`../resources/planet-${shortcut}.svg`} 
					alt="Planet" 
					data-url={shortcut}/>

				<span 
					className="geology--img animate__animated animate__zoomIn animate__delay-1s" 
					style={backImage}
					id="geologySpan">
				</span>
			</div>
		)
	}
}

export default MainImage












// const MainImage = ({props}) => {
	
// 	let { image, planetData } = props
// 	let shortcut = planetData.name.toLowerCase()

// 	let backImage = {
// 		backgroundImage: `url(../resources/geology-${shortcut}.png)`,
// 	}

// 	if (!image.includes("geology")) {
// 		return (
// 			<div>
// 				<img className="" src={image} alt="Planet" data-url={shortcut}/>
// 			</div>
// 		)
// 	} else if (image.includes("geology")) {
// 		return (
// 			<div>
// 				<img className="" src={`../resources/planet-${shortcut}.svg`} alt="Planet" data-url={planetData.name.toLowerCase()}/>

// 				<span 
// 					className="" 
// 					style={backImage}
// 					id="geologySpan">
// 				</span>
// 			</div>
// 		)
// 	}
// }