"use client";
import { photos } from "../../lib/photos";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
const PHOTOS_PER_LOAD = 4;
import type {Photo} from "../../types/photos";


export default function GalleryPage() {
  const [selectedPhoto, setSelectedPhoto] = useState< Photo | null>(null);
  const [VisibleCount, setVisibleCount] = useState(PHOTOS_PER_LOAD);
  const loadMoreRef=useRef<HTMLDivElement | null>(null);
  const visiblePhotos = photos.slice(0, VisibleCount);
  const hasMore = VisibleCount < photos.length;
  
  useEffect(() =>{
  const loadMoreElement = loadMoreRef.current;
  if(!loadMoreElement || !hasMore) {
    return;
  }
  const observer = new IntersectionObserver (
    (entries) => {
      const firstEntry =entries[0];
      if(firstEntry.isIntersecting) {
      
        
        setVisibleCount((currentCount) => Math.min(currentCount+PHOTOS_PER_LOAD, photos.length)
      );
      }
    },
    {
      rootMargin: "200px",
    }

  );

  observer.observe(loadMoreElement);
  return() =>{
    observer.disconnect();

  };

  }, [hasMore]);
     useEffect(() =>{
      if(!selectedPhoto) return; 
        const handleKeyDown = (event:KeyboardEvent) => {
            if(event.key ==="Escape") {
                setSelectedPhoto(null);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () =>{
            window.removeEventListener("keydown", handleKeyDown)
        };

    }, [selectedPhoto]);
  return (
   <>
  <section>
    <h1 className="mb-8 text-4xl font-bold">Gallery</h1>
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {visiblePhotos.map((photo) => (
        <article key={photo.id} 
        onClick={()=>setSelectedPhoto(photo)}

        className="cursor-pointer relative bg-white rounded-lg shadow-xl p-2 flex flex-col gap-4 h-100">
          <div className="relative w-full h-60">
            <Image src={photo.imageUrl} alt={photo.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
          </div>
          <p>{photo.desc}</p>
          <h2 className="font-semibold text-xl">{photo.title}</h2>

        </article>

      )) }
    </div>
    { hasMore && (
      <div ref={loadMoreRef} className="py-8 text-center text-gray-500" aria-live="polite">
        Loading more photos...
      </div>
    )}
    {!hasMore && photos.length > 0 && (
      <p className="py-8 text-center text-gray-500">
        You have reached the end of the gallery.
      </p>

    )}

  </section>
  { selectedPhoto && (
    <div className="fixed inset-0 bg-black/80 flex justify-center p-10 z-50" 
        onClick ={()=>setSelectedPhoto(null)}>
      <Image

        src={selectedPhoto.imageUrl}

        alt={selectedPhoto.alt}

          

        onClick={(e) => e.stopPropagation()}

        />

      </div>
      
    
  )}
  </>
 
  )};
 