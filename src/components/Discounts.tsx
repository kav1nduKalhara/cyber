import { useState } from 'react'

interface Product {
    id: number
    name: string
    image: string
    price: string
}

const Discounts = () => {
    const [wishlistedItems, setWishlistedItems] = useState<Set<number>>(new Set())

    // First 4 products for discount section
    const discountProducts: Product[] = [
        { id: 1, name: 'Apple iPhone 14 Pro 512GB Gold (MQ233)', image: '/iphone12.png', price: '$1437' },
        { id: 2, name: 'AirPods Max Silver', image: '/hp1.png', price: '$549' },
        { id: 3, name: 'Apple Watch Series 9 GPS 41mm Starlight Aluminium Case', image: '/aw.png', price: '$399' },
        { id: 4, name: 'Apple iPhone 14 Pro 1TB Gold (MQ2V3)', image: '/ip11.png', price: '$1499' }
    ]

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

    // Product Card component
    const ProductCard = ({ product }: { product: Product }) => (
        <div
            className="overflow-hidden h-full flex flex-col"
            style={{
                width: '268px',
                minHeight: '432px',
                borderRadius: '9px',
                backgroundColor: '#F6F6F6'
            }}
        >
            {/* Heart Icon - Top Right */}
            <div className="relative">
                <button
                    onClick={() => handleWishlistClick(product.id)}
                    className="absolute top-3 right-3 z-10 p-2"
                >
                    <svg
                        className={`w-8 h-8 ${
                            wishlistedItems.has(product.id)
                                ? 'fill-red-500 text-red-500'
                                : 'fill-none text-gray-400'
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

                {/* Product Image - Fixed 160px x 160px */}
                <div className="flex items-center justify-center p-8 pt-19" style={{ backgroundColor: '#F6F6F6' }}>
                    <div className="relative" style={{ width: '160px', height: '160px' }}>
                        <img
                            src={product.image}
                            alt={product.name}
                            className="object-contain"
                            style={{ width: '160px', height: '160px' }}
                        />
                    </div>
                </div>
            </div>

            {/* Product Details - Flex grow to fill remaining space */}
            <div className="p-4 flex flex-col flex-grow">
                {/* Product Title - Fixed height container */}
                <div className="h-2 mb-8 flex items-center justify-center">
                    <h3 className="text-gray-800 line-clamp-2 text-center leading-tight"
                        style={{
                            fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                            fontWeight: 500,
                            fontSize: '16px',
                            letterSpacing: '0%'
                        }}>
                        {product.name}
                    </h3>
                </div>

                {/* Price - Updated with production specifications */}
                <div className="text-gray-900 text-center mb-4 h-8 flex items-center justify-center"
                     style={{
                         fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                         fontWeight: 600,
                         fontSize: '24px',
                         letterSpacing: '3%'
                     }}>
                    {product.price}
                </div>

                {/* Buy Now Button - Always at bottom */}
                <div className="mt-auto flex justify-center">
                    <button className="bg-black text-white hover:bg-gray-800 transition-colors duration-200 hover:shadow-md transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center"
                            style={{
                                width: '183px',
                                height: '48px',
                                borderRadius: '8px',
                                fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                                fontWeight: 500,
                                fontSize: '14px',
                                letterSpacing: '0%'
                            }}>
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    )

    return (
        <div className="w-full bg-white py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col">
                    <div className="flex items-center mb-8">
                        <h2
                            className="text-black"
                            style={{
                                fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                                fontWeight: '500',
                                fontStyle: 'medium',
                                fontSize: '24px',
                                letterSpacing: '0%',
                                lineHeight: '1.2'
                            }}
                        >
                            Discounts up to -50%
                        </h2>
                    </div>

                    {/* Four product containers row */}
                    <div className="flex justify-between items-start gap-4">
                        {discountProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Discounts