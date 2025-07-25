import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Home from '../components/Home'
import Browse from '../components/Browse'
import Item from '../components/Item'
import Promotion from "@/components/Promotion";
import Footer  from "@/components/Footer";
import Banner from '@/components/Banner'
import Discounts from "@/components/Discounts";

const HomePage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Cyber</title>
                <meta name="description" content="Cyber-website" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <header className="sticky top-0 z-50 bg-white shadow-sm">
                <Header />
            </header>

            <Home />

            <Browse />

            <Item />

            <Banner />

            <Discounts />

            <Promotion />

            <Footer />
        </>
    )
}

export default HomePage