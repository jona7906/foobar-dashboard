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

  //check if bartender is using tap or not if true return string the tap else return string "none"
  function usingTap(tap) {
    if (tap === null) {
      return "none";
    }
    return tap;
  }

  //check if bartender is serving a customer or not if true return customer else return string "none"

  function servingCustomer(customer) {
    if (customer === null) {
      return "none";
    }
    return customer;
  }

  return (
    <section id="bartenders">
      <h1>Bartenders</h1>
      <div className="data-first-view">
        <div id="data-bartenders">
          {props.bartenders.map((bartender, index) => (
            <div id={"bartender_0" + index} className="bartender">
              <img src={bartenderIcons[index].src} alt="bartenderimage" />
              <h2>{props.bartenders[index].name}</h2>
              <h3>Status: </h3>
              <p>{props.bartenders[index].status}</p>
              <h3>Status Detail: </h3>
              <p>{props.bartenders[index].statusDetail}</p>
              <h3>Using Tap: </h3>
              <p>{usingTap(props.bartenders[index].usingTap)}</p>
              {/* {<p>{props.bartenders[index].usingTap === 'null' ? <p>none</p> : props.bartenders[index].usingTap }</p>} */}
              <h3>Assisting customer nr: </h3>
              <p>{servingCustomer(props.bartenders[index].servingCustomer)}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="data-full-view"></div>
    </section>
  );
}

export default Bartenders;
