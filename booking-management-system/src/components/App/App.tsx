import { Navbar } from '../Navbar/Navbar'
import { SideBar } from '../SideBar/SideBar'
import { BookingContent } from '../BookingContent/BookingContent'

import { useContext } from 'react'
import { ThemeContext } from '../../contexts/ModeContext'

import './App.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  const context: any = useContext(ThemeContext)

  return (
    <div className={`App ${context.theme}`}>
    <header>
      <Navbar />
    </header>
    <main className={`App-main ${context.theme}`}>
      <div className='container mt-3'>
        <div className='row mb-3'>
          <div className='col-sm-12 col-md-4'>
            <SideBar />
          </div>
          <div className='col-sm-12 col-md-8'>
            <BookingContent />
          </div>
        </div>
      </div>
    </main>
    </div>
    
  )
}

export default App
