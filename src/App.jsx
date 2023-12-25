import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Order from './pages/Order'
function App() {

  return (
    <div
      className='h-screen bg-gradient-to-r from-teal-100 to-teal-50'
    >
      <Routes>
        <Route path='/order' element={<Order />} />
        <Route path='/product' element={<Products />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
