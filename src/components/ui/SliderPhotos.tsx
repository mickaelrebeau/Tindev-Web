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
              className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2 object-cover"
              alt="..."
            />
          </div>
        ))}
      </div>
      {/* Slider indicators */}
      <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3">
        {Array.from({ length: photos.length }, (_, i) => (
          <button
            key={i}
            type="button"
            className={cn(
              'h-3 w-3 rounded-full border border-slate-800 bg-slate-100',
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
        className="group absolute left-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
        data-carousel-prev
        onClick={prevPhoto}>
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
          <svg
            className="h-4 w-4 text-white dark:text-gray-800"
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
        className="group absolute right-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
        data-carousel-next
        onClick={nextPhoto}>
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
          <svg
            className="h-4 w-4 text-white dark:text-gray-800"
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
