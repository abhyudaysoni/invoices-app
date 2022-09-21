import React from "react";
import { useState } from "react";
import { Container } from "./styles";

const AddressInput = (props) => {
  const [street, setStreet] = useState(props?.address?.street || "");
  const [city, setCity] = useState(props?.address?.city || "");
  const [area, setArea] = useState(props?.address?.area || "");
  const [country, setCountry] = useState(props?.address?.country || "");
  const [zip, setZip] = useState(props?.address?.zip || "");
  const streetHandler = (e) => {
    setStreet(e.target.value);
  };
  const cityHandler = (e) => {
    setCity(e.target.value);
  };
  const areaHandler = (e) => {
    setArea(e.target.value);
  };
  const countryHandler = (e) => {
    setCountry(e.target.value);
  };
  const zipHandler = (e) => {
    setZip(e.target.value);
  };
  return (
    <Container>
      <div className="label-input">
        <label htmlFor="street">Street</label>
        <input
          id="street"
          type="text"
          onChange={streetHandler}
          value={street}
        />
      </div>
      <div className="part2">
        <div className="label-input">
          <label htmlFor="city">City</label>
          <input id="city" type="text" onChange={cityHandler} value={city} />
        </div>
        <div className="label-input">
          <label htmlFor="area">Area</label>
          <input id="area" type="text" onChange={areaHandler} value={area} />
        </div>
        <div className="label-input">
          <label htmlFor="country">Country</label>
          <input
            id="country"
            type="text"
            onChange={countryHandler}
            value={country}
          />
        </div>
        <div className="label-input">
          <label htmlFor="zip">Zip</label>
          <input id="zip" type="text" onChange={zipHandler} value={zip} />
        </div>
      </div>
    </Container>
  );
};

export default AddressInput;
