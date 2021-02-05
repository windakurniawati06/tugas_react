import React from 'react'; 
import './App.css';
import Utama from './components/utama' ;
import {Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

import Beranda from "./components/beranda";
import TentangSaya from './components/tentangsaya';
import Karya from './components/karya';
import Kontak from './components/kontak';
  
class App extends React.Component { 
  	render(){  
    	return (  
			<div>
				<div>
					<Utama/>
				</div>
				<div>
					<Switch>
						<Route exact path="/beranda" component={Beranda}/>
						<Route path="/tentangsaya" component={TentangSaya} />
						<Route path="/karya" component={Karya} />
						<Route path="/kontak" component={Kontak} />
					</Switch>
				</div>
			</div>
				
		// <div> <hr />
		// 	<Link to="/">Beranda</Link>
		// 	<Link to="/tentangsaya">Tentang Saya</Link>
		// 	<Link to="/karya">Karya</Link>
		// 	<Link to="/kontak">Kontak</Link> 
		// 	<p><Utama /></p>
		// 	</div>
		);
	}
}
  
export default App;  

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


