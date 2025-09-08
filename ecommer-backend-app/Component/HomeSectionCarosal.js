import React, { useState, useEffect } from 'react';
import HomeSectionCard from './HomeSectionCard';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Button } from '@headlessui/react';

const responsive = {
  0: { items: 2 },
  480: { items: 3 },
  768: { items: 5 },
  1024: { items: 6 },
};

const HomeSectionCarosal = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(2);

  const items = Array(13).fill(0).map((_, index) => (
    <div key={index} className="px-2">
      <HomeSectionCard />
    </div>
  ));

  // Update visible items count on window resize
  useEffect(() => {
    const updateVisibleItems = () => {
      const width = window.innerWidth;
      if (width >= 1024) setVisibleItems(6);
      else if (width >= 768) setVisibleItems(5);
      else if (width >= 480) setVisibleItems(3);
      else setVisibleItems(2);
    };
    updateVisibleItems();
    window.addEventListener('resize', updateVisibleItems);
    return () => window.removeEventListener('resize', updateVisibleItems);
  }, []);

  const slidePrev = () => {
    if (activeIndex > 0) setActiveIndex(prev => prev - 1);
  };

  const slideNext = () => {
    if (activeIndex < items.length - visibleItems) {
      setActiveIndex(prev => prev + 1);
    }
  };

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  return (
    <div className="relative px-4 py-2 lg:px-8">
      <div className="relative px-2 flex justify-center items-center">
        {activeIndex > 0 && (
          <Button onClick={slidePrev} className="px-0 py-2 items-center w-fit">
            <KeyboardDoubleArrowLeftIcon />
          </Button>
        )}

        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
          disableButtonsControls
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />

        {activeIndex < items.length - visibleItems && (
          <Button onClick={slideNext} className="px-0 py-2 items-center w-fit">
            <KeyboardDoubleArrowRightIcon />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarosal;
