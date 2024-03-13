import React, { useState } from 'react'
import './WeatherApp.css'
import search from './Assets/search.png'
import Cloud from './Assets/cloud.png'
import humidity from './Assets/humidity.png'
import wind from './Assets/wind.png'
import Clear from './Assets/clear.png'
import Rain from './Assets/rain.png'
import Snow from './Assets/snow.png'

const WeatherApp = () => {
    
    const [wicon, setWicon] = useState(Cloud);

    const API_KEY = '298b7c2f2e2ff7ced048b37999e321e6';

    async function searchData () {
         let element = document.getElementsByClassName("searchInput");

         if(element[0].value === "") {
          return 0;
         }
         let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&appid=${API_KEY}&units=metric`

         let raw = await fetch(url);
         let response = await raw.json();

         const tempDisplay = document.getElementsByClassName("tempFirst");
         const cityDisplay = document.getElementsByClassName("cityFirst");
         const humidityDisplay = document.getElementsByClassName("humidityFirst");
         const windDisplay = document.getElementsByClassName("windFirst");


         tempDisplay[0].innerHTML = response.main.temp;
         cityDisplay[0].innerHTML = response.name;
         humidityDisplay[0].innerHTML = response.main.humidity;
         windDisplay[0].innerHTML = response.wind.speed;

         if (response.weather[0].main === "Clear") {
          setWicon(Clear);
         }

         else if (response.weather[0].main === "Rain") {
          setWicon(Rain);
         }
         else if (response.weather[0].main === "Snow") {
          setWicon(Snow);
         }
         else if (response.weather[0].main === "Drizzle") {
          setWicon(Drizzle);
         }

         else {
          setWicon(Cloud);
         }
         
       

    }
   
      return (
    <div className='container'>

       <div className='input-container'>
        <input className='searchInput' placeholder='Enter your city' type='text'></input>
        <div className='search-container' onClick={()=> searchData()}>
            <img src={search}></img>
        </div>
       </div>

       <div className='imp-display'>
        <div className='climate-pic'>
            <img src={wicon}></img>
        </div>
        <div className='temperature'>
           <span className='tempFirst'>15.21</span>°C
        </div>
        <div className='city'>
            <p className='cityFirst'>London</p>
        </div>
        </div>

        <div className='minute-ouput'>
            <div className='humidity'>
                <div className='humidity-img'>
                  <img src={humidity}></img>
                </div>
                <div className='humidity-text'>
                 <span className='humidityFirst'>87</span> % Humidity
                </div>
            </div>

            <div className='wind-speed'>
                <div className='wind-img'>
                  <img src={wind}></img>
                </div>
                <div className='wind-text'>
                  <span className='windFirst'>5.14</span> km/hr wind speed
                </div>
            </div>

        </div>

       
    </div>
  )
}

export default WeatherApp
