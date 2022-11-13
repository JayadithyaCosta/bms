import Image from 'next/image';
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import BookClub from "../../public/images/hImage1.jpg";
import BookClub2 from "../../public/images/hImage2.jpg";
import BookClub3 from "../../public/images/hImage3.jpg";




const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);
  let randNum = Math.random()

  const handleSelect = (selectedIndex: number, e: any) => {
    setIndex(selectedIndex);
  };

  const cards = [
    {
      image: BookClub,
      alt: "image 1",
    },
    {
      image: BookClub2,
      alt: "image 2",
    },
    {
      image: BookClub3,
      alt: "image 3",
    },
  ];

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
  
          <Carousel.Item key={`images-${randNum}`}>
              <Image
                className="d-block w-100"
                style={{height: '450px'}}
                src={BookClub}
                alt={'Image 1'}
            />
            </Carousel.Item>

            <Carousel.Item key={`images-${randNum}`}>
              <Image
                className="d-block w-100"
                style={{height: '450px'}}
                src={BookClub2}
                alt={'Image 2'}
            />
            </Carousel.Item>

            <Carousel.Item key={`images-${randNum}`}>
              <Image
                className="d-block w-100"
                style={{height: '450px'}}
                src={BookClub3}
                alt={'Image 3'}
            />
            </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel
