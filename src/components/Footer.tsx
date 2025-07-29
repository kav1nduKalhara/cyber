const Footer = () => {
    return (
        <footer className="w-full">
            <div className="w-full h-[464px] bg-black relative flex items-center justify-center">
                {/* Container matching Header's max-width and padding */}
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
                    {/* Green box aligned to match Header layout */}
                    <div className="w-full h-[216px] bg-black relative">
                        {/* Logo in top left corner */}
                        <div className="absolute top-0 left-0">
                            <img
                                src="/Logo1.png"
                                alt="Logo"
                                style={{ width: '96px', height: '32px' }}
                            />
                        </div>

                        {/* First Services section - original center position */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 top-0">
                            {/* Services text */}
                            <h3 style={{
                                fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                                fontWeight: '600',
                                fontStyle: 'normal',
                                fontSize: '16px',
                                letterSpacing: '0%',
                                color: '#FFFFFF',
                                margin: '0',
                                lineHeight: '32px', // Matches logo height for vertical alignment
                                textAlign: 'left'
                            }}>
                                Services
                            </h3>

                            {/* Service items list below Services text */}
                            <div style={{
                                fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                                fontWeight: '300',
                                fontSize: '14px',
                                letterSpacing: '0%',
                                color: '#CFCFCF',
                                lineHeight: '2',
                                textAlign: 'left',
                                marginTop: '18px' // Space between title and list
                            }}>
                                <div>Bonus program</div>
                                <div>Gift cards</div>
                                <div>Credit and payment</div>
                                <div>Service contracts</div>
                                <div>Non-cash account</div>
                                <div>Payment</div>
                            </div>
                        </div>

                        {/* Second Services section - positioned to the right (adjust position here) */}
                        <div className="absolute right-40 top-0">

                            <h3 style={{
                                fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                                fontWeight: '600',
                                fontStyle: 'normal',
                                fontSize: '16px',
                                letterSpacing: '0%',
                                color: '#FFFFFF',
                                margin: '0',
                                lineHeight: '32px', // Matches logo height for vertical alignment
                                textAlign: 'left'
                            }}>
                                Assistance to the buyer
                            </h3>

                            <div style={{
                                fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                                fontWeight: '300',
                                fontSize: '14px',
                                letterSpacing: '0%',
                                color: '#CFCFCF',
                                lineHeight: '2',
                                textAlign: 'left',
                                marginTop: '18px'
                            }}>
                                <div>Find an order</div>
                                <div>Terms of delivery</div>
                                <div>Exchange and return of goods</div>
                                <div>Guarantee</div>
                                <div>Frequently asked questions</div>
                                <div>Terms of use of the site</div>
                            </div>
                        </div>

                        <div className="absolute left-0" style={{ top: '48px' }}>
                            <p style={{
                                fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                                fontWeight: '500',
                                fontSize: '14px',
                                letterSpacing: '0%',
                                color: '#CFCFCF',
                                margin: '0',
                                lineHeight: '1.2'
                            }}>
                                We are a residential interior design firm located in Portland.<br />
                                Our boutique-studio offers more than
                            </p>
                        </div>
                    </div>

                    <div className="w-full mt-8">
                        <div className="flex" style={{ gap: '40px' }}>
                            <a href="#" className="hover:opacity-75 transition-opacity">
                                <img
                                    src="/Twitter.png"
                                    alt="Twitter"
                                    style={{ width: '16px', height: '16px' }}
                                />
                            </a>
                            <a href="#" className="hover:opacity-75 transition-opacity">
                                <img
                                    src="/Facebook.png"
                                    alt="Facebook"
                                    style={{ width: '16px', height: '16px' }}
                                />
                            </a>
                            <a href="#" className="hover:opacity-75 transition-opacity">
                                <img
                                    src="/Tiktok.png"
                                    alt="TikTok"
                                    style={{ width: '16px', height: '16px' }}
                                />
                            </a>
                            <a href="#" className="hover:opacity-75 transition-opacity">
                                <img
                                    src="/Instagram.png"
                                    alt="Instagram"
                                    style={{ width: '16px', height: '16px' }}
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer