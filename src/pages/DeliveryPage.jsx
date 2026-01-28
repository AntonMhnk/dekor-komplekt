import { Link } from 'react-router-dom'
import './DeliveryPage.css'

function DeliveryPage() {
  const deliveryOptions = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="1" y="3" width="15" height="13"/>
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
          <circle cx="5.5" cy="18.5" r="2.5"/>
          <circle cx="18.5" cy="18.5" r="2.5"/>
        </svg>
      ),
      title: 'Доставка по Челябинску',
      price: 'от 500 ₽',
      description: 'Доставка в течение 1-2 рабочих дней. Бесплатно при заказе от 15 000 ₽',
      details: [
        'Доставка до подъезда или до квартиры',
        'Возможность выбора удобного времени',
        'SMS-уведомление о доставке',
      ],
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10"/>
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
        </svg>
      ),
      title: 'Доставка по области',
      price: 'от 1 000 ₽',
      description: 'Доставка в города Челябинской области за 2-4 рабочих дня',
      details: [
        'Магнитогорск, Златоуст, Миасс, Копейск',
        'Расчёт стоимости по километражу',
        'Доставка до терминала ТК',
      ],
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      ),
      title: 'Самовывоз',
      price: 'Бесплатно',
      description: 'Заберите заказ из любого нашего филиала в удобное время',
      details: [
        'ул. Коммуны, 127',
        'ул. Труда, 174',
        'Готовность заказа — 1 час после оплаты',
      ],
    },
  ]

  const paymentMethods = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
          <line x1="1" y1="10" x2="23" y2="10"/>
        </svg>
      ),
      title: 'Банковская карта',
      description: 'Visa, MasterCard, МИР',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="12" y1="1" x2="12" y2="23"/>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      ),
      title: 'Наличные',
      description: 'При получении заказа',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
        </svg>
      ),
      title: 'Безналичный расчёт',
      description: 'Для юридических лиц',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="4" width="20" height="16" rx="2"/>
          <path d="M7 15h0M2 9.5h20"/>
        </svg>
      ),
      title: 'Рассрочка',
      description: 'От 3 до 12 месяцев',
    },
  ]

  return (
    <div className="delivery-page">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <Link to="/">Главная</Link>
          <span className="breadcrumb-sep">/</span>
          <span>Доставка и оплата</span>
        </nav>

        <h1 className="page-title">Доставка и оплата</h1>

        {/* Delivery Options */}
        <section className="delivery-section">
          <h2 className="section-subtitle">Способы доставки</h2>
          <div className="delivery-grid">
            {deliveryOptions.map((option, index) => (
              <div key={index} className="delivery-card">
                <div className="delivery-card-header">
                  <div className="delivery-icon">{option.icon}</div>
                  <div className="delivery-card-title">
                    <h3>{option.title}</h3>
                    <span className="delivery-price">{option.price}</span>
                  </div>
                </div>
                <p className="delivery-description">{option.description}</p>
                <ul className="delivery-details">
                  {option.details.map((detail, i) => (
                    <li key={i}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Free Delivery Banner */}
        <section className="free-delivery-banner">
          <div className="banner-content">
            <div className="banner-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <polyline points="9 12 11 14 15 10"/>
              </svg>
            </div>
            <div className="banner-text">
              <h3>Бесплатная доставка</h3>
              <p>При заказе от 15 000 ₽ доставка по Челябинску бесплатно!</p>
            </div>
          </div>
        </section>

        {/* Payment Methods */}
        <section className="payment-section">
          <h2 className="section-subtitle">Способы оплаты</h2>
          <div className="payment-grid">
            {paymentMethods.map((method, index) => (
              <div key={index} className="payment-card">
                <div className="payment-icon">{method.icon}</div>
                <h3 className="payment-title">{method.title}</h3>
                <p className="payment-description">{method.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="delivery-faq">
          <h2 className="section-subtitle">Часто задаваемые вопросы</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h3>Как узнать стоимость доставки?</h3>
              <p>
                Стоимость доставки рассчитывается автоматически при оформлении заказа 
                в зависимости от адреса и веса товаров. Также вы можете уточнить стоимость 
                у нашего менеджера по телефону 8 (351) 727-73-39.
              </p>
            </div>
            <div className="faq-item">
              <h3>Можно ли изменить адрес доставки?</h3>
              <p>
                Да, вы можете изменить адрес доставки до момента отправки заказа. 
                Для этого свяжитесь с нами по телефону или напишите на почту.
              </p>
            </div>
            <div className="faq-item">
              <h3>Что делать, если товар повреждён при доставке?</h3>
              <p>
                При получении обязательно проверьте целостность упаковки и товара. 
                В случае обнаружения повреждений составьте акт с курьером и свяжитесь с нами 
                для замены товара.
              </p>
            </div>
            <div className="faq-item">
              <h3>Возможен ли возврат товара?</h3>
              <p>
                Да, вы можете вернуть товар надлежащего качества в течение 14 дней с момента 
                покупки при сохранении товарного вида и упаковки. Подробности уточняйте у менеджера.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="delivery-cta">
          <h3>Остались вопросы?</h3>
          <p>Свяжитесь с нами, и мы поможем оформить заказ</p>
          <div className="cta-actions">
            <a href="tel:+73517277339" className="btn btn-primary">
              8 (351) 727-73-39
            </a>
            <Link to="/contact" className="btn btn-outline">
              Написать нам
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default DeliveryPage
