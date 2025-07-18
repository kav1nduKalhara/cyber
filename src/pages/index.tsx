import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Image from 'next/image'

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Cyber</title>
                <meta name="description" content="Cyber-website" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <div className="flex flex-col min-h-screen">
                <header className="sticky top-0 z-50 bg-white shadow-sm">
                    <Header />
                </header>

                <main className="bg-[#211c24] h-[600px]">
                    <div className="mx-auto max-w-7xl h-full">
                        <div className="flex flex-col md:flex-row h-full items-center">
                            <div className="w-full md:w-1/2 flex flex-col justify-center pl-4 sm:pl-6 lg:pl-8 pr-6">
                                <div className="mb-2">
                                    <span className="text-[20px] leading-[25px] font-bold">
                                        {' '}Pro. Beyond.
                                    </span>
                                </div>
                                <div className="mb-4">
                                    <span className="text-[85px] leading-[1]">
                                        IPhone 16{' '}
                                        <span className="text-[85px] font-bold">Pro</span>
                                    </span>
                                </div>
                                <div className="mb-6">
                                    <p className="text-[18px] leading-[1.5] text-gray-300">
                                        Created to change everything for the better. For everyone.
                                    </p>
                                </div>
                                <div>
                                    <button className="bg-white text-[#211c24] px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-200">
                                        Shop Now
                                    </button>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 flex justify-end items-center h-full pr-4 sm:pr-6 lg:pr-8">
                                <div className="relative w-full h-64 md:h-[600px]">
                                    <Image src="/iphone.jpg" alt="iPhone 16 Pro" layout="fill" objectFit="contain" priority/>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                <div className="flex-1 bg-white">
                </div>
            </div>
        </>
    )
}

export default Home