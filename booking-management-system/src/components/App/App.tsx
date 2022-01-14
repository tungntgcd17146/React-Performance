import { Navbar } from '../Navbar/Navbar'
import { SideBar } from '../SideBar/SideBar'
import { BookingContent } from '../BookingContent/BookingContent'

import { useContext } from 'react'
import { ThemeContext } from '../../Contexts/ModeContext'

import './App.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  const context = useContext(ThemeContext)

  return (
    <div className={`app ${context.theme}`}>
      <header>
        <Navbar />
      </header>
      <main className={`app-main ${context.theme}`}>
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
