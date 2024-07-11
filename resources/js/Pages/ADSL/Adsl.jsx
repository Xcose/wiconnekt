import React from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";
import BgImg from "../../../images/bg_4.png";
import BgAdsl from "../../../images/Services/ServicePages/AdslPage.png";

function Adsl({ items }) {
    return (
        <GuestLayout>
            <Head title="ADSL" />
            <div className="tw-w-full tw-px-0">
                <section
                    className="tw-flex tw-flex-row tw-justify-center tw-items-center tw-w-full tw-h-60 tw-relative"
                    style={{ backgroundImage: `url("${BgImg}")` }}
                >
                    <div className="tw-absolute tw-inset-0 tw-bg-black tw-bg-opacity-50 tw-z-10 tw-h-60"></div>
                    <h1 className="tw-mb-2 tw-text-white tw-text-5xl brightness-100 tw-z-20">
                        DSL Services
                    </h1>
                </section>
                <section>
                    <div className="container my-5">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="">
                                    <img
                                        className=""
                                        src={BgAdsl}
                                        alt="ADSL image"
                                    />
                                </div>
                                <hr className="my-4" />
                                <p className="text-muted fs-5">
                                    The new Naked DSL does not require a voice
                                    line. Choose from a range of 5Mbps up to
                                    40Mbps and enjoy the latest DSL connection
                                    at affordable prices.
                                </p>
                            </div>
                            <div className="col-md-6 pt-5 pt-md-0">
                                <div
                                    id="carouselExample"
                                    className="carousel slide w-100 h-100"
                                >
                                    <div className="carousel-inner h-100">
                                        {items.map((item, index) => (
                                            <div
                                                className={
                                                    "carousel-item h-100 " +
                                                    (index == 0 ? "active" : "")
                                                }
                                            >
                                                <div className="d-flex align-items-center justify-content-center h-100">
                                                    <div className="card text-center text-bg-secondary w-75">
                                                        <div className="card-body">
                                                            <p className="card-title fs-3 my-2">
                                                                <strong>
                                                                    {item[0]}
                                                                </strong>
                                                            </p>
                                                            <hr />
                                                            <p className="card-subtitle fs-4 my-2">
                                                                R{item[1]}
                                                            </p>
                                                            <hr />
                                                            <p className="card-text fs-5 my-2">
                                                                <strong>
                                                                    {item[2]}
                                                                </strong>
                                                            </p>
                                                            <hr />
                                                            <a
                                                                className="btn btn-warning my-4"
                                                                href="#"
                                                            >
                                                                Order Package
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <button
                                        className="carousel-control-prev"
                                        type="button"
                                        data-bs-target="#carouselExample"
                                        data-bs-slide="prev"
                                    >
                                        <span
                                            className="carousel-control-prev-icon bg-warning"
                                            aria-hidden="true"
                                        ></span>
                                        <span className="visually-hidden">
                                            Previous
                                        </span>
                                    </button>
                                    <button
                                        className="carousel-control-next"
                                        type="button"
                                        data-bs-target="#carouselExample"
                                        data-bs-slide="next"
                                    >
                                        <span
                                            className="carousel-control-next-icon bg-warning"
                                            aria-hidden="true"
                                        ></span>
                                        <span className="visually-hidden">
                                            Next
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </GuestLayout>
    );
}

export default Adsl;
