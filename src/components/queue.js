/* import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy"; */
import React from "react";
import Barchart from "./barchart";

function Queue(props) {
  if (!props.queue) {
    return null;
  }

  function orderTime(startTime) {
    let currentTime = props.time;
    let calculatedTime = currentTime - startTime;
    let date = new Date(calculatedTime);
    let minutes = "0" + date.getMinutes();
    let formattedSeconds = "0" + date.getSeconds();
    let formattedMinutes = minutes.substr(-2) + ":" + formattedSeconds.substr(-2);
    let seconds = date.getSeconds();

    if (minutes === "0" + 0) {
      return <h3>{seconds + " seconds ago"}</h3>;
    } else if (minutes > "0" + 0) {
      return <h3>{formattedMinutes + " minutes ago"}</h3>;
    }
  }

  return (
    <section id="queue">
      <h1>Queue</h1>
      <div className="data-first-view">
        <div id="data-queue-barchart">
          {/*   <div className="chartdiv" id="chartdiv"></div> */}

          <Barchart queue={props.queue} time={props.time} />
        </div>
        {/*  <Barchart queue={props.queue} time={props.time} /> */}
      </div>

      <button onclick="" style={({ width: "100px" }, { backgroundColor: "black" })}>
        <p>show current queue</p>
      </button>
      <div
        className="data-full-view"
        style={{
          display: "none",
        }}
      >
        <div id="data-queue-fullview">
          {props.queue.map((queue, index) => (
            <div id={"order_0" + index} className="order">
              <h2>{queue.id}</h2>
              <ul className="orderList">
                {queue.order.map((order, index) => (
                  <li>{order} </li>
                ))}
              </ul>
              {orderTime(queue.startTime)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Queue;
