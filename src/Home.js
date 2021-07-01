import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                className="home__image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/Y2UwYWM0MDQt/Y2UwYWM0MDQt-N2YzZjRlYjMt-w1500._CB668822255_.jpg" 
                alt=""/>

                <div className="home__row">
                    <Product 
                    id="001"
                    title="Smart Watch, KALINCO Fitness Tracker with Heart Rate Monitor, 1.4 Inch Touch Screen Smartwatch Fitness Watch for Women Men Compatible with Android iPhone iOS"
                    price={29.99}
                    image="https://m.media-amazon.com/images/I/719r-Zr-PbL._AC_UL480_FMwebp_QL65_.jpg" 
                    rating={4}
                    />

                    <Product 
                    id="002"
                    title="Apple AirPods Pro"
                    price={169.99}
                    image="https://m.media-amazon.com/images/I/71zny7BTRlL._AC_UY327_FMwebp_QL65_.jpg" 
                    rating={5}
                    />
                </div>

                <div className="home__row">
                    <Product 
                    id="003"
                    title="Echo Studio – High-fidelity smart speaker with Sengled Bluetooth Color bulb – Alexa smart home starter kit"
                    price={214.98}
                    image="https://m.media-amazon.com/images/I/81YWah3prpS._AC_UY327_FMwebp_QL65_.jpg" 
                    rating={4}
                    />

                    <Product 
                    id="004"
                    title="Jabra Elite 45h, Titanium Black – On-Ear Wireless Headphones with Up to 50 Hours of Battery Life, Superior Sound with Advanced 40mm Speakers – Compact, Foldable & Lightweight Design"
                    price={99.99}
                    image="https://m.media-amazon.com/images/I/71GuE+NfnjL._AC_UY327_FMwebp_QL65_.jpg" 
                    rating={4}
                    />

                    <Product 
                    id="005"
                    title="Jiose Barcode Label Printer - 4x6 Shipping Thermal Printer Label Maker, Small Business Packages Label Machine, Compatible with USPS, Shopify, Ebay, Amazon, Etsy, One Click Setup on Windows & Mac"
                    price={29.99}
                    image="https://m.media-amazon.com/images/I/71KVYiPK5RS._AC_UY327_FMwebp_QL65_.jpg" 
                    rating={4}
                    />
                </div>

                <div className="home__row">
                <Product 
                    id="006"
                    title="Skyworth E20300 40-Inch 1080P Full HD Smart TV, LED Android TV with Voice Remote"
                    price={249.99}
                    image="https://m.media-amazon.com/images/I/71RoyyjeB9L._AC_UY327_FMwebp_QL65_.jpg" 
                    rating={4}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
