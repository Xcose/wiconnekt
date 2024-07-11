import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";
import { Menu, Transition } from "@headlessui/react";
import BannerImg from "../../images/Service2.png";
import BgImg from "../../images/bg_4.png";
import adslIMG from "../../images/Services/Adsl.png";
import lteIMG from "../../images/Services/Lte.png";
import voipIMG from "../../images/Services/VoIP.png";
import fibreIMG from "../../images/Services/Fibre.png";

export default function Services() {
    return (
        <GuestLayout>
            <Head title="Services" />
            <div className="tw-w-full tw-px-0">
                <section
                    className="tw-flex tw-flex-row tw-justify-center tw-items-center tw-w-full tw-h-60 tw-relative"
                    style={{ backgroundImage: `url("${BgImg}")` }}
                >
                    <div className="tw-absolute tw-inset-0 tw-bg-black tw-bg-opacity-50 tw-z-10 tw-h-60"></div>
                    <h1 className="tw-mb-2 tw-text-white tw-text-5xl brightness-100 tw-z-20">
                        Services
                    </h1>
                </section>
                <section>
                    <div className="container">
                        <div className="row no-gutters">
                            <div className="col col-md-6 wrap-about py-5 ftco-animate">
                                <div className="heading-section mt-5 mb-4">
                                    <div className="pl-lg-5 ml-md-5">
                                        <p className="mb-4 fs-2 fw-bold">
                                            Fast and reliable connection
                                        </p>
                                    </div>
                                </div>
                                <div className="pl-lg-5 ml-md-5">
                                    <p className="text-muted fs-5">
                                        Unlike any other ISP, you do not
                                        necessarily need any airtime to get
                                        through to us. We are just a WhatsApp
                                        text away for bolt-speed assistance.
                                    </p>

                                    <h3 className="mt-5 fw-bold fs-5">
                                        Select from our services below:
                                    </h3>
                                    <div className="thumb d-flex row">
                                        <div className="col-md-6">
                                            <a
                                                href={route("adsl")}
                                                className="text-center"
                                            >
                                                <div className="img">
                                                    <img
                                                        src={adslIMG}
                                                        height="100%"
                                                        width="100%"
                                                    />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-md-6">
                                            <a
                                                href={route("lte")}
                                                className="text-center"
                                            >
                                                <div className="img">
                                                    <img
                                                        src={lteIMG}
                                                        height="100%"
                                                        width="100%"
                                                    />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-md-6">
                                            <a
                                                href={route("voip")}
                                                className="text-center"
                                            >
                                                <div className="img">
                                                    <img
                                                        src={voipIMG}
                                                        height="100%"
                                                        width="100%"
                                                    />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-md-6">
                                            <a href="#" className="text-center">
                                                <div className="img">
                                                    <img
                                                        src={fibreIMG}
                                                        height="100%"
                                                        width="100%"
                                                    />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col col-md-6 border d-none d-md-flex justify-content-center align-items-center"
                                style={{
                                    backgroundImage: `url("${BannerImg}")`,
                                    backgroundPosition: "center",
                                    backgroundSize: "cover",
                                }}
                            ></div>
                        </div>
                    </div>
                </section>
            </div>
        </GuestLayout>
    );
}
