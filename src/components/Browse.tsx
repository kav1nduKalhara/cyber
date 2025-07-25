const Browse = () => {
    return (
        <div className="w-full" style={{ backgroundColor: '#FAFAFA' }}>
            <div className="w-full py-25">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <h2 className="text-black" style={{
                            fontFamily: 'SF Pro Display, system-ui, -apple-system, sans-serif',
                            fontWeight: '500',
                            fontSize: '24px',
                            letterSpacing: '1%'
                        }}>
                            Browse by category
                        </h2>
                        <div className="flex items-center" style={{ gap: '16px' }}>
                            <button
                                className="p-1 rounded-md hover:bg-gray-100 transition-colors duration-200"
                                aria-label="Previous"
                            >
                                <img
                                    src="/ArrowL.png"
                                    alt="Arrow Left"
                                    style={{ width: '32px', height: '32px' }}
                                />
                            </button>
                            <button
                                className="p-1 rounded-md hover:bg-gray-100 transition-colors duration-200"
                                aria-label="Next"
                            >
                                <img
                                    src="/ArrowR.png"
                                    alt="Arrow Right"
                                    style={{ width: '32px', height: '32px' }}
                                />
                            </button>
                        </div>
                    </div>

                    {/* 6 Container Grid */}
                    <div className="mt-8 flex" style={{ gap: '52px' }}>
                        <div className="rounded-lg flex flex-col items-center justify-center" style={{
                            width: '160px',
                            height: '128px',
                            backgroundColor: '#EDEDED'
                        }}>
                            <img
                                src="/Phonesl.png"
                                alt="Phones"
                                style={{ width: '48px', height: '48px', marginBottom: '8px' }}
                            />
                            <span style={{
                                fontFamily: 'SF Pro Display, system-ui, -apple-system, sans-serif',
                                fontWeight: '500',
                                fontSize: '16px',
                                letterSpacing: '0%',
                                color: 'black'
                            }}>
                                Phone
                            </span>
                        </div>
                        <div className="rounded-lg flex flex-col items-center justify-center" style={{
                            width: '160px',
                            height: '128px',
                            backgroundColor: '#EDEDED'
                        }}>
                            <img
                                src="/Smart%20Watches.png"
                                alt="Smart Watches"
                                style={{ width: '48px', height: '48px', marginBottom: '8px' }}
                            />
                            <span style={{
                                fontFamily: 'SF Pro Display, system-ui, -apple-system, sans-serif',
                                fontWeight: '500',
                                fontSize: '16px',
                                letterSpacing: '0%',
                                color: 'black'
                            }}>
                                Smart Watches
                            </span>
                        </div>
                        <div className="rounded-lg flex flex-col items-center justify-center" style={{
                            width: '160px',
                            height: '128px',
                            backgroundColor: '#EDEDED'
                        }}>
                            <img
                                src="/Cameras1.png"
                                alt="Cameras"
                                style={{ width: '48px', height: '48px', marginBottom: '8px' }}
                            />
                            <span style={{
                                fontFamily: 'SF Pro Display, system-ui, -apple-system, sans-serif',
                                fontWeight: '500',
                                fontSize: '16px',
                                letterSpacing: '0%',
                                color: 'black'
                            }}>
                                Cameras
                            </span>
                        </div>
                        <div className="rounded-lg flex flex-col items-center justify-center" style={{
                            width: '160px',
                            height: '128px',
                            backgroundColor: '#EDEDED'
                        }}>
                            <img
                                src="/Headphones1.png"
                                alt="HeadPhones"
                                style={{ width: '48px', height: '48px', marginBottom: '8px' }}
                            />
                            <span style={{
                                fontFamily: 'SF Pro Display, system-ui, -apple-system, sans-serif',
                                fontWeight: '500',
                                fontSize: '16px',
                                letterSpacing: '0%',
                                color: 'black'
                            }}>
                                Headphones
                            </span>
                        </div>
                        <div className="rounded-lg flex flex-col items-center justify-center" style={{
                            width: '160px',
                            height: '128px',
                            backgroundColor: '#EDEDED'
                        }}>
                            <img
                                src="/Computers1.png"
                                alt="Computers"
                                style={{ width: '48px', height: '48px', marginBottom: '8px' }}
                            />
                            <span style={{
                                fontFamily: 'SF Pro Display, system-ui, -apple-system, sans-serif',
                                fontWeight: '500',
                                fontSize: '16px',
                                letterSpacing: '0%',
                                color: 'black'
                            }}>
                                Computers
                            </span>
                        </div>
                        <div className="rounded-lg flex flex-col items-center justify-center" style={{
                            width: '160px',
                            height: '128px',
                            backgroundColor: '#EDEDED'
                        }}>
                            <img
                                src="/Gaming1.png"
                                alt="Gaming"
                                style={{ width: '48px', height: '48px', marginBottom: '8px' }}
                            />
                            <span style={{
                                fontFamily: 'SF Pro Display, system-ui, -apple-system, sans-serif',
                                fontWeight: '500',
                                fontSize: '16px',
                                letterSpacing: '0%',
                                color: 'black'
                            }}>
                                Gaming
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Browse