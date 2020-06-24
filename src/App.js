import React, {useState, useEffect} from 'react';
import Modal from './components/Modal/Modal.js';
import './App.css';

function App() {
  const [ dataload, setDataload] = useState(false);
  const [ data, setData ] = useState("");
  const [ isModal, setIsModal ] = useState(false);
  function handleButtonClick(e) {
    setIsModal(true)
  }


  useEffect(() => {
    fetch("https://www.mocky.io/v2/5d3752f1310000fc74b0788d")
    .then(res=> res.json())
    .then(data => {
        setDataload(data)
        setData(data)
    })
    .catch(e => {
      console.log('something went wrong with the API CAll');
      console.log(e);
      setData(null)
    })
  },[])

  const {
    image,
    name,
    startDate,
    endDate,
    description,
   } = data;

   let locationName;
   let streetAddress;
   let addressLocality;
   let postalCode;
   let addressRegion;
   let offerURL;

   if(data)
   {
      locationName = data.location.name;
      streetAddress = data.location.address.streetAddress;
      addressLocality = data.location.address.addressLocality;
      postalCode = data.location.address.postalCode;
      addressRegion = data.location.address.addressRegion;
      offerURL = data.offers.url;
   }


  return (
    <div className="App">
      {
        !isModal ?
        <button
           style={{"color": dataload ? 'black':'white'}}
           onClick={handleButtonClick}
           disabled={dataload===false}
        >CLICK TO TRIGGER MODAL</button> :
        <Modal
          backgroundImage={image}
          name={name}
          startDate={startDate}
          endDate={endDate}
          description={description}
          locationName={locationName}
          streetAddress={streetAddress}
          addressLocality={addressLocality}
          postalCode={postalCode}
          addressRegion={addressRegion}
          offerURL={offerURL}
          setIsModal={setIsModal}
          />
      }




    </div>
  );
}

export default App;
