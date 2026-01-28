import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { categories, getNewProducts } from '../data/products'
import './HomePage.css'

function HomePage() {
  const newProducts = getNewProducts().slice(0, 4)

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="container hero-container">
          <div className="hero-content">
            <span className="hero-label">Салон декоративных покрытий</span>
            <h1 className="hero-title">
              Создаём интерьеры<br />
              <span className="hero-accent">премиум класса</span>
            </h1>
            <p className="hero-text">
              Эксклюзивные отделочные материалы от ведущих мировых брендов. 
              Декоративные штукатурки, краски, обои и лепной декор для самых изысканных проектов.
            </p>
            <div className="hero-actions">
              <Link to="/catalog" className="btn btn-white">
                Смотреть каталог
              </Link>
              <Link to="/contact" className="btn btn-outline hero-btn-outline">
                Консультация
              </Link>
            </div>
          </div>
          <div className="hero-features">
            <div className="hero-feature">
              <span className="hero-feature-number">15+</span>
              <span className="hero-feature-text">лет опыта</span>
            </div>
            <div className="hero-feature">
              <span className="hero-feature-number">50+</span>
              <span className="hero-feature-text">брендов</span>
            </div>
            <div className="hero-feature">
              <span className="hero-feature-number">2</span>
              <span className="hero-feature-text">филиала</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <div className="container">
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <div className="feature-content">
                <h3 className="feature-title">Гарантия качества</h3>
                <p className="feature-text">Сертифицированная продукция от официальных дистрибьюторов</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="1" y="3" width="15" height="13"/>
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
                  <circle cx="5.5" cy="18.5" r="2.5"/>
                  <circle cx="18.5" cy="18.5" r="2.5"/>
                </svg>
              </div>
              <div className="feature-content">
                <h3 className="feature-title">Доставка по городу</h3>
                <p className="feature-text">Бесплатно при заказе от 15 000 ₽</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <div className="feature-content">
                <h3 className="feature-title">Консультация</h3>
                <p className="feature-text">Профессиональный подбор материалов</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div className="feature-content">
                <h3 className="feature-title">Образцы</h3>
                <p className="feature-text">Бесплатные образцы материалов</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section categories-section">
        <div className="container">
          <div className="section-header-left">
            <span className="section-label">Каталог</span>
            <h2>Категории товаров</h2>
          </div>
          <div className="categories-grid">
            {categories.map((category) => (
              <Link
                key={category.slug}
                to={`/catalog/${category.slug}`}
                className="category-card"
              >
                <div className="category-card-image">
                  <img src={category.image} alt={category.name} loading="lazy" />
                  <div className="category-card-overlay"></div>
                </div>
                <div className="category-card-content">
                  <h3 className="category-card-name">{category.name}</h3>
                  <span className="category-card-link">
                    Подробнее
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="5" y1="12" x2="19" y2="12"/>
                      <polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* New Products */}
      <section className="section new-products-section">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="section-label">Новинки</span>
              <h2>Новые поступления</h2>
            </div>
            <Link to="/catalog" className="section-link">
              Весь каталог
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </Link>
          </div>
          <div className="grid grid-4">
            {newProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="container">
          <div className="cta-content">
            <span className="cta-label">Бесплатная консультация</span>
            <h2 className="cta-title">Поможем подобрать материалы</h2>
            <p className="cta-text">
              Наши эксперты помогут выбрать идеальное решение для вашего интерьера
            </p>
            <div className="cta-actions">
              <a href="tel:+73517277339" className="btn btn-white">
                8 (351) 727-73-39
              </a>
              <Link to="/contact" className="btn btn-outline cta-btn-outline">
                Оставить заявку
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
