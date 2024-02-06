import { useState } from "react";
import { sanitize } from "../../../Hooks/Api";


const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [searchValue, setSearchValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        window.location.href = `/search/${searchValue}`;
    };

    return (
        <>
            <div className="relative font-poppins z-[1] bg-bg-kumanime border-b-2 border-bg-kumanime-semi">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex justify-between items-center py-6 md:space-x-10">
                        <div className="flex items-center gap-8">
                            <div className="-mr-2 -my-2 md:hidden">
                                <button
                                    type="button"
                                    className="bg-bg-kumanime rounded-md p-2 items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-bg-kumanime-semi focus:outline-none focus:ring-2 focus:ring-inset focus:ring-kumanime z-[0]"
                                    onClick={() => setOpen(!open)}
                                >
                                    <span className="sr-only">Open menu</span>
                                    <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    </svg>
                                </button>
                            </div>

                            <div>
                                <a href="/" className="text-xl md:text-2xl font-bold text-kumanime">
                                    Kumanime
                                </a>
                            </div>
                        </div>

                        <div className="md:hidden items-center z-[1] ml-3">
                            <form action="/" onSubmit={handleSubmit} className="flex" autoComplete="off">
                                <div className="border bg-white relative rounded-sm flex group-focus:border-kumanime">
                                    <input name="search" id="search" className="transition-all duration-200 outline-none border-0 w-full rounded-xl p-2" type="text" onChange={(e) => setSearchValue(e.target.value)} placeholder="Search anime..." required />
                                    <button type="submit">
                                        <span className="w-auto flex justify-end items-center text-gray-500 p-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                            </form>
                        </div>

                        <nav className="hidden md:flex space-x-1">
                            <a
                                href="/"
                                className="px-3 py-2 rounded-md transition-all duration-200 text-base font-medium text-gray-200 hover:text-white hover:bg-kumanime"
                            >
                                Home
                            </a>
                            <a
                                href="/completed/page/1"
                                className="px-3 py-2 rounded-md transition-all duration-200 text-base font-medium text-gray-200 hover:text-white hover:bg-kumanime"
                            >
                                Completed
                            </a>
                            <a
                                href="/ongoing/page/1"
                                className="px-3 py-2 rounded-md transition-all duration-200 text-base font-medium text-gray-200 hover:text-white hover:bg-kumanime"
                            >
                                Ongoing
                            </a>
                            {/* <a
                                href="/schedule"
                                className="px-3 py-2 rounded-md transition-all duration-200 text-base font-medium text-gray-200 hover:text-white hover:bg-kumanime"
                            >
                                Jadwal
                            </a> */}
                        </nav>

                        <div className="hidden md:flex items-center">
                            <form action="/" onSubmit={handleSubmit} className="flex" autoComplete="off">
                                <div className="bg-white border relative rounded-sm flex">
                                    <input name="search" id="search" className="border-white outline-none border-0 w-full rounded-xl p-2" type="text" onChange={(e) => setSearchValue(e.target.value)} placeholder="Search anime..." required/>
                                    <button type="submit">
                                        <span className="w-auto flex justify-end items-center text-gray-500 p-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div
                className={
                    open
                    ? "opacity-1 scale-100 absolute top-0 inset-x-0 transform transition-all duration-200 origin-top-left md:hidden"
                    : "opacity-0 transition-all duration-200 scale-0 absolute top-0 inset-x-0 md:hidden"
                }
                >
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-bg-kumanime divide-y-2 divide-gray-50 p-1">
                        <div className="pt-5 pb-6 px-5 -ml-2">
                            <div className="flex items-center gap-7">
                                <div>
                                    <button
                                        type="button"
                                        className="bg-bg-kumanime rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-bg-kumanime-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                        onClick={() => setOpen(!open)}
                                    >
                                        <span className="sr-only">Close menu</span>
                                        <svg
                                        className="h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                        </svg>
                                    </button>
                                </div>
                                <div>
                                    <a href="#" className="text-xl md:text-2xl ml-[2px] font-bold text-kumanime">
                                        Kumanime
                                    </a>
                                </div>
                                
                            </div>
                            <div className="mt-6">
                                <nav className="grid gap-y-4 text-center">
                                    <a
                                        href="/"
                                        className="-m-1 p-3 rounded-md hover:bg-bg-kumanime-2 transition-all text-sm md:text-base font-medium text-white"
                                    >Home</a>
                                    <a
                                        href="/completed/page/1"
                                        className="-m-1 p-3 rounded-md hover:bg-bg-kumanime-2 transition-all text-sm md:text-base font-medium text-white"
                                    >Completed Anime</a>
                                    <a
                                        href="/ongoing/page/1"
                                        className="-m-1 p-3 rounded-md hover:bg-bg-kumanime-2 transition-all text-sm md:text-base font-medium text-white"
                                    >Ongoing Anime</a>
                                    {/* <a
                                        href="/schedule"
                                        className="-m-1 p-3 rounded-md hover:bg-bg-kumanime-2 transition-all text-sm md:text-base font-medium text-white"
                                    >Jadwal</a> */}
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
        );
    };

export default Navbar;