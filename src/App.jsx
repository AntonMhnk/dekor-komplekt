import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import CatalogPage from './pages/CatalogPage'
import CategoryPage from './pages/CategoryPage'
import ProductPage from './pages/ProductPage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import CheckoutPage from './pages/CheckoutPage'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="catalog/:categorySlug" element={<CategoryPage />} />
          <Route path="product/:productId" element={<ProductPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
