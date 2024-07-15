import React from "react"
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return <div className="App">
    <div className="container">
    <Weather defaultCity="New York"/>
    <footer>
      This project was coded by {" "}
      <a href="https://weather-forecast-47ew.vercel.app/" target="_blank">
      Stella Ozemoya
      </a> {" "}
      and is {" "} 

      <a 
      href="https://github.com/stella-ozemoya/my-react-app" 
      target="_blank">

        open-sourced on GitHub
        </a>
    </footer>
    </div>
    </div>
}; 

 
