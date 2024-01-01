import { Routes, Route } from 'react-router-dom'
import Layout_Admin from './pages/Layout_Admin'
import { Dashboard, Home, Welcome } from './pages/Index'
import Bangla_Add_Alphabate from './pages/admin/bangla/Bangla_Add_Alphabate'
import BnAllAlphabet from './pages/admin/bangla/BnAllAlphabet'
import BnUpdateAlphabet from './pages/admin/bangla/BnUpdateAlphabet'
import EnUpdateAlphabet from './pages/admin/english/EnUpdateAlphabet'
import EnAllAlphabet from './pages/admin/english/EnAllAlphabet'

function App() {

  return (
    <div
      className='h-screen'
    >
      <Routes>
        <Route path='/dashboard' element={<Layout_Admin>
          <Dashboard />
        </Layout_Admin>} />
        <Route path='/bn/all/alphabet' element={<Layout_Admin>
          <BnAllAlphabet />
        </Layout_Admin>} />
        <Route path='/bn/add/alphabet' element={<Layout_Admin>
          <Bangla_Add_Alphabate />
        </Layout_Admin>} />
        <Route path='/bn/update/alphabet/:id' element={<Layout_Admin>
          <BnUpdateAlphabet />
        </Layout_Admin>} />
        <Route path='/en/all/alphabet' element={<Layout_Admin>
          <EnAllAlphabet />
        </Layout_Admin>} />
        <Route path='/en/add/alphabet' element={<Layout_Admin>
          <Bangla_Add_Alphabate />
        </Layout_Admin>} />
        <Route path='/en/update/alphabet/:id' element={<Layout_Admin>
          <EnUpdateAlphabet />
        </Layout_Admin>} />
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<Welcome />} />
      </Routes>
    </div>
  )
}

export default App
