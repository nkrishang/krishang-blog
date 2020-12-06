// React imports
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Material-ui imports
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Fade from '@material-ui/core/Fade';

// CSS and assets
import "./App.css";

import homeImage from "./assets/shadow.jpg";

function Navbar() {

  const [menuActive, setMenuActive] = React.useState(false);
  const menuItems = ["Explorations", "Thoughts", "Readings", "Books"];

  return (
    <div className="Navbar">

      <div className="w-3/4 m-auto">
        <div className="flex justify-between items-center"> 
          
          <Link to="/">
            <p className="text-4xl text-gray-500 font-bold">K</p>
          </Link>

          <div className="lg:hidden">
            {
              menuActive 
              ? <button onClick={() => {setMenuActive(false)}}> <CloseIcon/> </button> 
              : <button onClick={() => {setMenuActive(true)}}> <MenuIcon /> </button> 
            }
          </div>
          
          <ul className="hidden lg:inline-flex">
            {menuItems.map((item) => {

              return <li key={item}>
                  <Link to={`/${item.toLowerCase()}`}>
                    <p className="text-gray-400 text-lg hover:text-gray-700 px-8">{item}</p>
                  </Link>
              </li>
            })}
          </ul>
        </div>
        
        <Fade in={menuActive} timout={300}>
          <ul className="lg:hidden" style={{display: menuActive ? "block" : "none"}}>
              {menuItems.map((item) => {

                return <li key={item}>
                    <Link to={`/${item.toLowerCase()}`}>
                      <p className="text-gray-400 text-lg hover:text-gray-700 py-4">{item}</p>
                    </Link>
                </li>
              })}
          </ul>
        </Fade>
      </div>
      
    </div>
  )
}

function Home() {

  return (
    <div className="Home py-20">
      <div className="w-3/4 m-auto">
        <div className="lg:flex lg:items-center">
          <img src={homeImage} alt="spirits" className="w-80 h-auto"/>


          <div>
            <h1 className="text-5xl xl:text-6xl font-bold text-gray-800">Krishang Nadgauda</h1>
            <p className="text-2xl xl:text-3xl text-gray-600 py-4">Welcome to my public mind.</p>

            <div className="py-8">
              <span className="text-lg xl:text-xl text-gray-500 leading-relaxed">
                Here, I write about philosophy, share technical deep dives, build and 
                learn in the open, and think in ink about some books I'm reading. This
                site is <span className="text-red-600">under construction</span>. To
                readers of krishang.blog - my posts will be back soon. 
              </span>
            </div>
            

            <div className="flex justify-between items-center">
              <span className="text-lg xl:text-xl text-gray-500">
                Currently building: 
                {" "}<a href="https://poofnotes.com" target="_blank" rel="noreferrer" className="text-indigo-500">poofnotes.com</a>
              </span>

              <span className="text-lg xl:text-xl text-gray-500">
                Find me on twitter 
                {" "}<a href="https://twitter.com/MonkeyMeaning" target="_blank" rel="noreferrer" className="text-indigo-500">@MonkeyMeaning</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function App() {

  return (
    <Router>
        <div className="App">
          <Navbar />
        </div>
        
        <Switch>
          <Route path="/">
              <Home />
          </Route>
        </Switch>
    </Router>
    
  )
}
