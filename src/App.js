import React from "react";
import Header from "./components/header";
import Bartenders from "./components/bartenders";
import Storage from "./components/storage";
import Taps from "./components/taps";
import Queue from "./components/queue";
import Tables from "./components/tables";
/* import FetchJSON from "./components/fetchJSON"; */
import "./styles/index.scss";
import { useState, useEffect } from "react";

function App() {
  //tilføj state fulldata, ændre state med setData
  //Add state "fulldata", change state with "setData"
  const [fulldata, setData] = useState([]);

  //using "useEffect" with "setInterval" to change state with fetched data every second
  //fetching data from heroku
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("This will run every second!");
      fetch("https://coding-mokeys-foobar.herokuapp.com/")
        .then((response) => response.json())
        .then((data) => setData(data));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  //return section-components in DOM
  //each section-component receiceves data from the state "fulldata(updates every second with "setData")"
  //the data received in each component depends on section and is reached with "fulldata" + "." + "the data you need"
  //the data recevied is assigned an id and can be reached in each component by using "props" + "." + "(the assigned id)"
  return (
    <>
      <Header time={fulldata.timestamp} /* revenue={fulldata.revenue} */ />
      <div className="dashboard">
        <Queue queue={fulldata.queue} time={fulldata.timestamp}></Queue>
        <Bartenders bartenders={fulldata.bartenders} />
        <Taps taps={fulldata.taps} />
        {/* <Tables tables={fulldata.tables} /> */}
        <Storage storage={fulldata.storage} />
      </div>
    </>
  );
}

export default App;
