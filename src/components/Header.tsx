import { useState } from 'react'
import {
    FaBars,
    FaTimes,
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

    const handleFavoritesClick = () => {

    }

    const handleCartClick = () => {

    }

    const handleUserClick = () => {
    }

    return (
        <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <nav className="w-full py-3 bg-white">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <img
                                    src="/Logo.png"
                                    alt="Logo"
                                    style={{ width: '95.9px', height: '28.28px' }}
                                />
                            </div>

                            {/* Desktop Search Bar */}
                            <div className="hidden md:block relative" style={{ marginLeft: '40px' }}>
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <img
                                        src="/search.png"
                                        alt="Search"
                                        style={{ width: '24px', height: '24px' }}
                                    />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search"
                                    style={{
                                        width: '433px',
                                        height: '56px',
                                        borderRadius: '8px',
                                        paddingLeft: '56px',
                                        paddingRight: '16px',
                                        gap: '8px',
                                        backgroundColor: '#F5F5F5',
                                        fontWeight: '500'
                                    }}
                                    className="border-0 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
                                />
                            </div>

                            {/* Navigation Links with 30px gap from search */}
                            <div className="hidden md:flex items-center" style={{ marginLeft: '50px' }}>
                                <div className="flex items-center" style={{ gap: '52px' }}>
                                    <a href="#" className="text-gray-400 hover:text-black transition-colors duration-200 whitespace-nowrap text-base font-medium">
                                        Home
                                    </a>
                                    <a href="#" className="text-gray-400 hover:text-black transition-colors duration-200 whitespace-nowrap text-base font-medium">
                                        About
                                    </a>
                                    <a href="#" className="text-gray-400 hover:text-black transition-colors duration-200 whitespace-nowrap text-base font-medium">
                                        Contact us
                                    </a>
                                    <a href="#" className="text-gray-400 hover:text-black transition-colors duration-200 whitespace-nowrap text-base font-medium">
                                        Blog
                                    </a>
                                </div>
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

                            <div className="hidden md:flex items-center" style={{ gap: '24px' }}>
                                <button
                                    className="text-black hover:text-gray-400 transition-colors duration-200 p-1 rounded-md hover:bg-gray-100"
                                    onClick={handleFavoritesClick}
                                    aria-label="Favorites"
                                >
                                    <img
                                        src="/Favorites.png"
                                        alt="Favorites"
                                        style={{ width: '32px', height: '32px' }}
                                    />
                                </button>
                                <button
                                    className="text-black hover:text-gray-400 transition-colors duration-200 p-1 rounded-md hover:bg-gray-100"
                                    onClick={handleCartClick}
                                    aria-label="Shopping Cart"
                                >
                                    <img
                                        src="/Cart.png"
                                        alt="Cart"
                                        style={{ width: '32px', height: '32px' }}
                                    />
                                </button>
                                <button
                                    className="text-black hover:text-gray-400 transition-colors duration-200 p-1 rounded-md hover:bg-gray-100"
                                    onClick={handleUserClick}
                                    aria-label="User Profile"
                                >
                                    <img
                                        src="/User.png"
                                        alt="User"
                                        style={{ width: '32px', height: '32px' }}
                                    />
                                </button>
                            </div>


                        </div>
                    </div>

                    {isMenuOpen && (
                        <div className="md:hidden mt-4 space-y-4 pb-4 border-t border-gray-200 pt-4">
                            <div className="flex flex-col space-y-4">
                                <a href="#" className="text-gray-400 hover:text-black transition-colors duration-200 text-base font-medium">
                                    Home
                                </a>
                                <a href="#" className="text-gray-400 hover:text-black transition-colors duration-200 text-base font-medium">
                                    About
                                </a>
                                <a href="#" className="text-gray-400 hover:text-black transition-colors duration-200 text-base font-medium">
                                    Contact us
                                </a>
                                <a href="#" className="text-gray-400 hover:text-black transition-colors duration-200 text-base font-medium">
                                    Blog
                                </a>
                            </div>

                            {/* Mobile Action Icons in Menu */}
                            <div className="flex items-center justify-center pt-4 border-t border-gray-100" style={{ gap: '24px' }}>
                                <button
                                    className="flex flex-col items-center text-black hover:text-gray-400 transition-colors duration-200 p-2 rounded-md hover:bg-gray-100"
                                    onClick={handleFavoritesClick}
                                    aria-label="Favorites"
                                >
                                    <img
                                        src="/Favorites.png"
                                        alt="Favorites"
                                        style={{ width: '32px', height: '32px' }}
                                        className="mb-1"
                                    />
                                    <span className="text-xs font-medium">Wishlist</span>
                                </button>
                                <button
                                    className="flex flex-col items-center text-black hover:text-gray-400 transition-colors duration-200 p-2 rounded-md hover:bg-gray-100"
                                    onClick={handleCartClick}
                                    aria-label="Shopping Cart"
                                >
                                    <img
                                        src="/Cart.png"
                                        alt="Cart"
                                        style={{ width: '32px', height: '32px' }}
                                        className="mb-1"
                                    />
                                    <span className="text-xs font-medium">Cart</span>
                                </button>
                                <button
                                    className="flex flex-col items-center text-black hover:text-gray-400 transition-colors duration-200 p-2 rounded-md hover:bg-gray-100"
                                    onClick={handleUserClick}
                                    aria-label="User Profile"
                                >
                                    <img
                                        src="/User.png"
                                        alt="User"
                                        style={{ width: '32px', height: '32px' }}
                                        className="mb-1"
                                    />
                                    <span className="text-xs font-medium">Profile</span>
                                </button>
                            </div>
                        </div>
                    )}
                </nav>
            </div>

            <div className="hidden md:block w-full py-3" style={{ backgroundColor: '#2E2E2E' }}>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between space-x-4 lg:space-x-8">
                        <button className="flex items-center transition-colors duration-200 font-medium" style={{ color: 'white', opacity: '0.5' }}>
                            <img
                                src="/Phones.png"
                                alt="Phones"
                                style={{ width: '24px', height: '24px', marginRight: '8px' }}
                            />
                            Phone
                        </button>
                        <img
                            src="/Devider.png"
                            alt="Divider"
                            style={{ width: '0px', height: '24px', border: '1px solid #666' }}
                        />
                        <button className="flex items-center transition-colors duration-200 font-medium" style={{ color: 'white', opacity: '0.5' }}>
                            <img
                                src="/Computers.png"
                                alt="Computers"
                                style={{ width: '24px', height: '24px', marginRight: '8px' }}
                            />
                            Computer
                        </button>
                        <img
                            src="/Devider.png"
                            alt="Divider"
                            style={{ width: '0px', height: '24px', border: '1px solid #666' }}
                        />
                        <button className="flex items-center transition-colors duration-200 font-medium" style={{ color: 'white', opacity: '0.5' }}>
                            <img
                                src="/Gaming.png"
                                alt="Smart Watch"
                                style={{ width: '24px', height: '24px', marginRight: '8px' }}
                            />
                            Smart Watch
                        </button>
                        <img
                            src="/Devider.png"
                            alt="Divider"
                            style={{ width: '0px', height: '24px', border: '1px solid #666' }}
                        />
                        <button className="flex items-center transition-colors duration-200 font-medium" style={{ color: 'white', opacity: '0.5' }}>
                            <img
                                src="/Cameras.png"
                                alt="Cameras"
                                style={{ width: '24px', height: '24px', marginRight: '8px' }}
                            />
                            Camera
                        </button>
                        <img
                            src="/Devider.png"
                            alt="Divider"
                            style={{ width: '0px', height: '24px', border: '1px solid #666' }}
                        />
                        <button className="flex items-center transition-colors duration-200 font-medium" style={{ color: 'white', opacity: '0.5' }}>
                            <img
                                src="/Headphones.png"
                                alt="Headphones"
                                style={{ width: '24px', height: '24px', marginRight: '8px' }}
                            />
                            Headphones
                        </button>
                        <img
                            src="/Devider.png"
                            alt="Divider"
                            style={{ width: '0px', height: '24px', border: '1px solid #666' }}
                        />
                        <button className="flex items-center transition-colors duration-200 font-medium" style={{ color: 'white', opacity: '0.5' }}>
                            <img
                                src="/Gaming.png"
                                alt="Gaming"
                                style={{ width: '24px', height: '24px', marginRight: '8px' }}
                            />
                            Gaming
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header