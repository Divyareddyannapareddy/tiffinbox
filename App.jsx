import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import MenuGrid from './components/MenuGrid'

export default function App(){
  return (
    <div className="app-root">
      <Header />
      <main>
        <Hero />
        <MenuGrid />
      </main>
      <footer className="site-footer">
        <div>© {new Date().getFullYear()} Tiffinbox</div>
      </footer>
    </div>
  )
}
