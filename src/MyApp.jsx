import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Nav from './components/Nav'

import Home from "./pages/Home"
import Travel from "./pages/Travel"
import Events from "./pages/Events"

const MyApp = () => {
  return (
    <div className='wrap'>
        {/* 選單 */}
        <Nav></Nav>

        {/* 內容區-新頁面可增加進來 */}
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/travel' element={<Travel/>}></Route>
            <Route path='/events' element={<Events/>}></Route>
        </Routes>

        {/* 頁尾區 */}
        <Footer></Footer>
        
        
        </div>
  )
}

export default MyApp