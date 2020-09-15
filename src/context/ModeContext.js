import React, { useState, useEffect, createContext } from "react"

export const ModeContext = createContext()

const ModeContextProvider = ({ children }) => {
    const getlocalStorage = () => localStorage.getItem("mode") || "light"
  const [mode, setMode] = useState(getlocalStorage)
  useEffect( () => {
localStorage.setItem('mode', mode)
  }, [mode])

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ModeContext.Provider>
  )
}

export default ModeContextProvider
