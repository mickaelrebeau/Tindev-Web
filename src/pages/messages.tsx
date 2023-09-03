import { Chat } from '@/components/ui/message/Chat'
import { MatchProfile } from '@/components/ui/message/MatchProfile'

// TODO : Ajouter le choix de la couleur des messages  a l'utilisateur
// TODO : WEB SOCKET
// TODO : Mettre les messages en cache ?
// TODO : Ajouter le darkmode
// TODO : Ajouter les reaction + les emojis

// prendre en charge le code

export function Messages() {
  return (
    <>
      <div className="min-h-[calc(100vh-50vh)] min-w-[calc(100vw-50vw)] max-w-[780px] max-h-[780px] w-full h-full md:min-h-[780px] md:min-w-[780px] rounded-full absolute top-1/3 -z-1 gradient-1 blur-[150px] -translate-y-1/2 -translate-x-1/2 left-2/3" />
      <div className="w-full h-full max-w-[394px] max-h-[560px] gradient-2 absolute top-1/2 -translate-x-1/2 left-1/3 opacity-100 blur-[150px] translate-y-1/2 lg:translate-y-1/3 -z-1" />
      <div className="grid grid-cols-messages grid-rows-messages h-[inherit]">
        <div className="row-start-1 row-end-2 col-start-1 col-end-2">
          Profile
        </div>
        <div className="row-start-2 row-end-3 col-start-1 col-end-2">
          Discover
        </div>
        <div className="row-start-3 row-end-4 col-start-1 col-end-2">
          Messages
        </div>
        <div className="row-start-1 row-end-4 col-start-2 col-end-3 border-l-2 border-r-2 h-[inherit]">
          <Chat />
        </div>
        <div className="row-start-1 row-end-4 col-start-3 col-end-4">
          <MatchProfile />
        </div>
      </div>
    </>
  )
}
