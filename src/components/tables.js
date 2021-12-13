import React, { useState, useEffect } from "react";

function Tables(props) {
  /* if (!props.bartenders) {
        return(null)
  const [helpqueue, addtoqueue] = useState([]);
        
      } */
  /* const [helpqueue, addtoqueue] = useState([]); */
  /* let tablesNeedHelp = []; */
  /*  window.addEventListener("DOMContentLoaded", () => {
  
  }); */

  /*  const tableURL = "https://foobar-cc0c.restdb.io/rest/foobar";
  const tableAPI = "61b71e3fa3fedd557f8e0abd";
  // let tablenr;

  fetch(tableURL, {
    method: "get",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": tableAPI,
      "cache-control": "no-cache",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    }); */
  /* 
  function get() {
    /*   fetch("https://foobar-cc0c.restdb.io/rest/foobar", tableAPI)
      .then((response) => response.json())
      .then((data) => displayTable(data));
  } */
  /*  fetch(tableURL, {
      method: "get",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "x-apikey": tableAPI,
        "cache-control": "no-cache",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        displayTable(data);
      }); */

  /*  function displayTable(tableid) {
    console.log(tableid[0].tableid);
    tablesNeedHelp = tableid.slice(-4, -1);
    return tablesNeedHelp.map((table) => <p>{table.tableid}</p>
  } */

  console.log(props);
  return (
    <section id="tables">
      <h1>Tables</h1>
      <div className="tables_preview">
        {props.tables.map((table) => (
          <div className="tableContainer">
            <h2>TABLE {table.tableid} NEEDS HELP!</h2>
            <button>Assist</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Tables;
