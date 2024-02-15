import React, { useEffect, useState } from 'react'

function TimeCard() {
    const date = new Date();
    const [countryData, setcountryData] = useState([]);
    const [curentTime, setcurentTime] = useState(date);
    const [isStart, setIsStart] = useState(false);
    useEffect(() => {
        fetch('https://worldtimeapi.org/api/timezone')
        .then((response) => response.json())
        .then((data) => setcountryData(data))
        .catch((error) => console.log(error));
    }, []);

    useEffect(() => {  
        var interval = null;
        if(isStart) {
            interval = setInterval(() => {
                var t = new Date(curentTime);
                t.setSeconds(t.getSeconds() + 1)
                setcurentTime(t);
            },1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
     },[curentTime,isStart]);
   
    const onCountrySelected = (evt) => {
        fetch(`https://worldtimeapi.org/api/timezone/${evt.target.value}`)
        .then((response) => response.json())
        .then((data) => {
            setcurentTime(changeTime(data));
            setIsStart(true);
        })
        .catch((error) => console.log(error));
    }

    const changeTime = (data) => {
        const modifiedTime = 
        new Date(data.datetime).toLocaleString('en-US', {
        timeZone: data.timezone,
      });
      return new Date(modifiedTime);
    }

  return (
    <div className='country-clock'>
        <div className='country-dropdown d-flex'>
        <select onChange={(evt) => onCountrySelected(evt)}>
            <option value="select">Select</option>
            {countryData?.map((country) => (<option key={country} value={country}>{country}</option>))}
        </select>
        </div>
        <div className='clock-data'>
        <div className='time-data'>
            <h6>{curentTime.toLocaleTimeString()}</h6>
        </div>
        <div className='start-btn'>
        <button className='text-white' type="button" onClick={() => setIsStart(!isStart)} style={{backgroundColor: isStart ? 'green' : 'red'}}>Pause/Start</button>
        </div>
        </div>
    </div>
  )
}

export default TimeCard