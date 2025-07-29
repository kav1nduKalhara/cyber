const Promotion = () => {
    return (
        <div
            className="flex items-center justify-center relative"
            style={{
                width: '100%',
                height: '550px',
                background: 'linear-gradient(to right, #2E2E2E, #000000)'
            }}
        >
            <img
                src="/121.png"
                alt="Huawei"
                style={{
                    width: '279px',
                    height: '263px',
                    transform: 'rotate(0deg)',
                    position: 'absolute',
                    left: '240px',
                    top: '-84px',
                    objectFit: 'contain',
                    zIndex: 1
                }}
            />
            <img
                src="/122.png"
                alt="Huawei"
                style={{
                    width: '279px',
                    height: '263px',
                    transform: 'rotate(0deg)',
                    position: 'absolute',
                    left: '30px',
                    top: '0px',
                    objectFit: 'contain',
                    zIndex: 2
                }}
            />
            <img
                src="/124.png"
                alt="Huawei"
                style={{
                    width: '418px',
                    height: '263px',
                    transform: 'rotate(180)',
                    position: 'absolute',
                    left: '0px',
                    top: '220px',
                    objectFit: 'contain',
                    zIndex: 1
                }}
            />
            <img
                src="/125.png"
                alt="Huawei"
                style={{
                    width: '220px',
                    height: '363px',
                    transform: 'rotate(180)',
                    position: 'absolute',
                    left: '1300px',
                    top: '130px',
                    objectFit: 'contain',
                    zIndex: 1
                }}
            />
            <img
                src="/127.png"
                alt="Huawei"
                style={{
                    width: '404px',
                    height: '363px',
                    transform: 'rotate(180)',
                    position: 'absolute',
                    left: '1075px',
                    top: '268px',
                    objectFit: 'contain',
                    zIndex: 1
                }}
            />
            <div className="text-center text-white" style={{ zIndex: 2, position: 'relative' }}>
                <h1 className="mb-0">
                    <span style={{
                        fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                        fontWeight: 200,
                        fontSize: '72px',
                        letterSpacing: '-1%'
                    }}>
                        Big Summer{' '}
                    </span>
                    <span style={{
                        fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                        fontWeight: 300,
                        fontSize: '72px',
                        letterSpacing: '-1%'
                    }}>
                        Sale
                    </span>
                </h1>
                <p style={{
                    fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                    fontWeight: 400,
                    fontSize: '16px',
                    letterSpacing: '0%'
                }} className="mb-6 mt-1">Commodo fames vitae vitae leo mauris in. Eu consequat.</p>
                <button
                    className="transition-colors hover:bg-white hover:text-gray-800"
                    style={{
                        width: '184px',
                        height: '56px',
                        borderRadius: '6px',
                        border: '1px solid white',
                        backgroundColor: 'transparent',
                        color: 'white',
                        fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                        fontWeight: 500,
                        fontSize: '16px',
                        letterSpacing: '0%'
                    }}
                >
                    Shop Now
                </button>
            </div>
        </div>
    )
}

export default Promotion