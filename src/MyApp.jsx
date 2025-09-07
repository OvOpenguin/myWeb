import { Route, Routes } from 'react-router-dom'

import ScrollToTop from './components/ScrollToTop'

import Footer from './components/Footer'
import Nav from './components/Nav'

import Home from "./pages/Home"
import Events from "./pages/Events"
import Test from "./pages/Test"
import YearCount from './components/YearCount'
import Fate from './components/Fate'
import Lists from './pages/Lists'



const MyApp = () => {
  return (
    <div className='wrap'>
      <ScrollToTop/>
      {/* 選單 */}
      <Nav></Nav>

      {/* 內容區-新頁面可增加進來 */}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/events' element={<Events />}></Route>
        <Route path='/lists' element={<Lists />}></Route>
        <Route path='/test' element={<Test />}></Route>
        <Route path='/yearcount' element={<YearCount />}></Route>
        <Route path='/fate' element={<Fate />}></Route>
        <Route path="/topic/:id" element={<Test />} />
      </Routes>

      {/* 頁尾區 */}
      <Footer></Footer>


    </div>
  )
}

export default MyApp