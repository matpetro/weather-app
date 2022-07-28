import React from "react";

function DailyForcast({data}) {
    //convert numerical day to day of the week
    const [showMore, setShowMore] = React.useState(false);
    console.log(data)

    let names = ["Chance of Rain:", "Max Temp:", "Max Wind:", "Min Temp:", "UV:"]
    let quantities = [data.day.daily_chance_of_rain, data.day.maxtemp_c, data.day.maxwind_kph, data.day.mintemp_c, data.day.uv]

    let info = [];
    for (let ind = 0; ind < names.length; ind++){
        info.push(<div key={names[ind]} className="stat"> <p>{names[ind]} {quantities[ind]}</p></div>)
    }

    function getDayName(dateStr){
        let date = new Date(dateStr);
        let userTimezoneOffset = date.getTimezoneOffset() * 60000;
        let finalDate = new Date(date.getTime() + userTimezoneOffset);
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return days[finalDate.getDay()]; 
    }

    function toggleMore(){
        //console.log("done")
        setShowMore(prev => !prev)
    }

    return (
        <div className="daily--forcast">
            <h3> {getDayName(data.date, 'en-US')} </h3>
            <h1> {data.day.avgtemp_c}°c </h1>
            <img alt="" src={data.day.condition.icon}></img>
            <div> {data.day.condition.text} </div>
            <span className="detail--arrow" onClick={toggleMore}> {showMore ? "⌃" : "⌄"} </span>
            {showMore && info}
        </div>
        
    );
};

export default DailyForcast;