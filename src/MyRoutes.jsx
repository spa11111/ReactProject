import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import ProductPage from './pages/ProductPage'
import Translate from './pages/Translate'
import ImageGenerator from './pages/ImageGenerator'

const MyRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Homepage />} />

            <Route path="/product" element={<ProductPage />} />

            <Route path="/translate" element={<Translate />} />

                        <Route path="/img" element={<ImageGenerator />} />

        </Routes>
    </BrowserRouter>
  )
}

export default MyRoutes