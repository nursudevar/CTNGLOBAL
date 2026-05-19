import Link from "next/link";
import "@/styles/pages/hakkimizda.scss";

const ABOUT_VALUES = [
  "Güvenilirlik",
  "Kalite",
  "Şeffaflık",
  "Sürdürülebilirlik",
  "Müşteri Odaklılık",
  "Güçlü İş Ortaklığı",
] as const;

const ABOUT_APPROACH = [
  {
    step: "01",
    title: "İhtiyacı Anlarız",
    text: "Müşterilerimizin ürün ve tedarik ihtiyaçlarını doğru analiz ederiz.",
  },
  {
    step: "02",
    title: "Doğru Ürünle Buluştururuz",
    text: "Gıda, elektronik ve kişisel bakım ürün gruplarında uygun tedarik çözümleri sunarız.",
  },
  {
    step: "03",
    title: "Süreci Güvenle Yönetiriz",
    text: "Planlı, düzenli ve kurumsal bir tedarik süreciyle iş ortaklarımızın yanında oluruz.",
  },
] as const;

export default function Hakkimizda() {
  return (
    <main className="about-page">
      <header className="about-header">
        <div className="about-header-inner">
          <Link href="/" className="about-header-logo-link">
            <img
              src="/images/ctnglobal_logo.jpg"
              alt="CTNGLOBAL"
              className="about-header-logo"
            />
          </Link>

          <nav className="about-header-nav" aria-label="Ana menü">
            <Link href="/" className="about-header-nav-link">
              Anasayfa
            </Link>
            <Link
              href="/hakkimizda"
              className="about-header-nav-link about-header-nav-link--active"
            >
              Hakkımızda
            </Link>
            <Link href="/faaliyet-alanlari" className="about-header-nav-link">
              Faaliyet Alanları
            </Link>
          </nav>

          <Link href="/iletisim" className="about-header-cta">
            İletişim
          </Link>
        </div>
      </header>

      <section className="about-hero" aria-labelledby="about-hero-title">
        <div className="about-hero-inner">
          <span className="about-hero-eyebrow">Hakkımızda</span>
          <h1 id="about-hero-title" className="about-hero-title">
            CTNGLOBAL Hakkında
          </h1>
          <p className="about-hero-description">
            CTNGLOBAL, gıda, elektronik ve kişisel bakım ürün gruplarında toptan satış ve yetkili
            bayi hizmetleri sunan kurumsal bir ticaret şirketidir.
          </p>
        </div>
      </section>

      <section className="about-intro" aria-labelledby="about-intro-title">
        <div className="about-intro-inner">
          <div className="about-intro-content">
            <h2 id="about-intro-title" className="about-section-title">
              Güvenilir Tedarik ve Kurumsal Ticaret Anlayışı
            </h2>
            <p className="about-intro-text">
              CTNGLOBAL, işletmelerin ürün tedarik süreçlerine değer katmak amacıyla faaliyet
              göstermektedir. Gıda, elektronik ve kişisel bakım ürün gruplarında toptan satış,
              dağıtım ve yetkili bayi hizmetleri sunarak müşterilerine güvenilir, düzenli ve
              sürdürülebilir çözümler sağlar.
            </p>
            <p className="about-intro-text">
              Kurumsal hizmet yaklaşımı, güçlü tedarik ağı ve müşteri odaklı çalışma prensibiyle
              CTNGLOBAL, uzun vadeli iş birlikleri kurmayı ve ticari süreçlerde güvenilir bir çözüm
              ortağı olmayı hedefler.
            </p>
          </div>

          <div className="about-intro-visual" aria-hidden="true">
            <div className="about-intro-visual-card">
              <span className="about-intro-visual-label">CTNGLOBAL</span>
              <span className="about-intro-visual-line" />
              <p className="about-intro-visual-text">
                Toptan ticaret · Yetkili bayi · Kurumsal tedarik
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-mv" aria-labelledby="about-mv-title">
        <div className="about-mv-inner">
          <h2 id="about-mv-title" className="about-section-title about-section-title--center">
            Misyonumuz ve Vizyonumuz
          </h2>

          <div className="about-mv-cards">
            <article className="about-mv-card">
              <h3 className="about-mv-card-title">Misyonumuz</h3>
              <p className="about-mv-card-text">
                Müşterilerimizin toptan ürün ihtiyaçlarına güvenilir, hızlı ve sürdürülebilir
                çözümler sunarak uzun vadeli iş birlikleri kurmak.
              </p>
            </article>

            <article className="about-mv-card">
              <h3 className="about-mv-card-title">Vizyonumuz</h3>
              <p className="about-mv-card-text">
                Gıda, elektronik ve kişisel bakım ürün gruplarında hizmet kalitesi, güvenilirliği ve
                güçlü iş ortaklıklarıyla tercih edilen markalardan biri olmak.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="about-values" aria-labelledby="about-values-title">
        <div className="about-values-inner">
          <h2 id="about-values-title" className="about-section-title about-section-title--center">
            Değerlerimiz
          </h2>
          <p className="about-values-description">
            CTNGLOBAL, tüm iş süreçlerinde güven, kalite ve sürdürülebilir iş ortaklığı anlayışını
            temel alır.
          </p>

          <ul className="about-values-grid">
            {ABOUT_VALUES.map((value) => (
              <li key={value} className="about-values-item">
                <span className="about-values-icon" aria-hidden="true" />
                <span className="about-values-name">{value}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="about-approach" aria-labelledby="about-approach-title">
        <div className="about-approach-inner">
          <h2 id="about-approach-title" className="about-section-title about-section-title--center">
            İş Yapış Anlayışımız
          </h2>

          <div className="about-approach-steps">
            {ABOUT_APPROACH.map((item) => (
              <article key={item.step} className="about-approach-step">
                <span className="about-approach-step-number">{item.step}</span>
                <h3 className="about-approach-step-title">{item.title}</h3>
                <p className="about-approach-step-text">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta" aria-labelledby="about-cta-title">
        <div className="about-cta-inner">
          <h2 id="about-cta-title" className="about-cta-title">
            CTNGLOBAL ile güvenilir iş ortaklığı kurun.
          </h2>
          <p className="about-cta-description">
            Toptan satış ve tedarik süreçleriniz için kurumsal çözümlerimizi keşfedin.
          </p>
          <Link href="/iletisim" className="about-cta-button">
            İletişime Geçin
          </Link>
        </div>
      </section>

      <footer className="about-footer">
        <div className="about-footer-inner">
          <div className="about-footer-grid">
            <div className="about-footer-brand">
              <Link href="/" className="about-footer-logo-link">
                <img
                  src="/images/ctnglobal_logo.jpg"
                  alt="CTNGLOBAL"
                  className="about-footer-logo"
                />
              </Link>
              <p className="about-footer-brand-description">
                Gıda ve elektronik toptan satış alanlarında güvenilir tedarik ve kurumsal iş
                ortaklığı çözümleri sunar.
              </p>
            </div>

            <div className="about-footer-column">
              <h3 className="about-footer-column-title">Sayfalar</h3>
              <nav className="about-footer-nav" aria-label="Footer sayfa bağlantıları">
                <Link href="/" className="about-footer-link">
                  Ana Sayfa
                </Link>
                <Link href="/hakkimizda" className="about-footer-link">
                  Hakkımızda
                </Link>
                <Link href="/faaliyet-alanlari" className="about-footer-link">
                  Faaliyet Alanları
                </Link>
                <Link href="/iletisim" className="about-footer-link">
                  İletişim
                </Link>
              </nav>
            </div>

            <div className="about-footer-column">
              <h3 className="about-footer-column-title">Faaliyet Alanları</h3>
              <ul className="about-footer-list">
                <li className="about-footer-list-item">Toptan Gıda Ticareti</li>
                <li className="about-footer-list-item">Kiwi Elektronik Bayiliği</li>
                <li className="about-footer-list-item">Aprilla Elektronik Bayiliği</li>
              </ul>
            </div>

            <div className="about-footer-column">
              <h3 className="about-footer-column-title">İletişim</h3>
              <ul className="about-footer-list">
                <li className="about-footer-list-item">
                  <a href="mailto:info@ctnglobal.com.tr" className="about-footer-link">
                    info@ctnglobal.com.tr
                  </a>
                </li>
                <li className="about-footer-list-item">
                  <a href="tel:08508400191" className="about-footer-link">
                    0850 840 01 91
                  </a>
                </li>
                <li className="about-footer-list-item">
                  Macun, Batı Blv. ATB İş Merkezi No:1/5 Yenimahalle/ANKARA
                </li>
              </ul>
            </div>
          </div>

          <div className="about-footer-bottom">
            <p className="about-footer-copyright">© 2026 CTNGLOBAL. Tüm hakları saklıdır.</p>
            <p className="about-footer-company">Teknoloji | Ticaret A.Ş.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
