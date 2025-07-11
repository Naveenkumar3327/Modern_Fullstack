const foodItems = [
    {
        name: "Margherita Pizza",
        desc: "Classic delight with mozzarella & basil",
        img: "https://images.unsplash.com/photo-1550547660-d9450f859349"
    },
    {
        name: "Cheeseburger",
        desc: "Grilled beef patty with melted cheese",
        img: "https://images.unsplash.com/photo-1550547660-d9450f859349"
    },
    {
        name: "Sushi Platter",
        desc: "Fresh sushi rolls with wasabi and soy",
        img: "https://images.unsplash.com/photo-1550547660-d9450f859349"
    },
    {
        name: "Tandoori Chicken",
        desc: "Spicy roasted chicken with Indian spices",
        img: "https://images.unsplash.com/photo-1550547660-d9450f859349"
    },
    {
        name: "Pasta Alfredo",
        desc: "Creamy white sauce pasta with herbs",
        img: "https://images.unsplash.com/photo-1550547660-d9450f859349"
    },
    {
        name: "Chocolate Cake",
        desc: "Moist chocolate layered dessert",
        img: "https://images.unsplash.com/photo-1550547660-d9450f859349"
    }
];

export default function Gallery() {
    return (
        <section
            id="gallery"
            style={{
                padding: '3rem 1rem',
                backgroundColor: 'transparent',
                textAlign: 'center'
            }}
        >
            <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>🍽️ Food Menu Showcase</h2>

            {[...Array(2)].map((_, rowIndex) => (
                <div
                    key={rowIndex}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        gap: '1.5rem',
                        marginBottom: '2rem'
                    }}
                >
                    {foodItems.map((item, index) => (
                        <div
                            key={`${rowIndex}-${index}`}
                            style={{
                                width: '200px',
                                background: 'white',
                                borderRadius: '10px',
                                boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                                padding: '1rem',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.05)';
                                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)';
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLDivElement).style.transform = 'scale(1)';
                                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';
                            }}
                        >
                            <img
                                src={`${item.img}?w=300&h=200&fit=crop`}
                                alt={item.name}
                                style={{
                                    width: '100%',
                                    height: '140px',
                                    objectFit: 'cover',
                                    borderRadius: '8px',
                                    transition: 'transform 0.3s ease'
                                }}
                            />
                            <h3 style={{ marginTop: '0.75rem' }}>{item.name}</h3>
                            <p style={{ fontSize: '0.9rem', color: '#555' }}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            ))}
        </section>
    );
}
