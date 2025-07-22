import { useState } from 'react'
import {
    FaHeart,
    FaShoppingCart,
    FaUser,
    FaMobile,
    FaLaptop,
    FaClock,
    FaCamera,
    FaHeadphones,
    FaGamepad,
    FaBars,
    FaTimes,
    FaSearch,
} from 'react-icons/fa'
import { BsSmartwatch } from "react-icons/bs";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isSearchOpen, setIsSearchOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen)
    }

    return (
        <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <nav className="w-full py-3 bg-white">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 sm:space-x-4 md:space-x-10 flex-1">
                            <div className="text-black text-xl font-bold flex-shrink-0">
                                Cyber
                            </div>

                            {/* Desktop Search Bar */}
                            <div className="hidden md:block flex-1 max-w-md lg:max-w-lg xl:max-w-xl relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FaSearch className="h-4 w-4 text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="w-full pl-10 pr-5 py-3 bg-gray-100 border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                                />
                            </div>

                            {/* Mobile Search Bar - Always visible on small screens */}
                            <div className="md:hidden flex-1 max-w-xs relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FaSearch className="h-4 w-4 text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="w-full pl-10 pr-3 py-2 text-sm bg-gray-100 border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                                />
                            </div>

                            <div className="hidden md:flex items-center space-x-4 lg:space-x-10">
                                <a href="#" className="text-gray-400 font-bold hover:text-black transition-colors duration-200 whitespace-nowrap">
                                    Home
                                </a>
                                <a href="#" className="text-gray-400 font-bold hover:text-black transition-colors duration-200 whitespace-nowrap">
                                    About
                                </a>
                                <a href="#" className="text-gray-400 font-bold hover:text-black transition-colors duration-200 whitespace-nowrap">
                                    Contact us
                                </a>
                                <a href="#" className="text-gray-400 font-bold hover:text-black transition-colors duration-200 whitespace-nowrap">
                                    Blog
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center space-x-2 sm:space-x-4 md:space-x-8 flex-shrink-0">
                            <button
                                className="md:hidden text-black hover:text-gray-400 transition-colors duration-200"
                                onClick={toggleMenu}
                            >
                                {isMenuOpen ? (
                                    <FaTimes className="w-5 h-5" />
                                ) : (
                                    <FaBars className="w-5 h-5" />
                                )}
                            </button>

                            <div className="hidden md:flex items-center space-x-1 lg:space-x-8">
                                <button className="text-black hover:text-gray-400 transition-colors duration-200">
                                    <FaHeart className="w-5 h-5" />
                                </button>
                                <button className="text-black hover:text-gray-400 transition-colors duration-200">
                                    <FaShoppingCart className="w-5 h-5" />
                                </button>
                                <button className="text-black hover:text-gray-400 transition-colors duration-200">
                                    <FaUser className="w-5 h-5" />
                                </button>
                            </div>


                        </div>
                    </div>

                    {isMenuOpen && (
                        <div className="md:hidden mt-4 space-y-4 pb-4 border-t border-gray-200 pt-4">
                            <div className="flex flex-col space-y-4">
                                <a href="#" className="text-gray-400 font-bold hover:text-black transition-colors duration-200">
                                    Home
                                </a>
                                <a href="#" className="text-gray-400 font-bold hover:text-black transition-colors duration-200">
                                    About
                                </a>
                                <a href="#" className="text-gray-400 font-bold hover:text-black transition-colors duration-200">
                                    Contact us
                                </a>
                                <a href="#" className="text-gray-400 font-bold hover:text-black transition-colors duration-200">
                                    Blog
                                </a>
                            </div>

                            {/* Mobile Action Icons in Menu */}
                            <div className="flex items-center justify-center space-x-8 pt-4 border-t border-gray-100">
                                <button className="flex flex-col items-center text-black hover:text-gray-400 transition-colors duration-200">
                                    <FaHeart className="w-5 h-5 mb-1" />
                                    <span className="text-xs font-medium">Wishlist</span>
                                </button>
                                <button className="flex flex-col items-center text-black hover:text-gray-400 transition-colors duration-200">
                                    <FaShoppingCart className="w-5 h-5 mb-1" />
                                    <span className="text-xs font-medium">Cart</span>
                                </button>
                                <button className="flex flex-col items-center text-black hover:text-gray-400 transition-colors duration-200">
                                    <FaUser className="w-5 h-5 mb-1" />
                                    <span className="text-xs font-medium">Profile</span>
                                </button>
                            </div>
                        </div>
                    )}
                </nav>
            </div>

            <div className="hidden md:block w-full bg-gray-900 py-3">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between space-x-4 lg:space-x-8">
                        <button className="flex items-center text-gray-400 hover:text-gray-300 transition-colors duration-200">
                            <FaMobile className="w-4 h-4 mr-2" />
                            Phone
                        </button>
                        <button className="flex items-center text-gray-400 hover:text-gray-300 transition-colors duration-200">
                            <FaLaptop className="w-4 h-4 mr-2" />
                            Computer
                        </button>
                        <button className="flex items-center text-gray-400 hover:text-gray-300 transition-colors duration-200">
                            <BsSmartwatch className="w-4 h-4 mr-2" />
                            Smart Watch
                        </button>
                        <button className="flex items-center text-gray-400 hover:text-gray-300 transition-colors duration-200">
                            <FaCamera className="w-4 h-4 mr-2" />
                            Camera
                        </button>
                        <button className="flex items-center text-gray-400 hover:text-gray-300 transition-colors duration-200">
                            <FaHeadphones className="w-4 h-4 mr-2" />
                            Headphones
                        </button>
                        <button className="flex items-center text-gray-400 hover:text-gray-300 transition-colors duration-200">
                            <FaGamepad className="w-4 h-4 mr-2" />
                            Gaming
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header