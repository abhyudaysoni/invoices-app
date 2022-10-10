import React from "react";
import { useState } from "react";
import { Container } from "./styles";
import clear from "../../../assets/icons/clear.svg";
import save from "../../../assets/icons/save.svg";

const ClientAddressInput = (props) => {
  const [street, setStreet] = useState(props?.clientAddress?.street || "");
  const [city, setCity] = useState(props?.clientAddress?.city || "");
  const [area, setArea] = useState(props?.clientAddress?.area || "");
  const [country, setCountry] = useState(props?.clientAddress?.country || "");
  const [zip, setZip] = useState(props?.clientAddress?.zip || "");
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
  const clearCAddressHandler = () => {
    setStreet("");
    setArea("");
    setCity("");
    setCountry("");
    setZip("");
  };
  const saveCAddressHandler = () => {
    props.setInvoice({
      ...props.invoice,
      clientAddress: {
        street: street,
        city: city,
        area: area,
        country: country,
        zip: zip,
      },
    });
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
        <div>
          <img
            className="form-actions"
            src={clear}
            onClick={clearCAddressHandler}
            alt="clear"
          />
          <img
            className="form-actions"
            src={save}
            onClick={saveCAddressHandler}
            alt="save"
          />
        </div>
      </div>
    </Container>
  );
};

export default ClientAddressInput;
