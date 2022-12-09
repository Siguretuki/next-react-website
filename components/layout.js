import Container from 'components/container'
import Header from 'components/header'
import Footer from 'components/footer'
import { Component } from 'react'

export default function Layout({ children }) {
  return (
    <>
      <Header />

      <main><Container>{children}</Container></main>

      <Footer />
    </>
  )
}