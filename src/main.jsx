import React from 'react'
import ReactDOM from 'react-dom/client'
import { Navbar } from './components/navbar'
import { Banner } from './components/banner'
import { Hero } from './components/hero'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <section id='Top' className="py-20 h-screen">
      <main className="flex h-fit flex-col">
        <div className="container mt-16 mx-auto px-2">
          <Hero/>
        </div>          
      </main>
    </section>
    <div className='bg-black'>
      <Banner/>
    </div>
  </React.StrictMode>,
)
