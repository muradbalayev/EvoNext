import React from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default function ClientLayout({children}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}


