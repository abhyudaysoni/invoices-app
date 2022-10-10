import React from "react";
import { useState } from "react";
import { Container } from "./styles";
import clear from "../../../assets/icons/clear.svg";
import save from "../../../assets/icons/save.svg";

const BillerAddressInput = (props) => {
  const [street, setStreet] = useState(props?.billerAddress?.street || "");
  const [city, setCity] = useState(props?.billerAddress?.city || "");
  const [area, setArea] = useState(props?.billerAddress?.area || "");
  const [country, setCountry] = useState(props?.billerAddress?.country || "");
  const [zip, setZip] = useState(props?.billerAddress?.zip || "");
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
  const saveBAddressHandler = () => {
    props.setInvoice({
      ...props.invoice,
      billerAddress: {
        street: street,
        city: city,
        area: area,
        country: country,
        zip: zip,
      },
    });
  };
  const clearBAddressHandler = () => {
    setStreet("");
    setArea("");
    setCity("");
    setCountry("");
    setZip("");
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
            onClick={clearBAddressHandler}
            alt="clear"
          />
          <img
            className="form-actions"
            src={save}
            onClick={saveBAddressHandler}
            alt="save"
          />
        </div>
      </div>
    </Container>
  );
};

export default BillerAddressInput;
