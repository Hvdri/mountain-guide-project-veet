import React, { useState } from "react";

import "./Destination.css";

import m1 from "../../assets/m2.jpg";

function DestinationData({ props }) {
  const {
    paragraph,
    descriere,
    locatie,
    deLa,
    panaLa,
    durata,
    dificultate,
    pret,
    image1,
    image2,
    image3,
    image4,
    numDays,
    program,
    rating,
  } = props;

  const rezervareData = [
    {
      id: 1,
      deLa: deLa,
      panaLa: panaLa,
      pret: pret,
      image: image1,
    },
    {
      id: 2,
      deLa: deLa,
      panaLa: panaLa,
      pret: pret,
      image: image2,
    },
    {
      id: 3,
      deLa: deLa,
      panaLa: panaLa,
      pret: pret,
      image: image3,
    },
    {
      id: 4,
      deLa: deLa,
      panaLa: panaLa,
      pret: pret,
      image: image4,
    },
  ];

  // show the photo with this index
  const [currentIndex, setCurrentIndex] = useState(0);

  // move to the next photo
  // if we are at the end, go to the first photo
  const next = () => {
    setCurrentIndex((currentIndex + 1) % rezervareData.length);
  };

  // move to the previous photo
  // if we are at the beginning, go to the last photo
  const prev = () => {
    setCurrentIndex(
      (currentIndex - 1 + rezervareData.length) % rezervareData.length
    );
  };

  const itinerary = [];

  for (let i = 1; i <= numDays; i++) {
    itinerary.push(
      <div key={i}>
        <h3>Ziua {i}</h3>
        <p>{program}</p>
      </div>
    );
  }

  return (
    <div className="big-container">
      <div className="container">
        <div className="slider-container">
          {rezervareData.map((photo) => (
            <div
              key={photo.id}
              /* if the photo is the current photo, show it */
              className={
                rezervareData[currentIndex].id === photo.id
                  ? "fade"
                  : "slide fade"
              }
            >
              <div className="photo-container">
                <img src={photo.image} alt="image" className="photo" />
              </div>
            </div>
          ))}
          <div className="container-text">
            <div className="titlu">
              <h1>{paragraph}</h1>
            </div>
              <div className="t-content-icon-container2">
                {[...Array(props.rating)].map((index) => (
                  <div key={index} className="primary-icon">
                    <i className="fa-solid fa-star"></i>
                  </div>
                ))}
                {[...Array(5 - props.rating)].map((index) => (
                  <div key={index} className="secondary-icon">
                    <i className="fa-solid fa-star"></i>
                  </div>
                ))}
                <p>{props.rating}</p>
              </div>
            <div className="pret">
              <s>{pret}</s>
              <h2>{pret}</h2>
            </div>

            <div className="butoane">
              <button>Vezi rezervari</button>
              <button>Informatii suplimentare</button>
            </div>
          </div>
          {/* Previous button */}
          <button onClick={prev} className="prev">
            &lt;
          </button>

          {/* Next button */}
          <button onClick={next} className="next">
            &gt;
          </button>
        </div>
      </div>

      {/* Render dots indicator */}
      <div className="dots">
        {rezervareData.map((photo) => (
          <span
            key={photo.id}
            // highlight the dot that corresponds to the current photo
            className={
              rezervareData[currentIndex].id === photo.id ? "dot active" : "dot"
            }
            // when the user clicks on a dot, go to the corresponding photo
            onClick={() => setCurrentIndex(rezervareData.indexOf(photo))}
          ></span>
        ))}
      </div>

      <div className="descriere-container">
        {/* <div className="rezervare">
          <div className="rezervare-titlu">
            <h1>Rezerva Traseu</h1>
          </div>

          <table className="rezervare-lista">
            <thead>
              <tr className="rezervare-head">
                <th>De la data</th>
                <th>Pana la data</th>
                <th>Pret</th>
                <th>Rezerva</th>
              </tr>
            </thead>
            <tbody>
              {rezervareData.map((rezervare) => (
                <tr className="rezervare-row">
                  <td>{rezervare.deLa}</td>
                  <td>{rezervare.panaLa}</td>
                  <td>{rezervare.pret}</td>
                  <td className="rezervare-buton">
                    <button>Rezerva</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> */}

        {/* <div>
          Descriere Traseu -nr zile -transport -echipa -nr de persoane din grup
          -Dificultate Traseu -locatie or smth --descrierea traseului--
        </div> */}
        {/* <div>Harta</div> */}

        <div className="descriere-bottom">
          <div className="descriere-stanga">
            <div className="descriere-traseu-titlu">
              <h1>Descriere Titlu</h1>
            </div>
            <div className="descriere-icons">
              <div>
                <i className="fa-solid fa-calendar-days">
                  <h5>Durata</h5>
                </i>
                <p>{durata} zile,</p>
              </div>
              <div>
                <i className="fa-solid fa-people-group">
                  <h5>Echipa</h5>
                </i>
                <p>2 experti,</p>
              </div>
              <div>
                <i className="fa-solid fa-person-hiking">
                  <h5>Dificultate</h5>
                </i>
                <p>
                  {/* uppercase */}
                  {dificultate},
                </p>
              </div>
              <div>
                <i className="fa-solid fa-location-dot">
                  <h5>Locatie</h5>
                </i>
                <p>{locatie},</p>
              </div>
              <div>
                <i className="fa-solid fa-location-dot">
                  <h5>Grup</h5>
                </i>
                <p>Aprox. 20 aventurieri,</p>
              </div>
              <div>
                <i className="fa-solid fa-location-dot">
                  <h5>Mancare/Transport</h5>
                </i>
                <p>{locatie},</p>
              </div>
            </div>

            <div className="descriere-traseu">
              <h2>Descriere Traseu</h2>
              <p>{descriere}</p>
            </div>
          </div>
          <div className="descriere-dreapta">
            <img src={m1}></img>
          </div>
        </div>

        <div className="descriere-itenerariu">
          <h2>Itenerariu zi cu zi</h2>
          {itinerary}
        </div>
        <div className="descriere-map">
          <h2>Harta</h2>
        </div>
        <div className="descriere-info">
          <h2>Informatii Tehnice</h2>
        </div>
      </div>
    </div>
  );
}

export default DestinationData;
