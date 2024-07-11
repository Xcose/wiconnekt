import React from "react";

function Accordion({ children }) {
    return (
        <div className="accordion accordion-flush" id="accordionExample">
            {children}
        </div>
    );
}

export default Accordion;
