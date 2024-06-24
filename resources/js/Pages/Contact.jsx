import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";
import { Menu, Transition } from "@headlessui/react";
import IMG from "../../images/Service2.png";
import BgImg from "../../images/bg_4.png";
export default function Contact() {
    return (
        <GuestLayout>
            <Head title="Contact" />
            <div className="tw-w-full tw-px-0">
                <section
                    className="tw-flex tw-flex-row tw-justify-center tw-items-center tw-w-full tw-h-60 tw-relative"
                    style={{ backgroundImage: `url("${BgImg}")` }}
                >
                    <div class="tw-absolute tw-inset-0 tw-bg-black tw-bg-opacity-50 tw-z-10 tw-h-60"></div>
                    <h1 className="tw-mb-2 tw-text-white tw-text-5xl brightness-100 tw-z-20">
                        Contact Us
                    </h1>
                </section>
            </div>
        </GuestLayout>
    );
}
