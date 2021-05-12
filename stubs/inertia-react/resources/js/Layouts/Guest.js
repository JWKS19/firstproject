import ApplicationLogo from "../Components/UI/ApplicationLogo";
import React, { useEffect } from "react";
import { InertiaLink } from "@inertiajs/inertia-react";

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            <div>
                <InertiaLink href="/">
                    <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                </InertiaLink>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
