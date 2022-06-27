import { spanAnimation } from './helpers'

const MainImage = ({props}) => {
	
	let { image, planetData } = props
	let shortcut = planetData.name.toLowerCase()

	let backImage = {
		backgroundImage: `url(../assets//geology-${shortcut}.png)`,
	}

	if (!image.includes("geology")) {
		return (
			<div>
				<img className="" src={image} alt="Planet" data-url={shortcut}/>
			</div>
		)
	} else if (image.includes("geology")) {
		return (
			<div>
				<img className="" src={`../assets/planet-${shortcut}.svg`} alt="Planet" data-url={planetData.name.toLowerCase()}/>

				<span 
					className={spanAnimation()} 
					style={backImage}>
				</span>
			</div>
		)
	}
}

export default MainImage