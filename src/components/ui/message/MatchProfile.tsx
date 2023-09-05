import { faker } from '@faker-js/faker'
import { getAge } from '@/lib/methods/date'
import { SliderPhotos } from '../SliderPhotos'

export function MatchProfile() {
  return (
    <>
      {/* photos */}
      <SliderPhotos
        photos={Array.from(
          { length: faker.number.int({ min: 3, max: 7 }) },
          () => {
            return faker.image.url({ width: 300, height: 500 })
          }
        )}
      />
      <main className="py-4">
        <h2 className="px-4">Forth, {getAge(new Date(2000, 1, 1))} ans</h2>
        <h3 className="px-4 text-slate-300">Développeur Web chez Tindev</h3>
        {/* TODO: Améliorer le height car très moche actuellement ! */}
        <p className="scrollbar-stable round scrollbar-w-2 scrollbar-rounded-track scrollbar-rounded-thumb scrollbar-shadow-track scrollbar-shadow-thumb scrollbar-bg-white scrollbar-opacity-30 h-[calc(100vh_-_60px_-_60px_-_300px_-_165px)] overflow-y-hidden px-4 hover:overflow-y-auto">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
          maxime molestias cumque culpa, optio, facilis aperiam reprehenderit
          voluptatibus exercitationem obcaecati architecto accusantium? Ab harum
          tenetur eum animi. Atque, nemo nisi minus quis vitae inventore illum
          deserunt aut facere fugiat consectetur saepe officia, debitis placeat
          incidunt quam vel sint totam, tenetur modi architecto natus eligendi
          dolore? Quod, ipsam eius, corrupti nam accusamus pariatur non, et
          laboriosam excepturi consequuntur praesentium nihil.
        </p>
      </main>
    </>
  )
}
