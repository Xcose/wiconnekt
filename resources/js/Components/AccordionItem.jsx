import React from "react";

function AccordionItem() {
    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
                <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                >
                    How long will it take to get fibre connected?
                </button>
            </h2>
            <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
            >
                <div className="accordion-body">
                    This will depend on the turnaround for your installation and
                    activation. Once the line has been installed in your
                    premises it can take up to 5 days for the provider to
                    activate your line. As soon as your Fibre line is active,
                    you can be connected to Wiconnekt Fibre within 24 Hours.
                </div>
            </div>
        </div>
    );
}

export default AccordionItem;
