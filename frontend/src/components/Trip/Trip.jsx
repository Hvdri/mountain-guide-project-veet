import React, { useState } from "react";

import "./Trip.css";

import Trip1 from "../../assets/m1.jpg";
import Trip2 from "../../assets/m2.jpg";

import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";

const Trip = (props) => {
  const [query, setQuery] = useState("");

  const destinations = [
    {
      id: 1,
      image: Trip1,

      heading: "11 Martie",
      paragraph: "Tură de-o zi în Masivul Ciucaș",
      program:
        " 08.00 din Bucuresti are ora 08.00 din Bucuresti are ora 08.00 din Bucuresti (Piata Unirii Aleea Dealul Mitropoliei)",
      pret: "De la 200 RON",
      rating: 5,
      locatie: "Bucuresti",
      durata: "2",
      dificultate: "usor",
      deLa: "11.04.2023",
      panaLa: "13.04.2023",

      ruta: "Bucuresti - Pitesti",
      descriere:
        "t dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image1: Trip1,
      image2: Trip2,
      image3: Trip2,
      image4: Trip1,
      numDays: 3,
    },

    {
      id: 2,
      image: Trip2,

      heading: "18 - 19 Aprilie",
      paragraph: "Sfârșit de săptămână relaxant la Bâlea Lac",
      program:
        "Plecare ora 08.00 din Bucuresti (Piata Unirii Aleea Dealul Mitropoliei)",
      pret: "2200 RON",
      rating: 1,
      locatie: "Bucuresti",
      durata: "2",
      dificultate: "dificil",
      deLa: "11.04.2023",
      panaLa: "13.04.2023",

      ruta: "Bucuresti - Pitesti",
      descriere:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image1: Trip1,
      image2: Trip2,
      image3: Trip2,
      image4: Trip1,
      numDays: 3,
    },

    {
      id: 3,
      image: Trip1,

      heading: "25 Martie",
      paragraph: "Tură de-o zi în Munții Iezer-Păpușa",
      program:
        "Plecare ora 08.00 din Bucuresti (Piata Unirii Aleea Dealul Mitropoliei)",
      pret: "200 RON",
      rating: 3,
      locatie: "Bucuresti",
      durata: "2",
      dificultate: "mediu",
      deLa: "11.04.2023",
      panaLa: "13.04.2023",

      ruta: "Bucuresti - Pitesti",
      descriere:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image1: Trip1,
      image2: Trip2,
      image3: Trip2,
      image4: Trip1,
      numDays: 3,
    },

    {
      id: 4,
      image: Trip2,

      heading: "1 Aprilie",
      paragraph: "Tură de-o zi în Munții Bucegi",
      program:
        "Plecare ora 08.00 din Bucuresti (Piata Unirii Aleea Dealul Mitropoliei)",
      pret: "200 RON",
      rating: 2,
      locatie: "Bucuresti",
      durata: "2",
      dificultate: "usor",
      deLa: "11.04.2023",
      panaLa: "13.04.2023",

      ruta: "Bucuresti - Pitesti",
      descriere:
        "Lorem ipsum dolor sit amet, consectetLorem ipsum dolor sit amet, consectetLorem ipsum dolor sit amet, consectetLorem ipsum dolor sit amet, consectetLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image1: Trip1,
      image2: Trip2,
      image3: Trip2,
      image4: Trip1,
      numDays: 3,
    },

    {
      id: 5,
      image: Trip1,

      heading: "2 Aprilie",
      paragraph: "Tură de-o zi în Munții Piatra Craiului",
      program:
        "Plecare ora 08.00 din Bucuresti (Piata Unirii Aleea Dealul Mitropoliei)",
      pret: "200 RON",
      rating: 4,
      locatie: "Bucuresti",
      durata: "2",
      dificultate: "usor",
      deLa: "11.04.2023",
      panaLa: "13.04.2023",

      ruta: "Bucuresti - Pitesti",
      descriere:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image1: Trip1,
      image2: Trip2,
      image3: Trip2,
      image4: Trip1,
      numDays: 3,
    },

    {
      id: 6,
      image: Trip2,

      heading: "22 Aprilie",
      paragraph: "Tură de-o zi în Munții Făgăraș",
      program:
        "Plecare ora 08.00 dinPlecare ora 08.00 dinPlecare ora 08.00 dinPlecare ora 08.00 din Bucuresti (Piata Unirii Aleea Dealul Mitropoliei)",
      pret: "200 RON",
      rating: 5,
      locatie: "Bucuresti",
      durata: "2",
      dificultate: "usor",
      deLa: "11.04.2023",
      panaLa: "13.04.2023",

      ruta: "Bucuresti - Pitesti",
      descriere:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image1: Trip1,
      image2: Trip2,
      image3: Trip2,
      image4: Trip1,
      numDays: 3,
    },
  ];

  // --------------------------SEARCH BAR--------------------------

  // const handleChange = (e) => {
  //   e.preventDefault();
  //   setSearchInput(e.target.value);
  // };

  // if (searchInput.length > 0) {
  //     destinations.filter((destination) => {
  //       return destination.heading.match(searchInput);
  //     });
  // }

  return (
    <div className="trip" id="destinatii">
      <h1>Trip</h1>
      <p>Lorem Ipsum algoa rea cingua mancui a...</p>

      <div className="search-bar-container">
        <input
          placeholder="Enter Destination Title"
          onChange={(event) => setQuery(event.target.value)}
        />
        <i className="fa fa-search search-button"></i>
      </div>

      <div className="tripcard">
        {/* ----------SEARCH-BAR---------- */}
        {destinations
          .filter((destination) => {
            if (query === "") {
              return destination;
            } else if (
              destination.heading.toLowerCase().includes(query.toLowerCase()) ||
              destination.program.toLowerCase().includes(query.toLowerCase())
            ) {
              return destination;
            }
          })
          .map((destination) => (
            <div key={destination.id}>
              <div className="t-card">
                <div className="t-image">
                  <img src={destination.image} alt="image" />
                  <div className="t-image-pret">
                    <h2>{destination.pret}</h2>
                  </div>
                </div>

                <div className="t-content-all">
                  <div className="t-content-top">
                    <div className="t-title">
                      <h4>{destination.paragraph}</h4>
                    </div>

                    <div className="t-content-icon">
                      {/* <div>
                        <p>rating (1-5)</p>
                      </div> */}
                      <div className="t-content-icon-container">
                        {[...Array(destination.rating)].map((index) => (
                          <div key={index} className="primary-icon">
                            <i className="fa-solid fa-star"></i>
                          </div>
                        ))}
                        {[...Array(5 - destination.rating)].map((index) => (
                          <div key={index} className="secondary-icon">
                            <i className="fa-solid fa-star"></i>
                          </div>
                        ))}
                        <div>{destination.rating}</div>
                        {/* <h5>{destination.heading}</h5> */}
                      </div>
                    </div>

                    <div className="t-icon-bar">
                      <div>
                        <i className="fa-regular fa-calendar"></i>
                        {destination.durata} zile
                      </div>
                      <div>
                        <i className="fa-solid fa-trash"></i>Dificultate:{" "}
                        {destination.dificultate}
                      </div>
                      <div>
                        <i className="fa-solid fa-location-dot"></i>
                        {destination.locatie}
                      </div>
                    </div>
                  </div>

                  <div className="t-content-bottom">
                    <div className="t-content-bottom-h5-h6">
                      <p>{destination.program}</p>
                      {/* <h6>{destination.ruta}</h6> */}
                    </div>
                    <Link
                      className="t-button-container"
                      to={`/destination/${destination.id}`}
                      state={destination}
                    >
                      <div className="t-button">
                        <button>Vezi mai mult</button>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Trip;
