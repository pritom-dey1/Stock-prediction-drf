import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
          <header className="sticky top-0 z-50">
        <Navbar />
      </header>

      <main className="flex-grow">
]        <div className="px-4 md:px-8 py-6 md:py-10">
          <Outlet />
        </div>
      </main>

      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  )
}

export default Home
