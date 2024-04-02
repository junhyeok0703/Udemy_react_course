import React from "react";
import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data";

const CoreConcepts = () => {
  return (
    <section id="core-concepts">
      <h2>Time to get started!</h2>
      <ul>
        {CORE_CONCEPTS.map((item, index) => (
          <CoreConcept key={index} {...item} />
          // <CoreConcepts {...CORE_CONCEPTS[1]} />
          //<CoreConcepts {...CORE_CONCEPTS[2]} />
          //<CoreConcepts {...CORE_CONCEPTS[3]} />
        ))}
      </ul>
    </section>
  );
};

export default CoreConcepts;
