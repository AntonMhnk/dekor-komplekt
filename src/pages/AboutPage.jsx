import { Link } from 'react-router-dom'
import './AboutPage.css'

function AboutPage() {
  const stats = [
    { number: '15+', label: 'лет на рынке' },
    { number: '10 000+', label: 'довольных клиентов' },
    { number: '50+', label: 'брендов в каталоге' },
    { number: '2', label: 'филиала в Челябинске' },
  ]

  const values = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      title: 'Качество',
      description: 'Работаем только с проверенными поставщиками и гарантируем подлинность всей продукции',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10"/>
          <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
          <line x1="9" y1="9" x2="9.01" y2="9"/>
          <line x1="15" y1="9" x2="15.01" y2="9"/>
        </svg>
      ),
      title: 'Клиентоориентированность',
      description: 'Индивидуальный подход к каждому клиенту и помощь в подборе материалов',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5"/>
          <path d="M2 12l10 5 10-5"/>
        </svg>
      ),
      title: 'Широкий ассортимент',
      description: 'Более 5000 наименований отделочных материалов от ведущих производителей',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      title: 'Профессионализм',
      description: 'Команда опытных специалистов с глубоким знанием отделочных материалов',
    },
  ]

  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Главная</Link>
            <span className="breadcrumb-sep">/</span>
            <span>О компании</span>
          </nav>
          <h1 className="about-hero-title">О компании</h1>
          <p className="about-hero-subtitle">
            Салон декоративных покрытий в Челябинске с 2009 года
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="about-stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="about-content section">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Декор Комплект — ваш надёжный партнёр</h2>
              <p>
                Компания «Декор Комплект» — это салон декоративных покрытий, специализирующийся 
                на продаже премиальных отделочных материалов для создания уникальных интерьеров.
              </p>
              <p>
                Мы предлагаем широкий ассортимент продукции: декоративные краски и штукатурки, 
                дизайнерские обои, художественные фрески, лепной декор, напольные покрытия, 
                ковры ручной работы и профессиональные клеевые материалы.
              </p>
              <p>
                За годы работы мы заслужили доверие тысяч клиентов благодаря безупречному 
                качеству продукции и высокому уровню сервиса. Наши специалисты всегда готовы 
                помочь с выбором материалов и предоставить профессиональную консультацию.
              </p>
            </div>
            <div className="about-image">
              <img 
                src="https://placehold.co/600x400/e8e4e0/666666?text=Наш+салон" 
                alt="Интерьер салона" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="about-values section">
        <div className="container">
          <h2 className="section-title">Наши ценности</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="about-why section">
        <div className="container">
          <div className="why-grid">
            <div className="why-content">
              <h2>Почему выбирают нас?</h2>
              <ul className="why-list">
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Только оригинальная продукция с сертификатами качества</span>
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Бесплатные образцы материалов для оценки</span>
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Профессиональная консультация по подбору материалов</span>
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Выгодные цены напрямую от производителей</span>
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Быстрая доставка по Челябинску и области</span>
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Гарантия на всю продукцию</span>
                </li>
              </ul>
              <Link to="/contact" className="btn btn-primary">
                Связаться с нами
              </Link>
            </div>
            <div className="why-image">
              <img 
                src="https://placehold.co/600x450/e8e4e0/666666?text=Образцы" 
                alt="Образцы материалов" 
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
