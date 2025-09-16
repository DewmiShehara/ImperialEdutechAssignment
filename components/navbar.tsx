import Link from "next/link";

export const Navbar = () => {
    return (

        <nav className="w-full bg-white shadow-sm border-b">
            <br /><br />
            <div className="max-w-7xl mx-auto text-center py-6">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Master Your Career Growth with Our Top-Rated, <br className="hidden md:block" />
                    Expert-Led Courses
                </h1>
                <br /><br />
            </div>
            <div className="max-w-7xl mx-auto flex flex-wrap gap-3 justify-center">
                <Link
                    href="/all"
                    className="px-6 py-3 text-sm font-medium rounded-full border border-gray-300 hover:bg-gray-100 transition"
                >
                    All Courses
                </Link>
                <Link
                    href="/projectManagement"
                    className="px-6 py-3 text-sm font-medium rounded-full border border-gray-300 bg-yellow-200 text-white hover:bg-white-800 transition"
                >
                    Project Management
                </Link>
                <Link
                    href="/business-management"
                    className="px-6 py-3 text-sm font-medium rounded-full border border-gray-300 hover:bg-gray-100 transition"
                >
                    Business Management
                </Link>
                <Link
                    href="/employability"
                    className="px-6 py-3 text-sm font-medium rounded-full border border-gray-300 hover:bg-gray-100 transition"
                >
                    Employability Skills
                </Link>
                <Link
                    href="/life-learning"
                    className="px-6 py-3 text-sm font-medium rounded-full border border-gray-300 hover:bg-gray-100 transition"
                >
                    Life Learning
                </Link>
            </div>
        </nav>
    );
};
