import Link from "next/link";
import "@/styles/pages/faaliyet-alanlari.scss";

const ACTIVITY_CARDS = [
  {
    id: "gida",
    label: "01 – GIDA",
    title: "Toptan Gıda Ticareti",
    description:
      "Geniş ürün yelpazesiyle toptan gıda tedariki ve dağıtım hizmetleri sunuyor; kaliteli ürünleri güvenilir bir tedarik zinciriyle işletmelere ulaştırıyoruz.",
    badge: "TOPTAN DAĞITIM",
    highlights: ["Geniş ürün yelpazesi", "Güvenilir tedarik zinciri", "Toptan dağıtım hizmeti"],
    iconType: "gida" as const,
  },
  {
    id: "kiwi",
    label: "02 – ELEKTRONİK",
    title: "Kiwi Elektronik Bayiliği",
    description:
      "Türkiye merkezli Kiwi markasının küçük ev aletleri gamında yetkili toptan satış ortağıyız. Blender'dan kahve makinesine, ütüden süpürgeye geniş ürün portföyü sunuyoruz.",
    badge: "YETKİLİ BAYİ",
    highlights: ["Küçük ev aletleri", "Yetkili satış ortaklığı", "Geniş ürün portföyü"],
    iconType: "kiwi" as const,
  },
  {
    id: "aprilla",
    label: "03 – KİŞİSEL BAKIM",
    title: "Aprilla Elektronik Bayiliği",
    description:
      "2015 kuruluşlu yerli marka Aprilla'nın kişisel bakım elektroniğinde yetkili distribütörüyüz. Tıraş makinesi, epilasyon aleti, saç kurutma ve daha fazlası.",
    badge: "YETKİLİ BAYİ",
    highlights: [
      "Kişisel bakım elektroniği",
      "Yetkili distribütörlük",
      "Güvenilir marka iş birliği",
    ],
    iconType: "aprilla" as const,
  },
] as const;

const SUPPLY_STEPS = [
  {
    number: "01",
    title: "İhtiyaç Analizi",
    text: "Müşterimizin ürün, miktar ve süreç beklentilerini analiz ederiz.",
  },
  {
    number: "02",
    title: "Ürün Planlama",
    text: "Gıda, elektronik ve kişisel bakım ürün gruplarında doğru çözümleri belirleriz.",
  },
  {
    number: "03",
    title: "Tedarik ve Dağıtım",
    text: "Ürünleri güvenilir tedarik süreciyle işletmelere ulaştırırız.",
  },
  {
    number: "04",
    title: "Sürdürülebilir İş Birliği",
    text: "Uzun vadeli, düzenli ve güvene dayalı ticari ilişkiler kurarız.",
  },
] as const;

const PARTNERSHIP_FEATURES = [
  {
    title: "Kurumsal Hizmet",
    text: "Resmi, şeffaf ve profesyonel süreç yönetimiyle işletmelere güven veren hizmet sunarız.",
  },
  {
    title: "Planlı Tedarik",
    text: "Ürün planlaması ve dağıtım süreçlerini düzenli, ölçülebilir ve sürdürülebilir şekilde yürütürüz.",
  },
  {
    title: "Uzun Vadeli İş Birliği",
    text: "Tek seferlik satış değil; güvene dayalı, uzun soluklu ticari ilişkiler kurmayı hedefleriz.",
  },
] as const;

