import React from "react";
import { Head } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";
import BannerImg from "../../images/MainBanner.png";
import Slider from "../Components/ImageCarousel";

function Home() {
    return (
        <GuestLayout>
            <Head title="Home" />
            <div className="vh-100 d-flex flex-column">
                <div className="row flex-grow-1">
                    <div className="col col-md-6 border bg-white d-flex justify-content-center align-items-center">
                        <div className="text-center">
                            <div className="w-75">
                                <Slider />
                            </div>
                            <h2 className="text-3xl text-center mb-2">
                                Need fast, reliable internet <br />
                                connection?
                            </h2>
                            <button className="bg-warning hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded">
                                Learn More
                            </button>
                        </div>
                    </div>
                    <div className="col border p-0 d-flex d-md-none justify-content-center align-items-center">
                        <img
                            src={BannerImg}
                            className="object-fit-scale w-80"
                        />
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
        </GuestLayout>
    );
}

export default Home;
