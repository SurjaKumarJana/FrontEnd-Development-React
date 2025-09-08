import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const items = [
    <div className=" object-cover object-center item w-full h-60 overflow-hidden flex justify-center items-center " data-value="1">
        <img src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    </div>,
    <div className=" object-cover object-center item w-full h-60 overflow-hidden flex justify-center items-center " data-value="2">
        <img src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    </div>,
    <div className=" object-cover object-center item w-full h-60 overflow-hidden flex justify-center items-center " data-value="3">
        <img src="https://plus.unsplash.com/premium_photo-1664303847960-586318f59035?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    </div>,
    <div className=" object-cover object-center item w-full h-60 overflow-hidden flex justify-center items-center " data-value="4">
        <img src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    </div>,
    <div className=" object-cover object-center item w-full h-60 overflow-hidden flex justify-center items-center " data-value="5">
        <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    </div>,
];

const MainCarosal = () => (

    <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"


        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
    />





);

export default MainCarosal