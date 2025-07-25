const Banner = () => {
    return (
        <div
            className="w-full grid grid-cols-4"
            style={{ height: '640px' }}
        >
            {/* Column 1 */}
            <div
                className="flex items-center justify-center relative"
                style={{
                    backgroundColor: '#FFFFFF',
                    overflow: 'hidden'
                }}
            >
                <img
                    src="/Huawei.png"
                    alt="Huawei"
                    style={{
                        width: '279px',
                        height: '263px',
                        transform: 'rotate(30deg)',
                        position: 'absolute',
                        left: '-8px',
                        top: '-53px',
                        objectFit: 'contain',
                        zIndex: 1
                    }}
                />
                <img
                    src="/smw.png"
                    alt="SMW"
                    style={{
                        width: '213px',
                        height: '243px',
                        transform: 'rotate(120deg)',
                        position: 'absolute',
                        left: '230px',
                        top: '200px',
                        transform: 'translate(-50%, -50%) rotate(-120deg)',
                        objectFit: 'contain',
                        zIndex: 2
                    }}
                />
                <div
                    style={{
                        fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                        fontWeight: 300,
                        fontSize: '33px',
                        letterSpacing: '0%',
                        color: '#000000',
                        position: 'absolute',
                        bottom: '200px',
                        left: '20px',
                        zIndex: 3,
                        textAlign: 'left',
                        whiteSpace: 'nowrap'
                    }}
                >
                    Popular Products
                </div>
                <div
                    style={{
                        fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                        fontWeight: 500,
                        fontSize: '15px',
                        letterSpacing: '0%',
                        color: '#909090',
                        position: 'absolute',
                        bottom: '120px',
                        left: '20px',
                        zIndex: 3,
                        textAlign: 'left',
                        maxWidth: 'calc(100% - 40px)',
                        lineHeight: '1.4'
                    }}
                >
                    iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.
                </div>
                <button
                    style={{
                        fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                        fontWeight: 500,
                        fontStyle: 'medium',
                        fontSize: '16px',
                        color: '#000000',
                        backgroundColor: '#FFFFFF',
                        border: '1px solid #000000',
                        borderRadius: '6px',
                        width: '184px',
                        height: '58px',
                        position: 'absolute',
                        bottom: '40px',
                        left: '20px',
                        zIndex: 3,
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    Shop Now
                </button>
            </div>

            {/* Column 2 */}
            <div
                className="flex items-center justify-center relative"
                style={{
                    backgroundColor: '#F9F9F9',
                    overflow: 'hidden'
                }}
            >
                <img
                    src="/ph123.png"
                    alt="Product"
                    style={{
                        width: '371px',
                        height: '390px',
                        objectFit: 'cover',
                        position: 'absolute',
                        left: '40px',
                        top: '-50px'
                    }}
                />

                <div
                    style={{
                        fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                        fontWeight: 300,
                        fontSize: '33px',
                        letterSpacing: '0%',
                        color: '#000000',
                        position: 'absolute',
                        bottom: '200px',
                        left: '20px',
                        zIndex: 3,
                        textAlign: 'left',
                        whiteSpace: 'nowrap'
                    }}
                >
                    Ipad Pro
                </div>
                <div
                    style={{
                        fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                        fontWeight: 500,
                        fontSize: '15px',
                        letterSpacing: '0%',
                        color: '#909090',
                        position: 'absolute',
                        bottom: '120px',
                        left: '20px',
                        zIndex: 3,
                        textAlign: 'left',
                        maxWidth: 'calc(100% - 40px)',
                        lineHeight: '1.4'
                    }}
                >
                    iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.
                </div>
                <button
                    style={{
                        fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                        fontWeight: 500,
                        fontStyle: 'medium',
                        fontSize: '16px',
                        color: '#000000',
                        backgroundColor: '#F9F9F9',
                        border: '1px solid #000000',
                        borderRadius: '6px',
                        width: '184px',
                        height: '58px',
                        position: 'absolute',
                        bottom: '40px',
                        left: '20px',
                        zIndex: 3,
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    Shop Now
                </button>
            </div>



            {/* Column 3 */}
            <div
                className="flex items-center justify-center relative"
                style={{
                    backgroundColor: '#EAEAEA',
                    overflow: 'hidden'
                }}
            >
                <img
                    src="/SG.png"
                    alt="Product"
                    style={{
                        width: '579px',
                        height: '385px',
                        objectFit: 'cover',
                        position: 'absolute',
                        left: '0px',
                        top: ' -20px'
                    }}
                />

                <div
                    style={{
                        fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                        fontWeight: 300,
                        fontSize: '33px',
                        letterSpacing: '0%',
                        color: '#000000',
                        position: 'absolute',
                        bottom: '200px',
                        left: '20px',
                        zIndex: 3,
                        textAlign: 'left',
                        whiteSpace: 'nowrap'
                    }}
                >
                    Samsung Galaxy
                </div>
                <div
                    style={{
                        fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                        fontWeight: 500,
                        fontSize: '15px',
                        letterSpacing: '0%',
                        color: '#909090',
                        position: 'absolute',
                        bottom: '120px',
                        left: '20px',
                        zIndex: 3,
                        textAlign: 'left',
                        maxWidth: 'calc(100% - 40px)',
                        lineHeight: '1.4'
                    }}
                >
                    iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.
                </div>
                <button
                    style={{
                        fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                        fontWeight: 500,
                        fontStyle: 'medium',
                        fontSize: '16px',
                        color: '#000000',
                        backgroundColor: '#EAEAEA',
                        border: '1px solid #000000',
                        borderRadius: '6px',
                        width: '184px',
                        height: '58px',
                        position: 'absolute',
                        bottom: '40px',
                        left: '20px',
                        zIndex: 3,
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    Shop Now
                </button>
            </div>

            {/* Column 4 */}
            <div
                className="flex items-center justify-center relative"
                style={{
                    backgroundColor: '#2C2C2C',
                    overflow: 'hidden'
                }}
            >
                <img
                    src="/Macbook%201.png"
                    alt="Product"
                    style={{
                        width: '339px',
                        height: '339px',
                        objectFit: 'cover',
                        position: 'absolute',
                        left: '28px',
                        top: ' 45px'
                    }}
                />

                <div
                    style={{
                        fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                        fontWeight: 300,
                        fontSize: '33px',
                        letterSpacing: '0%',
                        color: 'white',
                        position: 'absolute',
                        bottom: '200px',
                        left: '20px',
                        zIndex: 3,
                        textAlign: 'left',
                        whiteSpace: 'nowrap'
                    }}
                >
                    Macbook Pro
                </div>
                <div
                    style={{
                        fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                        fontWeight: 500,
                        fontSize: '15px',
                        letterSpacing: '0%',
                        color: '#909090',
                        position: 'absolute',
                        bottom: '120px',
                        left: '20px',
                        zIndex: 3,
                        textAlign: 'left',
                        maxWidth: 'calc(100% - 40px)',
                        lineHeight: '1.4'
                    }}
                >
                    iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.
                </div>
                <button
                    style={{
                        fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                        fontWeight: 500,
                        fontStyle: 'medium',
                        fontSize: '16px',
                        color: 'white',
                        backgroundColor: '#2C2C2C',
                        border: '1px solid white',
                        borderRadius: '6px',
                        width: '184px',
                        height: '58px',
                        position: 'absolute',
                        bottom: '40px',
                        left: '20px',
                        zIndex: 3,
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    Shop Now
                </button>
            </div>

        </div>
    )
}

export default Banner