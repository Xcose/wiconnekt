import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="tw-font-semibold tw-text-xl tw-text-gray-800 tw-leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="tw-py-12">
                <div className="tw-max-w-7xl tw-mx-auto tw-sm:px-6 tw-lg:px-8">
                    <div className="tw-bg-white tw-overflow-hidden tw-shadow-sm tw-sm:rounded-lg">
                        <div className="tw-p-6 tw-text-gray-900">
                            Welcome {auth.user.name}!
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
