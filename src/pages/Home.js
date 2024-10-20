import React, { useEffect, useState, useCallback, useRef  } from 'react';
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
import './main.scss';

const Home = () => {
    let [index, setIndex] = useState(0);
    const sliderContentRef = useRef(null);
    const sliderImages = [Banner1, Banner2, Banner3];
    
    const handleNext = useCallback(() => {
        setIndex((prevIndex) => (prevIndex !== sliderImages.length - 1 ? prevIndex + 1 : 0));
        toggleRightAnimation();
    }, [sliderImages.length]);

    const handlePrevious = () => {
        (index !== 0) ? setIndex(index - 1) : setIndex(sliderImages.length - 1);
        toggleLeftAnimation();
    }

    const handlePagination = (value) => {
        setIndex(value);
        toggleRightAnimation();
    }

    function toggleRightAnimation() {
        const sliderContent = sliderContentRef.current;
        sliderContent.classList.remove('slideRightEffect');
        void sliderContent.offsetWidth;
        sliderContent.classList.add('slideRightEffect');
    }

    function toggleLeftAnimation() {
        const sliderContent = sliderContentRef.current;
        sliderContent.classList.remove('slideLeftEffect');
        void sliderContent.offsetWidth;
        sliderContent.classList.add('slideLeftEffect');
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
                                        ref={sliderContentRef}
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
                                    <Promotion Text='Get $40-$570 for your trade-in'/>
                                    <Promotion Text='Get 3% Daily Cash back wish Apple Card.'/>
                                </div>
                                <div className='product-models flex-start-center flex-column'>
                                    <Title Title='Model' SpanTitle='Which is best for you?'     />
                                    <Model Name='iPhone 14 Pro' Description='6.1-inch display' RegularPrice='999' MonthlyPrice='41.56'/>
                                    <Model Name='iPhone 14 Pro' Description='6.1-inch display' RegularPrice='999' MonthlyPrice='41.56'/>
                                    <div className='help primary-container'>
                                        <h2>Need help choosing a model?</h2>
                                        <p>
                                            Explore the difference in screen size and<br/>
                                            battery life.
                                        </p>
                                        <button><i class="fa fa-plus"></i></button>
                                    </div>
                                </div>
                                <div className='product-colors flex-start-center flex-column'>
                                    <Title Title='Finish' SpanTitle='Pick your favorite.'     />
                                    <span>Color</span>
                                    <div className='colors-inputs flex-center-start'>
                                        <Color Title='Silver' Class='silverColor'/>
                                        <Color Title='Gold' Class='goldColor'/>
                                        <Color Title='Deep Purple' Class='DeepPurpleColor'/>
                                        <Color Title='Space Black' Class='SpaceBlackColor'/>
                                    </div>
                                </div>
                                <div className='product-storage flex-start-center flex-column'>
                                    <Title Title='Storage' SpanTitle='How much space do you need?'     />
                                    <Storage Storage='128GB' RegularPrice='999' MonthlyPrice='41.56'    />
                                    <Storage Storage='256GB' RegularPrice='1099' MonthlyPrice='45.79'   />
                                    <Storage Storage='512GB' RegularPrice='1299' MonthlyPrice='54.12'   />
                                    <Storage Storage='1TB' RegularPrice='1499' MonthlyPrice='62.45' />
                                    <Faq Image={Apple} Keyword="storage"  />
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

function Promotion({Text}) {
    return (
        <div className='primary-container flex-center-start'>
            <p>{Text}</p>
            <button><i class="fa fa-plus"></i></button>
        </div>
    );
}
function Model({Name, Description, RegularPrice, MonthlyPrice}) {
    return (
        <div className='model primary-container secondary-container flex-start-spacebetween'>
            <div className='flex-start-center flex-column'>
                <h2>{Name}</h2>
                <p>{Description}</p>
            </div>
            <div>
                <p>
                    From ${RegularPrice}<br />
                    or ${MonthlyPrice}/mo.<br />
                    for 24 mo. before<br />
                    trade-in*
                </p>
            </div>
        </div>
    );
}
function Storage({Storage, RegularPrice, MonthlyPrice}) {
    return (
        <div className='primary-container secondary-container flex-center-spacebetween'>
            <div className='flex-center-center flex-column'>
                <h2>{Storage}<sup>2</sup></h2>
            </div>
            <div>
                <p>
                    From ${RegularPrice}<br />
                    or ${MonthlyPrice}/mo.<br />
                    for 24 mo. before<br />
                    trade-in*
                </p>
            </div>
        </div>
    );
}
function Faq({Image, Keyword}) {
    return (
        <div className='faq primary-container flex-center-spacebetween'>
            <div className='faq-image'>
                <img src={Image} alt="" />
            </div>
            <div className='faq-title-description'>
                <h4>
                        Not sure how much<br />
                        {Keyword} to get?                
                </h4>
                <p className='light'>
                    Get a better<br />
                    understanding of how<br />
                    much {Keyword} you'll need.
                </p>
            </div>
            <button><i class="fa fa-plus"></i></button>
        </div>
    );
}
function Title({Title, SpanTitle}) {
    return (
        <h3>{Title}. <span className='light'>{SpanTitle}</span></h3>
    );
}
function Color({Title, Class}) {
    const colorContentRef = useRef(null);
    const handleClick = () => {
        colorContentRef.current.classList = `color-input ${Class} active`;
    }
    return (
        <div title={Title} className={`color-input ${Class}`} onClick={handleClick} ref={colorContentRef}></div>
    );
}
export default Home;