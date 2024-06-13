import { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";

export default function Guest({ children }) {
    return (
        <div>
            <nav className=" bg-gray tw-border-b tw-border-gray-100">
                <div className="tw-fixed tw-max-w-7xl tw-mx-auto tw-px-4 sm:tw-px-6 lg:tw-px-8 tw-z-30 tw-w-full">
                    <div className="tw-relative tw-flex tw-flex-row tw-justify-between tw-h-16 tw-z-30">
                        <div className="tw-flex">
                            <div className="shrink-0 tw-flex tw-items-center">
                                <Link href="/">
                                    <ApplicationLogo className="tw-block tw-h-9 tw-w-auto tw-fill-current tw-text-gray-800" />
                                </Link>
                            </div>
                            <div className="tw-hidden tw-space-x-8 sm:tw--my-px sm:ms-10 sm:tw-flex"></div>
                        </div>
                        <nav className="tw-flex tw-flex-1 tw-justify-end tw-space-x-8 bg-gray tw-right-auto">
                            <NavLink
                                href={route("home")}
                                active={route().current("home")}
                            >
                                Home
                            </NavLink>
                            <NavLink
                                href={route("about")}
                                active={route().current("about")}
                            >
                                About
                            </NavLink>
                            <NavLink
                                href={route("services")}
                                active={route().current("services")}
                            >
                                Services
                            </NavLink>
                            <NavLink
                                href={route("faq")}
                                active={route().current("faq")}
                            >
                                FAQ
                            </NavLink>
                            <NavLink
                                href={route("contact")}
                                active={route().current("contact")}
                            >
                                Contact
                            </NavLink>
                            <NavLink
                                href={route("login")}
                                active={route().current("login")}
                            >
                                Login
                            </NavLink>
                            <NavLink
                                href={route("register")}
                                active={route().current("register")}
                            >
                                Register
                            </NavLink>
                        </nav>
                    </div>
                </div>
            </nav>
            <main className="min-vh-100">{children}</main>
        </div>
    );
}
