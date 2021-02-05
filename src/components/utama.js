import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Link} from "react-router-dom"

import Beranda from './beranda';
import TentangSaya from './tentangsaya';
import Karya from './karya';
import Kontak from './kontak';

// const Utama = () => (
//     <Switch>
//         <Route exact path="/" component={Beranda}/>
//         <Route path="/tentangsaya" component={TentangSaya} />
//         <Route path="karya" component={Karya} />
//         <Route path="kontak" component={Kontak} />
//     </Switch>
// )
class Utama extends React.Component{
    render(){
        return(
            <div className="navbar navbar-expand-lg bg-dark navbar-dark">
                <a className="navbar-brand" href="#">
                    WELCOME
                </a>

             
                <button className="navbar-toggler" data-togler="collapse"
                data-target="#menu">
                    <span className="navbar-toggler-icon"/>
                </button>

               
                <div id="Beranda" className="navbar-collapse collapse">
                    <ul className="navbar=nav mr-auto row ">
                        <li className="nav-item">
                            <Link to="/beranda" className="nav-link">Beranda</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/tentangsaya" className="nav-link">Tentang Saya</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/karya" className="nav-link">Karya</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/kontak" className="nav-link">Kontak</Link>
                        </li>
                    </ul>
                </div>
            </div> 
        )
    }
}

export default Utama; 
