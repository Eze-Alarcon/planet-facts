import './App.css';
import 'animate.css';

/* components */

import Status from './components/Status';
import Header from './components/Header';
import PlanetInfo from './components/PlanetInfo';



function App() {
	return (
    	<>
			<Status>
				<Header/>
				<PlanetInfo/>
			</Status>
		</> 
	);
}

export default App;
