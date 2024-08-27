// import React, { useState, useEffect } from 'react';
// import './Achievements.css';

// const achievementsData = [
//   {
//     id: 1,
//     image: '../assets/photoGallery/RepublicDay24.jpg',  // Replace with your image file paths
//     description: 'SGT. Shrushti Vanjare was recommended in SSB and now in serving in Indian Army as a Lieutenant.',
//   },
//   // {
//   //   id: 2,
//   //   image: 'cadet2.jpg',
//   //   description: 'Cadet 2 represented the country in the International NCC Camp.',
//   // },
//   // {
//   //   id: 3,
//   //   image: 'cadet3.jpg',
//   //   description: 'Cadet 3 received the Best Cadet Award in the Annual NCC Parade.',
//   // },
//   // Add more achievements as needed
// ];

// const Achievements = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % achievementsData.length);
//     }, 5000); // Change every 5 seconds

//     return () => clearInterval(interval);
//   }, []);

//   const handlePrevClick = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + achievementsData.length) % achievementsData.length);
//   };

//   const handleNextClick = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % achievementsData.length);
//   };

//   return (
//     <section className="achievements">
//       <h2>Our Achievements</h2>
//       <div className="achievement-carousel">
//         <button className="carousel-button prev" onClick={handlePrevClick}>&lt;</button>
//         <div className="achievement-item">
//           <img src={achievementsData[currentIndex].image} alt="Achievement" />
//           <p>{achievementsData[currentIndex].description}</p>
//         </div>
//         <button className="carousel-button next" onClick={handleNextClick}>&gt;</button>
//       </div>
//       <hr className="section-divider" />
//     </section>
//   );
// };

// export default Achievements;


import React, { useState, useEffect } from 'react';
import './Achievements.css';

import Cadet1 from '../assets/achievements/shrushtiVanjare.jpg';
import Cadet2 from '../assets/achievements/shubhamPawale.jpg';
import Cadet3 from '../assets/achievements/arnavZutshi.jpg';
// Import additional achievement photos as needed

const achievements = [
  {
    src: Cadet1,
    description: 'SGT. Shrushti Vanjare was recommended by SSB Banglore and now in serving in Indian Army as a Lieutenant.',
  },
  {
    src: Cadet2,
    description: 'SUO Shubham Pawale was recommended by SSB and is undergoing his training in IMA',
  },
  {
    src: Cadet3,
    description: 'SGT. Arnav Zutshi was recommended by SSB Jalandar and will soon join IMA, Dehradun.',
  },
  // Add more achievements here
];

function Achievements() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handlePrev = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? achievements.length - 1 : prevIndex - 1));
        setIsTransitioning(false);
      }, 800); // Matches the transition time in CSS
    }
  };

  const handleNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex === achievements.length - 1 ? 0 : prevIndex + 1));
        setIsTransitioning(false);
      }, 800);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000); // Auto-transition every 5 seconds

    return () => clearInterval(timer);
  },);

  return (
    <section className="achievements">
      <h2>Our Achievements</h2>
      <div className="achievement-carousel">
        <button className="carousel-button prev" onClick={handlePrev}>&#10094;</button>
        <div className="photo-container">
          <img
            src={achievements[currentIndex].src}
            alt="Achievement"
            className={`achievement-image ${isTransitioning ? '' : 'show'}`}
          />
          <div className={`description ${isTransitioning ? '' : 'show'}`}>
            {achievements[currentIndex].description}
          </div>
        </div>
        <button className="carousel-button next" onClick={handleNext}>&#10095;</button>
      </div>
    </section>
  );
}

export default Achievements;


