import React, { useState, useEffect } from 'react';
import './PhotoGallery.css';

import RepublicDay24 from '../assets/photoGallery/RepublicDay24.jpg';
import ADGvisit from '../assets/photoGallery/ADGvisit.jpg';
import DGNCC from '../assets/photoGallery/DGnccGOH.jpg';
import cdtSel from '../assets/photoGallery/cdtSelection.jpg';
import bloodDon from '../assets/photoGallery/bloodDonation.jpg';
// Import additional images as needed

const photos = [
  {
    src: RepublicDay24,
    description: 'NCC Parade on Republic Day',
  },
  {
    src: ADGvisit,
    description: 'ADG NCC Directorate Maharashtra Maj Gen Yogendra Singh, VSM visited 5 MAH EME COY, VJTI',
  },
  {
    src: DGNCC,
    description: 'DG NCC Guard of Honour to Lt. General Gurbirpal Singh by SGT Himanshu Mohite and CPL Prerana More of 5MAH EME COY NCC and others',
  },
  {
    src: cdtSel,
    description: 'New Cadets Enrollement for 2023-24',
  },
  {
    src: bloodDon,
    description: 'Blood Donation camp organised by NCC VJTI',
  },
  
  // Add more photos here
];

function PhotoGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handlePrev = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? photos.length - 1 : prevIndex - 1));
        setIsTransitioning(false);
      }, 800); // Matches the transition time in CSS
    }
  };

  const handleNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex === photos.length - 1 ? 0 : prevIndex + 1));
        setIsTransitioning(false);
      }, 800);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className="photo-gallery">
      <button className="prev" onClick={handlePrev}>&#10094;</button>
      <div className="photo-container">
        <img
          src={photos[currentIndex].src}
          alt="Event"
          className={`gallery-image ${isTransitioning ? '' : 'show'}`}
        />
        <div className={`description ${isTransitioning ? '' : 'show'}`}>
          {photos[currentIndex].description}
        </div>
      </div>
      <button className="next" onClick={handleNext}>&#10095;</button>
    </div>
  );
}

export default PhotoGallery;


