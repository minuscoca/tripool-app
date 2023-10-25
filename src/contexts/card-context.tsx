import { Children, createContext, useContext } from "react"

const Ctx = createContext('sm')

export function Provider({ size = 'sm', children }: { size: 'sm' | 'md', children: React.ReactNode }) {
  return (
    <Ctx.Provider value={size}>
      {children}
    </Ctx.Provider>
  )
}

export function useCardSize() {
  const ctx = useContext(Ctx)
  return ctx
}