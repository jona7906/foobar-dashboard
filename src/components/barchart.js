import React, { useState, useEffect } from "react";

function Barchart(props) {
  //initiate empty state of an array "plots", change the state with "setPlots"
  /*  const [plots, setPlots] = useState([]); */

  //"useEffect" every time, "props.time" changes
  // change state with setPlots
  // add objects to "plots" array
  // objects recevies data from "props" "x=time" and "y=length of the queue"
  /*  useEffect(() => {
    setPlots((prevPlots) =>
      prevPlots.concat({
        x: props.time,
        y: props.queue.length,
      })
    );
  }, [props.time]);
 */
  //just some labels (not best way)
  const labels = ["10sek", "9sek", "8sek", "7sek", "6sek", "5sek", "4sek", "3sek", "2sek", "current"];

  //create array "arrTen"
  //the array contains the "plots" array sliced from the last 11th(-11) to the last(-1)
  /* let arrTen = plots.slice(-11, -1); */

  //mapping the array "arrTen" in to html
  //for each element in the array create a div with the class bar
  //each bar height is changed according to y property of the element in the array
  return (
    <div className="queue_barchart" width={300} height={100}>
      {props.queue.map((queue) => (
        <div class="customer slideIn">
          <img src="./assets/icons/customer_00.svg"></img>
          <p>{queue.id}</p>
        </div>
      ))}
      {/* {labels.map((label) => (
        <p>{label}</p>
      ))} */}
    </div>
  );
}

export default Barchart;