function ActivityCardIcon({ type }: { type: (typeof ACTIVITY_CARDS)[number]["iconType"] }) {
  if (type === "kiwi") {
    return (
      <img src="/images/kiwi_logo.png" alt="" className="fields-activity-card-icon-img" />
    );
  }

  if (type === "aprilla") {
    return (
      <img src="/images/aprilla_logo.png" alt="" className="fields-activity-card-icon-img" />
    );
  }

  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path
        d="M4 10C4 6 7 3 11 3C15 3 18 6 18 10C18 14 15 17 11 19C7 17 4 14 4 10Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M8 10H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function FaaliyetAlanlari() {
  return (
    <main className="fields-page">
      <header className="fields-header">
        <div className="fields-header-inner">
          <Link href="/" className="fields-header-logo-link">
            <img
              src="/images/ctnglobal_logo.jpg"
              alt="CTNGLOBAL"
              className="fields-header-logo"
            />
          </Link>

          <nav className="fields-header-nav" aria-label="Ana menü">
            <Link href="/" className="fields-header-nav-link">
              Anasayfa
            </Link>
            <Link href="/hakkimizda" className="fields-header-nav-link">
              Hakkımızda
            </Link>
            <Link
              href="/faaliyet-alanlari"
              className="fields-header-nav-link fields-header-nav-link--active"
            >
              Faaliyet Alanları
            </Link>
          </nav>

          <Link href="/iletisim" className="fields-header-cta">
            İletişim
          </Link>
        </div>
      </header>

      <section className="fields-hero" aria-labelledby="fields-hero-title">
        <div className="fields-hero-shape fields-hero-shape--one" aria-hidden="true" />
        <div className="fields-hero-shape fields-hero-shape--two" aria-hidden="true" />
        <div className="fields-hero-inner">
          <div className="fields-hero-content">
            <span className="fields-hero-eyebrow">Faaliyet Alanları</span>
            <h1 id="fields-hero-title" className="fields-hero-title">
              Toptan Ticarette Güçlü Faaliyet Alanları
            </h1>
            <p className="fields-hero-description">
              CTNGLOBAL, gıda, elektronik ve kişisel bakım ürün gruplarında toptan satış, dağıtım
              ve yetkili bayi hizmetleri sunar.
            </p>
          </div>
          <div className="fields-hero-visual" aria-hidden="true">
            <div className="fields-hero-visual-card">
              <span className="fields-hero-visual-stat">3</span>
              <span className="fields-hero-visual-label">Temel Sektör</span>
              <span className="fields-hero-visual-divider" />
              <p className="fields-hero-visual-text">Gıda · Elektronik · Kişisel Bakım</p>
            </div>
          </div>
        </div>
      </section>

      <section className="fields-activities" aria-labelledby="fields-activities-title">
        <div className="fields-activities-inner">
          <div className="fields-activities-header">
            <h2 id="fields-activities-title" className="fields-section-title">
              Ne Yapıyoruz?
            </h2>
            <p className="fields-section-description">
              Üç temel sektörde işletmelere güvenilir tedarik, toptan satış ve yetkili bayi çözümleri
              sunuyoruz.
            </p>
          </div>

          <div className="fields-activities-cards">
            {ACTIVITY_CARDS.map((card, index) => (
              <article
                key={card.id}
                className={`fields-activity-card fields-activity-card--${index + 1}`}
              >
                <span className="fields-activity-card-label">{card.label}</span>
                <span
                  className={`fields-activity-card-icon fields-activity-card-icon--${card.iconType}`}
                  aria-hidden="true"
                >
                  <ActivityCardIcon type={card.iconType} />
                </span>
                <h3 className="fields-activity-card-title">{card.title}</h3>
                <p className="fields-activity-card-description">{card.description}</p>
                <ul className="fields-activity-card-highlights">
                  {card.highlights.map((item) => (
                    <li key={item} className="fields-activity-card-highlight">
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="fields-activity-card-footer">
                  <span className="fields-activity-card-badge">{card.badge}</span>
                  <span className="fields-activity-card-arrow" aria-hidden="true">
                    ↗
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="activities-petivedi" aria-labelledby="activities-petivedi-title">
        <div className="activities-petivedi__inner">
          <div className="activities-petivedi__content">
            <span className="activities-petivedi__badge">Çok Yakında</span>
            <span className="activities-petivedi__eyebrow">Yeni Markamız</span>
            <h2 id="activities-petivedi-title" className="activities-petivedi__title">
              PETİVEDİ Çok Yakında Sizlerle
            </h2>
            <p className="activities-petivedi__description">
              CTNGLOBAL çatısı altında hayata geçecek PETİVEDİ, evcil dostlarınızın ihtiyaçlarına
              yönelik ürünleri e-ticaret deneyimiyle sunacak yeni online petshop markamızdır.
            </p>
            <p className="activities-petivedi__domain">petivedi.com</p>
            <p className="activities-petivedi__note">Online petshop deneyimi yakında başlıyor.</p>
            <span className="activities-petivedi__button">Yakında</span>
          </div>

          <div className="activities-petivedi__visual">
            <img
              src="/images/petivedi.png"
              alt="PETİVEDİ"
              className="activities-petivedi__logo"
            />
          </div>
        </div>
      </section>

      <section className="fields-process" aria-labelledby="fields-process-title">
        <div className="fields-process-inner">
          <h2 id="fields-process-title" className="fields-section-title fields-section-title--center">
            Tedarik Sürecimiz
          </h2>
          <p className="fields-section-description fields-section-description--center">
            İşletmelerin ihtiyaçlarına uygun ürünleri doğru planlama ve güvenilir süreç yönetimiyle
            ulaştırıyoruz.
          </p>

          <div className="fields-process-track">
            {SUPPLY_STEPS.map((step) => (
              <article key={step.number} className="fields-process-step">
                <span className="fields-process-step-number">{step.number}</span>
                <h3 className="fields-process-step-title">{step.title}</h3>
                <p className="fields-process-step-text">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="fields-partnership" aria-labelledby="fields-partnership-title">
        <div className="fields-partnership-inner">
          <h2
            id="fields-partnership-title"
            className="fields-section-title fields-section-title--light fields-section-title--center"
          >
            Güvenilir İş Ortaklığı Yaklaşımı
          </h2>
          <p className="fields-section-description fields-section-description--light fields-section-description--center">
            CTNGLOBAL, sadece ürün tedarik eden bir yapı değil; müşterilerinin ticari süreçlerine
            değer katan güvenilir bir çözüm ortağıdır.
          </p>

          <div className="fields-partnership-grid">
            {PARTNERSHIP_FEATURES.map((feature) => (
              <article key={feature.title} className="fields-partnership-card">
                <span className="fields-partnership-card-mark" aria-hidden="true" />
                <h3 className="fields-partnership-card-title">{feature.title}</h3>
                <p className="fields-partnership-card-text">{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="fields-cta" aria-labelledby="fields-cta-title">
        <div className="fields-cta-inner">
          <h2 id="fields-cta-title" className="fields-cta-title">
            Faaliyet alanlarımız hakkında detaylı bilgi alın.
          </h2>
          <p className="fields-cta-description">
            Toptan satış, yetkili bayi ve tedarik süreçleriniz için CTNGLOBAL ile iletişime geçin.
          </p>
          <Link href="/iletisim" className="fields-cta-button">
            İletişime Geçin
          </Link>
        </div>
      </section>

      <footer className="fields-footer">
        <div className="fields-footer-inner">
          <div className="fields-footer-grid">
            <div className="fields-footer-brand">
              <Link href="/" className="fields-footer-logo-link">
                <img
                  src="/images/ctnglobal_logo.jpg"
                  alt="CTNGLOBAL"
                  className="fields-footer-logo"
                />
              </Link>
              <p className="fields-footer-brand-description">
                Gıda ve elektronik toptan satış alanlarında güvenilir tedarik ve kurumsal iş
                ortaklığı çözümleri sunar.
              </p>
            </div>

            <div className="fields-footer-column">
              <h3 className="fields-footer-column-title">Sayfalar</h3>
              <nav className="fields-footer-nav" aria-label="Footer sayfa bağlantıları">
                <Link href="/" className="fields-footer-link">
                  Ana Sayfa
                </Link>
                <Link href="/hakkimizda" className="fields-footer-link">
                  Hakkımızda
                </Link>
                <Link href="/faaliyet-alanlari" className="fields-footer-link">
                  Faaliyet Alanları
                </Link>
                <Link href="/iletisim" className="fields-footer-link">
                  İletişim
                </Link>
              </nav>
            </div>

            <div className="fields-footer-column">
              <h3 className="fields-footer-column-title">Faaliyet Alanları</h3>
              <ul className="fields-footer-list">
                <li className="fields-footer-list-item">Toptan Gıda Ticareti</li>
                <li className="fields-footer-list-item">Kiwi Elektronik Bayiliği</li>
                <li className="fields-footer-list-item">Aprilla Elektronik Bayiliği</li>
              </ul>
            </div>

            <div className="fields-footer-column">
              <h3 className="fields-footer-column-title">İletişim</h3>
              <ul className="fields-footer-list">
                <li className="fields-footer-list-item">
                  <a href="mailto:info@ctnglobal.com.tr" className="fields-footer-link">
                    info@ctnglobal.com.tr
                  </a>
                </li>
                <li className="fields-footer-list-item">
                  <a href="tel:08508400191" className="fields-footer-link">
                    0850 840 01 91
                  </a>
                </li>
                <li className="fields-footer-list-item">
                  Macun, Batı Blv. ATB İş Merkezi No:1/5 Yenimahalle/ANKARA
                </li>
              </ul>
            </div>
          </div>

          <div className="fields-footer-bottom">
            <p className="fields-footer-copyright">© 2026 CTNGLOBAL. Tüm hakları saklıdır.</p>
            <p className="fields-footer-company">Teknoloji | Ticaret A.Ş.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
