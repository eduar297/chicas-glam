import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md mx-auto">
        <div className="flex justify-center space-x-4 mb-6">
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo hover:scale-110 transition-transform" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react hover:scale-110 transition-transform" alt="React logo" />
          </a>
        </div>
        <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Vite + React + Tailwind</h1>
        <div className="text-center">
          <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200 mb-4"
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </button>
          <p className="text-gray-600 mb-4">
            Edit <code className="bg-gray-100 px-2 py-1 rounded">src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="text-sm text-gray-500 text-center">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  )
}

export default App
