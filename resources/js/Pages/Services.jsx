import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";
import { Menu, Transition } from "@headlessui/react";
import IMG from "../../images/Service2.png";
import BgImg from "../../images/bg_4.png";

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
                    <div className="tw-grid tw-grid-cols-2 tw-gap-4 tw-h-full">
                        <div className="tw-h-full tw-p-10">
                            <h1 className="tw-p-5 tw-text-3xl">About</h1>
                            <p className="tw-text-lg tw-text-gray-400">
                                We provide and support an array of internet
                                services throughout South Africa. We aim to have
                                broadband solutions for every home and business
                                and to ensure that you get connected seamlessly
                                and stay connected! We also operate a fully
                                managed 24 x 7 support system in order to offer
                                our clients peace of mind, knowing that there is
                                always a ‘tech-savvy‘ assistant available to
                                assist you Unlike any other ISP, you do not
                                necessarily need any airtime to get through to
                                us. We are just a WhatsApp text away for super
                                fast assistance.  Being there for our clients is
                                of utmost importance to us, and we continue to
                                invest in new systems and technologies to help
                                us give our clients the Wiconnekt experience.
                            </p>
                        </div>
                        <div className="tw-h-full tw-flex tw-justify-center">
                            <img
                                src={IMG}
                                className="tw-object-contain tw-w-72"
                                alt="About image"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </GuestLayout>
    );
}
