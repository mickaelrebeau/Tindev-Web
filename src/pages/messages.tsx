import {
  LinearGradientBlueToBlue,
  LinearGradientBlueToPink,
} from '@/components/ui/background/LinearGradient'
import { Chat } from '@/components/ui/message/Chat'
import { DiscoverNewMatches } from '@/components/ui/message/DiscoverNewMatches'
import { ListMessages } from '@/components/ui/message/ListMessages'
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
      <div className="absolute -z-1 h-[inherit] w-full overflow-hidden">
        <LinearGradientBlueToPink />
        <LinearGradientBlueToBlue />
      </div>
      <div className="flex h-[inherit]">
        <aside className="w-1/4 min-w-[300px] max-w-[500px]">
          <DiscoverNewMatches />
          <ListMessages />
        </aside>
        <main className="flex-auto border-x-2">
          <Chat />
        </main>
        {/* w-[300px] ne marchait pas, pas trouvé pk :D */}
        <aside className="min-w-[300px] max-w-[300px]">
          <ErrorBoundary>
            <MatchProfile userId="1" />
          </ErrorBoundary>
        </aside>
      </div>
    </>
  )
}
