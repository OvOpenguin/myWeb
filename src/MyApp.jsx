import { Route, Routes } from 'react-router-dom'

import ScrollToTop from './components/ScrollToTop'

import Footer from './components/Footer'
import Nav from './components/Nav'

import Home from "./pages/Home"
import Test from "./pages/Test"
import YearCount from './components/YearCount'
import Fate from './components/Fate'
import Lists from './pages/Lists'
import Event1636 from "./pages/Event1636"
import Event1720 from "./pages/Event1720"
import Event1929 from "./pages/Event1929"


const MyApp = () => {
  return (
    <div className='wrap'>
      <ScrollToTop/>
      {/* 選單 */}
      <Nav></Nav>

      {/* 內容區-新頁面可增加進來 */}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/lists' element={<Lists />}></Route>
        <Route path='/test' element={<Test />}></Route>
        <Route path='/yearcount' element={<YearCount />}></Route>
        <Route path='/fate' element={<Fate />}></Route>
        <Route path="/topic/:id" element={<Test />} />

        <Route path='/event1636' element={<Event1636 />}></Route>
        <Route path='/event1720' element={<Event1720 />}></Route>
        <Route path='/event1929' element={<Event1929 />}></Route>
      </Routes>

      {/* 頁尾區 */}
      <Footer></Footer>


    </div>
  )
}

export default MyApp