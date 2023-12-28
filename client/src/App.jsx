import { Routes, Route } from 'react-router-dom'
import Layout_Admin from './pages/Layout_Admin'
import { Dashboard, Home } from './pages/Index'

function App() {

  return (
    <div
      className='h-screen'
    >
      <Routes>
        <Route path='/dashboard' element={<Layout_Admin>
          <Dashboard />
        </Layout_Admin>} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
