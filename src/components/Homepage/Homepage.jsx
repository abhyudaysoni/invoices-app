import React, { useState } from "react";
import { Container } from "./styles";
import HomepageHeader from "./HomepageHeader/HomepageHeader";
import HomepageBody from "./HomepageBody/HomepageBody";

export default function Homepage(props) {
  const [filterOptionVisibility, setFilterOptionVisibility] = useState(false);
  const filterVisibilityHandler = () => {
    setFilterOptionVisibility((prev) => !prev);
  };

  return (
    <Container>
      <section className="default-homepage">
        <HomepageHeader
          filterOptionVisibility={filterOptionVisibility}
          filterVisibilityHandler={filterVisibilityHandler}
        />
      </section>
      <HomepageBody status={props.status} />
    </Container>
  );
}
