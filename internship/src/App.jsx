import React from 'react'
import TodoApp from './components/Todo/TodoApp'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoApp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
