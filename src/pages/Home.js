import React, { useEffect, useState, useCallback } from 'react';
import { Header } from '../components/common/Header/Header';
import { Footer } from '../components/common/Footer/Footer';
import Tmobile from '../assets/images/banner/t-mobile.webp';
import Apple from '../assets/images/logo/logo.png';
import Sprint from '../assets/images/banner/Sprint.png';
import Att from '../assets/images/banner/ATT.png';
import Verizon from '../assets/images/banner/Verizon.png';
import Banner1 from '../assets/images/slider/banner-1.webp'
import Banner2 from '../assets/images/slider/banner-2.jpg'
import Banner3 from '../assets/images/slider/banner-3.avif'
import './Home.scss';

const Home = () => {
    let [index, setIndex] = useState(0);
    const sliderImages = [Banner1, Banner2, Banner3];
    
    const handleNext = useCallback(() => {
        setIndex((prevIndex) => (prevIndex !== sliderImages.length - 1 ? prevIndex + 1 : 0));
    }, [sliderImages.length]);
    const handlePrevious = () => {
        (index !== 0) ? setIndex(index - 1) : setIndex(sliderImages.length - 1);
    }
    const handlePagination = (value) => {
        setIndex(value);
    }
    useEffect(()=>{
        const interval = setInterval(handleNext, 5000);
        return () => clearInterval(interval);
    }, [handleNext])
    return (
        <>
            <Header/>
            <main>
                <div className='main-content flex-center-center'>
                    <div className='banner primary-container flex-center-center'>
                        <div className='flex-column'>
                            <h1>Special Carrier Deals</h1>
                            <a href="/">See all deals</a>
                        </div>
                        <div>
                            <img src={Tmobile} alt="" />
                            <p>Get up to $1000 credit after trade-in.</p>
                        </div>
                        <div>
                            <img src={Apple} alt="" />
                            <p>Get $300-$770 credit after trade-in.</p>
                        </div>
                        <div>
                            <img src={Tmobile} alt="" />
                            <p>Get up to $400 credit after trade-in.</p>
                        </div>
                        <div>
                            <img src={Apple} alt="" />
                            <p>Get up to $800 credit after trade-in.</p>
                        </div>
                    </div>
                    <div className='main-product'>
                        <div className='product-title-image'>
                            <div className='product-title primary-padding'>
                                <span>New</span>
                                <h1>Buy iPhone 14 Pro</h1>
                                <p>From $999 or $41.62/mo. for 24 mo. before trade-in*</p>
                            </div>
                            <div className='product-slider'>
                                <div className='slider-content'>
                                    <button className='previous' onClick={handlePrevious}><i class="fa fa-angle-left"></i></button>
                                    <img 
                                        src={sliderImages[index]} 
                                        alt=""
                                    />
                                    <button className='next' onClick={handleNext}><i class="fa fa-angle-right"></i></button>
                                    <div className='pagination flex-center-center'>
                                        {sliderImages.map((_, idx) => (
                                            <div 
                                                key={idx} 
                                                className={`pagination-dot ${idx === index ? 'active' : ''}`} 
                                                onClick={() => handlePagination(idx)}>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='product-customizations'>
                            <div className='product-details'>
                                <div className='product-promotions flex-start-center flex-column'>
                                    <div className='primary-container flex-center-start'>
                                        <p>Get $40-$570 for your trade-in</p>
                                        <button>
                                            <i class="fa fa-plus"></i>
                                        </button>
                                    </div>
                                    <div className='primary-container flex-center-start'>
                                        <p>Get $40-$570 for your trade-in</p>
                                        <button><i class="fa fa-plus"></i></button>
                                    </div>
                                </div>
                                <div className='product-models flex-start-center flex-column'>
                                    <h3>Model. <span className='light'>Which is best for you?</span></h3>
                                    <div className='model primary-container flex-start-spacebetween'>
                                        <div className='flex-start-center flex-column'>
                                            <h2>iPhone 14 Pro</h2>
                                            <p>6.1-inch display</p>
                                        </div>
                                        <div>
                                            <p>
                                                From $999<br/>
                                                or $41.56/mo.<br/>
                                                for 24 mo. before<br/>
                                                trade-in*
                                            </p>
                                        </div>
                                    </div>
                                    <div className='model primary-container flex-start-spacebetween'>
                                        <div className='flex-start-center flex-column'>
                                            <h2>iPhone 14 Pro</h2>
                                            <p>6.1-inch display</p>
                                        </div>
                                        <div>
                                            <p>
                                                From $999<br/>
                                                or $41.56/mo.<br/>
                                                for 24 mo. before<br/>
                                                trade-in*
                                            </p>
                                        </div>
                                    </div>
                                    <div className='model primary-container flex-start-spacebetween'>
                                        <div className='flex-start-center flex-column'>
                                            <h2>iPhone 14 Pro</h2>
                                            <p>6.1-inch display</p>
                                        </div>
                                        <div>
                                            <p>
                                                From $999<br/>
                                                or $41.56/mo.<br/>
                                                for 24 mo. before<br/>
                                                trade-in*
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='product-colors flex-start-center flex-column'>
                                    <h3>Finish. <span className='light'>Pick your favorite.</span></h3>
                                    <span>Color</span>
                                    <div className='colors-inputs flex-center-start'>
                                        <div title='Silver' className='color-input silverColor active'></div>
                                        <div title='Gold' className='color-input goldColor'></div>
                                        <div title='Deep Purple' className='color-input DeepPurpleColor'></div>
                                        <div title='Space Black' className='color-input SpaceBlackColor'></div>
                                    </div>
                                </div>
                                <div className='product-storage flex-start-center flex-column'>
                                    <h3>Storage. <span className='light'>How much space do you need?</span></h3>
                                    <div className='primary-container flex-center-spacebetween'>
                                        <div className='flex-center-center flex-column'>
                                            <h2>128GB<sup>2</sup></h2>
                                        </div>
                                        <div>
                                            <p>
                                                From $999<br/>
                                                or $41.56/mo.<br/>
                                                for 24 mo. before<br/>
                                                trade-in*
                                            </p>
                                        </div>
                                    </div>
                                    <div className='primary-container flex-center-spacebetween'>
                                        <div className='flex-center-center flex-column'>
                                            <h2>256GB<sup>2</sup></h2>
                                        </div>
                                        <div>
                                            <p>
                                                From $1099<br/>
                                                or $45.79/mo.<br/>
                                                for 24 mo. before<br/>
                                                trade-in*
                                            </p>
                                        </div>
                                    </div>
                                    <div className='primary-container flex-center-spacebetween'>
                                        <div className='flex-center-center flex-column'>
                                            <h2>512GB<sup>2</sup></h2>
                                        </div>
                                        <div>
                                            <p>
                                                From $1299<br/>
                                                or $54.12/mo.<br/>
                                                for 24 mo. before<br/>
                                                trade-in*
                                            </p>
                                        </div>
                                    </div>
                                    <div className='primary-container flex-center-spacebetween'>
                                        <div className='flex-center-center flex-column'>
                                            <h2>1TB<sup>2</sup></h2>
                                        </div>
                                        <div>
                                            <p>
                                                From $1499<br/>
                                                or $62.45/mo.<br/>
                                                for 24 mo. before<br/>
                                                trade-in*
                                            </p>
                                        </div>
                                    </div>
                                    <div className='primary-container'>
                                        <div>
                                            <img src={Tmobile} alt="" />
                                        </div>
                                        <div>
                                            <h1>
                                                Not sure how much<br/>
                                                storage to get?
                                            </h1>
                                            <p>
                                                Get a better<br/>
                                                understanding of how<br/>
                                                much space you'll need.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default Home