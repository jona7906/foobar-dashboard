import React from "react";

//check if data/props.bartender is recevied
function Bartenders(props) {
  if (!props.bartenders) {
    return null;
  }

  //array of objects with the property src and a string of the given src
  const bartenderIcons = [
    {
      src: "./assets/icons/peter_icon_red.svg",
    },
    {
      src: "./assets/icons/klaus_icon_red.svg",
    },
    {
      src: "./assets/icons/jonas_icon_red.svg",
    },
    {
      src: "./assets/icons/dannie_icon_red.svg",
    },
  ];

  const tapsOnly = [
    {
      name: "Mowintime",
      src: "./assets/images/taps_images/mowintime-only-tap.svg",
    },
    {
      name: "El Hefe",
      src: "./assets/images/taps_images/elhefe-only-tap.svg",
    },
    {
      name: "GitHop",
      src: "./assets/images/taps_images/githop-only-tap.svg",
    },
    {
      name: "Row 26",
      src: "./assets/images/taps_images/row26-only-tap.svg",
    },
    {
      name: "Ruined Childhood",
      src: "./assets/images/taps_images/ruinedchildhood-only-tap.svg",
    },
    {
      name: "Fairy Tale Ale",
      src: "./assets/images/taps_images/fairytaleale-only-tap.svg",
    },
    {
      name: "Hoppily Ever After",
      src: "./assets/images/taps_images/happilyeverafter-only-tap.svg",
    },
    {
      name: "Hollaback Lager",
      src: "./assets/images/taps_images/hollabacklager-only-tap.svg",
    },
    {
      name: "Sleighride",
      src: "./assets/images/taps_images/sleighride-only-tap.svg",
    },
    {
      name: "Steampunk",
      src: "./assets/images/taps_images/steampunk-only-tap.svg",
    },
  ];

  function filterTapsOnly(tapbeer) {
    console.log(tapbeer);
    let filteredTaps = tapsOnly.findIndex((item) => item.name === tapbeer);
    console.log(filteredTaps);
    return tapsOnly[filteredTaps].src;
  }
  //check if bartender is using tap or not if true return string the tap else return string "none"
  function usingTap(tap) {
    let beer;
    if (tap === null) {
      return null;
    } else {
      beer = props.taps[tap].beer;
      console.log(beer);
      return <img src={filterTapsOnly(props.taps[tap].beer)}></img>;
    }
  }

  //check if bartender is serving a customer or not if true return customer else return string "none"

  function servingCustomer(customer) {
    if (customer === null) {
      return null;
    } else {
      /*  return <img src="./assets/images/taps_images/steampunk-only-tap.svg"></img>;
       */
    }
    return "Serving nr: " + customer;
  }
  function checkStatus(bartender) {
    if (bartender.status === "WORKING") {
      return "green";
    } else if (bartender.status === "BREAK") {
      return "yellow";
    } else if (bartender.status === "OFF") {
      return "red";
    }
  }
  return (
    <section id="bartenders">
      <h1>Bartenders</h1>
      <div className="data-first-view">
        <div id="data-bartenders">
          {props.bartenders.map((bartender, index) => (
            <div id={"bartender_0" + index} className="bartender">
              <svg
              /* height="
              60"
                width="60" */
              >
                <circle cx="10" cy="10" r="10" stroke="none" stroke-width="3" fill={checkStatus(bartender)} />
              </svg>
              <img src={bartenderIcons[index].src} alt="bartenderimage" />
              <h2>{bartender.name}</h2>
              <div className="onlyTap">{usingTap(bartender.usingTap)}</div>
              <p>{servingCustomer(bartender.servingCustomer)}</p>
              {/* <h3>Status: </h3> */}
              {/* <p>{bartender.status}</p>
              <h3>Status Detail: </h3> */}
              {/*   <p>{bartender.statusDetail}</p> */}
              {/* <h3>Using Tap: </h3> */}
              {/* {<p>{props.bartenders[index].usingTap === "null" ? <p>none</p> : props.bartenders[index].usingTap}</p>} */}
            </div>
          ))}
        </div>
      </div>
      <div className="data-full-view"></div>
    </section>
  );
}

export default Bartenders;
