const Footer = () => {
    return (
        <footer className="w-full">
            <div className="w-full h-[400px] bg-black relative">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-25">
                    {/* Top row with logo and sections aligned */}
                    <div className="flex justify-between items-start">
                        {/* Logo and description */}
                        <div className="flex-1">
                            <div className="mb-4">
                                <img
                                    src="/Logo1.png"
                                    alt="Cyber Logo"
                                    style={{ width: '95.9px', height: '28.28px' }}
                                />
                            </div>
                            <div className="text-white text-[14px] font-medium" style={{ fontFamily: 'SF Pro Display', fontWeight: 500 }}>
                                <div>We are a residential interior design firm located in Portland. Our</div>
                                <div>boutique-studio offers more than</div>
                            </div>
                        </div>

                        {/* Services Section */}
                        <div className="flex-1 flex justify-center">
                            <div className="flex flex-col items-center">
                                <div className="text-white text-[16px] font-semibold mb-6" style={{ fontFamily: 'SF Pro Display', fontWeight: 600 }}>
                                    Services
                                </div>
                                <div className="text-white text-[14px] space-y-3 text-center font-light" style={{ fontFamily: 'SF Pro Display', fontWeight: 300 }}>
                                    <div>Bonus program</div>
                                    <div>Gift cards</div>
                                    <div>Credit and payment</div>
                                    <div>Service contracts</div>
                                    <div>Non-cash account</div>
                                    <div>Payment</div>
                                </div>
                            </div>
                        </div>

                        {/* Assistance to the Buyer Section */}
                        <div className="flex-1 flex justify-end">
                            <div className="flex flex-col items-center">
                                <div className="flex items-center mb-6">
                                    <img
                                        src="/User.png"
                                        alt="User"
                                        style={{ width: '32px', height: '32px', marginRight: '8px' }}
                                    />
                                    <div className="text-white text-[16px] font-semibold" style={{ fontFamily: 'SF Pro Display', fontWeight: 600 }}>
                                        Assistance to the Buyer
                                    </div>
                                </div>
                                <div className="text-white text-[14px] space-y-3 text-center font-light" style={{ fontFamily: 'SF Pro Display', fontWeight: 300 }}>
                                    <div>Find an order</div>
                                    <div>Terms of delivery</div>
                                    <div>Exchange and return of goods</div>
                                    <div>Guarantee</div>
                                    <div>Frequently asked questions</div>
                                    <div>Terms of use of the site</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Social Media Icons at Bottom */}
                <div className="absolute bottom-8 left-0 right-0">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex space-x-8">
                            {/* Twitter */}
                            <a href="#" className="text-white hover:text-gray-300 transition-colors duration-200">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                                </svg>
                            </a>

                            {/* Facebook */}
                            <a href="#" className="text-white hover:text-gray-300 transition-colors duration-200">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                </svg>
                            </a>

                            {/* TikTok */}
                            <a href="#" className="text-white hover:text-gray-300 transition-colors duration-200">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19.321 5.562a5.124 5.124 0 01-.443-.258 6.228 6.228 0 01-1.137-.966c-.849-1.021-1.28-2.65-1.287-3.338L16.454 1h-3.591v14.831c0 1.426-1.158 2.584-2.584 2.584S7.695 17.257 7.695 15.831s1.158-2.584 2.584-2.584c.148 0 .294.013.438.037V9.669a6.185 6.185 0 00-.438-.032c-3.365 0-6.094 2.729-6.094 6.094s2.729 6.094 6.094 6.094 6.094-2.729 6.094-6.094V8.847a9.725 9.725 0 005.236 1.558V6.894a5.188 5.188 0 01-1.248-.332z"/>
                                </svg>
                            </a>

                            {/* Instagram */}
                            <a href="#" className="text-white hover:text-gray-300 transition-colors duration-200">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer