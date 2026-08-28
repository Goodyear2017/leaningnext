"use client";

import { photos } from "../lib/photos";
import Image from "next/image";
import { useEffect, useState } from "react";

import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";


export default function HeroCarousel(){
    const [currentSlide, setCurrentSlide] = useState(0);
    const heroPhotos = photos.slice(0,3);
    const nextSlide = () => {
        setCurrentSlide(
            (prev) => (prev + 1) % heroPhotos.length
        );
    };

    const previousSlide = () => {    
        setCurrentSlide(
            (prev) =>
            (prev - 1 + heroPhotos.length) %
            heroPhotos.length
        );
    };
   
    useEffect(()=>{

    })
    return (
    <section className="relative h-[80vh]">
        <article key={ heroPhotos[currentSlide].id} className="h-full w-full">
            <Image src={ heroPhotos[currentSlide].imageUrl} alt={ heroPhotos[currentSlide].alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" /> 
           <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white bg-black/30">
                <h1 className="text-6xl font-bold drop-shadow-lg">Lili Photography</h1>
                <p className="mt-4 text-xl">Capturing Moments Through My lens</p>
            </div>
        </article>
         <button onClick={previousSlide} 
            className="absolute top-1/2 -translate-y-1/2 left-4 z-10 h-12 w-12 rounded-full bg-black/50 flex items-center justify-center hover:bg-black/70 transition">
        <ChevronLeftIcon className="h-8 w-8 text-white" />
        </button>
   
        <button onClick={nextSlide} 
        className="absolute right-4  top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-black/50 flex items-center justify-center hover:bg-black/70 transition">
        <ChevronRightIcon className="h-8 w-8 text-white" />
        </button>

    </section>
    )
    }

   
