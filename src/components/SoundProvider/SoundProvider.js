"use client"
import React from 'react';

export const SoundContext = React.createContext();

function SoundProvider({children}) {
  const [soundEnabled, setSoundEnabled] = React.useState(true)

  function handleSound() {
    setSoundEnabled(!soundEnabled)
  }

  return (
    <SoundContext.Provider
      value={{ soundEnabled, handleSound }}
    >
      {children}
    </SoundContext.Provider>
  )
}

export default SoundProvider;
