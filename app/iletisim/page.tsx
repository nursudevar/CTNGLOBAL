import Link from "next/link";
import "@/styles/pages/iletisim.scss";

export default function Iletisim() {
  return (
    <main className="contact-page">
      <header className="contact-header">
        <div className="contact-header-inner">
          <Link href="/" className="contact-header-logo-link">
            <img
              src="/images/ctnglobal_logo.jpg"
              alt="CTNGLOBAL"
              className="contact-header-logo"
            />
          </Link>

          <nav className="contact-header-nav" aria-label="Ana menü">
            <Link href="/" className="contact-header-nav-link">
              Anasayfa
            </Link>
            <Link href="/hakkimizda" className="contact-header-nav-link">
              Hakkımızda
            </Link>
            <Link href="/faaliyet-alanlari" className="contact-header-nav-link">
              Faaliyet Alanları
            </Link>
          </nav>

          <Link href="/iletisim" className="contact-header-cta contact-header-cta--active">
            İletişim
          </Link>
        </div>
      </header>

      <section className="contact-intro" aria-labelledby="contact-intro-title">
        <div className="contact-intro-inner">
          <div className="contact-intro-eyebrow">
            <span className="contact-intro-eyebrow-line" aria-hidden="true" />
            <span className="contact-intro-eyebrow-text">İLETİŞİM</span>
          </div>
          <h1 id="contact-intro-title" className="contact-intro-title">
            Bizimle İletişime Geçin
          </h1>
          <p className="contact-intro-description">
            Toptan satış, tedarik süreçleri ve iş ortaklığı talepleriniz için CTNGLOBAL ekibiyle
            iletişime geçebilirsiniz.
          </p>
        </div>
      </section>

      <section className="contact-main" aria-labelledby="contact-info-title">
        <div className="contact-main-inner">
          <div className="contact-info">
            <h2 id="contact-info-title" className="contact-info-title">
              İletişim Bilgileri
            </h2>

            <div className="contact-info-cards">
              <article className="contact-info-card">
                <span className="contact-info-card-icon" aria-hidden="true">
                  AD
                </span>
                <h3 className="contact-info-card-title">Adres</h3>
                <p className="contact-info-card-text">
                  Macun, Batı Blv. ATB İş Merkezi No:1/5 Yenimahalle/ANKARA
                </p>
              </article>

              <article className="contact-info-card">
                <span className="contact-info-card-icon" aria-hidden="true">
                  @
                </span>
                <h3 className="contact-info-card-title">E-posta</h3>
                <p className="contact-info-card-text">
                  <a href="mailto:info@ctnglobal.com.tr" className="contact-info-card-link">
                    info@ctnglobal.com.tr
                  </a>
                </p>
              </article>

              <article className="contact-info-card">
                <span className="contact-info-card-icon" aria-hidden="true">
                  T
                </span>
                <h3 className="contact-info-card-title">Telefon</h3>
                <p className="contact-info-card-text">
                  <a href="tel:08508400191" className="contact-info-card-link">
                    0850 840 01 91
                  </a>
                </p>
              </article>
            </div>
          </div>

          <div className="contact-location">
            <h2 className="contact-location-title">Konum</h2>
            <div className="contact-location-map" aria-hidden="true">
              <span className="contact-location-pin" />
            </div>
            <p className="contact-location-label">CTNGLOBAL merkez ofis konumu</p>
            <p className="contact-location-address">
              Macun, Batı Blv. ATB İş Merkezi No:1/5 Yenimahalle/ANKARA
            </p>
          </div>
        </div>
      </section>

      <section className="contact-cta" aria-labelledby="contact-cta-title">
        <div className="contact-cta-inner">
          <h2 id="contact-cta-title" className="contact-cta-title">
            Toptan satış ihtiyaçlarınız için doğru adrestesiniz.
          </h2>
          <p className="contact-cta-description">
            Gıda, elektronik ve kişisel bakım ürün gruplarında güvenilir tedarik çözümleri için
            bizimle iletişime geçin.
          </p>
          <a href="tel:08508400191" className="contact-cta-button">
            Telefonla Ara
          </a>
        </div>
      </section>

      <footer className="contact-footer">
        <div className="contact-footer-inner">
          <div className="contact-footer-grid">
            <div className="contact-footer-brand">
              <Link href="/" className="contact-footer-logo-link">
                <img
                  src="/images/ctnglobal_logo.jpg"
                  alt="CTNGLOBAL"
                  className="contact-footer-logo"
                />
              </Link>
              <p className="contact-footer-brand-description">
                Gıda ve elektronik toptan satış alanlarında güvenilir tedarik ve kurumsal iş
                ortaklığı çözümleri sunar.
              </p>
            </div>

            <div className="contact-footer-column">
              <h3 className="contact-footer-column-title">Sayfalar</h3>
              <nav className="contact-footer-nav" aria-label="Footer sayfa bağlantıları">
                <Link href="/" className="contact-footer-link">
                  Ana Sayfa
                </Link>
                <Link href="/hakkimizda" className="contact-footer-link">
                  Hakkımızda
                </Link>
                <Link href="/faaliyet-alanlari" className="contact-footer-link">
                  Faaliyet Alanları
                </Link>
                <Link href="/iletisim" className="contact-footer-link">
                  İletişim
                </Link>
              </nav>
            </div>

            <div className="contact-footer-column">
              <h3 className="contact-footer-column-title">Faaliyet Alanları</h3>
              <ul className="contact-footer-list">
                <li className="contact-footer-list-item">Toptan Gıda Ticareti</li>
                <li className="contact-footer-list-item">Kiwi Elektronik Bayiliği</li>
                <li className="contact-footer-list-item">Aprilla Elektronik Bayiliği</li>
              </ul>
            </div>

            <div className="contact-footer-column">
              <h3 className="contact-footer-column-title">İletişim</h3>
              <ul className="contact-footer-list">
                <li className="contact-footer-list-item">
                  <a href="mailto:info@ctnglobal.com.tr" className="contact-footer-link">
                    info@ctnglobal.com.tr
                  </a>
                </li>
                <li className="contact-footer-list-item">
                  <a href="tel:08508400191" className="contact-footer-link">
                    0850 840 01 91
                  </a>
                </li>
                <li className="contact-footer-list-item">
                  Macun, Batı Blv. ATB İş Merkezi No:1/5 Yenimahalle/ANKARA
                </li>
              </ul>
            </div>
          </div>

          <div className="contact-footer-bottom">
            <p className="contact-footer-copyright">© 2026 CTNGLOBAL. Tüm hakları saklıdır.</p>
            <p className="contact-footer-company">Teknoloji | Ticaret A.Ş.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
