import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getProductById, getProductsByCategory } from '../data/products'
import { useCart } from '../context/CartContext'
import ProductCard from '../components/ProductCard'
import './ProductPage.css'

function ProductPage() {
  const { productId } = useParams()
  const product = getProductById(productId)
  const { addItem, openCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [isAdded, setIsAdded] = useState(false)

  if (!product) {
    return (
      <div className="not-found">
        <div className="container">
          <h1>Товар не найден</h1>
          <Link to="/catalog" className="btn btn-primary">
            Вернуться в каталог
          </Link>
        </div>
      </div>
    )
  }

  const relatedProducts = getProductsByCategory(product.categorySlug)
    .filter((p) => p.id !== product.id)
    .slice(0, 4)

  const formatPrice = (num) => {
    return new Intl.NumberFormat('ru-RU').format(num)
  }

  const handleQuantityChange = (delta) => {
    setQuantity((prev) => Math.max(1, prev + delta))
  }

  const handleAddToCart = () => {
    addItem(product, quantity)
    setIsAdded(true)
    setTimeout(() => {
      setIsAdded(false)
      openCart()
    }, 500)
  }

  return (
    <div className="product-page">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <Link to="/">Главная</Link>
          <span className="breadcrumb-sep">/</span>
          <Link to="/catalog">Каталог</Link>
          <span className="breadcrumb-sep">/</span>
          <Link to={`/catalog/${product.categorySlug}`}>{product.category}</Link>
          <span className="breadcrumb-sep">/</span>
          <span>{product.name}</span>
        </nav>

        {/* Product Details */}
        <div className="product-details">
          <div className="product-gallery">
            <div className="product-main-image">
              <img src={product.image} alt={product.name} />
              {product.isNew && <span className="product-badge product-badge-new">Новинка</span>}
              {product.isSale && <span className="product-badge product-badge-sale">Скидка</span>}
            </div>
          </div>

          <div className="product-info">
            <span className="product-category">{product.category}</span>
            <h1 className="product-name">{product.name}</h1>
            
            <div className="product-price-block">
              <span className="product-price">{formatPrice(product.price)} ₽</span>
              {product.oldPrice && (
                <span className="product-old-price">{formatPrice(product.oldPrice)} ₽</span>
              )}
            </div>

            <p className="product-description">{product.description}</p>

            <div className="product-actions">
              <div className="product-quantity">
                <button className="quantity-btn" onClick={() => handleQuantityChange(-1)}>−</button>
                <input 
                  type="number" 
                  value={quantity} 
                  min="1" 
                  readOnly 
                  className="quantity-input" 
                />
                <button className="quantity-btn" onClick={() => handleQuantityChange(1)}>+</button>
              </div>
              <button 
                className={`btn product-add-btn ${isAdded ? 'btn-success' : 'btn-primary'}`}
                onClick={handleAddToCart}
              >
                {isAdded ? (
                  <>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    Добавлено!
                  </>
                ) : (
                  <>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                      <line x1="3" y1="6" x2="21" y2="6"/>
                      <path d="M16 10a4 4 0 0 1-8 0"/>
                    </svg>
                    Добавить в корзину
                  </>
                )}
              </button>
            </div>

            <div className="product-features">
              <div className="product-feature">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="1" y="3" width="15" height="13"/>
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
                  <circle cx="5.5" cy="18.5" r="2.5"/>
                  <circle cx="18.5" cy="18.5" r="2.5"/>
                </svg>
                <span>Доставка 1-3 дня</span>
              </div>
              <div className="product-feature">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                <span>Гарантия качества</span>
              </div>
              <div className="product-feature">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                  <polyline points="17 6 23 6 23 12"/>
                </svg>
                <span>Возврат 14 дней</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="related-products">
            <h2 className="related-title">Похожие товары</h2>
            <div className="grid grid-4">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}

export default ProductPage
