import React from 'react'
import ReactDOM from 'react-dom/client'
import { Navbar } from './components/navbar'
import { Hero } from './components/hero'
import { About } from './components/about'
import { Skills } from './components/skills'
import { Footer } from './components/footer'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <section id='Top' className="pt-24 h-max">
      <main className="flex h-max flex-col">
        <div className="container mt-16 mx-auto px-2">
          <Hero />
        </div>
        <div className='py-40'>
          <About />
        </div>
        <div className='py-40'>
          <Skills />
        </div>
      </main>
      <Footer/>
    </section>
  </React.StrictMode>,
)
