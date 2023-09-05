import {
  LinearGradientBlueToBlue,
  LinearGradientBlueToPink,
} from '@/components/ui/background/LinearGradient'
import { Chat } from '@/components/ui/message/Chat'
import { MatchProfile } from '@/components/ui/message/MatchProfile'
import ErrorBoundary from '@/components/utils/ErrorBoundary'

// TODO : Ajouter le choix de la couleur des messages  a l'utilisateur
// TODO : WEB SOCKET
// TODO : Mettre les messages en cache ?
// TODO : Ajouter le darkmode
// TODO : Ajouter les reaction + les emojis

// prendre en charge le code

export function Messages() {
  return (
    <>
      <LinearGradientBlueToPink />
      <LinearGradientBlueToBlue />
      <div className="grid h-[inherit] grid-cols-messages grid-rows-messages">
        <div className="col-start-1 col-end-2 row-start-1 row-end-2">
          Profile
        </div>
        <div className="col-start-1 col-end-2 row-start-2 row-end-3">
          Discover
        </div>
        <div className="col-start-1 col-end-2 row-start-3 row-end-4">
          Messages
        </div>
        <div className="col-start-2 col-end-3 row-start-1 row-end-4 h-[inherit] border-l-2 border-r-2">
          <Chat />
        </div>
        <div className="col-start-3 col-end-4 row-start-1 row-end-4">
          <ErrorBoundary>
            <MatchProfile userId="1" />
          </ErrorBoundary>
        </div>
      </div>
    </>
  )
}
