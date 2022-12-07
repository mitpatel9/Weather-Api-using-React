
import React from "react";
import { useEffect, useState } from "react";

import "./Weather.css"


const Weather = () => {

   const [data, setdata] = useState({});
   const [inputcity, setcity] = useState("")


   const getwheather = async (cityname) => {
      const apiurl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityname + "&appid=1ef6562622c75157fa1600e8fa47e192"
      const res = await fetch(apiurl);
      const data = await res.json();
      setdata(data);
   }
   const handleinput = (e) => {
      setcity(e.target.value);
   }
   const handlesearch = () => {
      getwheather(inputcity);
   }
   useEffect(() => {
      getwheather();
   }, {})



   return (
      <>
         <div className="body">
            <div className="container">
               <div className="row mt-3 mb-3 pt-1 pb-2">
                  <div className="col-md-3 ">
                     <form class="d-flex">
                        <input class="form-control me-2" value={inputcity} onChange={handleinput} placeholder="Search Location" />
                        <button class="btn btn-outline-light" onClick={handlesearch} type="button">Search</button>
                     </form>
                  </div>
               </div>
               {/* section 1 */}
               <div className="row mt-3 justify-content-between pb-3 pt-4 border border-light">
                  <div className="col-md-3 text-light">
                     <h1>{((data?.main?.temp) - 273).toFixed(1)}&#8451;</h1>
                  </div>
                  <div className="col-md-3 text-light">
                     <h1>{data?.name}</h1>
                  </div>
               </div>
               {/* section 2 */}

               <div className="row mt-3 justify-content-between pb-3 pt-4  border border-light">
                  <div className="col-md-2 text-light">
                     <div className="d-flex px-2 ">
                        <img src={require("./img/icons8-air-instrumentation-48.png")}></img>
                        <p>pressure</p>
                     </div>
                     <p>{(data?.main?.pressure)}</p>
                  </div>
                  <div className="col-md-2 text-light">
                     <div className="d-flex px-2 ">
                        <img src={require("./img/icons8-humidity-60.png")}></img>
                        <p>humidity</p>
                     </div>
                     <p>{(data?.main?.humidity)}</p>
                  </div>
                  <div className="col-md-2 text-light">
                     <div className="d-flex px-2 ">
                        <img src={require("./img/icons8-sun-and-sea-64.png")}></img>
                        <p>sea_level</p>
                     </div>
                     <p>{(data?.main?.sea_level)}</p>
                  </div>
                  <div className="col-md-2 text-light">
                     <div className="d-flex px-2 ">
                        <img src={require("./img/icons8-earth-element-60.png")}></img>
                        <p>grnd_level</p>
                     </div>
                     <p>{(data?.main?.grnd_level)}</p>
                  </div>
               </div>

               {/* section 3 */}
               <div className="row mt-3 justify-content-around pb-3 pt-4 border border-light">
                  <div className="col-md-3 text-light">
                     <div className="d-flex px-2 ">
                        <img src={require("./img/icons8-longitude-60.png")}></img>
                        <p>Longitude</p>
                     </div>
                     <p>{data?.coord?.lon}</p>
                     <div className="d-flex px-2 ">
                        <img src={require("./img/icons8-latitude-60.png")}></img>
                        <p>Latitude</p>
                     </div>
                     <p>{data?.coord?.lat}</p>
                  </div>
                  <div className="col-md-3 text-light">
                     <h6>weather Description</h6>
                     <p>{data?.weather?.Description}</p>
                  </div>
                  <div className="col-md-3 text-light">
                     <div className="d-flex px-2 ">
                        <img src={require("./img/icons8-invisible-50.png")}></img>
                        <p>visibility</p>
                     </div>
                     <p>{data?.visibility}</p>
                  </div>
               </div>
               {/*section 4  */}
               <div className="row mt-3 justify-content-around pb-3 pt-4 border border-light">
                  <div className="col-md-2 d-flex mx-2 text-light ">
                     <img src={require("./img/icons8-wind-32.png")}></img>
                     <h6>Wind</h6>
                  </div>
                  <div className="col-md-2 text-light">
                  <div className="d-flex px-2 ">
                        <img src={require("./img/icons8-speedometer-60.png")}></img>
                        <h6>speed</h6>
                     </div>
                     <p>{data?.wind?.speed}</p>
                  </div>
                  <div className="col-md-2 text-light">
                     <h6>deg</h6>
                     <p>{data?.wind?.deg}</p>
                  </div>
               </div>
            </div>
         </div>
      </>
   );

};

export default Weather;