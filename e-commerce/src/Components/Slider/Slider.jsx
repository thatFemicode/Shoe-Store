import React from "react";
import { useState } from "react";
import { sliderItems } from "../../api/datas";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import {
  SliderStyled,
  Wrapper,
  Slide,
  ArrowContainer,
  ImgContainer,
  Image,
  InfoContainer,
  Title,
  Desc,
  Button,
} from "./SliderStyled";
const Slider = () => {
  const [slideNum, setSlideNum] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideNum(slideNum > 0 ? slideNum - 1 : 1);
    } else {
      setSlideNum(slideNum < 1 ? slideNum + 1 : 0);
    }
  };
  const images = useRef();
  useEffect(() => {
    const kobe = images.current;
    gsap.to(kobe, {
      duration: 1,
      ease: "power2.out",
      // onRepeat: repeatFunction,
      yoyo: true,
      y: -50,
      repeat: -1,
    });
  }, []);
  return (
    <SliderStyled>
      <Wrapper slideNum={slideNum}>
        {sliderItems.map((item, index) => {
          const { id, img, bg, title, desc } = item;
          return (
            <Slide bg={bg} key={id}>
              <InfoContainer>
                <Title>{title}</Title>
                <Desc>{desc}</Desc>
                <Button>Shop Today</Button>
              </InfoContainer>
              <ImgContainer ref={images}>
                <Image src={img} />
              </ImgContainer>
            </Slide>
          );
        })}
      </Wrapper>
      <ArrowContainer>
        <FaAngleLeft direction="left" onClick={() => handleClick("left")} />
        <FaAngleRight direction="right" onClick={() => handleClick("right")} />
      </ArrowContainer>
    </SliderStyled>
  );
};

export default Slider;
