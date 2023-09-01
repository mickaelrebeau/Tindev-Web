import { SecondaryTitle } from '../kit/Title/SecondarytTitle'
import { Paragraph } from '../kit/Utilitaries/Paragraph'
import { Tag } from '../kit/Utilitaries/Tag'

interface Props {
  pseudo?: string
  about?: string
  avatar?: string
  tags: string[]
  reseaux: Network[]
}

const colors = [
  'rgb(252, 165, 165)',
  'rgb(147 197 253)',
  'rgb(253, 224, 71)',
  'rgb(134, 239, 172)',
  'rgb(216 180 254)',
]

export function Card({
  pseudo = 'Snox est bo',
  about = 'lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci alias aliquid amet aperiam  ',
  avatar = 'https://via.placeholder.com/150',
  tags,
}: Props) {
  return (
    <article className="p-5 my-4 mx-auto  h-full text-black rounded-lg border-lg border dark:border-black dark:bg-slate-800 bg-slate-300 min-w-[50%]  ">
      <header className="flex flex-col justify-start items-start w-content mb-2">
        <div className="flex justify-start items-center gap-5 w-content">
          <img
            src={avatar}
            className="rounded-full object-cover w-20 h-20 border"
          />
          <SecondaryTitle title={pseudo} />
        </div>
        <Paragraph
          className={
            'dark:text-green-600 text-green-600 flex items-center justify-start'
          }>
          🟢 Online
        </Paragraph>
      </header>

      <main>
        <aside className="flex flex-col justfy-center  w-[30%]">
          <div>
            <Paragraph className={'md:text-3xl font-bold'}>About me</Paragraph>

            <Paragraph>{about}</Paragraph>
          </div>

          <div>
            <Paragraph className={'md:text-3xl font-bold'}>Tags</Paragraph>

            <div className={'flex justify-start items-center flex-wrap gap-3'}>
              {tags.map((tag) => {
                const randomColor =
                  colors[Math.floor(Math.random() * colors.length)]
                return (
                  <Tag
                    key={tag}
                    style={{
                      borderColor: randomColor,
                      color: randomColor,
                    }}>
                    {tag}
                  </Tag>
                )
              })}
            </div>
          </div>
          <div>
            <Paragraph className={'md:text-3xl font-bold'}>Relations</Paragraph>

            <div className={'flex justify-start items-center pl-6 '}>
              <div className={'h-18 w-18 rounded-full bg-red-300 -mx-6'}></div>
              <div className={'h-18 w-18 rounded-full bg-blue-300 -mx-6'}></div>
              <div
                className={'h-18 w-18 rounded-full bg-yellow-300 -mx-6'}></div>
              <div
                className={'h-18 w-18 rounded-full bg-green-300 -mx-6'}></div>
              <div className={'h-18 w-18 rounded-full bg-red-300 -mx-6'}></div>
              <div className={'h-18 w-18 rounded-full bg-blue-300 -mx-6'}></div>
              <div
                className={'h-18 w-18 rounded-full bg-yellow-300 -mx-6'}></div>
              <div
                className={'h-18 w-18 rounded-full bg-purple-300 -mx-6'}></div>
              <div
                className={
                  'h-18 w-18 rounded-full bg-blue-300 -mx-6 flex justify-center items-center text-3xl font-bold'
                }>
                {' '}
                +8
              </div>
            </div>
          </div>
        </aside>
      </main>

      {/*<footer className="grid grid-cols-8 w-full h-fit gap-2">*/}
      {/*  {reseaux && reseaux.map((reseau) => (*/}
      {/*    <Network key={reseau.name} name={reseau.name} link={reseau.link} />*/}
      {/*  ))}*/}
      {/*</footer>*/}
    </article>
  )
}
