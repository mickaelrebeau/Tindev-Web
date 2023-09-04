import { useState } from 'react'
import { cn } from '@/lib/utils'

type Props = {
  photos: string[]
}

// TODO: Adapter les styles pour plus de lisibilité

export function SliderPhotos({ photos }: Props) {
  const [currentPhoto, setCurrentPhoto] = useState(0)

  const prevPhoto = () => {
    setCurrentPhoto((i) => (i - 1 + photos.length) % photos.length)
  }

  const nextPhoto = () => {
    setCurrentPhoto((i) => (i + 1 + photos.length) % photos.length)
  }

  return (
    <div
      id="default-carousel"
      className="relative w-full"
      data-carousel="slide">
      {/* Carousel wrapper */}
      <div className="relative h-56 overflow-hidden md:h-96">
        {photos.map((photo, i) => (
          <div
            key={i}
            className={cn('duration-700 ease-in-out', {
              hidden: currentPhoto !== i,
            })}
            data-carousel-item>
            <img
              src={photo}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
        ))}
      </div>
      {/* Slider indicators */}
      <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        {Array.from({ length: photos.length }, (_, i) => (
          <button
            key={i}
            type="button"
            className={cn(
              'w-3 h-3 rounded-full bg-slate-100 border border-slate-800',
              {
                'bg-slate-800': currentPhoto === i,
              }
            )}
            aria-current={currentPhoto === i}
            aria-label={`Slide ${i + 1}`}
            data-carousel-slide-to={i}
            onClick={() => setCurrentPhoto(i)}
          />
        ))}
      </div>
      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={prevPhoto}>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={nextPhoto}>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  )
}
