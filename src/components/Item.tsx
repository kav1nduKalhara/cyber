import { useState } from 'react'

interface Product {
    id: number
    name: string
    image: string
    price: string
}

const Item = () => {
    const [activeCategory, setActiveCategory] = useState<string>('New Arrival')
    const [wishlistedItems, setWishlistedItems] = useState<Set<number>>(new Set())

    const categories = ['New Arrival', 'Best Seller', 'Featured Product'] as const

    // Product data for each category
    const productData = {
        'New Arrival': [
            { id: 1, name: 'Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)', image: '/ip14.png', price: '$900' },
            { id: 2, name: 'Blackmagic Pocket Cinema Camera 6k', image: '/bpcc.png', price: '$2535' },
            { id: 3, name: 'Apple Watch Series 9 GPS 41mm Starlight Aluminium Case', image: '/aw.png', price: '$399' },
            { id: 4, name: 'AirPods Max Silver', image: '/hp1.png', price: '$549' },
            { id: 5, name: 'Samsung Galaxy Watch6 Classic 47mm Black', image: '/gw.png', price: '$369' },
            { id: 6, name: 'Galaxy Z Fold5 Unlocked | 256GB | Phantom Black', image: '/gzf.png', price: '$1799' },
            { id: 7, name: 'Galaxy Buds FE Graphite', image: '/gb.png', price: '$99.99' },
            { id: 8, name: 'Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021', image: '/aip.png', price: '$398' }
        ],
        'Best Seller': [
            { id: 6, name: 'Galaxy Z Fold5 Unlocked | 256GB | Phantom Black', image: '/gzf.png', price: '$1799' },
            { id: 2, name: 'Blackmagic Pocket Cinema Camera 6k', image: '/bpcc.png', price: '$2535' },
            { id: 3, name: 'Apple Watch Series 9 GPS 41mm Starlight Aluminium Case', image: '/aw.png', price: '$399' },
            { id: 4, name: 'AirPods Max Silver', image: '/hp1.png', price: '$549' },
            { id: 5, name: 'Samsung Galaxy Watch6 Classic 47mm Black', image: '/gw.png', price: '$369' },
            { id: 1, name: 'Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)', image: '/ip14.png', price: '$900' },
            { id: 7, name: 'Galaxy Buds FE Graphite', image: '/gb.png', price: '$99.99' },
            { id: 8, name: 'Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021', image: '/aip.png', price: '$398' }
        ],
        'Featured Product': [
            { id: 4, name: 'AirPods Max Silver', image: '/hp1.png', price: '$549' },
            { id: 2, name: 'Blackmagic Pocket Cinema Camera 6k', image: '/bpcc.png', price: '$2535' },
            { id: 3, name: 'Apple Watch Series 9 GPS 41mm Starlight Aluminium Case', image: '/aw.png', price: '$399' },
            { id: 1, name: 'Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)', image: '/ip14.png', price: '$900' },
            { id: 5, name: 'Samsung Galaxy Watch6 Classic 47mm Black', image: '/gw.png', price: '$369' },
            { id: 6, name: 'Galaxy Z Fold5 Unlocked | 256GB | Phantom Black', image: '/gzf.png', price: '$1799' },
            { id: 7, name: 'Galaxy Buds FE Graphite', image: '/gb.png', price: '$99.99' },
            { id: 8, name: 'Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021', image: '/aip.png', price: '$398' }
        ]
    }

    const handleCategoryClick = (category: string) => {
        setActiveCategory(category)
    }

    const handleWishlistClick = (productId: number) => {
        setWishlistedItems(prev => {
            const newSet = new Set(prev)
            if (newSet.has(productId)) {
                newSet.delete(productId)
            } else {
                newSet.add(productId)
            }
            return newSet
        })
    }

    // Reusable ProductCard component with clean heart icon
    const ProductCard = ({ product }: { product: Product }) => (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
            {/* Heart Icon - Top Right */}
            <div className="relative">
                <button
                    onClick={() => handleWishlistClick(product.id)}
                    className="absolute top-3 right-3 z-10 p-2 hover:scale-110 transition-transform duration-200"
                >
                    <svg
                        className={`w-5 h-5 transition-colors duration-200 ${
                            wishlistedItems.has(product.id)
                                ? 'fill-red-500 text-red-500'
                                : 'fill-none text-gray-400 hover:text-red-500'
                        }`}
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                        />
                    </svg>
                </button>

                {/* Product Image - Fixed height */}
                <div className="aspect-square bg-[#F6F6F6] flex items-center justify-center p-8">
                    <div className="w-full h-full relative">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>
            </div>

            {/* Product Details - Flex grow to fill remaining space */}
            <div className="p-4 flex flex-col flex-grow">
                {/* Product Title - Fixed height container */}
                <div className="h-12 mb-3 flex items-center justify-center">
                    <h3 className="text-sm sm:text-base font-medium text-gray-800 line-clamp-2 text-center leading-tight">
                        {product.name}
                    </h3>
                </div>

                {/* Price - Fixed height */}
                <div className="text-2xl font-bold text-gray-900 text-center mb-4 h-8 flex items-center justify-center">
                    {product.price}
                </div>

                {/* Buy Now Button - Always at bottom */}
                <div className="mt-auto">
                    <button className="w-full bg-black text-white py-3 px-4 rounded-lg font-semibold text-sm hover:bg-gray-800 transition-colors duration-200 hover:shadow-md transform hover:scale-[1.02] active:scale-[0.98]">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    )

    const renderContent = () => {
        const currentProducts = productData[activeCategory as keyof typeof productData] || []

        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {currentProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        )
    }

    return (
        <div className="w-full bg-white py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Category Buttons */}
                <div className="flex flex-row justify-center items-center gap-2 sm:gap-8 mb-8">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => handleCategoryClick(category)}
                            className={`
                                px-3 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold 
                                text-sm sm:text-lg transition-all duration-300 ease-in-out
                                flex-1 sm:flex-none sm:min-w-[180px] h-12 sm:h-auto
                                hover:shadow-lg hover:scale-105 transform
                                ${activeCategory === category
                                ? 'bg-black text-white shadow-lg'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }
                            `}
                        >
                            <span className="block sm:hidden text-xs leading-tight text-center">
                                {category.split(' ').map((word, index) => (
                                    <div key={index}>{word}</div>
                                ))}
                            </span>
                            <span className="hidden sm:block">
                                {category}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="py-8">
                    {renderContent()}
                </div>
            </div>
        </div>
    )
}

export default Item