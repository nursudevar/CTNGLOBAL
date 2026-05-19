import Link from "next/link";
import "@/styles/pages/iletisim.scss";

const CONTACT_ADDRESS =
  "Macun, Batı Blv. ATB İş Merkezi No:1/5 Yenimahalle/ANKARA";

const CONTACT_MAP_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(
  CONTACT_ADDRESS
)}&hl=tr&z=16&output=embed`;

const CONTACT_MAP_OPEN_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  CONTACT_ADDRESS
)}`;

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

      <section className="contact-hero" aria-labelledby="contact-hero-title">
        <div className="contact-hero-overlay" aria-hidden="true" />
        <div className="contact-hero-content">
          <h1 id="contact-hero-title" className="contact-hero-title">
            İletişim
          </h1>
          <span className="contact-hero-line" aria-hidden="true" />
          <p className="contact-hero-text">
            Toptan ticaret ve tedarik süreçlerinde çözüm ortağınız olmak için buradayız.
          </p>
          <p className="contact-hero-text">
            Sorularınız ve iş birliği talepleriniz için bize ulaşın.
          </p>
        </div>
      </section>

      <section className="contact-main" aria-labelledby="contact-info-title">
        <div className="contact-main-inner">
          <div className="contact-info">
            <h2 id="contact-info-title" className="contact-info-title">
              İletişim Bilgileri
            </h2>

            <div className="contact-info-list">
              <article className="contact-info-item">
                <span className="contact-info-item-icon" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path
                      d="M11 19C11 19 17 14 17 9.5C17 6.46 14.54 4 11.5 4H10.5C7.46 4 5 6.46 5 9.5C5 14 11 19 11 19Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <circle cx="11" cy="9.5" r="2" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </span>
                <div className="contact-info-item-body">
                  <h3 className="contact-info-item-label">Merkez Ofis</h3>
                  <p className="contact-info-item-text">
                    Macun, Batı Blv. ATB İş Merkezi No:1/5
                    <br />
                    Yenimahalle / ANKARA
                  </p>
                </div>
              </article>

              <article className="contact-info-item">
                <span className="contact-info-item-icon" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <rect x="3" y="5" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M3 7L11 12L19 7" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </span>
                <div className="contact-info-item-body">
                  <h3 className="contact-info-item-label">E-posta</h3>
                  <p className="contact-info-item-text">
                    <a href="mailto:info@ctnglobal.com.tr" className="contact-info-item-link">
                      info@ctnglobal.com.tr
                    </a>
                  </p>
                </div>
              </article>

              <article className="contact-info-item">
                <span className="contact-info-item-icon" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path
                      d="M6 4H8L10 9H14L12 4H16C17.1 4 18 4.9 18 6V16C18 17.1 17.1 18 16 18H6C4.9 18 4 17.1 4 16V6C4 4.9 4.9 4 6 4Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </span>
                <div className="contact-info-item-body">
                  <h3 className="contact-info-item-label">Telefon</h3>
                  <p className="contact-info-item-text">
                    <a href="tel:08508400191" className="contact-info-item-link">
                      0850 840 01 91
                    </a>
                  </p>
                  <p className="contact-info-item-note">Pzt – Cum: 09:00 – 18:00</p>
                </div>
              </article>
            </div>
          </div>

          <div className="contact-location">
            <h2 className="contact-location-title">Konum</h2>
            <div className="contact-location-map">
              <iframe
                className="contact-location-map-frame"
                src={CONTACT_MAP_EMBED_URL}
                title="CTN Global merkez ofis konumu — Google Haritalar"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <p className="contact-location-label">Merkez Ofis</p>
            <p className="contact-location-address">{CONTACT_ADDRESS}</p>
            <a
              href={CONTACT_MAP_OPEN_URL}
              className="contact-location-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Haritada aç
            </a>
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
