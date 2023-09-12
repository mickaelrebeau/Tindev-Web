import { createContext, PropsWithChildren } from 'react'

export type ContextType = User

export type ProviderProps = PropsWithChildren<{
  user: ContextType
}>

export const UserContext = createContext<ContextType | null>(null)

export function UserProvider({ children, user }: ProviderProps) {
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>
}
