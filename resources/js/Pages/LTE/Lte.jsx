import React from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";
import BgImg from "../../../images/bg_4.png";
import BgLte from "../../../images/Services/ServicePages/LtePage.png";
import ImgTelkom from "../../../images/Services/Telkom.png";
import ImgMTN from "../../../images/Services/Mtn.png";

function Lte() {
    return (
        <GuestLayout>
            <Head title="LTE" />
            <div className="tw-w-full tw-px-0">
                <section
                    className="tw-flex tw-flex-row tw-justify-center tw-items-center tw-w-full tw-h-60 tw-relative"
                    style={{ backgroundImage: `url("${BgImg}")` }}
                >
                    <div className="tw-absolute tw-inset-0 tw-bg-black tw-bg-opacity-50 tw-z-10 tw-h-60"></div>
                    <h1 className="tw-mb-2 tw-text-white tw-text-5xl brightness-100 tw-z-20">
                        LTE Services
                    </h1>
                </section>
                <section>
                    <div className="container my-5">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="">
                                    <img
                                        className=""
                                        src={BgLte}
                                        alt="LTE image"
                                    />
                                </div>
                                <hr className="my-4" />
                                <p className="text-muted fs-5">
                                    The perfect alternative if you don't have
                                    fibre coverage. This service uses LTE mobile
                                    network. It does not require any
                                    installations. This requires you to have a
                                    4G compatible device. Services are subject
                                    to availability of coverage.
                                </p>
                            </div>
                            {/* LTE Providers */}
                            <div className="col-md-6 pt-5 pt-md-0">
                                <h3 className="fw-bold fs-5">
                                    Select Provider:
                                </h3>
                                <div className="d-flex align-items-center justify-content-center h-100">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <a href={route("telkom")}>
                                                <div>
                                                    <img
                                                        src={ImgTelkom}
                                                        alt="Telkom Logo"
                                                    />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-md-6">
                                            <a href={route("mtn")}>
                                                <div>
                                                    <img
                                                        src={ImgMTN}
                                                        alt="MTN Logo"
                                                    />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </GuestLayout>
    );
}

export default Lte;
