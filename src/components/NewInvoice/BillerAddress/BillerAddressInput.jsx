import React from "react";
import { Container } from "./styles";
import { useDispatch } from "react-redux";

const BillerAddressInput = (props) => {
  const dispatch = useDispatch();
  const { street, area, country, zip, city } = props.invoice.billerAddress;
  const streetHandler = (e) => {
    dispatch(
      props.setInvoice({
        ...props.invoice,
        billerAddress: {
          ...props.invoice.billerAddress,
          street: e.target.value,
        },
      })
    );
  };
  const cityHandler = (e) => {
    dispatch(
      props.setInvoice({
        ...props.invoice,
        billerAddress: {
          ...props.invoice.billerAddress,
          city: e.target.value,
        },
      })
    );
  };
  const areaHandler = (e) => {
    dispatch(
      props.setInvoice({
        ...props.invoice,
        billerAddress: {
          ...props.invoice.billerAddress,
          area: e.target.value,
        },
      })
    );
  };
  const countryHandler = (e) => {
    dispatch(
      props.setInvoice({
        ...props.invoice,
        billerAddress: {
          ...props.invoice.billerAddress,
          country: e.target.value,
        },
      })
    );
  };
  const zipHandler = (e) => {
    dispatch(
      props.setInvoice({
        ...props.invoice,
        billerAddress: {
          ...props.invoice.billerAddress,
          zip: e.target.value,
        },
      })
    );
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

export default BillerAddressInput;
