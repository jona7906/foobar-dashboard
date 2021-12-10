import React from "react";

//check if data/props.taps is recevied
function Taps(props) {
  if (!props.taps) {
    return null;
  }

  function percentage(partialValue, totalValue) {
    return (100 * partialValue) / totalValue;
  }

  //check if tap is in use or not if true return string "true" else return string "false"
  function inUse(index) {
    if (props.taps[index].inUse) {
      return "true";
    } else {
      return "false";
    }
  }

  //compare function for the sorting of levels in taps
  function compare(a, b) {
    if (a.level < b.level) {
      return -1;
    }
    if (a.level > b.level) {
      return 1;
    }
    return 0;
  }

  //sorting taps with the function compare
  props.taps.sort(compare);

  //initiate empty array
  let arrFive = [];

  //pushing the first five taps to arrFive
  for (let i = 0; i < props.taps.length; i++) {
    arrFive.push(props.taps[i]);
  }

  //mapping the "arrFive" array
  //we add a "src" property to each tap and assign a value from the function "getImgSrc(beername)"
  //src is the source for the img
  const imgSrc = arrFive.map((tap) => (tap.src = getImgSrc(tap.beer)) /* "./assets/images/taps_images/tap_elhefe.svg" */);

  //receives parameter beername and return respective src as a string
  function getImgSrc(beername) {
    if (beername === "Steampunk") {
      return "./assets/images/taps_images/tap_steampunk.svg";
    } else if (beername === "GitHop") {
      return "./assets/images/taps_images/tap_githop.svg";
    } else if (beername === "El Hefe") {
      return "./assets/images/taps_images/tap_elhefe.svg";
    } else if (beername === "Fairy Tale Ale") {
      return "./assets/images/taps_images/tap_fairytaleale.svg";
    } else if (beername === "Hollaback Lager") {
      return "./assets/images/taps_images/tap_hollaback.svg";
    } else if (beername === "Hoppily Ever After") {
      return "./assets/images/taps_images/tap_hoppilyeverafter.svg";
    } else if (beername === "Mowintime") {
      return "./assets/images/taps_images/tap_mowintime.svg";
    } else if (beername === "Row 26") {
      return "./assets/images/taps_images/tap_row26.svg";
    } else if (beername === "Ruined Childhood") {
      return "./assets/images/taps_images/tap_ruinedchildhood.svg";
    } else if (beername === "Sleighride") {
      return "./assets/images/taps_images/tap_sleighride.svg";
    }
    return "NO PICTURE";
  }

  // return section with data from the received props, in DOM
  // mapping "arrFive" in html - for each tap in the array create a div with id that ends on the index number of the tap
  // inside div create img, h2, p, p
  // img src is reached in the "arrFive" array by index and "." + "src"
  // rest of data is reached through props and some handled by functions as percentage() an inUse()
  return (
    <section id="taps">
      <h1>Taps</h1>

      <div className="data-first-view">
        <div id="data-taps">
          {arrFive.map((taps, index) => (
            <div id={"tap_0" + index} className="tap">
              <h1>{taps.id}</h1>
              <img className="tapsimage" src={taps.src} />

              <h2>{taps.beer}</h2>
              <p>{percentage(taps.level, taps.capacity)}% left</p>
              <p>{inUse(index)}</p>
              {/* {levelArr.push(props.taps[index].level)}
                {sortBeers()} */}
            </div>
          ))}
        </div>
      </div>
      <div className="data-full-view"></div>
    </section>
  );
}

export default Taps;
