import Pc1 from "../imgs/pc1.jpg";
import Pc2 from "../imgs/pc2.jpg";
import Pc3 from "../imgs/pc3.jpg";
import Pc4 from "../imgs/pc4.webp";
import Pc5 from "../imgs/pca.jpg";
import Pc6 from "../imgs/pc6.webp";
import Pc7 from "../imgs/pc5.jpg";
import Pc8 from "../imgs/pc8.jpg";
import Pc9 from "../imgs/pc9.jpg";
import Pc10 from "../imgs/pc10.jpg";
import Pc11 from "../imgs/pc11.webp";
import Pc12 from "../imgs/pc12.jpg";

import React, { useState } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

export default function Index() {
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
        {/* Carousel for desktop and large size devices */}
        <CarouselProvider
          className="lg:block hidden"
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={12}
          visibleSlides={4}
          step={1}
          infinite={true}
        >
          <div className="w-full relative flex items-center justify-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
              id="prev"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonBack>
            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
            <Slider>
                <div
                  id="slider"
                  className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700"
                >
                  <Slide index={0}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={Pc1}
                        alt="black chair and white table"
                        className="object-cover object-center w-full h-72 lg:h-96 "
                      />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                       
                      </div>
                    </div>
                  </Slide>
                  <Slide index={1}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={Pc2}
                        alt="sitting area"
                        className="object-cover object-center w-full h-72 lg:h-96 "
                      />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                        
                      </div>
                    </div>
                  </Slide>
                  <Slide index={2}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={Pc3}
                        alt="sitting area"
                        className="object-cover object-center w-full h-72 lg:h-96 "
                      />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                      
                      </div>
                    </div>
                  </Slide>
                  <Slide index={3}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={Pc4}
                        alt="sitting area"
                        className="object-cover object-center w-full h-72 lg:h-96 "
                      />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                      
                      </div>
                    </div>
                  </Slide>
                  <Slide index={4}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={Pc5}
                        alt="black chair and white table"
                        className="object-cover object-center w-full h-72 lg:h-96 "
                      />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                      
                      </div>
                    </div>
                  </Slide>
                  <Slide index={5}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={Pc6}
                        alt="sitting area"
                        className="object-cover object-center w-full h-72 lg:h-96 "
                      />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">

                      </div>
                    </div>
                  </Slide>
                  <Slide index={6}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={Pc7}
                        alt="sitting area"
                        className="object-cover object-center w-full h-72 lg:h-96 "
                      />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                       
                      </div>
                    </div>
                  </Slide>
                  <Slide index={7}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={Pc8}
                        alt="sitting area"
                        className="object-cover object-center w-full h-72 lg:h-96 "
                      />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                     
                      </div>
                    </div>
                  </Slide>
                  <Slide index={8}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={Pc9}
                        alt="black chair and white table"
                        className="object-cover object-center w-full h-72 lg:h-96 "
                      />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                       
                      </div>
                    </div>
                  </Slide>
                  <Slide index={9}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={Pc10}
                        alt="sitting area"
                        className="object-cover object-center w-full h-72 lg:h-96 "
                      />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                      
                      </div>
                    </div>
                  </Slide>
                  <Slide index={10}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={Pc11}
                        alt="sitting area"
                        className="object-cover object-center w-full h-72 lg:h-96 "
                      />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                      
                      </div>
                    </div>
                  </Slide>
                  <Slide index={11}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={Pc12}
                        alt="sitting area"
                        className="object-cover object-center w-full h-72 lg:h-96 "
                      />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                   
                        
                      </div>
                    </div>
                  </Slide>
                </div>
              </Slider>
            </div>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              id="next"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>

        {/* Carousel for tablet and medium size devices */}
        <CarouselProvider
          className="lg:hidden md:block hidden"
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={12}
          visibleSlides={2}
          step={1}
          infinite={true}
        >
          <div className="w-full relative flex items-center justify-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
              id="prev"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonBack>
            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
            <Slider>
                <div
                  id="slider"
                  className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700"
                >
                  <Slide index={0}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={Pc1}
                        alt="black chair and white table"
                        className="object-cover object-center w-full h-72 lg:h-96 "
                      />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                       
                      </div>
                    </div>
                  </Slide>
                  <Slide index={1}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={Pc2}
                        alt="sitting area"
                        className="object-cover object-center w-full h-72 lg:h-96 "
                      />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                        
                      </div>
                    </div>
                  </Slide>
                  <Slide index={2}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={Pc3}
                        alt="sitting area"
                        className="object-cover object-center w-full h-72 lg:h-96 "
                      />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                      
                      </div>
                    </div>
                  </Slide>
                  <Slide index={3}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={Pc4}
                        alt="sitting area"
                        className="object-cover object-center w-full h-72 lg:h-96 "
                      />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                      
                      </div>
                    </div>
                  </Slide>
                  <Slide index={4}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={Pc5}
                        alt="black chair and white table"
                        className="object-cover object-center w-full h-72 lg:h-96 "
                      />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                      
                      </div>
                    </div>
                  </Slide>
                  <Slide index={5}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={Pc6}
                        alt="sitting area"
                        className="object-cover object-center w-full h-72 lg:h-96 "
                      />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">

                      </div>
                    </div>
                  </Slide>
                  <Slide index={6}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={Pc7}
                        alt="sitting area"
                        className="object-cover object-center w-full h-72 lg:h-96 "
                      />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                       
                      </div>
                    </div>
                  </Slide>
                  <Slide index={7}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={Pc8}
                        alt="sitting area"
                        className="object-cover object-center w-full h-72 lg:h-96 "
                      />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                     
                      </div>
                    </div>
                  </Slide>
                  <Slide index={8}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={Pc9}
                        alt="black chair and white table"
                        className="object-cover object-center w-full h-72 lg:h-96 "
                      />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                       
                      </div>
                    </div>
                  </Slide>
                  <Slide index={9}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={Pc10}
                        alt="sitting area"
                        className="object-cover object-center w-full h-72 lg:h-96 "
                      />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                      
                      </div>
                    </div>
                  </Slide>
                  <Slide index={10}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={Pc11}
                        alt="sitting area"
                        className="object-cover object-center w-full h-72 lg:h-96 "
                      />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                      
                      </div>
                    </div>
                  </Slide>
                  <Slide index={11}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={Pc12}
                        alt="sitting area"
                        className="object-cover object-center w-full h-72 lg:h-96 "
                      />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                   
                        
                      </div>
                    </div>
                  </Slide>
                </div>
              </Slider>
            </div>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              id="next"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>

        {/* Carousel for mobile and Small size Devices */}
        <CarouselProvider
          className="block md:hidden "
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={12}
          visibleSlides={1}
          step={1}
          infinite={true}
        >
          <div className="w-full relative flex items-center justify-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
              id="prev"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonBack>
            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
              <Slider>
                <div
                  id="slider"
                  className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700"
                >
                  <Slide index={0}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={Pc1}
                        alt="black chair and white table"
                        className="object-cover object-center w-full h-72 lg:h-96 "
                      />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                       
                      </div>
                    </div>
                  </Slide>
                  <Slide index={1}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={Pc2}
                        alt="sitting area"
                        className="object-cover object-center w-full h-72 lg:h-96 "
                      />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                        
                      </div>
                    </div>
                  </Slide>
                  <Slide index={2}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={Pc3}
                        alt="sitting area"
                        className="object-cover object-center w-full h-72 lg:h-96 "
                      />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                      
                      </div>
                    </div>
                  </Slide>
                  <Slide index={3}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={Pc4}
                        alt="sitting area"
                        className="object-cover object-center w-full h-72 lg:h-96 "
                      />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                      
                      </div>
                    </div>
                  </Slide>
                  <Slide index={4}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={Pc5}
                        alt="black chair and white table"
                        className="object-cover object-center w-full h-72 lg:h-96 "
                      />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                      
                      </div>
                    </div>
                  </Slide>
                  <Slide index={5}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={Pc6}
                        alt="sitting area"
                        className="object-cover object-center w-full h-72 lg:h-96 "
                      />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">

                      </div>
                    </div>
                  </Slide>
                  <Slide index={6}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={Pc7}
                        alt="sitting area"
                        className="object-cover object-center w-full h-72 lg:h-96 "
                      />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                       
                      </div>
                    </div>
                  </Slide>
                  <Slide index={7}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={Pc8}
                        alt="sitting area"
                        className="object-cover object-center w-full h-72 lg:h-96 "
                      />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                     
                      </div>
                    </div>
                  </Slide>
                  <Slide index={8}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={Pc9}
                        alt="black chair and white table"
                        className="object-cover object-center w-full h-72 lg:h-96 "
                      />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                       
                      </div>
                    </div>
                  </Slide>
                  <Slide index={9}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={Pc10}
                        alt="sitting area"
                        className="object-cover object-center w-full h-72 lg:h-96 "
                      />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                      
                      </div>
                    </div>
                  </Slide>
                  <Slide index={10}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={Pc11}
                        alt="sitting area"
                        className="object-cover object-center w-full h-72 lg:h-96 "
                      />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                      
                      </div>
                    </div>
                  </Slide>
                  <Slide index={11}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={Pc12}
                        alt="sitting area"
                        className="object-cover object-center w-full h-72 lg:h-96 "
                      />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                   
                        
                      </div>
                    </div>
                  </Slide>
                </div>
              </Slider>
            </div>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              id="next"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
    </div>
  );
}
