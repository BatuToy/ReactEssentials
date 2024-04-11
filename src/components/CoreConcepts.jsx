import React from "react";
import Section from "./Sections";
import CoreConcept from './CoreConcept'
import { CORE_CONCEPTS } from "../data";


function CoreConcepts () {
    return (
        <Section title = 'Core Concepts' id="core-concepts">
          <ul>
            {CORE_CONCEPTS.map( (conceptItem) =>  (
               <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </Section>
    );
}

export default CoreConcepts;