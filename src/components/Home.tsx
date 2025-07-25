import Image from 'next/image'

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="bg-[#211c24] min-h-[705px]">
                <div className="mx-auto max-w-7xl h-full">
                    {/* Desktop Layout */}
                    <div className="hidden md:flex md:flex-row h-full items-center">
                        <div className="w-full md:w-1/2 flex flex-col justify-center pl-4 sm:pl-6 lg:pl-8 pr-6 pt-16 md:pt-0">
                            <div className="mb-2">
                                <span className="text-white opacity-40 leading-[25px] font-semibold text-[25px]">
                                    Pro.Beyond.
                                </span>
                            </div>
                            <div className="mb-6">
                                <span className="text-white text-[96px] leading-[1] tracking-[-1%]">
                                    <span style={{ fontWeight: '200', fontFamily: 'SF Pro Display, system-ui, -apple-system, sans-serif' }}>IPhone 14</span>{' '}
                                    <span style={{ fontWeight: '600', fontFamily: 'SF Pro Display, system-ui, -apple-system, sans-serif' }}>Pro</span>
                                </span>
                            </div>
                            <div className="mb-8">
                                <p className="text-[18px] leading-[0.5] text-[#909090]" style={{ fontWeight: '500', letterSpacing: '0%', fontFamily: 'SF Pro Display, system-ui, -apple-system, sans-serif' }}>
                                    Created to change everything for the better. For everyone.
                                </p>
                            </div>
                            <div>
                                <button className="bg-[#211C24] text-white border hover:bg-gray-800 transition-colors duration-200" style={{ width: '184px', height: '56px', borderRadius: '6px', borderWidth: '1px', borderColor: 'white', fontWeight: '500', fontSize: '16px', fontFamily: 'SF Pro Display, system-ui, -apple-system, sans-serif' }}>
                                    Shop Now
                                </button>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 flex justify-end items-center h-full pr-4 sm:pr-6 lg:pr-8">
                            <div className="relative w-full h-[600px] md:h-[710px] max-w-[500px]">
                                <Image src="/iphone.png" alt="iPhone 16 Pro" layout="fill" objectFit="contain" objectPosition="right center" priority/>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Layout */}
                    <div className="flex md:hidden flex-col items-center text-center px-4 py-16 h-screen">
                        {/* Text Content */}
                        <div className="flex flex-col items-center mb-6 mt-8">
                            <div className="mb-4">
                                <span className="text-white opacity-40 leading-[25px] font-semibold text-[25px]">
                                    Pro. Beyond.
                                </span>
                            </div>
                            <div className="mb-3">
                                <span className="text-white text-[96px] leading-[1.1] block tracking-[-1%]" style={{ fontWeight: 200, fontFamily: 'SF Pro Display, system-ui, -apple-system, sans-serif' }}>
                                    iPhone 14
                                </span>
                            </div>
                            <div className="mb-6">
                                <span className="text-white text-[96px] leading-[1.1] block tracking-[-1%]" style={{ fontWeight: 600, fontFamily: 'SF Pro Display, system-ui, -apple-system, sans-serif' }}>
                                    Pro
                                </span>
                            </div>
                            <div className="mb-8 px-4">
                                <p className="text-[18px] leading-[1.4] text-[#909090] max-w-sm" style={{ fontWeight: '500', letterSpacing: '0%', fontFamily: 'SF Pro Display, system-ui, -apple-system, sans-serif' }}>
                                    Created to change everything for the better. For everyone.
                                </p>
                            </div>
                            <div className="mb-6">
                                <button className="bg-[#211c24] text-white border hover:bg-gray-800 transition-colors duration-200" style={{ width: '184px', height: '56px', borderRadius: '6px', borderWidth: '1px', borderColor: 'white', fontWeight: '500', fontSize: '16px', fontFamily: 'SF Pro Display, system-ui, -apple-system, sans-serif' }}>
                                    Shop Now
                                </button>
                            </div>
                        </div>

                        {/* Image - Fixed at Bottom */}
                        <div className="mt-auto w-full max-w-md pb-8">
                            <div className="relative w-full h-[280px] sm:h-[350px]">
                                <Image src="/iphone.jpg" alt="iPhone 16 Pro" layout="fill" objectFit="contain" priority/>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* New Mobile AirPods Max Section - Only visible on mobile */}
            <div className="block md:hidden bg-[white] py-12">
                <div className="flex flex-col items-center text-center px-6 max-w-sm mx-auto">
                    {/* Image */}
                    <div className="mb-8 w-full">
                        <div className="relative w-full h-[200px] sm:h-[250px]">
                            <Image
                                src="/hp1.png"
                                alt="Apple AirPods Max"
                                layout="fill"
                                objectFit="contain"
                                priority
                            />
                        </div>
                    </div>

                    {/* Title */}
                    <div className="mb-4">
                        <h2 className="text-[32px] sm:text-[36px] font-bold text-[#211c24] leading-[1.2]" style={{ fontFamily: 'SF Pro Display, system-ui, -apple-system, sans-serif' }}>
                            Apple AirPods Max
                        </h2>
                    </div>

                    {/* Subtitle */}
                    <div className="mb-6">
                        <p className="text-[16px] sm:text-[18px] text-[#666] leading-[1.4] italic" style={{ fontFamily: 'SF Pro Display, system-ui, -apple-system, sans-serif' }}>
                            Computational audio. Listen, it&#39;s powerful.
                        </p>
                    </div>
                </div>
            </div>

            {/* New Mobile Apple Vision Pro Section - Only visible on mobile */}
            <div className="block md:hidden bg-gray-700 py-12">
                <div className="flex flex-col items-center text-center px-6 max-w-sm mx-auto">
                    {/* Image */}
                    <div className="mb-8 w-full">
                        <div className="relative w-full h-[200px] sm:h-[250px]">
                            <Image
                                src="/vp1.png"
                                alt="Apple Vision Pro"
                                layout="fill"
                                objectFit="contain"
                                priority
                            />
                        </div>
                    </div>

                    {/* Title */}
                    <div className="mb-4">
                        <h2 className="text-[32px] sm:text-[36px] font-bold text-[white] leading-[1.2]" style={{ fontFamily: 'SF Pro Display, system-ui, -apple-system, sans-serif' }}>
                            Apple Vision Pro
                        </h2>
                    </div>

                    {/* Subtitle */}
                    <div className="mb-6">
                        <p className="text-[16px] sm:text-[18px] text-gray-400 leading-[1.4] italic" style={{ fontFamily: 'SF Pro Display, system-ui, -apple-system, sans-serif' }}>
                            An immersive way to experience entertainment
                        </p>
                    </div>
                </div>
            </div>

            {/* New Mobile PlayStation 5 Section - Only visible on mobile */}
            <div className="block md:hidden bg-[#EDEDED] py-12">
                <div className="flex flex-col items-center text-center px-6 max-w-sm mx-auto">
                    {/* Image */}
                    <div className="mb-8 w-full">
                        <div className="relative w-full h-[200px] sm:h-[250px]">
                            <Image
                                src="/ps51.png"
                                alt="PlayStation 5"
                                layout="fill"
                                objectFit="contain"
                                priority
                            />
                        </div>
                    </div>

                    {/* Title */}
                    <div className="mb-4">
                        <h2 className="text-[32px] sm:text-[36px] font-bold text-[#211c24] leading-[1.2]" style={{ fontFamily: 'SF Pro Display, system-ui, -apple-system, sans-serif' }}>
                            PlayStation 5
                        </h2>
                    </div>

                    {/* Subtitle */}
                    <div className="mb-6">
                        <p className="text-[16px] sm:text-[18px] text-[#666] leading-[1.4] italic" style={{ fontFamily: 'SF Pro Display, system-ui, -apple-system, sans-serif' }}>
                            Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.
                        </p>
                    </div>
                </div>
            </div>

            {/* New Mobile MacBook Air Section - Only visible on mobile */}
            <div className="block md:hidden bg-[white] py-12">
                <div className="flex flex-col items-center text-center px-6 max-w-sm mx-auto">
                    {/* Image */}
                    <div className="mb-8 w-full">
                        <div className="relative w-full h-[200px] sm:h-[250px]">
                            <Image
                                src="/mac1.png"
                                alt="MacBook Air"
                                layout="fill"
                                objectFit="contain"
                                priority
                            />
                        </div>
                    </div>

                    {/* Title */}
                    <div className="mb-4">
                        <h2 className="text-[32px] sm:text-[36px] font-bold text-[#211c24] leading-[1.2]" style={{ fontFamily: 'SF Pro Display, system-ui, -apple-system, sans-serif' }}>
                            MacBook Air
                        </h2>
                    </div>

                    {/* Subtitle */}
                    <div className="mb-6">
                        <p className="text-[16px] sm:text-[18px] text-[#666] leading-[1.4] italic" style={{ fontFamily: 'SF Pro Display, system-ui, -apple-system, sans-serif' }}>
                            The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.
                        </p>
                    </div>

                    {/* Shop Now Button */}
                    <div>
                        <button className="bg-white text-[#211c24] border border-white px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-200" style={{ fontFamily: 'SF Pro Display, system-ui, -apple-system, sans-serif' }}>
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>

            <div className="h-[550px] w-full hidden md:flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 h-full flex flex-col">
                    {/* PS5 Section - Updated with closer text */}
                    <div className="h-1/2 w-full bg-white relative overflow-hidden flex items-center">
                        <div className="w-[45%] h-full relative">
                            <div className="absolute left-0 bottom-0 h-full w-full">
                                <Image
                                    src="/PlayStation.png"
                                    alt="PlayStation 5"
                                    layout="fill"
                                    objectFit="contain"
                                    objectPosition="left bottom"
                                    priority
                                />
                            </div>
                        </div>
                        <div className="w-[55%] pl-2 pr-6">
                            <h2 className="text-[49px] font-medium mb-4 text-[#211c24]" style={{ fontWeight: '500', marginBottom: '16px', fontFamily: 'SF Pro Display, system-ui, -apple-system, sans-serif' }}>PlayStation 5</h2>
                            <p className="text-[15px] font-medium text-[#909090] leading-[1.5]" style={{ fontWeight: '500', fontFamily: 'SF Pro Display, system-ui, -apple-system, sans-serif' }}>
                                Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.
                            </p>
                        </div>
                    </div>

                    {/* Yellow and Blue Sections */}
                    <div className="h-1/2 w-full flex">
                        {/* Yellow Section with HP Image and Text */}
                        <div className="w-1/2 h-full bg-[#EDEDED] flex items-center">
                            <div className="w-1/2 h-full relative">
                                <div className="absolute left-0 top-1/2 transform -translate-y-1/2" style={{ height: '275px', width: '245px' }}>
                                    <Image
                                        src="/hp.png"
                                        alt="HP Product"
                                        layout="fill"
                                        objectFit="contain"
                                        objectPosition="left center"
                                        priority
                                    />
                                </div>
                            </div>
                            <div className="w-1/2 text-black pr-8">
                                <div className="text-[29px] leading-[1.2] mb-3">
                                    <div>
                                        <span style={{ fontWeight: '300', fontFamily: 'SF Pro Display, system-ui, -apple-system, sans-serif' }}>Apple AirPods</span>{' '}
                                        <span style={{ fontWeight: '500', fontFamily: 'SF Pro Display, system-ui, -apple-system, sans-serif' }}>Max</span>
                                    </div>
                                </div>
                                <div className="text-[14px] font-medium text-[#909090] leading-[1.4]" style={{ fontWeight: '500', fontFamily: 'SF Pro Display, system-ui, -apple-system, sans-serif' }}>
                                    <div>Computational audio.</div>
                                    <div>Listen, it&#39;s powerful</div>
                                </div>
                            </div>
                        </div>

                        {/* Blue Section with Larger VP Image */}
                        <div className="w-1/2 h-full bg-[#353535] flex items-center">
                            <div className="w-2/5 h-full relative">
                                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 h-[85%] w-full">
                                    <Image
                                        src="/vp.png"
                                        alt="VP Product"
                                        layout="fill"
                                        objectFit="contain"
                                        objectPosition="left center"
                                        priority
                                    />
                                </div>
                            </div>
                            <div className="w-3/5 text-white p-8">
                                <div className="text-[34px] leading-[1.2] mb-2">
                                    <div>
                                        <span style={{ fontWeight: '300', fontFamily: 'SF Pro Display, system-ui, -apple-system, sans-serif' }}>Apple vision</span>{' '}
                                        <span style={{ fontWeight: '500', fontFamily: 'SF Pro Display, system-ui, -apple-system, sans-serif' }}>pro</span>
                                    </div>
                                </div>
                                <p className="text-[13px] font-medium text-[#909090] leading-[1.5]" style={{ fontWeight: '500', fontFamily: 'SF Pro Display, system-ui, -apple-system, sans-serif' }}>
                                    An immersive way to experience entertainment
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* MacBook Section */}
                <div className="w-full md:w-1/2 h-full bg-[#EDEDED] relative overflow-hidden">
                    <div className="absolute top-1/2 transform -translate-y-1/2 left-8 z-10 pl-4 sm:pl-8">
                        <div className="text-[#211c24] max-w-md">
                            <h2 className="text-[64px] leading-[1.1] mb-4" style={{ letterSpacing: '0%' }}>
                                <span style={{ fontWeight: '200', fontFamily: 'SF Pro Display, system-ui, -apple-system, sans-serif' }}>Macbook</span>{' '}
                                <span style={{ fontWeight: '500', fontFamily: 'SF Pro Display, system-ui, -apple-system, sans-serif' }}>Air</span>
                            </h2>
                            <p className="text-[15px] mb-6 leading-[1.5] text-[#909090]" style={{ fontWeight: '500', letterSpacing: '0%', fontFamily: 'SF Pro Display, system-ui, -apple-system, sans-serif' }}>
                                The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.
                            </p>
                            <button className="bg-[#EDEDED] text-[#211c24] border border-black hover:bg-gray-200 transition-colors duration-200" style={{ width: '184px', height: '56px', borderRadius: '6px', borderWidth: '1px', fontWeight: '500', fontSize: '16px', letterSpacing: '0%', fontFamily: 'SF Pro Display, system-ui, -apple-system, sans-serif' }}>
                                Shop Now
                            </button>
                        </div>
                    </div>
                    <div className="absolute top-1/2 right-0 transform -translate-y-1/2 h-[468px] w-full max-w-[80%]">
                        <div className="relative w-full h-full">
                            <Image
                                src="/mac.jpg"
                                alt="MacBook"
                                layout="fill"
                                objectFit="contain"
                                objectPosition="right center"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-1 bg-white">
            </div>
        </div>
    )
}

export default Home