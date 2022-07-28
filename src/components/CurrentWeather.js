import React from "react";
import WeatherStats from "./WeatherStats"

function CurrentWeather({data}) {
    let names = ["Wind", "Humidity", "Visibility", "Wind Gust", "Pressure", "UV"]
    let quantities = [data.wind_kph, data.humidity, data.vis_km, data.gust_kph, data.pressure_in, data.uv]
    return (
        <div className="current--weather">
            <h3>Current Weather:</h3>
            <div style={{display:"flex"}}>
                <div style={{borderRight:'1px solid rgba(0, 0, 0, 0.05)', paddingRight:'10px'}}>
                    <img alt="" src={data.condition.icon}></img>
                    <p>{data.temp_c}°c</p>
                    <p>{data.condition.text}</p>
                </div>
                <WeatherStats labels={names} values={quantities}/>
            </div>
            
            
        </div>
    );
};

export default CurrentWeather;