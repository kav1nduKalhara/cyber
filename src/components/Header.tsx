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
    FaSearch
} from 'react-icons/fa'

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
                        <div className="flex items-center space-x-4 md:space-x-10">
                            <div className="text-black text-xl font-bold">
                                Cyber
                            </div>

                            <div className="hidden md:block w-100">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="w-full px-5 py-3 bg-gray-100 border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                                />
                            </div>

                            <button
                                className="md:hidden text-black hover:text-gray-400 transition-colors duration-200"
                                onClick={toggleSearch}
                            >
                                <FaSearch className="w-5 h-5" />
                            </button>

                            {isSearchOpen && (
                                <div className="md:hidden absolute top-16 left-0 right-0 px-4 z-10 bg-white">
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        className="w-full px-5 py-3 bg-gray-100 border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                                    />
                                </div>
                            )}

                            <div className="hidden md:flex items-center space-x-4 lg:space-x-20 ml-2">
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
                        </div>

                        <div className="flex items-center space-x-4 md:space-x-8">
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

                            <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
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
                        <div className="md:hidden mt-4 space-y-4 pb-4">
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
                            <div className="flex items-center space-x-6 pt-4">
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
                            <FaClock className="w-4 h-4 mr-2" />
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