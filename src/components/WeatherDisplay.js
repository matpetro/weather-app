import React from "react";
import CurrentWeather from "./CurrentWeather";
import DailyForcast from "./DailyForcast";
import SearchBar from "./SearchBar";
import cities from "../cities";

function WeatherDisplay() {


    const [currentLocation, setCurrentLocation] = React.useState("Toronto"); //default city is Toronto
    const [weather, setWeather] = React.useState({});
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        //get the current position of user if allowed when app starts up
        navigator.geolocation.getCurrentPosition(
            function(position) {
              setCurrentLocation(`${position.coords.latitude},${position.coords.longitude}`)
            },
            function(error) {
              console.error("Error Code = " + error.code + " - " + error.message);
            }
        );
    }, []);

    React.useEffect(() => {

        //get forecasted weather
        async function getWeather() {
            const res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=af40cd5b454348dfb38235910222406&q=${currentLocation}&days=7`);
            const data = await res.json();
            setWeather(data);
            //console.log(data);
            setLoading(false);
        }
        getWeather();

        
    }, [currentLocation]);

    //Create function that changes current location
    //Pass that function to our search bar component, and then in the search bar component run that function to change the location (also make sure loading is set to true upon location change)
    function changeLocation(location){
        setLoading(true);
        setCurrentLocation(location)
    }

    let weatherForcasts;
    if (!loading){
        weatherForcasts = weather.forecast.forecastday.map((dayData) => <DailyForcast key={dayData.date} data={dayData} />);
    } 

    return(
            loading ? <div className="load--container"> </div> :
            <div className="weather--display">
                <SearchBar suggestions={cities.sort()} changeLocation={changeLocation}/>
                <h1>{`${weather.location.name}, ${weather.location.region}`}</h1>
                <CurrentWeather data={weather.current} />
                <h1> Weekly Forcast: </h1>
                <div className="daily--forcasts">
                    {weatherForcasts}
                </div>
            </div>
    );
};

export default WeatherDisplay;