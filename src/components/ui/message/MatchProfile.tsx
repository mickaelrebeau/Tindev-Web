import { faker } from '@faker-js/faker'
import { SliderPhotos } from '../SliderPhotos'

export function MatchProfile() {
  return (
    <>
      MatchProfile
      {/* photos */}
      <SliderPhotos
        photos={Array.from(
          { length: faker.number.int({ min: 3, max: 7 }) },
          () => {
            return faker.image.url({ width: 300, height: 500 })
          }
        )}
      />
      {/* Name + age */}
      {/* Title */}
      {/* Bio */}
    </>
  )
}
