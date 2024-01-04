import { useRoutes } from 'react-router-dom'
import { Alphabets, AlphabetsDetails, ArAllAlphabet, ArUpdateAlphabet, Arabic, Bangla, BnAllAlphabet, BnUpdateAlphabet, Dashboard, Days, DaysUpdate, EnAllAlphabet, EnUpdateAlphabet, English, Home, Layout, Layout_Admin, Mathematics, Months, SeasonUpdate, Seasons, Welcome, WritingBoard } from './pages/Index'

function App() {
  const routes = useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Welcome />
        },
        {
          path: '/home',
          element: <Home />
        },
        {
          path: '/arabic',
          element: <Arabic />
        },
        {
          path: '/bangla',
          element: <Bangla />
        },
        {
          path: '/english',
          element: <English />
        },
        {
          path: '/math',
          element: <Mathematics />
        },
        {
          path: '/alphabets/:lan',
          element: <Alphabets />
        },
        {
          path: '/alphabets/details/:lan',
          element: <AlphabetsDetails />
        },
        {
          path: '/alphabets/write/:lan',
          element: <WritingBoard />
        },
        {
          path: '/dashboard',
          element: <Layout_Admin>
            <Dashboard />
          </Layout_Admin>
        },
        {
          path: '/alphabet/bn',
          element: <Layout_Admin>
            <BnAllAlphabet />
          </Layout_Admin>
        },
        {
          path: '/alphabet/bn/update/:id',
          element: <Layout_Admin>
            <BnUpdateAlphabet />
          </Layout_Admin>
        },
        {
          path: '/alphabet/en',
          element: <Layout_Admin>
            <EnAllAlphabet />
          </Layout_Admin>
        },
        {
          path: '/alphabet/en/update/:id',
          element: <Layout_Admin>
            <EnUpdateAlphabet />
          </Layout_Admin>
        },
        {
          path: '/alphabet/ar',
          element: <Layout_Admin>
            <ArAllAlphabet />
          </Layout_Admin>
        },
        {
          path: '/alphabet/ar/update/:id',
          element: <Layout_Admin>
            <ArUpdateAlphabet />
          </Layout_Admin>
        },
        {
          path: '/months',
          element: <Layout_Admin>
            <Months />
          </Layout_Admin>
        },
        {
          path: '/month/update/:id',
          element: <Layout_Admin>
            <Months />
          </Layout_Admin>
        },
        {
          path: '/days',
          element: <Layout_Admin>
            <Days />
          </Layout_Admin>
        },
        {
          path: '/days/update/:id',
          element: <Layout_Admin>
            <DaysUpdate />
          </Layout_Admin>
        },
        {
          path: '/seasons',
          element: <Layout_Admin>
            <Seasons />
          </Layout_Admin>
        },
        {
          path: '/seasons/update/:id',
          element: <Layout_Admin>
            <SeasonUpdate />
          </Layout_Admin>
        },
      ]
    }
  ])
  return routes
}

export default App
