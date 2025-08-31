import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'

import Home from "./pages/Home"

const MyApp = () => {
  return (
    <div className='wrap'>
        {/* 選單 */}

        {/* 內容區-新頁面可增加進來 */}
        <Routes>
            <Route path='/' element={<Home/>}></Route>
        </Routes>

        {/* 頁尾區 */}
        <Footer></Footer>
        
        
        </div>
  )
}

export default MyApp