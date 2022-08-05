import './App.css';
import 'animate.css';

// Custom Hook
import { useStatus } from './components/customHooks/useStatus';

// Header
import Header from './components/Header';
import Aside from "./components/Aside"
import HeaderBottom from './components/HeaderBottom'
import HeaderPlanets from './components/HeaderPlanets'


// Body
import PlanetInfo from './components/PlanetInfo';
import MainImage from './components/MainImage'
import Navigation from './components/Navigation'



function App() {

	const { states, statesUpdaters } = useStatus()

	const {
        allData,
        planetData,
        modal,
        showInfo,
        image,
    } = states


	const {
		changeContent,
        findPlanet,
        handleModal
	} = statesUpdaters


	const planet = allData.map((planet) => planet.name)

	return (
    	<>
			<Header
				allData={allData}
				name={planetData.name}
				modal={modal}
				planet={planet}
				changeContent={changeContent}
				findPlanet={findPlanet}
				handleModal={handleModal}
				loadHeaderBottom={() => <HeaderBottom
					color={planetData.name}/>}
				
				render1={item => 
					<HeaderPlanets key={item} name={item}/>
				}

				render2={item => 
					<Aside 
						key={item} 
						name={item} 
						findPlanet={findPlanet}/>
				}
				
				
			/>
			<PlanetInfo
				allData={allData}
				name={planetData.name}
				content={showInfo.content}
				source={showInfo.source}
				rotation={planetData.rotation}
				revolution={planetData.revolution}
				radius={planetData.radius}
				temperature={planetData.temperature}
				modal={modal}
				changeContent={changeContent}
				loadImage={() => (
					<MainImage
						image={image}
						planetData={planetData}
					/>
				)}
				loadNavigation={() => <Navigation/>}
			/>
		</> 
	);
}

export default App;
