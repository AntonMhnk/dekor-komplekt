import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { categories, products } from '../data/products'
import './CatalogPage.css'

function CatalogPage() {
  return (
    <div className="catalog-page">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <Link to="/">Главная</Link>
          <span className="breadcrumb-sep">/</span>
          <span>Каталог</span>
        </nav>

        <h1 className="page-title">Каталог товаров</h1>

        {/* Categories Grid */}
        <section className="catalog-categories">
          <h2 className="catalog-section-title">Категории</h2>
          <div className="categories-mini-grid">
            {categories.map((category) => (
              <Link
                key={category.slug}
                to={`/catalog/${category.slug}`}
                className="category-mini-card"
              >
                <div className="category-mini-image">
                  <img src={category.image} alt={category.name} loading="lazy" />
                </div>
                <span className="category-mini-name">{category.name}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* All Products */}
        <section className="catalog-products">
          <div className="catalog-header">
            <h2 className="catalog-section-title">Все товары</h2>
            <span className="catalog-count">{products.length} товаров</span>
          </div>
          <div className="grid grid-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default CatalogPage
