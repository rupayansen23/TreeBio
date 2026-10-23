import { Suspense } from "react";
import { onBordUser } from "@/modules/auth/actions";

async function UserOnboarding() {
    await onBordUser();
    return (
        <div className="min-h-screen">
            <main className="text-center space-y-8 py-32">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-zinc-...">
                        Everything you are.
                        <br />
                        <span className="text-[#41B313]">In one simple link.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Join 70M+ people using TreeBio for their link in bio. One link to
                        help you share everything you create, curate and sell from your
                        social media profiles.
                    </p>
                </div>

            </main>
        </div>
    )
}

function UserSkeleton() {
    return <div>Loading...</div>;
}

export default function HomePage() {
    return (
        <main>
            <Suspense fallback={<UserSkeleton />}>
                <UserOnboarding />
            </Suspense>
        </main>
    );
}