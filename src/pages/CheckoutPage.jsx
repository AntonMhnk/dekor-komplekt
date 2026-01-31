import { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useCart } from '../context/CartContext'
import './CheckoutPage.css'

function CheckoutPage() {
  const navigate = useNavigate()
  const { items, totalPrice, clearCart } = useCart()
  const pageRef = useRef(null)
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    comment: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useGSAP(() => {
    gsap.set('.breadcrumb', { autoAlpha: 0, x: -20 })
    gsap.set('.page-title', { autoAlpha: 0, y: 30 })
    gsap.set('.checkout-form-section', { autoAlpha: 0, x: -30 })
    gsap.set('.checkout-summary', { autoAlpha: 0, x: 30 })

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl
      .to('.breadcrumb', { autoAlpha: 1, x: 0, duration: 0.5 })
      .to('.page-title', { autoAlpha: 1, y: 0, duration: 0.6 }, '-=0.3')
      .to('.checkout-form-section', { autoAlpha: 1, x: 0, duration: 0.6 }, '-=0.3')
      .to('.checkout-summary', { autoAlpha: 1, x: 0, duration: 0.6 }, '-=0.4')
  }, { scope: pageRef })

  const formatPrice = (num) => {
    return new Intl.NumberFormat('ru-RU').format(num)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitted(true)
    
    // Проверяем валидность формы
    if (!e.target.checkValidity()) {
      return
    }
    
    setIsSubmitting(true)

    // Формируем данные заказа
    const orderData = {
      customer: formData,
      items: items.map(item => ({
        name: item.name,
        quantity: item.quantity,
        price: item.price
      })),
      total: totalPrice,
      date: new Date().toLocaleString('ru-RU')
    }

    // Имитация отправки (здесь можно добавить реальную отправку на сервер/почту)
    console.log('Order submitted:', orderData)
    
    // Симуляция задержки отправки
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSuccess(true)
    clearCart()

    // Анимация успеха
    gsap.fromTo('.success-message', 
      { scale: 0.8, autoAlpha: 0 },
      { scale: 1, autoAlpha: 1, duration: 0.5, ease: 'back.out(1.7)' }
    )
  }

  if (items.length === 0 && !isSuccess) {
    return (
      <div className="checkout-page" ref={pageRef}>
        <div className="container">
          <div className="checkout-empty">
            <div className="checkout-empty-icon">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
            </div>
            <h1>Список пуст</h1>
            <p>Добавьте интересующие товары для отправки заявки</p>
            <Link to="/catalog" className="btn btn-primary">
              Перейти в каталог
            </Link>
          </div>
        </div>
      </div>
    )
  }

  if (isSuccess) {
    return (
      <div className="checkout-page" ref={pageRef}>
        <div className="container">
          <div className="success-message">
            <div className="success-icon">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
            </div>
            <h1>Заявка отправлена!</h1>
            <p>Наш менеджер свяжется с вами в ближайшее время для консультации</p>
            <div className="success-actions">
              <Link to="/" className="btn btn-outline">
                На главную
              </Link>
              <Link to="/catalog" className="btn btn-primary">
                Смотреть каталог
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="checkout-page" ref={pageRef}>
      <div className="container">
        <nav className="breadcrumb">
          <Link to="/">Главная</Link>
          <span className="breadcrumb-sep">/</span>
          <span>Заявка на консультацию</span>
        </nav>

        <h1 className="page-title">Заявка на консультацию</h1>

        <div className="checkout-grid">
          {/* Форма */}
          <section className="checkout-form-section">
            <h2 className="checkout-section-title">Контактные данные</h2>
            <form className={`checkout-form ${isSubmitted ? 'submitted' : ''}`} onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="name">Ваше имя *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Иван Иванов"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Телефон *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    inputMode="numeric"
                    pattern="[0-9+\s\-\(\)]*"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+7 999 123 45 67"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@example.com"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="comment">Комментарий или вопрос</label>
                <textarea
                  id="comment"
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Дополнительная информация..."
                />
              </div>

              <button 
                type="submit" 
                className={`btn btn-primary checkout-submit ${isSubmitting ? 'loading' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    Отправка...
                  </>
                ) : (
                  'Отправить заявку'
                )}
              </button>

              <p className="form-disclaimer">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
            </form>
          </section>

          {/* Выбранные товары */}
          <aside className="checkout-summary">
            <h2 className="checkout-section-title">Выбранные товары</h2>
            
            <div className="summary-items">
              {items.map(item => (
                <div key={item.id} className="summary-item">
                  <div className="summary-item-image">
                    <img src={item.image} alt={item.name} />
                    <span className="summary-item-qty">{item.quantity}</span>
                  </div>
                  <div className="summary-item-info">
                    <span className="summary-item-name">{item.name}</span>
                    <span className="summary-item-price">
                      {formatPrice(item.price * item.quantity)} ₽
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="summary-totals">
              <div className="summary-row">
                <span>Позиций: {items.reduce((sum, i) => sum + i.quantity, 0)} шт.</span>
              </div>
              <div className="summary-row summary-total">
                <span>Ориентировочная сумма</span>
                <span>{formatPrice(totalPrice)} ₽</span>
              </div>
              <p className="summary-note">
                Точная стоимость будет рассчитана менеджером
              </p>
            </div>

            <Link to="/catalog" className="summary-continue">
              ← Добавить ещё товары
            </Link>
          </aside>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage
