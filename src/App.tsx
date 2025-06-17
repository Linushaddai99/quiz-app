import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './component/Home'
import Quiz from './component/Quiz'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/quiz' element={<Quiz />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
