import { Carousel } from 'components/ui/Carousel/Carousel';
import { FilmCarousel } from 'components/business/FilmsCarousel/FilmsCarousel';
import { useEffect, useRef, useState } from 'react';
import img_1 from '../../carousel_img/img_1.jpg';
import img_2 from '../../carousel_img/img_2.jpg';
import img_3 from '../../carousel_img/img_3.jpg';
import img_4 from '../../carousel_img/img_4.jpg';
import img_5 from '../../carousel_img/img_5.jpg';
import { RatingModal } from 'components/business/RatingModal/RatingModal';

const images = [img_1, img_2, img_3, img_4, img_5];

export function MainPage() {
  const [slideIndex, setSlideIndex] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const counter = parseInt(localStorage.getItem('counter') || 0);

    const newCount = counter + 1;
    localStorage.setItem('counter', newCount);

    if (newCount === 3) {
      setIsModalOpen(true);
      localStorage.clear();
    }
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && <RatingModal isOpen={isModalOpen} onClose={closeModal} />}
      <div className="banner_slider">
        <Carousel setSlideIndex={setSlideIndex}>
          {images.map((img, index) => (
            <div
              className={
                index === slideIndex
                  ? 'banner_slide banner_slide-acttive'
                  : 'banner_slide'
              }
              key={index}
            >
              <img src={img} alt="" />
            </div>
          ))}
        </Carousel>
      </div>
      <FilmCarousel title="Криминал" genre="криминал"></FilmCarousel>
      <FilmCarousel title="Драма" genre="драма"></FilmCarousel>
    </>
  );
}
