import React, { useContext } from 'react'
import { ThemeContext } from './contextApi'
import './index.css'

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <div className={`app ${theme}`}>
      <h1>{theme === "light" ? "Light Mode" : "Dark Mode"}</h1>

      <button onClick={toggleTheme} className="toggle-btn">
        Toggle Theme
      </button>
    </div>
  )
}

export default App