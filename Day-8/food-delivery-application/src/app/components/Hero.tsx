'use client';

import { useState } from 'react';

export default function Hero() {
    const [activeSection, setActiveSection] = useState('home');

    return (
        <>
            {/* Navbar */}
            <nav style={{
                backgroundColor: '#111827',
                color: 'white',
                padding: '1rem 2rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'sticky',
                top: 0,
                zIndex: 1000
            }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>UDAY_FOOD'S</div>
                <ul style={{
                    listStyle: 'none',
                    display: 'flex',
                    gap: '1.5rem',
                    margin: 0,
                    padding: 0
                }}>
                    <li><a href="#" onClick={() => setActiveSection('home')} style={{ color: 'white', textDecoration: 'none' }}>Home</a></li>
                    <li><a href="#" onClick={() => setActiveSection('about')} style={{ color: 'white', textDecoration: 'none' }}>About</a></li>
                    <li><a href="#" onClick={() => setActiveSection('orders')} style={{ color: 'white', textDecoration: 'none' }}>Orders</a></li>
                </ul>
            </nav>

            {/* Conditional Rendering */}
            {activeSection === 'home' && (
                <section
                    className="hero"
                    style={{
                        textAlign: 'center',
                        padding: '4rem 2rem',
                        background: 'transparent',
                        fontFamily: 'Arial, sans-serif',
                        color: 'white',
                    }}
                >
                    <h1>Welcome To Uday Food's</h1>
                    <p>Crafting elegant websites that inspire and engage</p>
                </section>
            )}

            {activeSection === 'about' && (
                <section
                    style={{
                        padding: '4rem 2rem',
                        backgroundColor: 'transparent',
                        textAlign: 'center',
                        fontFamily: 'Arial, sans-serif'
                    }}
                >
                    <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'white' }}>
                        About Us
                    </h2>
                    <p style={{ fontSize: '1rem', maxWidth: '700px', margin: '0 auto', color: '#white' }}>
                        At <strong>UDAY_FOOD'S</strong>, we believe that food is more than just fuel — it’s a way of bringing people together.
                        Our mission is to serve delicious, hygienic, and freshly prepared meals that delight your taste buds and warm your heart.
                        Whether you're craving spicy tandoori, cheesy pizza, or a classic Indian thali, we've got it all!
                    </p>
                </section>
            )}

            {activeSection === 'orders' && (
                <section
                    style={{
                        padding: '4rem 2rem',
                        backgroundColor: 'transprent',
                        textAlign: 'center',
                        fontFamily: 'Arial, sans-serif'
                    }}
                >
                    <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'white' }}>
                        Place Your Orders
                    </h2>
                    <p style={{ fontSize: '1rem', maxWidth: '700px', margin: '0 auto', color: 'white' }}>
                        Choose from our exciting menu and get your favorite meals delivered hot and fresh right to your doorstep!
                    </p>
                </section>
            )}
        </>
    );
}
