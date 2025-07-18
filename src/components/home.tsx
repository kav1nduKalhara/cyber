import Image from 'next/image'

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="bg-[#211c24] h-[705px]">
                <div className="mx-auto max-w-7xl h-full">
                    <div className="flex flex-col md:flex-row h-full items-center">
                        <div className="w-full md:w-1/2 flex flex-col justify-center pl-4 sm:pl-6 lg:pl-8 pr-6 pt-16 md:pt-0">
                            <div className="mb-2">
                                <span className="text-[#909090] leading-[25px] font-bold">
                                    Pro.Beyond.
                                </span>
                            </div>
                            <div className="mb-6">
                                <span className="text-[90px] leading-[1]">IPhone16{' '}
                                    <span className="text-[90px] font-bold">Pro</span>
                                </span>
                            </div>
                            <div className="mb-8">
                                <p className="text-[18px] leading-[0.5] text-[#909090]">
                                    Created to change everything for the better. For everyone.
                                </p>
                            </div>
                            <div>
                                <button className="bg-white text-[#211c24] px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-200">
                                    Shop Now
                                </button>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 flex justify-center items-center h-full pr-4 sm:pr-6 lg:pr-8">
                            <div className="relative w-full h-[500px] md:h-[710px]">
                                <Image src="/iphone.jpg" alt="iPhone 16 Pro" layout="fill" objectFit="contain" priority/>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <div className="h-[550px] w-full flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 h-full flex flex-col">
                    {/* PS5 Section */}
                    <div className="h-1/2 w-full bg-white relative overflow-hidden flex items-center">
                        <div className="w-1/2 h-full relative">
                            <div className="absolute left-0 bottom-0 h-full w-full">
                                <Image
                                    src="/ps5.jpg"
                                    alt="PlayStation 5"
                                    layout="fill"
                                    objectFit="contain"
                                    objectPosition="left bottom"
                                    priority
                                />
                            </div>
                        </div>
                        <div className="w-1/2 pl-4 pr-8">
                            <h2 className="text-[40px] font-bold mb-4 text-[#211c24]">PlayStation 5</h2>
                            <p className="text-[14px] text-[#909090] leading-[1.5]">
                                Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.
                            </p>
                        </div>
                    </div>

                    {/* Yellow and Blue Sections */}
                    <div className="h-1/2 w-full flex">
                        {/* Yellow Section with HP Image and Text */}
                        <div className="w-1/2 h-full bg-[#EDEDED] flex items-center">
                            <div className="w-1/2 h-full relative">
                                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 h-[70%] w-[70%]">
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
                                <div className="text-[32px] leading-[1.2] mb-3">
                                    <div>Apple</div>
                                    <div>AirPods <span className="font-bold">Max</span></div>
                                </div>
                                <div className="text-gray-600 text-[14px] leading-[1.4]">
                                    <div>Computational audio.</div>
                                    <div>Listen, it&#39;s powerful</div>
                                </div>
                            </div>
                        </div>

                        {/* Blue Section with Larger VP Image */}
                        <div className="w-1/2 h-full bg-gray-700 flex items-center">
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
                                <div className="text-[29px] leading-[1.2] mb-2">
                                    <div>Apple</div>
                                    <div>vision <span className="font-bold">pro</span></div>
                                </div>
                                <p className="text-gray-300 text-[14px] leading-[1.5]">
                                    An immersive way to experience entertainment
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* MacBook Section */}
                <div className="w-full md:w-1/2 h-full bg-[#ededed] relative overflow-hidden">
                    <div className="absolute top-1/2 transform -translate-y-1/2 left-8 z-10 pl-4 sm:pl-8">
                        <div className="text-[#211c24] max-w-md">
                            <h2 className="text-[64px] leading-[1.1] mb-4">
                                Macbook <span className="font-bold">Air</span>
                            </h2>
                            <p className="text-[14px] mb-6 leading-[1.5]">
                                The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.
                            </p>
                            <button className="bg-[#211c24] text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors duration-200 text-[24px]">
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