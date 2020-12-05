import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import "./App.css";

import pic from "./assets/banner.jpg";
import homeImage from "./assets/shadow.jpg";

function Navbar() {

  return (
    <div className="Navbar">

      <div className="w-3/4 m-auto">
        <div className="flex justify-between items-center"> 
          
          <Link>
            <p className="text-4xl text-gray-500 font-bold">K</p>
          </Link>

          <div style={{ width: "480px"}}>
            <div className="flex justify-between content-center">
              <Link to="/">
                <p className="text-gray-400 text-base hover:text-gray-700">Explorations</p>
              </Link>

              <Link to="/">
                <p className="text-gray-400 text-base hover:text-gray-700">Thoughts</p>
              </Link>

              <Link to="/">
                <p className="text-gray-400 text-base hover:text-gray-700">Reading</p>
              </Link>

              <Link to="/">
                <p className="text-gray-400 text-base hover:text-gray-700">Building</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

function Home() {

  return (
    <div className="Home">
      <div className="w-3/4 m-auto">
        <div className="flex items-center">
          <img src={homeImage} alt="home-image" className="w-96 h-auto pt-20 pr-20"/>


          <div>
            <h1 className="text-6xl font-bold text-gray-800">Krishang Nadgauda</h1>
            <p className="text-3xl text-gray-600 py-4">Welcome to my public mind.</p>

            <div className="py-8">
              <span className="text-xl text-gray-500 leading-relaxed">
                Here, I write about philosophy, share technical deep dives, build and 
                learn in the open, and think in ink about some books I'm reading. This
                site is <span className="text-red-600">under construction</span>. To
                readers of krishang.blog - my posts will be back soon. 
              </span>
            </div>
            

            <div className="flex justify-between items-center">
              <span className="text-xl text-gray-500">
                Currently building: 
                {" "}<a href="https://poofnotes.com" target="_blank" rel="noreferrer" className="text-indigo-500">poofnotes.com</a>
              </span>

              <span className="text-xl text-gray-500">
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
