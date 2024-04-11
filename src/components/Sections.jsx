import React from "react";
import { Children } from "react";

function Section ({ title , children , ...props}) {
    return (
        <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}

export default Section;