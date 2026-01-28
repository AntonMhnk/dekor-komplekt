import { useParams, Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { getCategoryBySlug, getProductsByCategory } from '../data/products'
import './CategoryPage.css'

function CategoryPage() {
  const { categorySlug } = useParams()
  const category = getCategoryBySlug(categorySlug)
  const products = getProductsByCategory(categorySlug)

  if (!category) {
    return (
      <div className="not-found">
        <div className="container">
          <h1>Категория не найдена</h1>
          <Link to="/catalog" className="btn btn-primary">
            Вернуться в каталог
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="category-page">
      {/* Hero */}
      <div className="category-hero">
        <img src={category.image} alt={category.name} className="category-hero-bg" />
        <div className="category-hero-overlay" />
        <div className="container">
          <div className="category-hero-content">
            <nav className="breadcrumb breadcrumb-light">
              <Link to="/">Главная</Link>
              <span className="breadcrumb-sep">/</span>
              <Link to="/catalog">Каталог</Link>
              <span className="breadcrumb-sep">/</span>
              <span>{category.name}</span>
            </nav>
            <h1 className="category-hero-title">{category.name}</h1>
            <p className="category-hero-desc">{category.description}</p>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="container">
        <section className="category-products">
          <div className="catalog-header">
            <h2 className="catalog-section-title">Товары категории</h2>
            <span className="catalog-count">{products.length} товаров</span>
          </div>

          {products.length > 0 ? (
            <div className="grid grid-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="no-products">
              <p>В данной категории пока нет товаров</p>
              <Link to="/catalog" className="btn btn-outline">
                Смотреть все товары
              </Link>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}

export default CategoryPage
