import { SecondaryTitle } from '@/components/kit/Title/SecondarytTitle'
import { Paragraph } from '@/components/kit/Utilitaries/Paragraph'
import { Tag } from '@/components/kit/Utilitaries/Tag'

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
    <article className="border-lg card mx-auto  my-4 h-full min-w-[50%] rounded-lg border bg-slate-300 from-blue-300 via-transparent to-blue-300 p-5 text-black before:bg-gradient-to-r dark:border-black dark:bg-slate-800">
      <header className="w-content mb-2 flex flex-col items-start justify-start">
        <div className="w-content flex items-center justify-start gap-5">
          <img
            src={avatar}
            className="h-20 w-20 rounded-full border object-cover"
          />
          <SecondaryTitle>{pseudo}</SecondaryTitle>
        </div>
        <Paragraph
          className={
            'flex items-center justify-start text-green-600 dark:text-green-600'
          }>
          🟢 Online
        </Paragraph>
      </header>

      <main>
        <aside className="justfy-center flex w-[30%]  flex-col">
          <div>
            <Paragraph className={'font-bold md:text-3xl'}>About me</Paragraph>

            <Paragraph>{about}</Paragraph>
          </div>

          <div>
            <Paragraph className={'font-bold md:text-3xl'}>Tags</Paragraph>

            <div className={'flex flex-wrap items-center justify-start gap-3'}>
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
            <Paragraph className={'font-bold md:text-3xl'}>Relations</Paragraph>

            <div className={'flex items-center justify-start pl-6 '}>
              <div className={'-mx-6 h-16 w-16 rounded-full bg-red-300'}></div>
              <div className={'-mx-6 h-16 w-16 rounded-full bg-blue-300'}></div>
              <div
                className={'-mx-6 h-16 w-16 rounded-full bg-yellow-300'}></div>
              <div
                className={'-mx-6 h-16 w-16 rounded-full bg-green-300'}></div>
              <div className={'-mx-6 h-16 w-16 rounded-full bg-red-300'}></div>
              <div className={'-mx-6 h-16 w-16 rounded-full bg-blue-300'}></div>
              <div
                className={'-mx-6 h-16 w-16 rounded-full bg-yellow-300'}></div>
              <div
                className={'-mx-6 h-16 w-16 rounded-full bg-purple-300'}></div>
              <div
                className={
                  '-mx-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-300 text-3xl font-bold'
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
