import React from "react";

function WeatherStats({labels, values}){
    let stats = [];
    for (let ind = 0; ind < labels.length; ind++){
        stats.push(<div key={labels[ind]} className="stat"> <p>{labels[ind]}</p> <p>{values[ind]}</p></div>)
    }
    return (
        <div className="stat--grid">
            {stats}
        </div>
    );
};

export default WeatherStats;