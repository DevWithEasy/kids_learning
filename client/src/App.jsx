import { Routes, Route } from 'react-router-dom'
import Layout_Admin from './pages/Layout_Admin'
import { Dashboard, Home, Welcome } from './pages/Index'
import Bangla_Add_Alphabate from './pages/admin/bangla/Bangla_Add_Alphabate'
import BnAllAlphabet from './pages/admin/bangla/BnAllAlphabet'
import BnUpdateAlphabet from './pages/admin/bangla/BnUpdateAlphabet'
import EnUpdateAlphabet from './pages/admin/english/EnUpdateAlphabet'
import EnAllAlphabet from './pages/admin/english/EnAllAlphabet'
import ArAllAlphabet from './pages/admin/arabic/ArAllAlphabet'
import ArUpdateAlphabet from './pages/admin/arabic/ArUpdateAlphabet'
import Days from './pages/admin/day/Days'
import DaysUpdate from './pages/admin/day/DaysUpdate'
import Months from './pages/admin/month/Months'
import MonthUpdate from './pages/admin/month/MonthUpdate'
import SeasonUpdate from './pages/admin/season/SeasonUpdate'
import Seasons from './pages/admin/season/Seasons'

function App() {

  return (
    <div
      className='h-screen'
    >
      <Routes>
        <Route
          path='/dashboard'
          element={
            <Layout_Admin>
              <Dashboard />
            </Layout_Admin>
          }
        />
        <Route
          path='/bn/all/alphabet'
          element={<Layout_Admin>
            <BnAllAlphabet />
          </Layout_Admin>} />
        <Route
          path='/bn/add/alphabet'
          element={<Layout_Admin>
            <Bangla_Add_Alphabate />
          </Layout_Admin>} />
        <Route
          path='/bn/update/alphabet/:id'
          element={<Layout_Admin>
            <BnUpdateAlphabet />
          </Layout_Admin>} />
        <Route
          path='/en/all/alphabet'
          element={<Layout_Admin>
            <EnAllAlphabet />
          </Layout_Admin>} />
        <Route
          path='/en/add/alphabet'
          element={<Layout_Admin>
            <Bangla_Add_Alphabate />
          </Layout_Admin>} />
        <Route
          path='/en/update/alphabet/:id'
          element={<Layout_Admin>
            <EnUpdateAlphabet />
          </Layout_Admin>} />
        <Route
          path='/ar/all/alphabet'
          element={<Layout_Admin>
            <ArAllAlphabet />
          </Layout_Admin>} />
        <Route
          path='/ar/add/alphabet'
          element={<Layout_Admin>
            <Bangla_Add_Alphabate />
          </Layout_Admin>} />
        <Route
          path='/ar/update/alphabet/:id'
          element={<Layout_Admin>
            <ArUpdateAlphabet />
          </Layout_Admin>} />
        <Route
          path='/day/all'
          element={<Layout_Admin>
            <Days />
          </Layout_Admin>} />
        <Route
          path='/day/update/:id'
          element={<Layout_Admin>
            <DaysUpdate />
          </Layout_Admin>} />
        <Route
          path='/day/all'
          element={<Layout_Admin>
            <Days />
          </Layout_Admin>} />
        <Route
          path='/day/update/:id'
          element={<Layout_Admin>
            <DaysUpdate />
          </Layout_Admin>} />
        <Route
          path='/month/all'
          element={<Layout_Admin>
            <Months />
          </Layout_Admin>} />
        <Route
          path='/month/update/:id'
          element={<Layout_Admin>
            <MonthUpdate />
          </Layout_Admin>} />
          <Route
          path='/season/all'
          element={<Layout_Admin>
            <Seasons />
          </Layout_Admin>} />
        <Route
          path='/season/update/:id'
          element={<Layout_Admin>
            <SeasonUpdate />
          </Layout_Admin>} />
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<Welcome />} />
      </Routes>
    </div>
  )
}

export default App
