import React from "react";
import Navbar from "@/modules/home/components/navbar";
import { Suspense } from "react";

interface Props {
    children: React.ReactNode;
}

const HomeLayout = ({ children }: Props) => {
    return (
        <main className="relative flex min-h-screen flex-col">

            {/* Dotted Background */}
            <div className="pointer-events-none absolute inset-0 z-0 h-full w-full bg-background dark:bg-[radial-gradient(#393e4a_1px,transparent_1px)] dark:bg-[size:16px_16px] bg-[radial-gradient(#daadde_1px,transparent_1px)] bg-[size:16px_16px]" />

            {/* Page Content */}
            <div className="relative z-10 flex min-h-screen flex-col">

                {/* Navbar */}
                <Suspense fallback={<div className="h-16 w-full max-w-5xl mx-auto top-4 mt-4" />}>
                    <Navbar />
                </Suspense>

                {/* Children */}
                <div className="flex-1">
                    {children}
                </div>

            </div>

        </main>
    );
};

export default HomeLayout;