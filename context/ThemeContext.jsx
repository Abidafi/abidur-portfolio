'use client'

import { createContext, useContext } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  // Always light mode
  const isDark = false
  const toggleTheme = () => {} // No-op function

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}