import { useRoutes } from 'react-router-dom'
import { AdminDays, AdminMonths, AdminSeasons, Alphabets, AlphabetsDetails, ArAllAlphabet, ArUpdateAlphabet, Arabic, Bangla, BnAllAlphabet, BnUpdateAlphabet, Color, Dashboard, Day, Days, DaysUpdate, EnAllAlphabet, EnUpdateAlphabet, English, Home, Layout, Layout_Admin, Mathematics, Month, MonthUpdate, Months, MultipicationTable, MultipicationTables, Number, NumberUpdate, SeasonUpdate, Welcome, WhiteBoard, WordGame, WritingBoard } from './pages/Index'


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
          path: '/math/tables',
          element: <MultipicationTables />
        },
        {
          path: '/math/tables/:id',
          element: <MultipicationTable />
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
          path: '/colors',
          element: <Color />
        },
        {
          path: '/day',
          element: <Day />
        },
        {
          path: '/days',
          element: <Days />
        },
        {
          path: '/month',
          element: <Month />
        },
        {
          path: '/months',
          element: <Months />
        },
        {
          path: '/game',
          element: <WordGame />
        },
        {
          path: '/whiteboard',
          element: <WhiteBoard />
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
          path: '/admin/months',
          element: <Layout_Admin>
            <AdminMonths />
          </Layout_Admin>
        },
        {
          path: '/month/update/:id',
          element: <Layout_Admin>
            <MonthUpdate />
          </Layout_Admin>
        },
        {
          path: '/admin/days',
          element: <Layout_Admin>
            <AdminDays />
          </Layout_Admin>
        },
        {
          path: '/days/update/:id',
          element: <Layout_Admin>
            <DaysUpdate />
          </Layout_Admin>
        },
        {
          path: '/admin/seasons',
          element: <Layout_Admin>
            <AdminSeasons />
          </Layout_Admin>
        },
        {
          path: '/seasons/update/:id',
          element: <Layout_Admin>
            <SeasonUpdate />
          </Layout_Admin>
        },
        {
          path: '/numbers',
          element: <Layout_Admin>
            <Number />
          </Layout_Admin>
        },
        {
          path: '/numbers/update/:id',
          element: <Layout_Admin>
            <NumberUpdate />
          </Layout_Admin>
        },
      ]
    }
  ])
  return routes
}

export default App
