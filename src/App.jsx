import './App.css'
import {Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import ShoppingTrips from './components/ShoppingTrips'
import Drivers from './components/Drivers'
import Customers from './components/Customers'
import History from './components/History'
import CustomerHistory from './components/CustomerHistory'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Dashboard/>}>
          <Route path='' element={<Drivers/>}/>
          <Route path='drivers' element={<Drivers/>}/>
          <Route path='customers' element={<Customers/>}/>
          <Route path='trips' element={<ShoppingTrips/>}/>
          <Route path='driver_history' element={<History/>}/>
          <Route path='customer_history' element={<CustomerHistory/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
