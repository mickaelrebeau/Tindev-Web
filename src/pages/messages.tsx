// import { SecondaryTitle } from '@/components/kit/Title/SecondarytTitle'
// import { Message } from '@/components/ui/Message'
// import { messages2 } from '@/lib/data/messages'

import { MyMessage } from "@/components/ui/message/MyMessage";
import { TheirMessage } from "@/components/ui/message/TheirMessage";
import { Divider } from "@/components/ui/message/Divider";
import { Message } from "@/components/ui/message/Message"; // TODO : Ajouter le choix de la couleur des messages  a l'utilisateur

// TODO : Ajouter le choix de la couleur des messages  a l'utilisateur
// TODO : WEB SOCKET
// TODO : Mettre les messages en cache ?
// TODO : Ajouter le darkmode
// TODO : Ajouter les reaction + les emojis

// prendre en charge le code

export function Messages() {
  return (
    <section className="text-slate-100 ">
      <div className=" min-h-[calc(100vh-50vh)] min-w-[calc(100vw-50vw)] max-w-[780px] max-h-[780px] w-full h-full md:min-h-[780px] md:min-w-[780px] rounded-full absolute top-1/3 -z-1 gradient-1 blur-[150px]  -translate-y-1/2 -translate-x-1/2 left-2/3" />
      <div className="w-full h-full max-w-[394px] max-h-[560px] gradient-2 absolute top-1/2 -translate-x-1/2 left-1/3 opacity-100 blur-[150px] translate-y-1/2 lg:translate-y-1/3 -z-1" />
      {/* TODO: Remove `pb-20` */}
      {/* <SecondaryTitle className="mb-3">Messages</SecondaryTitle>

      {messages2.map((message) => (
        <Message key={message.id} {...message} id={message.id} />
      ))} */}
      <div className="grid grid-cols-messages grid-rows-messages divide-x-2 h-[calc(100vh-6rem)] overflow-hidden ">
        <div className="row-start-1 row-end-2 col-start-1 col-end-2">
          Profile
        </div>
        <div className="row-start-2 row-end-3 col-start-1 col-end-2">
          Discover
        </div>
        <div className="row-start-3 row-end-4 col-start-1 col-end-2">
          Messages
        </div>
        <div className="row-start-1 row-end-4 col-start-2 col-end-3">
          <div
            className={'w-full h-full overflow-auto px-2 flex flex-col gap-4'}>
            {/* their messages*/}

            <TheirMessage>Un petit message ?</TheirMessage>

            <TheirMessage>
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, quis
              aliquam nisl nisl eu nisl. Nullam euismod, nisl eget ultricies
              aliquam, nunc nisl aliquet nunc, quis aliquam nisl nisl eu nisl.
            </TheirMessage>

            {/* my messages*/}

            <MyMessage>Petit message mignon !</MyMessage>

            <MyMessage>
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, quis
              aliquam nisl nisl eu nisl. Nullam euismod, nisl eget ultricies
              aliquam, nunc nisl aliquet nunc, quis aliquam nisl nisl eu nisl.
            </MyMessage>

            {/*DIVIDER*/}

            <Divider date={'Hier'} />

            <TheirMessage date={'02 Aout 2023 01:02'}>
              Un petit message ?
            </TheirMessage>

            <MyMessage date={'02 Aout 2023 02:02'}>
              Petit message mignon !
            </MyMessage>

            <MyMessage date={'02 Aout 2023 02:45'}>Tu fais quoi ?</MyMessage>
            <TheirMessage date={'02 Aout 2023 02:50'}>
              Je dev un snake en dodge ! et toi ?
            </TheirMessage>
            <MyMessage date={'02 Aout 2023 02:55'}>
              Ouah ! ca a l'air super cool !
            </MyMessage>
            <MyMessage date={'02 Aout 2023 02:56'}>
              Moi je suis en train de faire un site de rencontre !
            </MyMessage>
            <TheirMessage date={'02 Aout 2023 02:58'}>
              Ah bon ? c'est quoi le nom ?
            </TheirMessage>
            <MyMessage date={'02 Aout 2023 03:00'}>
              C'est Tindev ! l'app de rencontre pour les devs !
            </MyMessage>

            <Divider date={"Aujourd'hui 🌞"} />

            <TheirMessage date={'02 Aout 2023 10:30 AM'}>
              Salut! Comment ça va aujourd'hui? 😄
            </TheirMessage>

            <MyMessage date={'02 Aout 2023 10:35 AM'}>
              Hey! Ça va comme un chat dans un rayon de soleil ☀️
            </MyMessage>

            <MyMessage date={'02 Aout 2023 11:15 AM'}>
              Je suis en train de lutter contre des bugs 🐛🔨
            </MyMessage>

            <TheirMessage date={'02 Aout 2023 11:30 AM'}>
              Ah, les bugs, ces petits monstres insaisissables! 🙈
            </TheirMessage>

            <MyMessage date={'02 Aout 2023 11:35 AM'}>
              Oui, c'est comme jouer à cache-cache avec des gremlins 🕵️‍♂️
            </MyMessage>

            <MyMessage date={'02 Aout 2023 12:00 PM'}>
              Et toi, que mijotes-tu de beau? 👨‍🍳
            </MyMessage>

            <TheirMessage date={'02 Aout 2023 12:15 PM'}>
              Je travaille sur une appli de gestion de recettes de cuisine 🍔📱
            </TheirMessage>

            <TheirMessage date={'02 Aout 2023 12:15 PM'}>
              Je travaille sur une appli de gestion de recettes de cuisine 🍔📱
            </TheirMessage>

            <MyMessage date={'02 Aout 2023 12:30 PM'}>
              Miam! J'espère que ça inclut des recettes pour les amateurs de
              tacos 🌮🌮
            </MyMessage>

            <TheirMessage date={'02 Aout 2023 12:15 PM'}>
              <img src={'https://via.placeholder.com/200'} /> {/* W-full ? */}
              <p> Regarde moi cette image !</p>
            </TheirMessage>

            <Message from="me" date="02 Aout 2023 12:30 PM">
              Regarde ca, tout est dans un seul composant !
            </Message>

            <Message from="him" date="02 Aout 2023 12:31 PM">
              Wouah !!! 😍
            </Message>
          </div>
        </div>
        <div className="row-start-1 row-end-4 col-start-3 col-end-4">
          MatchProfile
        </div>
      </div>
    </section>
  )
}
