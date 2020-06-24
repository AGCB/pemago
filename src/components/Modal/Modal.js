import React from 'react';
import './modal.css';

function Modal({
  backgroundImage,
  name,
  startDate,
  endDate,
  description,
  locationName,
  streetAddress,
  addressLocality,
  postalCode,
  addressRegion,
  offerURL,
  setIsModal,
  }) {
  return (
    <div
      className="modal"
      >
      <div
        className="modal-top"
        style={{
        "backgroundImage": `linear-gradient(rgba(0,0,0, 0) 70%,rgba(0,0,0, 1) 100%), url(${backgroundImage})`,
        "backgroundRepeat": "no-repeat",
        "background-size": "100%",
        "backgroundPosition": "bottom"}}>
        <div className="close-modal"
          onClick={e => {
            setIsModal(false)
          }}>
          <span style={{"transform":"scaleX(1.2)"}}>X</span>
        </div>
        <div className="header-info">

          <span>{`${locationName}, ${addressLocality}`}</span>
          <span className="city-meetup">{name}</span>
        </div>
      </div>
      <div className="modal-middle">

        <h3>Date & Time</h3>
          <span>{startDate}</span>
          <span>{endDate}</span>
        <h3>Description</h3>
          <span>{description}</span>
        <h3>Location</h3>
          <span>{locationName}</span>
          <span>{streetAddress}</span>
          <span>{`${addressLocality}, ${addressRegion}, ${postalCode}`}</span>
        {/*

          date and time
         date
         time
         description
         long description...
         readmore expansion
         location
         address
         get directions link
         map
          */}

      </div>
      <div className="modal-bottom-wrapper">
        <div className="modal-button">
          <span className="modal-button">RSVP</span>
          <img
            className="rsvp-icon"
            src="https://cdn3.iconfinder.com/data/icons/iconano-web-stuff/512/108-Share-128.png"/>

        </div>
        </div>

    </div>
  )
}

export default Modal;


/*

background-image: linear-gradient(
    rgba(0, 0, 0, 0.0) 0%,
    rgba(255, 0, 0, 1.0) 100%
  );


 */
