import { Routes, Route } from 'react-router-dom'
import Layout_Admin from './pages/Layout_Admin'
import { Dashboard, Home, Welcome } from './pages/Index'
import Bangla_Add_Alphabate from './pages/admin/Bangla_Add_Alphabate'

function App() {

  return (
    <div
      className='h-screen'
    >
      <Routes>
        <Route path='/dashboard' element={<Layout_Admin>
          <Dashboard />
        </Layout_Admin>} />
        <Route path='/bangla/add/alphabate' element={<Layout_Admin>
          <Bangla_Add_Alphabate />
        </Layout_Admin>} />
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<Welcome />} />
      </Routes>
    </div>
  )
}

export default App
