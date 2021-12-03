import React from "react";

export default function Main(props) {
  return (
    <main>
      <div className="flexbox">
        <img src={props.imageUrl} className="cardimg" />

        <div className="flexdescription">
          <div className="countrymaps">
            <i class="fas fa-map-marker-alt fa-2xs"></i>
            <p className="country">{props.location}</p>
            <p className="mapslink">
              <a href={props.googleMapsUrl}>View on Google Maps</a>
            </p>
          </div>
          <h1 className="h1title">{props.title}</h1>
          <p className="date">
            {props.startDate} - {props.endDate}
          </p>
          <p className="paragraph">{props.description}</p>
        </div>
        
      </div>
      <hr/>
    </main>
  );
}
