import React, { useEffect ,useState} from "react";

const Covid = () => {
const [data,setData] = useState([]);

    const getCovidData = async ()=> {
try {
  const res = await fetch('https://data.covid19india.org/data.json ');
// console.log(res);
  const actualData = await res.json();
// console.log(actualData.statewise[0]);
// console.log(actualData.statewise);

  setData(actualData.statewise[0]);
    
} catch (error) {
    // console.lo g(error);
    
}

    } 
      useEffect(() =>{
        getCovidData();
      },[]);
    return (
       <>
       <section>
       <marquee><h1>🔴LIVE</h1></marquee>
       <h2>COVID-19 CORONAVIRUS TRACKER</h2>
       <ul>
        <li className="card">
            <div className="card__main">
                <div className="card__inner">
                    <p className="card__name">
                        <span>OUR</span>COUNTRY
                    </p>
                    <p className="Card__total">INDIA</p>
                </div>

            </div>
        </li>
        <li className="card">
            <div className="card__main">
                <div className="card__inner">
                    <p className="card__name">
                        <span>TOTAL</span>RECOVERED
                    </p>
                    <p className="Card__total">{data.recovered}</p>
                </div>

            </div>
        </li>
        <li className="card">
            <div className="card__main">
                <div className="card__inner">
                    <p className="card__name">
                        <span>TOTAL</span>CONFIRMED
                    </p>
                    <p className="Card__total">{data.confirmed}</p>
                </div>

            </div>
        </li>
        <li className="card">
            <div className="card__main">
                <div className="card__inner">
                    <p className="card__name">
                        <span>TOTAL</span>DEATHS
                    </p>
                    <p className="Card__total">{data.deaths}</p>
                </div>

            </div>
        </li>
        <li className="card">
            <div className="card__main">
                <div className="card__inner">
                    <p className="card__name">
                        <span>TOTAL</span>ACTIVE
                    </p>
                    <p className="Card__total">{data.active}</p>
                </div>

            </div>
        </li>
        <li className="card">
            <div className="card__main">
                <div className="card__inner">
                    <p className="card__name">
                        <span>LAST</span>UPDATED
                    </p>
                    <p className="Card__total">{data.lastupdatedtime}</p>
                </div>

            </div>
        </li>
       </ul>
       </section>
       </>
    )
}
export default Covid;  