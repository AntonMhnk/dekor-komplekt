import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import './Cart.css'

function Cart() {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice,
  } = useCart()

  const formatPrice = (num) => {
    return new Intl.NumberFormat('ru-RU').format(num)
  }

  return (
    <>
      {/* Overlay */}
      <div
        className={`cart-overlay ${isOpen ? 'cart-overlay-open' : ''}`}
        onClick={closeCart}
      />

      {/* Cart Sidebar */}
      <div className={`cart-sidebar ${isOpen ? 'cart-sidebar-open' : ''}`}>
        <div className="cart-header">
          <h2 className="cart-title">
            Корзина
            {totalItems > 0 && (
              <span className="cart-title-count">({totalItems})</span>
            )}
          </h2>
          <button className="cart-close" onClick={closeCart} aria-label="Закрыть">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {items.length === 0 ? (
          <div className="cart-empty">
            <div className="cart-empty-icon">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
            </div>
            <p className="cart-empty-text">Корзина пуста</p>
            <p className="cart-empty-subtext">Добавьте товары из каталога</p>
            <Link to="/catalog" className="btn btn-primary" onClick={closeCart}>
              Перейти в каталог
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {items.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="cart-item-info">
                    <Link
                      to={`/product/${item.id}`}
                      className="cart-item-name"
                      onClick={closeCart}
                    >
                      {item.name}
                    </Link>
                    <span className="cart-item-category">{item.category}</span>
                    <div className="cart-item-bottom">
                      <div className="cart-item-quantity">
                        <button
                          className="quantity-btn-sm"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          −
                        </button>
                        <span className="quantity-value">{item.quantity}</span>
                        <button
                          className="quantity-btn-sm"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                      <span className="cart-item-price">
                        {formatPrice(item.price * item.quantity)} ₽
                      </span>
                    </div>
                  </div>
                  <button
                    className="cart-item-remove"
                    onClick={() => removeItem(item.id)}
                    aria-label="Удалить"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="3 6 5 6 21 6"/>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <button className="cart-clear" onClick={clearCart}>
                Очистить корзину
              </button>
              <div className="cart-total">
                <span className="cart-total-label">Итого:</span>
                <span className="cart-total-price">{formatPrice(totalPrice)} ₽</span>
              </div>
              <button className="btn btn-primary cart-checkout">
                Оформить заказ
              </button>
              <p className="cart-note">Доставка рассчитывается при оформлении</p>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default Cart
