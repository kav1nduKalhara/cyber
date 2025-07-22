const Promotion = () => {
    return (
        <div
            className="flex items-center justify-center"
            style={{
                width: '100%',
                height: '550px',
                backgroundColor: '#2E2E2E'
            }}
        >
            <div className="text-center text-white">
                <h1 style={{ fontSize: '72px' }} className="mb-4">
                    Big Summer <span className="font-bold">Sale</span>
                </h1>
                <p style={{ fontSize: '16px' }} className="mb-6">Commodo fames vitae vitae leo mauris in. Eu consequat.</p>
                <button className="border px-8 py-3 rounded-lg font-semibold transition-colors" style={{ borderColor: 'white', backgroundColor: '#2E2E2E', color: 'white' }}>
                    Shop Now
                </button>
            </div>
        </div>
    )
}

export default Promotion